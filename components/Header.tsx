import { ComponentProps } from "react";
import { Header as EcHeader } from "@ecocommons-australia/ui-library";
import SignInOutButton from "./SignInOutButton";
import getConfig from "next/config";

const config = getConfig();

// This <Header /> injects the <SignInOutButton /> specific to this site

export default function Header({
    subBarLinks = [
        {
            key: "point-and-click",
            href: "/point-and-click",
            label: "Point & Click",
        },
        {
            key: "code-notebooks",
            href: "/code-notebooks",
            label: "Notebooks & Command Line",
        },
        // {
        //     key: "function-catalogue",
        //     href: "/function-catalogue",
        //     label: "Function Catalogue",
        // },
    ],
    ...props
}: Omit<ComponentProps<typeof EcHeader>, "tabLinks">) {
    return (
        <EcHeader
            signInOutButton={<SignInOutButton />}
            tabLinks={{
                ECOCOMMONS_ROOT:
                    config.publicRuntimeConfig
                        .NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_ROOT ??
                    "#",
                ECOCOMMONS_WORKSPACE:
                    process.env
                        .NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_WORKSPACE ??
                    "#",
                ECOCOMMONS_DATASETS:
                    process.env
                        .NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_DATASETS ??
                    "#",
                ECOCOMMONS_ANALYSIS_HUB:
                    process.env
                        .NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_ANALYSIS_HUB ??
                    "#",
            }}
            subBarLinks={subBarLinks}
            {...props}
        />
    );
}
