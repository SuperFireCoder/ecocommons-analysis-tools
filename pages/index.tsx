import { Card, H3, Icon, H2 } from "@blueprintjs/core";
import {
    Col,
    FixedContainer,
    Footer,
    HtmlHead,
    Row,
    useTheme
} from "@ecocommons-australia/ui-library";

import { useMemo } from "react";

import { Page, WorkflowCard } from "../interfaces/Theme";

import Link from "next/link";

import Header from "../components/Header";

import styles from "./index.module.css";

import stylesIndex from "./index.module.css";

import getConfig from "next/config";

const config = getConfig();

export default function AnalysisHubIndexPage() {
    const { getThemeValue } = useTheme();

    const workflows: WorkflowCard[] | undefined = getThemeValue(
        "Object::AnalysisTools.Workflows"
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
                        // href={"./coding-cloud"}
                    >
                        <Card interactive className={stylesIndex.card}>
                            <span style={{ position: "absolute", top: "0px", right: "8px", backgroundColor:  workflow.categoryColor, color: "white", padding: "4px" }}>{workflow.category}</span>
                            <br></br>
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
            <HtmlHead title={["Analysis Hub"]} />
            <Header activeTab="analysis-hub" />
            <FixedContainer>
            <Row>{cards}</Row>
            </FixedContainer>
            <Footer/>
        </>
    );
}

