import { FixedContainer, HtmlHead } from "@ecocommons-australia/ui-library";

import Header from "../../components/Header";

export default function CodeNotebooksIndexPage() {
    return (
        <>
            <HtmlHead title="Notebooks &amp; Command Line" />
            <Header activeTab="functions" subBarActiveKey="code-notebooks" />
            <FixedContainer></FixedContainer>
        </>
    );
}
