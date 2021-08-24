import { useMemo } from "react";
import { AnalysisPlayground } from "../util/analysisPlayground";
import { getAnalysisPlaygroundBackendServerUrl } from "../util/env";
import { useKeycloakInfo } from "../util/keycloak";

export function useAnalysisPlayground() {
    const { keycloak } = useKeycloakInfo();

    /** Analysis Playground object handling XHR calls to the server */
    const analysisPlayground = useMemo(() => {
        if (keycloak?.authenticated) {
            return new AnalysisPlayground(
                getAnalysisPlaygroundBackendServerUrl(),
                keycloak
            );
        }

        return undefined;
    }, [keycloak, keycloak?.authenticated]);

    return analysisPlayground;
}
