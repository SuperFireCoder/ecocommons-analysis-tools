import { FixedContainer, HtmlHead } from "@ecocommons-australia/ui-library";

import Header from "../../components/Header";

export default function CodingIndexPage() {
    return (
        <>
            <HtmlHead />
            <Header activeTab="functions" subBarActiveKey="coding" />
            <FixedContainer></FixedContainer>
        </>
    );
}
