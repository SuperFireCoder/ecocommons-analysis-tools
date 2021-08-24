import { Classes } from "@blueprintjs/core";

import { AnalysisPlaygroundServerResponse } from "../interfaces/AnalysisPlaygroundServerResponse";
import ServerTableRow from "./ServerTableRow";

export interface Props {
    onServerNavigate?: (serverState: AnalysisPlaygroundServerResponse) => void;
    onServerDelete?: (serverUuid: string) => void;
    servers: readonly AnalysisPlaygroundServerResponse[];
}

export default function ServerTable({
    servers,
    onServerNavigate,
    onServerDelete,
}: Props) {
    return (
        <table
            className={Classes.HTML_TABLE}
            style={{
                width: "100%",
                border: "1px solid rgba(16, 22, 26, 0.15)",
                background: "#fff",
            }}
        >
            <thead>
                <tr>
                    <th>Kernel</th>
                    <th>Started</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {servers.map((s) => (
                    <ServerTableRow
                        key={s.uuid}
                        serverState={s}
                        onServerDelete={onServerDelete}
                        onServerNavigate={onServerNavigate}
                    />
                ))}
            </tbody>
        </table>
    );
}
