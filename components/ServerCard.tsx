import { useCallback } from "react";
import { Button, Card, ProgressBar } from "@blueprintjs/core";
import { Col, Row } from "@ecocommons-australia/ui-library";

import { AnalysisPlaygroundServerResponse } from "../interfaces/AnalysisPlaygroundServerResponse";

export interface Props {
    serverState: AnalysisPlaygroundServerResponse;
    onServerNavigate?: (serverState: AnalysisPlaygroundServerResponse) => void;
    onServerDelete?: (serverUuid: string) => void;
}

export default function ServerCard({
    serverState,
    onServerNavigate,
    onServerDelete,
}: Props) {
    const handleOpenButtonClick = useCallback(() => {
        onServerNavigate?.(serverState);
    }, [onServerNavigate, serverState]);

    const handleDeleteButtonClick = useCallback(() => {
        onServerDelete?.(serverState.uuid);
    }, [onServerDelete, serverState]);

    const cardLeftCol = (() => {
        return (
            <Col xs={9}>
                <b>Server address:</b> {serverState.server_address}
                <br />
                <b>Kernel:</b> {serverState.kernel?.title}
                <br />
                <b>Created:</b> {serverState.created}
            </Col>
        )
    })();

    switch (serverState.status) {
        case "STOPPED":
            return (
                <Card>
                    <Row disableDefaultMargins>
                        {cardLeftCol}
                        <Col xs={3}>STOPPED</Col>
                    </Row>
                </Card>
            );

        case "PENDING":
            return (
                <Card>
                    <Row disableDefaultMargins>
                        {cardLeftCol}
                        <Col xs={3}>
                            <ProgressBar intent="none" stripes animate />
                        </Col>
                    </Row>
                </Card>
            );

        case "RUNNING":
            return (
                <Card>
                    <Row disableDefaultMargins>
                        {cardLeftCol}
                        <Col xs={3}>
                            <Button
                                icon="play"
                                intent="success"
                                minimal
                                onClick={handleOpenButtonClick}
                            >
                                Open
                            </Button>{" "}
                            <Button
                                title="Shutdown server instance"
                                icon="trash"
                                intent="danger"
                                minimal
                                onClick={handleDeleteButtonClick}
                            />
                        </Col>
                    </Row>
                </Card>
            );

        default:
            return (
                <Card>
                    <Row disableDefaultMargins>
                        <Col xs={9}>
                            <b>{serverState.server_address}</b>
                        </Col>
                        <Col xs={3}>?{serverState.status}?</Col>
                    </Row>
                </Card>
            );
    }
}
