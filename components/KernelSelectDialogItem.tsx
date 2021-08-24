import { H5, Radio } from "@blueprintjs/core";
import {
    Col,
    Row,
} from "@ecocommons-australia/ui-library";
import React from "react";

import { AnalysisPlaygroundKernel } from "../interfaces/AnalysisPlaygroundKernel";

export interface Props {
    kernel: AnalysisPlaygroundKernel;
    selectedServer: AnalysisPlaygroundKernel["slug"];
    handleRadioChange: (slug: string) => void;
}

export default function KernelSelectDialogItem({
    kernel,
    selectedServer,
    handleRadioChange
}: Props) {
    return (
        <>
            <Row style={{'marginBottom': 0}}>
                <Col sm={1} >
                    <Radio
                        value={kernel.slug}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => handleRadioChange(e.currentTarget.value)}
                        checked={kernel.slug === selectedServer}
                        style={{'marginBottom': 0}}
                    />
                </Col>
                <Col sm={11}>
                    <H5 style={{'marginBottom': 0}}>
                        {kernel.title}
                    </H5>
                </Col>
            </Row>
            <Row>
                <Col sm={1}></Col>
                <Col sm={11}>
                    <p>{kernel.description}</p>
                </Col>
            </Row>
        </>
    )
}
