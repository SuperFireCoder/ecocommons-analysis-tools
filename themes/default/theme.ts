// theme placeholder

import { ThemeConfig } from "@ecocommons-australia/ui-library";
import { WorkflowCard } from "../../interfaces/Theme";

const workflows: WorkflowCard[] = [
    {
        id: "BCCVL",
        title: "BCCVL",
        description: `Biodiversity and Climate Change Virtual Laboratory (BCCVL) - Range of SDM tools such as: climate projections, ensemble, multiple species, migratory analysis (i.e. monthly), species trait modelling.`,
        imagePath: "images/workflows/bccvl_sml.png",
        url: "NEXT_PUBLIC_ANALYSIS_TOOLS_MODELLING_WIZARDS_BCCVL_URL",
        category: "Modelling Wizard",
        categoryColor: "#26ac94",
        isNewTab: false
    },
    {
        id: "BSRMAP",
        title: `Risk Mapping`,
        description: `Biosecurity Risk Mapping – Pest establishment likelihood: abiotic suitability, biotic suitability, Pest arrival probability`,
        imagePath: "images/workflows/risk_mapping_sml.png",
        url: 'NEXT_PUBLIC_ANALYSIS_TOOLS_MODELLING_WIZARDS_BSRMAP_URL',
        category: "Modelling Wizard",
        categoryColor: "#26ac94",
        isNewTab: false
    },
    {
        id: "CC",
        title: `Coding Cloud`,
        description: `Use a command-line environment based on JupyterHub to run scripts in R, Python or Julia in the cloud without the need to install anything.`,
        imagePath: "images/workflows/console_icon.png",
        url: 'NEXT_PUBLIC_ANALYSIS_TOOLS_CODING_CLOUD',
        category: "Command-Line Environment",
        categoryColor: "#65c4f2",
        isNewTab: false
    },
    {
        id: "COESRA",
        title: `CoESRA`,
        description: `Collaborative Environment for Scholarly Research and Analysis.`,
        imagePath: "images/workflows/coesra.png",
        url: 'NEXT_PUBLIC_ANALYSIS_TOOLS_COESRA',
        category: "Virtual Desktop Environment",
        categoryColor: "#456d41",
        isNewTab: true
    },
];

export const theme: ThemeConfig = {
    "Object::AnalysisTools.Workflows": workflows
}