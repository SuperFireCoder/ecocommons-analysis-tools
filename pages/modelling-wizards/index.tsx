import { Card, H1, H3 } from "@blueprintjs/core";
import {
    Col,
    FixedContainer,
    Footer,
    HtmlHead,
    Row,
    useTheme,
} from "@ecocommons-australia/ui-library";

import { Page, Workflow } from "../../interfaces/Theme";
import Header from "../../components/Header";

import stylesIndex from "../index.module.css";

import getConfig from "next/config";

const config = getConfig();

export default function ModellingWizardsIndexPage() {
    const { getThemeValue } = useTheme();
    const cards: any[] = [];
    const links = getThemeValue("Map::AnalysisTools.HeaderSubBarLinks") ?? [];

    const page: Page = links.find((p: Page) => p.key === 'modelling-wizards') ?? {
            key: "modelling-wizards",
            href: "/modelling-wizards",
            label: "Modelling Wizards",
        };

    var workflows: Workflow[] = getThemeValue("Map::AnalysisTools.Workflows");

    workflows.forEach(workflow => {
        if (! config.publicRuntimeConfig.hasOwnProperty(workflow.url)){
            return;
        }
        cards.push(
            <>
            <Col xs={4} key="Workflow_{workflows.id}">
            <a
                className={stylesIndex.cardLink}
                href={ config.publicRuntimeConfig[workflow.url] ?? "#" }
            >
                <Card interactive>
                    <img
                        src={workflow.imagePath}
                        style={{
                            objectFit: "contain",
                            width: "100%",
                            aspectRatio: "16 / 9",
                        }}
                    />
                    <H3>
                        {workflow.title}
                    </H3>
                    <p>
                        {workflow.description}
                    </p>
                </Card>
            </a>
            </Col>
            </>
            );
    });

    return (
        <>
            <HtmlHead title={["Analysis Hub", "{page.label}"]} />
            <Header
                activeTab="analysis-hub"
                subBarActiveKey="{page.key}"
            />
            <FixedContainer>
                <Row>
                    <Col xs={12}>
                        <H1>{page.label}</H1>
                    </Col>
                </Row>
                <Row>
                    {cards}
                </Row>
            </FixedContainer>
            <Footer/>
        </>
    )

}
