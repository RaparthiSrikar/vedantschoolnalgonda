import {
    Check,
    ShieldCheck,
    Users,
    Sparkles,
    Globe,
    X,
    BookOpen,
    GraduationCap,
    MapPin,
    Phone,
    Mail,
    Menu,
    ArrowRight,
    Facebook,
    Instagram,
    Youtube
} from 'lucide-react';
import { Page } from './types';

export const Icons = {
    Check: Check,
    Safety: ShieldCheck,
    Users: Users,
    Sparkles: Sparkles,
    Globe: Globe,
    Close: X,
    Book: BookOpen,
    Graduation: GraduationCap,
    MapPin: MapPin,
    Phone: Phone,
    Mail: Mail,
    Menu: Menu,
    ArrowRight: ArrowRight,
    Facebook: Facebook,
    Instagram: Instagram,
    YouTube: Youtube
};

export const NAVIGATION_ITEMS = [
    { label: 'Home', page: Page.Home },
    { label: 'About', page: Page.About },
    { label: 'Academics', page: Page.Academics },
    { label: 'Admissions', page: Page.Admissions },
    { label: 'Events', page: Page.Events },
    { label: 'Learning Tools', page: Page.LearningTools },
    { label: 'Contact', page: Page.Contact }
];
