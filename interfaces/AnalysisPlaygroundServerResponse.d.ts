import { AnalysisPlaygroundKernel } from "./AnalysisPlaygroundKernel";

export interface AnalysisPlaygroundServerResponse {
    id: number;
    uuid: string;
    owner: string;
    jupyterhub_id: unknown;
    server_address: string;
    status: "RUNNING" | "PENDING" | "STOPPED";
    created: string;
    kernel: AnalysisPlaygroundKernel | null;
    flavour_id: unknown;
}
