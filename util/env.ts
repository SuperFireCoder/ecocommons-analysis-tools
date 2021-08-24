export function getAnalysisPlaygroundBackendServerUrl() {
    return process.env
        .NEXT_PUBLIC_ANALYSIS_PLAYGROUND_BACKEND_SERVER_URL as string;
}

export function getJupyterhubServerUrl() {
    return process.env
        .NEXT_PUBLIC_JUPYTERHUB_SERVER_URL as string;
}

export function getKeycloakAuthParameters() {
    return {
        url: process.env.NEXT_PUBLIC_KEYCLOAK_AUTH_URL as string,
        realm: process.env.NEXT_PUBLIC_KEYCLOAK_AUTH_REALM as string,
        clientId: process.env.NEXT_PUBLIC_KEYCLOAK_AUTH_CLIENT_ID as string,
    };
}
