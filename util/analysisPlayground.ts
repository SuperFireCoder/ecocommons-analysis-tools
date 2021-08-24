import axios, { AxiosInstance } from "axios";
import { AnalysisPlaygroundKernel } from "../interfaces/AnalysisPlaygroundKernel";
import { AnalysisPlaygroundServerCreate } from "../interfaces/AnalysisPlaygroundServer";
import { AnalysisPlaygroundServerResponse } from "../interfaces/AnalysisPlaygroundServerResponse";

import { KeycloakInstance } from "../interfaces/Keycloak";

const ENDPOINTS = {
    SERVERS: "/api/servers/",
    KERNELS: "/api/kernels/"
};

export class AnalysisPlayground {
    private readonly axios: AxiosInstance;

    constructor(
        public readonly serverBaseUrl: string,
        private readonly keycloakInstance: KeycloakInstance
    ) {
        this.axios = this.initNewAxiosInstance();
    }

    public getAuthorizationHeaderValue() {
        return `Bearer ${this.keycloakInstance.token}`;
    }

    private initNewAxiosInstance() {
        return axios.create({
            baseURL: this.serverBaseUrl,
            headers: {
                Authorization: this.getAuthorizationHeaderValue(),
            },
        });
    }

    private getNewAxiosCancellationToken() {
        return axios.CancelToken.source();
    }

    private xhrGet<T>(url: string) {
        const cancellationToken = this.getNewAxiosCancellationToken();
        const axiosPromise = this.axios.get<T>(url, {
            cancelToken: cancellationToken.token,
        });
        const promise = axiosPromise.then((res) => res.data);
        return { promise, cancellationToken, axiosPromise };
    }

    private xhrPost<T>(url: string, data: unknown) {
        const cancellationToken = this.getNewAxiosCancellationToken();
        const axiosPromise = this.axios.post<T>(url, data, {
            cancelToken: cancellationToken.token,
        });
        const promise = axiosPromise.then((res) => res.data);
        return { promise, cancellationToken, axiosPromise };
    }

    private xhrDelete<T>(url: string) {
        const cancellationToken = this.getNewAxiosCancellationToken();
        const axiosPromise = this.axios.delete<T>(url, {
            cancelToken: cancellationToken.token,
        });
        const promise = axiosPromise.then((res) => res.data);
        return { promise, cancellationToken, axiosPromise };
    }

    public getAllServers() {
        return this.xhrGet<AnalysisPlaygroundServerResponse>(ENDPOINTS.SERVERS);
    }

    public getServer(uuid: string) {
        return this.xhrGet<AnalysisPlaygroundServerResponse>(
            `${ENDPOINTS.SERVERS}${uuid}/`
        );
    }

    public deleteServer(uuid: string) {
        return this.xhrDelete<unknown>(`${ENDPOINTS.SERVERS}${uuid}/`);
    }

    public createServer(data: AnalysisPlaygroundServerCreate) {
        return this.xhrPost<unknown>(ENDPOINTS.SERVERS, data);
    }

    public getAllKernels() {
        return this.xhrGet<Array<AnalysisPlaygroundKernel>>(ENDPOINTS.KERNELS);
    }
}
