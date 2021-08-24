import { FixedContainer, HtmlHead } from "@ecocommons-australia/ui-library";

import Header from "../../components/Header";

export default function FunctionCatalogueIndexPage() {
    return (
        <>
            <HtmlHead title="Function Catalogue" />
            <Header
                activeTab="functions"
                subBarActiveKey="function-catalogue"
            />
            <FixedContainer></FixedContainer>
        </>
    );
}
