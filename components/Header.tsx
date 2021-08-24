import { ComponentProps, useMemo } from "react";
import { Header as EcHeader } from "@ecocommons-australia/ui-library";
import SignInOutButton from "./SignInOutButton";

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
                    process.env.NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_ROOT ??
                    "#",
                ECOCOMMONS_DATA_VISUALISATIONS:
                    process.env
                        .NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_DATA_VISUALISATIONS ??
                    "#",
                ECOCOMMONS_TOOLS_FUNCTIONS:
                    process.env
                        .NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_TOOLS_FUNCTIONS ??
                    "/",
                ECOCOMMONS_VIRTUAL_LABORATORIES:
                    process.env
                        .NEXT_PUBLIC_UI_LIBRARY_HEADER_ECOCOMMONS_VIRTUAL_LABORATORIES ??
                    "#",
            }}
            subBarLinks={subBarLinks}
            {...props}
        />
    );
}
