export interface AnalysisPlaygroundKernel {
    id: number;
    uuid: string;
    title: string;
    slug: string;
    description: string;
    status: "AVAILABLE" | "UNAVAILABLE";
    created: string;
}
