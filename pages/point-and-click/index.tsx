import { Card, H1, H3 } from "@blueprintjs/core";
import {
    Col,
    FixedContainer,
    HtmlHead,
    Row,
} from "@ecocommons-australia/ui-library";

import Header from "../../components/Header";

export default function PointAndClickIndexPage() {
    return (
        <>
            <HtmlHead />
            <Header activeTab="functions" subBarActiveKey="point-and-click" />
            <FixedContainer>
                <Row>
                    <Col xs={12}>
                        <H1>Point &amp; Click Environments</H1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4}>
                        <a href="#">
                            <Card interactive>
                                <img
                                    src="https://w7vfwul3.dreamwp.com/wp-content/uploads/2016/06/BCCVL_Logo_Horizontal_RGB.png"
                                    style={{
                                        objectFit: "contain",
                                        width: "100%",
                                        aspectRatio: "16 / 9",
                                    }}
                                />
                                <H3>BCCVL</H3>
                                <p>
                                    Discover point &amp; click environments to
                                    set up and run experiments with commonly
                                    used models
                                </p>
                            </Card>
                        </a>
                    </Col>
                </Row>
            </FixedContainer>
        </>
    );
}
