import { ComponentProps } from "react";
import { Header as EcHeader, Constants as UiLibraryConstants, useTheme } from "@ecocommons-australia/ui-library";
import SignInOutButton from "./SignInOutButton";
import getConfig from "next/config";

const config = getConfig();

// This <Header /> injects the <SignInOutButton /> specific to this site

export default function Header({
    subBarLinks = [
        {
            key: "modelling-wizards",
            href: "/modelling-wizards",
            label: "Modelling Wizards",
        },
        {
            key: "coding-cloud",
            href: "/coding-cloud",
            label: "Coding Cloud",
        },
        // {
        //     key: "function-catalogue",
        //     href: "/function-catalogue",
        //     label: "Function Catalogue",
        // },
    ],
    ...props
}: Omit<ComponentProps<typeof EcHeader>, "tabLinks">) {
    const { getThemeValue } = useTheme();

    subBarLinks = getThemeValue("Map::AnalysisTools.HeaderSubBarLinks") ?? subBarLinks;

    return (
        <EcHeader
            signInOutButton={<SignInOutButton />}
            tabLinks={{
                ...UiLibraryConstants.Urls,
                ECOCOMMONS_ROOT:
                    config.publicRuntimeConfig
                        .NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_ROOT ?? "#",
                ECOCOMMONS_WORKSPACE:
                    config.publicRuntimeConfig
                        .NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_WORKSPACE ??
                    "#",
                ECOCOMMONS_DATASETS:
                    config.publicRuntimeConfig
                        .NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_DATASETS ??
                    "#",
                ECOCOMMONS_ANALYSIS_HUB:
                    config.publicRuntimeConfig
                        .NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_ANALYSIS_HUB ??
                    "#",
                ECOCOMMONS_SUPPORT:
                    config.publicRuntimeConfig
                        .NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_SUPPORT ??
                    "#",
            }}
            useYellowStripedBackground={
                config.publicRuntimeConfig.NEXT_PUBLIC_DEPLOYMENT !==
                "production"
            }
            subBarLinks={subBarLinks}
            {...props}
        />
    );
}