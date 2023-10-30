import getConfig from "next/config";

const config = getConfig();

export const IS_BSC = String(config.publicRuntimeConfig.NEXT_PUBLIC_KEYCLOAK_AUTH_URL)
                        .match(/biosecuritycommons/) !== null
                        || config.publicRuntimeConfig.NEXT_PUBLIC_THEME === 'bsc-theme';
                        
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

export function getGoogleAnalyticsTrackingId() {
    return config.publicRuntimeConfig
        .NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID as string;
}