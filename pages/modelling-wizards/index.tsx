import { Card, H1, H3 } from "@blueprintjs/core";
import {
    Col,
    FixedContainer,
    Footer,
    HtmlHead,
    Row,
    useTheme,
} from "@ecocommons-australia/ui-library";
import { useMemo } from "react";

import { Page, WorkflowCard } from "../../interfaces/Theme";
import Header from "../../components/Header";

import stylesIndex from "../index.module.css";

import getConfig from "next/config";

const config = getConfig();

export default function ModellingWizardsIndexPage() {
    const { getThemeValue } = useTheme();

    const workflows: WorkflowCard[] | undefined = getThemeValue(
        "Map::AnalysisTools.Workflows"
    );

    const links = useMemo<readonly Page[]>(
        () => getThemeValue("Map::AnalysisTools.HeaderSubBarLinks") ?? [],
        [getThemeValue]
    );

    // Information about this page (which can be styled/branded differently
    // depending on theme)
    const page = useMemo<Page>(
        () =>
            links.find((p) => p.key === "modelling-wizards") ?? {
                key: "modelling-wizards",
                href: "/modelling-wizards",
                label: "Modelling Wizards",
            },
        [links]
    );

    const cards = useMemo(() => {
        if (!workflows) {
            return [];
        }

        return workflows.map((workflow) => {
            // Workflows defined in `theme.ts` have the env var lookup key
            // encoded in `url`
            //
            // If no env var exists for the given key, then return `null` for
            // this card - this will cause it not to be rendered by React
            if (!config.publicRuntimeConfig.hasOwnProperty(workflow.url)) {
                return null;
            }

            return (
                <Col xs={4} key={`Workflow_${workflow.id}`}>
                    <a
                        className={stylesIndex.cardLink}
                        href={config.publicRuntimeConfig[workflow.url] ?? "#"}
                    >
                        <Card interactive className={stylesIndex.card}>
                            <img
                                src={workflow.imagePath}
                                style={{
                                    objectFit: "contain",
                                    width: "100%",
                                    aspectRatio: "16 / 9",
                                }}
                            />
                            <H3>{workflow.title}</H3>
                            <p>{workflow.description}</p>
                        </Card>
                    </a>
                </Col>
            );
        });
    }, [workflows]);

    return (
        <>
            <HtmlHead title={["Analysis Hub", `${page.label}`]} />
            <Header activeTab="analysis-hub" subBarActiveKey={`${page.key}`} />
            <FixedContainer>
                <Row>
                    <Col xs={12}>
                        <H1>{page.label}</H1>
                    </Col>
                </Row>
                <Row>{cards}</Row>
            </FixedContainer>
            <Footer />
        </>
    );
}
