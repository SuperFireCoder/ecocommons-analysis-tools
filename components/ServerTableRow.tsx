import { useCallback } from "react";
import { Button, ProgressBar } from "@blueprintjs/core";

import { AnalysisPlaygroundServerResponse } from "../interfaces/AnalysisPlaygroundServerResponse";

export interface Props {
    serverState: AnalysisPlaygroundServerResponse;
    onServerNavigate?: (serverState: AnalysisPlaygroundServerResponse) => void;
    onServerDelete?: (serverUuid: string) => void;
}

export default function ServerTableRow({
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

    return (
        <tr>
            <td style={{ verticalAlign: "middle" }}>
                {serverState.kernel?.title}
            </td>
            <td style={{ verticalAlign: "middle" }}>{serverState.created}</td>
            <td style={{ verticalAlign: "middle" }}>{serverState.status}</td>
            <td
                style={{
                    verticalAlign: "middle",
                    width: "25%",
                    textAlign: "right",
                }}
            >
                {serverState.status === "PENDING" && (
                    <ProgressBar intent="none" stripes animate />
                )}
                {serverState.status === "RUNNING" && (
                    <>
                        <Button
                            text="Open"
                            icon="play"
                            intent="success"
                            minimal
                            onClick={handleOpenButtonClick}
                            disabled={serverState.status !== "RUNNING"}
                        />{" "}
                        <Button
                            title="Shutdown server instance"
                            icon="trash"
                            intent="danger"
                            minimal
                            onClick={handleDeleteButtonClick}
                            disabled={serverState.status !== "RUNNING"}
                        />
                    </>
                )}
            </td>
        </tr>
    );
}
