import { Button, Classes, Dialog, H3, Intent } from "@blueprintjs/core";
import React, { useCallback, useState } from "react";

import { AnalysisPlaygroundKernel } from "../interfaces/AnalysisPlaygroundKernel";
import KernelSelectDialogItem from "./KernelSelectDialogItem";

export interface Props {
    showKernelDialog: boolean;
    setShowKernelDialog: (val: boolean) => void;
    kernels: readonly AnalysisPlaygroundKernel[];
    onServerLaunch: (slug: string) => void;
}

export default function KernelSelectDialog({
    showKernelDialog,
    setShowKernelDialog,
    kernels,
    onServerLaunch
}: Props) {

    const [selectedServer, setSelectedServer] = useState<string>(''); 

    const handleClose = useCallback(() => {
        setShowKernelDialog(false);
    }, [setShowKernelDialog, setSelectedServer]);

    const handleRadioChange = useCallback((value: string) => {
        setSelectedServer(value);
    }, [setSelectedServer]);

    const handleLaunchServerButtonClick = useCallback(() => {
        onServerLaunch(selectedServer);
        setShowKernelDialog(false);
    }, [selectedServer, onServerLaunch]);

    return (
        <Dialog
                // icon="cube-add"
                onClose={handleClose}
                title="Launch notebook server"
                isOpen={showKernelDialog}
        >
            <div className={Classes.DIALOG_BODY}>
                <H3>Server Type</H3>
                {kernels.map((x) => (
                    <KernelSelectDialogItem
                        kernel={x}
                        selectedServer={selectedServer}
                        handleRadioChange={handleRadioChange}
                    />
                ))}
            </div>
            <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                    <Button
                        text="Launch"
                        onClick={handleLaunchServerButtonClick}
                        intent={Intent.SUCCESS}
                        disabled={!selectedServer}
                    />
                    <Button
                        text="Cancel"
                        onClick={handleClose}
                        intent={Intent.WARNING}
                    />
                </div>
            </div>
        </Dialog>
    )
}
