import {
    Button,
    Callout,
    Classes,
    H1,
    H2,
    Intent,
    Overlay,
} from "@blueprintjs/core";
import {
    Col,
    FixedContainer,
    HtmlHead,
    Row,
} from "@ecocommons-australia/ui-library";
import { useCallback, useEffect, useState } from "react";
import axios, { CancelTokenSource } from "axios";

import Header from "../../components/Header";
import { AnalysisPlaygroundServerResponse } from "../../interfaces/AnalysisPlaygroundServerResponse";
import { useKeycloakInfo } from "../../util/keycloak";
import { useAnalysisPlayground } from "../../hooks/AnalysisPlayground";
import { getJupyterhubServerUrl } from "../../util/env";
import { AnalysisPlaygroundKernel } from "../../interfaces/AnalysisPlaygroundKernel";
import { AnalysisPlaygroundServerCreate } from "../../interfaces/AnalysisPlaygroundServer";
import KernelSelectDialog from "../../components/KernelSelectDialog";
import ServerTable from "../../components/ServerTable";

const SERVER_STATUS_REFRESH_INTERVAL = 5000;

export default function CodeNotebooksIndexPage() {
    const [
        fetchServerStatusForceUpdateFlag,
        setFetchServerStatusForceUpdateFlag,
    ] = useState<number>(0);
    const [actionInProgress, setActionInProgress] = useState<boolean>(false);
    const [servers, setServers] = useState<
        undefined | readonly AnalysisPlaygroundServerResponse[]
    >(undefined);
    const [kernels, setKernels] = useState<readonly AnalysisPlaygroundKernel[]>(
        []
    );
    const [showKernelDialog, setShowKernelDialog] = useState<boolean>(false);

    const { keycloak } = useKeycloakInfo();
    const keycloakToken = keycloak?.token;
    const analysisPlayground = useAnalysisPlayground();

    const forceServerStatusUpdate = useCallback(() => {
        setFetchServerStatusForceUpdateFlag((x) => x + 1);
    }, []);

    const handleLaunchServerButtonClick = useCallback(
        async (slug: string) => {
            if (!analysisPlayground) {
                throw new Error(
                    "Analysis Playground must be available before server launch"
                );
            }

            setActionInProgress(true);

            try {
                const data: AnalysisPlaygroundServerCreate = {
                    profile: slug,
                };
                await analysisPlayground.createServer(data).promise;

                // Refresh server status now after creating server
                forceServerStatusUpdate();
            } finally {
                setActionInProgress(false);
            }
        },
        [analysisPlayground, forceServerStatusUpdate]
    );

    const deleteServer = useCallback(
        async (serverUuid: string) => {
            if (!analysisPlayground) {
                throw new Error(
                    "Analysis Playground must be available before server deletion"
                );
            }

            setActionInProgress(true);

            try {
                await analysisPlayground.deleteServer(serverUuid).promise;

                // Refresh server status now after deleting server
                forceServerStatusUpdate();
            } finally {
                setActionInProgress(false);
            }
        },
        [analysisPlayground, forceServerStatusUpdate]
    );

    const navigateToServer = useCallback(
        (_serverState: AnalysisPlaygroundServerResponse) => {
            // TODO: Investigate and resolve Keycloak-JupyterHub integration bug
            // window.open(
            //     `https://jupyterhub.dev.ecocommons.org.au/${serverState.server_address}`
            // );

            // NOTE: Temporarily always going to the same oauth_login page under
            // assumption that user only ever has one server instance
            window.open(
                `${getJupyterhubServerUrl()}/hub/oauth_login?next=%2Fhub%2F`
            );
        },
        []
    );

    useEffect(
        function monitorServerStatus() {
            // Can't do anything if signed out
            if (analysisPlayground === undefined) {
                return;
            }

            let timerHandle: number | undefined = undefined;
            let fetchCancelToken: CancelTokenSource | undefined = undefined;

            async function fetchServerStatus() {
                try {
                    const { promise, cancellationToken } =
                        analysisPlayground!.getAllServers();

                    fetchCancelToken = cancellationToken;
                    const responseData = await promise;

                    // Ensure we have an array representation of servers
                    const servers: readonly AnalysisPlaygroundServerResponse[] =
                        Array.isArray(responseData)
                            ? responseData
                            : [responseData];

                    // Need to filter the "stopped" ones out
                    const filteredServers = servers.filter(
                        (s) => s.status !== "STOPPED"
                    );

                    setServers(filteredServers);
                } catch (e) {
                    // Ignore cancellation errors
                    if (!axios.isCancel(e)) {
                        console.error(e);
                        alert(e);
                    }
                } finally {
                    queueNextFetch();
                }
            }

            function queueNextFetch() {
                timerHandle = window.setTimeout(
                    fetchServerStatus,
                    SERVER_STATUS_REFRESH_INTERVAL
                );
            }

            // Run fetch now
            fetchServerStatus();

            return function stopMonitoringServerStatus() {
                // Stop timer and cancel any ongoing requests
                if (timerHandle !== undefined) {
                    window.clearTimeout(timerHandle);
                }

                fetchCancelToken?.cancel();
            };
        },
        [analysisPlayground, fetchServerStatusForceUpdateFlag]
    );

    useEffect(() => {
        if (analysisPlayground === undefined) {
            return;
        }

        let fetchCancelToken: CancelTokenSource | undefined = undefined;

        async function fetchKernels() {
            try {
                const { promise, cancellationToken } =
                    await analysisPlayground!.getAllKernels();

                fetchCancelToken = cancellationToken;
                const responseData = await promise;

                // Refresh server status now after creating server
                setKernels(responseData);
            } catch (e) {
                // Ignore cancellation errors
                if (!axios.isCancel(e)) {
                    console.error(e);
                    alert(e);
                }
            }
        }

        fetchKernels();
    }, [analysisPlayground]);

    return (
        <>
            <HtmlHead title="Notebooks &amp; Command Line" />
            <Header activeTab="functions" subBarActiveKey="code-notebooks" />
            <FixedContainer>
                {keycloakToken ? (
                    <>
                        <Row>
                            <Col xs={12}>
                                <H1>Servers</H1>
                            </Col>
                        </Row>
                        {servers && servers.length === 0 && (
                            <Row>
                                <Col xs={12}>
                                    <p className={Classes.TEXT_DISABLED}>
                                        No server instances running
                                    </p>
                                    <Button
                                        text="Launch notebook server"
                                        icon="cube-add"
                                        intent={Intent.WARNING}
                                        disabled={!keycloak?.authenticated}
                                        onClick={() =>
                                            setShowKernelDialog(true)
                                        }
                                    />
                                    <KernelSelectDialog
                                        showKernelDialog={showKernelDialog}
                                        setShowKernelDialog={
                                            setShowKernelDialog
                                        }
                                        kernels={kernels}
                                        onServerLaunch={
                                            handleLaunchServerButtonClick
                                        }
                                    />
                                </Col>
                            </Row>
                        )}
                        {servers && servers.length > 0 && (
                            <Row>
                                <Col xs={12}>
                                    <ServerTable
                                        servers={servers}
                                        onServerDelete={deleteServer}
                                        onServerNavigate={navigateToServer}
                                    />
                                </Col>
                            </Row>
                        )}
                        <Overlay isOpen={actionInProgress} />
                    </>
                ) : (
                    <Row>
                        <Col>
                            <Callout intent="warning" title="Sign in required">
                                Please sign in before using the Notebooks &amp;
                                Command Line Environment.
                            </Callout>
                        </Col>
                    </Row>
                )}
            </FixedContainer>
        </>
    );
}
