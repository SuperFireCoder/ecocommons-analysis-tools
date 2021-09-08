import { Card, H3, Icon } from "@blueprintjs/core";
import {
    Col,
    FixedContainer,
    HtmlHead,
    Row,
} from "@ecocommons-australia/ui-library";
import Link from "next/link";

import Header from "../components/Header";

import styles from "./index.module.css";

export default function IndexPage() {
    return (
        <>
            <HtmlHead />
            <Header activeTab="analysis-hub" />
            <FixedContainer>
                <Row>
                    <Col xs={6}>
                        <Link href="/point-and-click">
                            <a className={styles.cardLink}>
                                <Card interactive style={{ padding: 0 }}>
                                    <Row disableDefaultMargins>
                                        <Col
                                            xs={8}
                                            style={{
                                                height: "8rem",
                                                padding: "20px 0 20px 30px",
                                            }}
                                        >
                                            <H3>Point &amp; Click</H3>
                                            <p>
                                                Use our curated point &amp;
                                                click environments to set up and
                                                run experiments with commonly
                                                used models
                                            </p>
                                        </Col>
                                        <Col
                                            xs={4}
                                            style={{
                                                height: "8rem",
                                                overflow: "hidden",
                                                color: "rgba(0,0,0,0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                            }}
                                        >
                                            <Icon
                                                icon="select"
                                                iconSize={80}
                                                style={{ margin: "20px" }}
                                            />
                                        </Col>
                                    </Row>
                                </Card>
                            </a>
                        </Link>
                    </Col>
                    <Col xs={6}>
                        <Link href="/code-notebooks">
                            <a className={styles.cardLink}>
                                <Card interactive style={{ padding: 0 }}>
                                    <Row disableDefaultMargins>
                                        <Col
                                            xs={8}
                                            style={{
                                                height: "8rem",
                                                padding: "20px 0 20px 30px",
                                            }}
                                        >
                                            <H3>
                                                Notebooks &amp; Command Line
                                            </H3>
                                            <p>
                                                Enter our online Jupyter
                                                environment where you can code
                                                using notebooks or directly on a
                                                command line
                                            </p>
                                        </Col>
                                        <Col
                                            xs={4}
                                            style={{
                                                height: "8rem",
                                                overflow: "hidden",
                                                color: "rgba(0,0,0,0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                            }}
                                        >
                                            <Icon
                                                icon="console"
                                                iconSize={80}
                                                style={{ margin: "20px" }}
                                            />
                                        </Col>
                                    </Row>
                                </Card>
                            </a>
                        </Link>
                    </Col>
                </Row>
                {/* <Row>
                    <Col xs={12}>
                        <Link href="/function-catalogue">
                            <a>
                                <Card interactive>
                                    <H3>Function Catalogue</H3>
                                    <p>...</p>
                                </Card>
                            </a>
                        </Link>
                    </Col>
                </Row> */}
            </FixedContainer>
        </>
    );
}
