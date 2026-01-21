export const Page = {
    Home: 'home',
    About: 'about',
    Academics: 'academics',
    Admissions: 'admissions',
    Events: 'events',
    Contact: 'contact',
    LearningTools: 'learning-tools'
} as const;

export type Page = typeof Page[keyof typeof Page];

// Added DrawingTool to support sketching functionality
export const DrawingTool = {
    Pencil: 'pencil',
    Eraser: 'eraser'
} as const;

export type DrawingTool = typeof DrawingTool[keyof typeof DrawingTool];

export interface EventItem {
    id: number;
    title: string;
    date: string;
    image: string;
    category: 'upcoming' | 'past';
    description: string;
}

export interface NavItem {
    label: string;
    page: Page;
}