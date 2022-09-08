import { useMemo, useEffect, useRef } from "react";
import { AnalysisPlayground } from "../util/analysisPlayground";
import { getAnalysisPlaygroundBackendServerUrl } from "../util/env";
import { useKeycloakInfo } from "../util/keycloak";

export function useAnalysisPlayground() {
    const { keycloak } = useKeycloakInfo();
    const keycloakInstance = useRef(keycloak);
    useEffect(
        function updateKeycloakInstanceRefOnChange() {
            keycloakInstance.current = keycloak;
        },
        [keycloak?.authenticated, keycloak?.token]
    );
    /** Analysis Playground object handling XHR calls to the server */

    const analysisPlayground = useMemo(
        () =>
            new AnalysisPlayground(
                getAnalysisPlaygroundBackendServerUrl(),
                keycloakInstance.current
            ),
        []
    );

    const userSessionActive = useMemo(
        () => keycloak?.token !== undefined,
        [keycloak?.authenticated, keycloak?.token]
    );

    return {
        analysisPlayground,
        userSessionActive,
    }
    
}
