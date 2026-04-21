export const Page = {
    Home: '/',
    About: '/about',
    Academics: '/academics',
    Admissions: '/admissions',
    Events: '/events',
    Contact: '/contact',
    LearningTools: '/learning-tools',
    BestSchool: '/best-school-in-nalgonda',
    CbseSchool: '/cbse-school-in-nalgonda',
    EnglishMediumSchool: '/english-medium-school-nalgonda',
    Blog: '/blog',
    BlogTop10: '/blog/top-10-schools-in-nalgonda-2026',
    BlogHowToChoose: '/blog/how-to-choose-best-school-in-nalgonda',
    BlogCbseVsState: '/blog/cbse-vs-state-board'
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