import { FixedContainer, Footer, HtmlHead } from "@ecocommons-australia/ui-library";

import Header from "../../components/Header";

export default function FunctionCatalogueIndexPage() {
    return (
        <>
            <HtmlHead title="Function Catalogue" />
            <Header
                activeTab="analysis-hub"
                subBarActiveKey="function-catalogue"
            />
            <FixedContainer></FixedContainer>
            <Footer/>
        </>
    );
}
