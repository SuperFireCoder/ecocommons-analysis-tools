import { Card, H1, H3 } from "@blueprintjs/core";
import {
    Col,
    FixedContainer,
    HtmlHead,
    Row,
} from "@ecocommons-australia/ui-library";

import Header from "../../components/Header";

import stylesIndex from "../index.module.css";

export default function PointAndClickIndexPage() {
    return (
        <>
            <HtmlHead title="Point &amp; Click" />
            <Header activeTab="functions" subBarActiveKey="point-and-click" />
            <FixedContainer>
                <Row>
                    <Col xs={12}>
                        <H1>Point &amp; Click Environments</H1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <a className={stylesIndex.cardLink} href="#">
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
