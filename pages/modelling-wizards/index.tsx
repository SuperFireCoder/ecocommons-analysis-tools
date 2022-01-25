import { Card, H1, H3 } from "@blueprintjs/core";
import {
    Col,
    FixedContainer,
    HtmlHead,
    Row,
    useTheme,
} from "@ecocommons-australia/ui-library";

import Header from "../../components/Header";

import stylesIndex from "../index.module.css";

import getConfig from "next/config";

const config = getConfig();

export default function ModellingWizardsIndexPage() {
    const { getThemeValue, mergeStyles } = useTheme();
    const workflows = getThemeValue("Map::AnalysisTools.Workflows")
    const cards = [];
    if (workflows){
        for (const [name, workflow] of Object.entries(workflows)) {
            if (! config.publicRuntimeConfig.hasOwnProperty(workflow.url)){
                continue;
            }

            cards.push(
                <>
                <Col xs={4} key="Workflow_{name}">
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
        }
    }

    // TODO: will need a wrapping layout here as fixed col/row aint no good
    if (cards.length > 0){
        return (
            <>
                <HtmlHead title={["Analysis Hub", "Modelling Wizards"]} />
                <Header
                    activeTab="analysis-hub"
                    subBarActiveKey="modelling-wizards"
                />
                <FixedContainer>
                    <Row>
                        <Col xs={12}>
                            <H1>Modelling Wizards</H1>
                        </Col>
                    </Row>
                    <Row>
                        {cards}
                    </Row>
                </FixedContainer>
            </>
        )
    }

    // static
    return (
        <>
            <HtmlHead title={["Analysis Hub", "Modelling Wizards"]} />
            <Header
                activeTab="analysis-hub"
                subBarActiveKey="modelling-wizards"
            />
            <FixedContainer>
                <Row>
                    <Col xs={12}>
                        <H1>Modelling Wizards</H1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <a
                            className={stylesIndex.cardLink}
                            href={
                                config.publicRuntimeConfig
                                    .NEXT_PUBLIC_ANALYSIS_TOOLS_MODELLING_WIZARDS_BCCVL_URL ??
                                "#"
                            }
                        >
                            <Card interactive>
                                <img
                                    src="https://w7vfwul3.dreamwp.com/wp-content/uploads/2016/06/BCCVL_Logo_Horizontal_RGB.png"
                                    style={{
                                        objectFit: "contain",
                                        width: "100%",
                                        aspectRatio: "16 / 9",
                                    }}
                                />
                                <H3>
                                    Biodiversity and Climate Change Virtual
                                    Laboratory (BCCVL)
                                </H3>
                                <p>
                                    Run a variety of models and analyses,
                                    including Species and Multi-species
                                    Distributions, Species Traits, Climate
                                    Change Projections, Biodiverse Experiments
                                    and perform Ensemble Analyses.
                                </p>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </FixedContainer>
        </>
    );
}
