// theme placeholder

import { ThemeConfig } from "@ecocommons-australia/ui-library";
import { WorkflowCard } from "../../interfaces/Theme";

const workflows: WorkflowCard[] = [
    {
        id: "BCCVL",
        title: "Biodiversity and Climate Change Virtual Laboratory (BCCVL)",
        description: `Run a variety of models and analyses, including 
                            Species distribution models (SDM),
                            SDM climate projections, 
                            SDM ensemble, 
                            SDM for multiple species, 
                            migratory SDMs (i.e. monthly), 
                            Species trait modelling.`,
        imagePath: "https://w7vfwul3.dreamwp.com/wp-content/uploads/2016/06/BCCVL_Logo_Horizontal_RGB.png",
        url: "NEXT_PUBLIC_ANALYSIS_TOOLS_MODELLING_WIZARDS_BCCVL_URL",
        category: "Modelling Wizard",
        categoryColor: "#6CC4A1"
    },
    {
        id: "BSRMAP",
        title: `Risk Mapping`,
        description: `Biosecurity Risk Mapping – Pest establishment likelihood: abiotic suitability, biotic suitability, Pest arrival probability`,
        imagePath: "images/workflows/risk_mapping_sml.png",
        url: 'NEXT_PUBLIC_ANALYSIS_TOOLS_MODELLING_WIZARDS_BSRMAP_URL',
        category: "Modelling Wizard",
        categoryColor: "#6CC4A1"
    },
    {
        id: "CC",
        title: `Coding Cloud`,
        description: `Use a command-line environment based on JupyterHub to run scripts in R, Python or Julia in the cloud without the need to install anything.`,
        imagePath: "images/workflows/console_icon.png",
        url: 'NEXT_PUBLIC_CLOUD_LOAD',
        category: "Command-Line Environment",
        categoryColor: "#50e0ff"
    },
];

export const theme: ThemeConfig = {
    "Object::AnalysisTools.Workflows": workflows
}