// theme placeholder

import { ThemeConfig } from "@ecocommons-australia/ui-library";
import { WorkflowCard } from "../../interfaces/Theme";

const workflows: WorkflowCard[] = [
    {
        id: "BCCVL",
        title: "Biodiversity and Climate Change Virtual Laboratory (BCCVL)",
        description: `Run a variety of models and analyses,
                            including Species and Multi-species
                            Distributions, Species Traits, Climate
                            Change Projections, Biodiverse Experiments
                            and perform Ensemble Analyses.`,
        imagePath: "https://w7vfwul3.dreamwp.com/wp-content/uploads/2016/06/BCCVL_Logo_Horizontal_RGB.png",
        url: "NEXT_PUBLIC_ANALYSIS_TOOLS_MODELLING_WIZARDS_BCCVL_URL"
    },
    {
        id: "BSRMAP",
        title: `Risk Mapping`,
        description: `Biosecurity Risk Mapping`,
        imagePath: "images/workflows/workflow_generic.png",
        url: 'NEXT_PUBLIC_ANALYSIS_TOOLS_MODELLING_WIZARDS_BSRMAP_URL',
    },
];

export const theme: ThemeConfig = {
    "Object::AnalysisTools.Workflows": workflows
}