import { Card, H1, H3 } from "@blueprintjs/core";
import {
    Col,
    FixedContainer,
    HtmlHead,
    Row,
    useTheme,
} from "@ecocommons-australia/ui-library";

import { Page, Workflow } from "../../interfaces/Theme";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

    var workflows: Workflow[] = getThemeValue("Map::AnalysisTools.Workflows") ?? [{
            id: "BCCVL",
            title: "Biodiversity and Climate Change Virtual Laboratory (BCCVL)",
            description: `Run a variety of models and analyses,
                                    including Species and Multi-species
                                    Distributions, Species Traits, Climate
                                    Change Projections, Biodiverse Experiments
                                    and perform Ensemble Analyses.`,
            url: "NEXT_PUBLIC_ANALYSIS_TOOLS_MODELLING_WIZARDS_BCCVL_URL",
            imagePath: "https://w7vfwul3.dreamwp.com/wp-content/uploads/2016/06/BCCVL_Logo_Horizontal_RGB.png"
        }];

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
