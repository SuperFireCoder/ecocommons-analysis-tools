import cookie from "cookie";
import { AppProps, AppContext } from "next/app";
import Link from "next/link";
import { IncomingMessage } from "http";
import { SSRKeycloakProvider, SSRCookies } from "@react-keycloak/ssr";
import { LinkContext, buildThemeWrapper } from "@ecocommons-australia/ui-library";

import { getKeycloakAuthParameters } from "../util/env";
import { useEffect } from "react";
import router from "next/router";
import * as gtag from "../util/gtag";

// Blueprint required CSS
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import "@ecocommons-australia/ui-library/src/styles/global.css";

import { theme } from "../themes/default/theme";
import "../themes/default/styles/global.css";

interface Props extends AppProps {
    /** Cookies in request */
    cookies: unknown;
}

const ThemeWrapper = buildThemeWrapper(theme);

function MyApp({ Component, pageProps, cookies }: Props) {
    /** react-keycloak configuration */
    const keycloakConfig = getKeycloakAuthParameters();
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
          gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
          router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <LinkContext.Provider value={{ Link }}>
            <SSRKeycloakProvider
                keycloakConfig={keycloakConfig}
                persistor={SSRCookies(cookies)}
            >
                <ThemeWrapper>
                    <Component {...pageProps} />
                </ThemeWrapper>
            </SSRKeycloakProvider>
        </LinkContext.Provider>
    );
}

function parseCookies(req?: IncomingMessage) {
    return cookie.parse(req?.headers?.cookie || "");
}

MyApp.getInitialProps = async (context: AppContext) => {
    // Extract cookies from AppContext
    return {
        cookies: parseCookies(context?.ctx?.req),
    };
};

export default MyApp;
