import getConfig from "next/config";

const config = getConfig();

export function getAnalysisPlaygroundBackendServerUrl() {
    return config.publicRuntimeConfig
        .NEXT_PUBLIC_ANALYSIS_PLAYGROUND_BACKEND_SERVER_URL as string;
}

export function getJupyterhubServerUrl() {
    return config.publicRuntimeConfig
        .NEXT_PUBLIC_JUPYTERHUB_SERVER_URL as string;
}

export function getKeycloakAuthParameters() {
    return {
        url: config.publicRuntimeConfig.NEXT_PUBLIC_KEYCLOAK_AUTH_URL as string,
        realm: config.publicRuntimeConfig.NEXT_PUBLIC_KEYCLOAK_AUTH_REALM as string,
        clientId: config.publicRuntimeConfig.NEXT_PUBLIC_KEYCLOAK_AUTH_CLIENT_ID as string,
    };
}
