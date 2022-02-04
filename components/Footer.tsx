import { ComponentProps } from "react";
import { FixedContainer, useTheme } from "@ecocommons-australia/ui-library";
import { Container, Col, Row } from "react-grid-system";
import getConfig from "next/config";
import styles from "./Footer.module.css";

const config = getConfig();

export interface FooterProps {
    content?: String

};

export default function Footer({
    content,
}: FooterProps) {
    const { getThemeValue, mergeStyles } = useTheme();

    //const themedStyles = mergeStyles(styles, "Styles::Footer");

    //content = getThemeValue("String::Platform.FooterContent") ?? content;
    //content = "fefefef";


    return (
        <footer>
            <Container fluid className={styles.footer}>
                <Row justify="center" style={{height: '100%'}}>
                    <Col sm={6} md={3}>
                        <h3>Workspace</h3>
                        <ul>
                            <li><a href="#">Explore Datasets</a></li>
                            <li><a href="#">My Results</a></li>
                            <li><a href="#">My Drive</a></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={3}>
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li> 
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Resources</a></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={3}>
                        <h3>Powered By EcoCommons</h3>
                        <p><img className="ecocommons_logo" style={{width:'14rem', border:'6px white solid'}} src="images/ecocommons_sml.png" /></p>
                    </Col>
                </Row>
                <Row justify="center" style={{paddingTop: '2rem'}}>
                    <Col sm={6} md={3}>
                        <p className="copyright">Terms of Use</p>
                    </Col>
                    <Col sm={6} md={3}>
                        <p className="copyright">Privacy Policy</p>
                    </Col>
                    <Col sm={6} md={3}>
                        <p className="copyright">Biosecurity Commons © 2022</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}