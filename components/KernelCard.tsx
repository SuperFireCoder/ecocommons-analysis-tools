import { Button, Card, Classes, Elevation, H5 } from "@blueprintjs/core";
import {
    Col,
    FixedContainer,
    HtmlHead,
    Row,
} from "@ecocommons-australia/ui-library";
import { useCallback } from "react";

import { AnalysisPlaygroundKernel } from "../interfaces/AnalysisPlaygroundKernel";

export interface Props {
    kernel: AnalysisPlaygroundKernel;
    disabled: boolean;
    onServerLaunch: (slug: string) => void;
}

export default function KernelCard({
    kernel,
    disabled,
    onServerLaunch
}: Props) {

    const handleLaunchServerButtonClick = useCallback((slug: string) => {
        onServerLaunch(slug);
    }, [onServerLaunch]);

    return (
        <Card
            key={kernel.slug}
            elevation={Elevation.FOUR}
            // interactive={true}
            // onClick={() => handleLaunchServerButtonClick(kernel.slug)}
        >
            <Row>
                <Col xs={9}>
                    <H5>{kernel.title}</H5>
                    <p>{kernel.description}</p>
                </Col>
                <Col xs={3}>
                    <Button
                        text="Launch Server"
                        className={Classes.BUTTON}
                        intent="success"
                        onClick={() => handleLaunchServerButtonClick(kernel.slug)}
                        disabled={disabled}
                    />
                </Col>
            </Row>
            
        </Card>
    )
}
