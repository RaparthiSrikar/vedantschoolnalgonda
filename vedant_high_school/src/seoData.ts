import { Page } from './types';

export interface SEOData {
    title: string;
    description: string;
    keywords: string;
}

export const SEO_CONFIG: Record<Page, SEOData> = {
    [Page.Home]: {
        title: 'Best School in Nalgonda | Vedant High School Admissions Open 2026',
        description: 'Vedant High School is one of the best schools in Nalgonda offering quality education, experienced faculty, modern classrooms, and excellent results. Admissions Open for 2026.',
        keywords: 'best school in nalgonda, top school in nalgonda, cbse school in nalgonda, english medium school in nalgonda, Vedant High School, Vedant school admissions, quality education Nalgonda, smart classrooms Nalgonda, excellent results'
    },
    [Page.About]: {
        title: 'About Vedant High School | Vision, Mission & Leadership | Nalgonda',
        description: 'Know about Vedant High School Nalgonda – our vision, mission, core values, experienced leadership team, and commitment to academic excellence from Nursery to 10th Standard.',
        keywords: 'about Vedant High School, Vedant school history, Vedant school Nalgonda about, school vision mission Nalgonda, S Shankar Goud founder, Gutta Gopal Reddy correspondent, R Shobhan principal, S Aditya Samrat director, Shyam Prasad director, Sri Raghavendra Educational Society, school leadership Nalgonda, core values integrity discipline respect excellence, why choose Vedant school, best school management Nalgonda, value based education Nalgonda, school with experienced teachers Nalgonda, safe school campus Nalgonda, CCTV monitored school, holistic growth school Nalgonda, Vidyanagar Ramagiri Nalgonda school'
    },
    [Page.Academics]: {
        title: 'Academics & Curriculum | CBSE Nursery to 10th | Vedant High School Nalgonda',
        description: 'Explore the CBSE-aligned academic programs at Vedant High School – Foundational (Nursery-UKG), Preparatory (Grades 1-5), and Secondary (Grades 6-10) stages with NEP-aligned experiential learning, IIT-JEE & NEET foundation, and LEAD Program.',
        keywords: 'Vedant school academics, CBSE curriculum Nalgonda, nursery school Nalgonda, LKG UKG admission Nalgonda, primary school grades 1 to 5, secondary school grades 6 to 10, foundational stage CBSE, preparatory stage CBSE, play based learning Nalgonda, activity based learning, NEP aligned school Nalgonda, IIT foundation school Nalgonda, NEET foundation school Nalgonda, LEAD program Vedant, board exam preparation Nalgonda, 10th class school Nalgonda, critical thinking school, smart learning Nalgonda, phonics learning school, career guidance school Nalgonda, personality development school, language lab school Nalgonda, computer lab school Nalgonda, resilience innovation integrity school'
    },
    [Page.Admissions]: {
        title: 'Admissions Open 2025-2026 | Vedant High School Nalgonda | Apply Now',
        description: 'Admissions open at Vedant High School Nalgonda for Nursery, LKG, UKG, Grades 1-5, and Grades 6-10. Learn about the admission process, required documents, fee structure, and apply via WhatsApp.',
        keywords: 'Vedant High School admissions, admissions open Nalgonda, school admission 2025 2026, nursery admission Nalgonda, LKG UKG admission Nalgonda, grade 1 admission Nalgonda, grade 6 admission Nalgonda, school admission process, school registration Nalgonda, admission enquiry Vedant, school fee structure Nalgonda, Vedant school fees, required documents school admission, birth certificate school admission, transfer certificate school, Aadhar card school admission, WhatsApp admission enquiry, online school admission Nalgonda, best school to join Nalgonda, new academic year admission Telangana, apply now Vedant school'
    },
    [Page.Events]: {
        title: 'School Events & Activities | Annual Day, Sports, Cultural | Vedant High School',
        description: 'Stay updated with Vedant High School events – Parent-Teacher Meetings, Inter-School Sports Competitions, Cultural Extravaganza, Annual Day celebrations. Experience the vibrant school life at Nalgonda.',
        keywords: 'Vedant school events, school events Nalgonda, parent teacher meeting Nalgonda, PTM school Nalgonda, inter school sports competition, school sports day Nalgonda, cultural events school, cultural extravaganza Nalgonda, annual day celebration school, school activities calendar, school celebrations Nalgonda, dance music performances school, student achievements Nalgonda, school competitions Telangana, sports and athletics school, school calendar of activities, extracurricular activities Nalgonda, school life Vedant, vibrant school community Nalgonda'
    },
    [Page.Contact]: {
        title: 'Contact Vedant High School Nalgonda | Address, Phone, Email & Map',
        description: 'Get in touch with Vedant High School, Old Raghavendra College, Vidyanagar, Ramagiri, Nalgonda. Call +91 90525 99399, email vedanthighschoolnalgonda@gmail.com or visit us on Google Maps.',
        keywords: 'contact Vedant High School, Vedant school phone number, Vedant school address, Old Raghavendra College Vidyanagar Ramagiri Nalgonda, Nalgonda school contact number, +91 90525 99399, vedanthighschoolnalgonda@gmail.com, school near Vidyanagar Nalgonda, school near Ramagiri Nalgonda, Vedant school Google Maps, school location Nalgonda, school enquiry Nalgonda, WhatsApp school contact, directions to Vedant school, Nalgonda Telangana 508001 school, schools in Srinivas Nagar Colony Nalgonda'
    },
    [Page.LearningTools]: {
        title: 'Learning Tools & Infrastructure | Labs, Library, Sports | Vedant High School',
        description: 'Discover the modern infrastructure at Vedant High School – fully equipped Science Labs (Physics, Chemistry, Biology), Computer Lab with high-speed internet, well-stocked Library, and indoor/outdoor Sports facilities.',
        keywords: 'Vedant school infrastructure, school learning tools, science laboratory school Nalgonda, physics lab school, chemistry lab school, biology lab school, computer lab school Nalgonda, digital literacy school, school library Nalgonda, reading habits school, sports facilities school Nalgonda, physical education school, indoor outdoor sports school, modern school facilities Nalgonda, smart school Nalgonda, school with labs Nalgonda, school with library Nalgonda, school with sports ground Nalgonda, school resources Nalgonda, technology driven education Nalgonda, hands on learning school, practical education Nalgonda'
    },
    [Page.BestSchool]: {
        title: 'Best School in Nalgonda | Quality Education at Vedant High School',
        description: 'Looking for the best school in Nalgonda? Vedant High School offers holistic education, expert faculty, and state-of-the-art facilities. Enroll your child today.',
        keywords: 'best school in nalgonda, top school in nalgonda, quality education nalgonda, vedant high school'
    },
    [Page.CbseSchool]: {
        title: 'Top CBSE School in Nalgonda | Vedant High School Curriculum',
        description: 'Vedant High School is a leading CBSE school in Nalgonda providing an NEP-aligned curriculum, IIT-JEE & NEET foundations. Join us for academic excellence.',
        keywords: 'cbse school in nalgonda, top cbse school nalgonda, ncert syllabus nalgonda, vedant school cbse'
    },
    [Page.EnglishMediumSchool]: {
        title: 'Best English Medium School in Nalgonda | Vedant High School',
        description: 'Empower your child at the finest English medium school in Nalgonda. Vedant High School offers modern classrooms and comprehensive personality development.',
        keywords: 'english medium school in nalgonda, best english medium school nalgonda, english speaking school nalgonda'
    },
    [Page.Blog]: {
        title: 'Blog & Articles | Insights on Education | Vedant High School',
        description: 'Read the latest articles, educational insights, and guides from Vedant High School Nalgonda. Stay updated on school news and education tips.',
        keywords: 'vedant high school blog, education articles nalgonda, school news nalgonda, parenting tips'
    },
    [Page.BlogTop10]: {
        title: 'Top 10 Schools in Nalgonda (2026 Guide) | Vedant High School',
        description: 'Discover the top 10 schools in Nalgonda for 2026. Learn how Vedant High School stands out with its holistic approach and state-of-the-art infrastructure.',
        keywords: 'top 10 schools in nalgonda, best schools in nalgonda 2026, school ranking nalgonda'
    },
    [Page.BlogHowToChoose]: {
        title: 'How to Choose the Best School in Nalgonda | Parents Guide',
        description: 'A comprehensive guide for parents on how to choose the best school in Nalgonda for their children, focusing on curriculum, facilities, and faculty.',
        keywords: 'how to choose a school, choosing best school nalgonda, school admission guide nalgonda'
    },
    [Page.BlogCbseVsState]: {
        title: 'CBSE vs State Board: Which is Better for Your Child?',
        description: 'Explore the differences between CBSE and State Board curriculums. Understand which educational path is the best fit for your child\'s future success.',
        keywords: 'cbse vs state board, cbse curriculum benefits, state board vs cbse, vedant high school cbse'
    }
};
