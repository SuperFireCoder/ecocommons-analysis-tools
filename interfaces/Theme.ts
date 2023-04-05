export interface WorkflowCard {
    id: string;
    title: string;
    description: string;
    url: string;
    imagePath: string;
    category: String;
    categoryColor: string
}

export interface Page {
    key: string;
    href: string;
    label: string;
}