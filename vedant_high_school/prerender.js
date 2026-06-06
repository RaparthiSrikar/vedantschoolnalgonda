import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, 'dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

// Page SEO configuration and schemas
const ROUTES_SEO = {
  '/about': {
    title: 'About Vedant High School | Vision, Mission & Leadership | Nalgonda',
    description: 'Know about Vedant High School Nalgonda – our vision, mission, core values, experienced leadership team, and commitment to academic excellence from Nursery to 10th Standard.',
    keywords: 'about Vedant High School, Vedant school history, Vedant school Nalgonda about, school vision mission Nalgonda, S Shankar Goud founder, Gutta Gopal Reddy correspondent, R Shobhan principal, S Aditya Samrat director, Shyam Prasad director, Sri Raghavendra Educational Society, school leadership Nalgonda, core values integrity discipline respect excellence, why choose Vedant school, best school management Nalgonda, value based education Nalgonda, school with experienced teachers Nalgonda, safe school campus Nalgonda, CCTV monitored school, holistic growth school Nalgonda, Vidyanagar Ramagiri Nalgonda school',
    schema: null
  },
  '/academics': {
    title: 'Academics & Curriculum | CBSE Nursery to 10th | Vedant High School Nalgonda',
    description: 'Explore the CBSE-aligned academic programs at Vedant High School – Foundational (Nursery-UKG), Preparatory (Grades 1-5), and Secondary (Grades 6-10) stages with NEP-aligned experiential learning, IIT-JEE & NEET foundation, and LEAD Program.',
    keywords: 'Vedant school academics, CBSE curriculum Nalgonda, nursery school Nalgonda, LKG UKG admission Nalgonda, primary school grades 1 to 5, secondary school grades 6 to 10, foundational stage CBSE, preparatory stage CBSE, play based learning Nalgonda, activity based learning, NEP aligned school Nalgonda, IIT foundation school Nalgonda, NEET foundation school Nalgonda, LEAD program Vedant, board exam preparation Nalgonda, 10th class school Nalgonda, critical thinking school, smart learning Nalgonda, phonics learning school, career guidance school Nalgonda, personality development school, language lab school Nalgonda, computer lab school Nalgonda, resilience innovation integrity school',
    schema: null
  },
  '/admissions': {
    title: 'Admissions Open 2025-2026 | Vedant High School Nalgonda | Apply Now',
    description: 'Admissions open at Vedant High School Nalgonda for Nursery, LKG, UKG, Grades 1-5, and Grades 6-10. Learn about the admission process, required documents, fee structure, and apply via WhatsApp.',
    keywords: 'Vedant High School admissions, admissions open Nalgonda, school admission 2025 2026, nursery admission Nalgonda, LKG UKG admission Nalgonda, grade 1 admission Nalgonda, grade 6 admission Nalgonda, school admission process, school registration Nalgonda, admission enquiry Vedant, school fee structure Nalgonda, Vedant school fees, required documents school admission, birth certificate school admission, transfer certificate school, Aadhar card school admission, WhatsApp admission enquiry, online school admission Nalgonda, best school to join Nalgonda, new academic year admission Telangana, apply now Vedant school',
    schema: null
  },
  '/events': {
    title: 'School Events & Activities | Annual Day, Sports, Cultural | Vedant High School',
    description: 'Stay updated with Vedant High School events – Parent-Teacher Meetings, Inter-School Sports Competitions, Cultural Extravaganza, Annual Day celebrations. Experience the vibrant school life at Nalgonda.',
    keywords: 'Vedant school events, school events Nalgonda, parent teacher meeting Nalgonda, PTM school Nalgonda, inter school sports competition, school sports day Nalgonda, cultural events school, cultural extravaganza Nalgonda, annual day celebration school, school activities calendar, school celebrations Nalgonda, dance music performances school, student achievements Nalgonda, school competitions Telangana, sports and athletics school, school calendar of activities, extracurricular activities Nalgonda, school life Vedant, vibrant school community Nalgonda',
    schema: null
  },
  '/contact': {
    title: 'Contact Vedant High School Nalgonda | Address, Phone, Email & Map',
    description: 'Get in touch with Vedant High School, Old Raghavendra College, Vidyanagar, Ramagiri, Nalgonda. Call +91 90525 99399, email vedanthighschoolnalgonda@gmail.com or visit us on Google Maps.',
    keywords: 'contact Vedant High School, Vedant school phone number, Vedant school address, Old Raghavendra College Vidyanagar Ramagiri Nalgonda, Nalgonda school contact number, +91 90525 99399, vedanthighschoolnalgonda@gmail.com, school near Vidyanagar Nalgonda, school near Ramagiri Nalgonda, Vedant school Google Maps, school location Nalgonda, school enquiry Nalgonda, WhatsApp school contact, directions to Vedant school, Nalgonda Telangana 508001 school, schools in Srinivas Nagar Colony Nalgonda',
    schema: null
  },
  '/learning-tools': {
    title: 'Learning Tools & Infrastructure | Labs, Library, Sports | Vedant High School',
    description: 'Discover the modern infrastructure at Vedant High School – fully equipped Science Labs (Physics, Chemistry, Biology), Computer Lab with high-speed internet, well-stocked Library, and indoor/outdoor Sports facilities.',
    keywords: 'Vedant school infrastructure, school learning tools, science laboratory school Nalgonda, physics lab school, chemistry lab school, biology lab school, computer lab school Nalgonda, digital literacy school, school library Nalgonda, reading habits school, sports facilities school Nalgonda, physical education school, indoor outdoor sports school, modern school facilities Nalgonda, smart school Nalgonda, school with labs Nalgonda, school with library Nalgonda, school with sports ground Nalgonda, school resources Nalgonda, technology driven education Nalgonda, hands on learning school, practical education Nalgonda',
    schema: null
  },
  '/best-school-in-nalgonda': {
    title: 'Best School in Nalgonda | Quality Education at Vedant High School',
    description: 'Looking for the best school in Nalgonda? Vedant High School offers holistic education, expert faculty, and state-of-the-art facilities. Enroll your child today.',
    keywords: 'best school in nalgonda, top school in nalgonda, quality education nalgonda, vedant high school',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What makes Vedant High School the best school in Nalgonda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vedant High School offers a perfect blend of academic rigor, modern infrastructure, highly qualified teachers, and a strong focus on extracurricular activities, ensuring the holistic development of every child."
          }
        },
        {
          "@type": "Question",
          "name": "Which curriculum does the school follow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are a premier CBSE school offering an NEP-aligned curriculum that is designed to be engaging, interactive, and future-ready."
          }
        },
        {
          "@type": "Question",
          "name": "What are the school timings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our standard school timings are from 9:00 AM to 5:00 PM, Monday through Saturday. The office is open from 8:30 AM to 5:00 PM."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide foundation courses for competitive exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide specialized foundational coaching for exams like IIT-JEE and NEET starting from secondary grades to give our students an early advantage."
          }
        }
      ]
    }
  },
  '/cbse-school-in-nalgonda': {
    title: 'Top CBSE School in Nalgonda | Vedant High School Curriculum',
    description: 'Vedant High School is a leading CBSE school in Nalgonda providing an NEP-aligned curriculum, IIT-JEE & NEET foundations. Join us for academic excellence.',
    keywords: 'cbse school in nalgonda, top cbse school nalgonda, ncert syllabus nalgonda, vedant school cbse',
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is Vedant High School the best CBSE school in Nalgonda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vedant High School is highly regarded for its CBSE curriculum, NEP-aligned education system, experimental science and computer laboratories, and experienced staff, helping students achieve excellence."
          }
        },
        {
          "@type": "Question",
          "name": "Does the school offer IIT-JEE & NEET foundations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we integrate IIT-JEE and NEET foundation courses starting from 6th grade, preparing students early for national-level competitive examinations."
          }
        }
      ]
    }
  },
  '/english-medium-school-nalgonda': {
    title: 'Best English Medium School in Nalgonda | Vedant High School',
    description: 'Empower your child at the finest English medium school in Nalgonda. Vedant High School offers modern classrooms and comprehensive personality development.',
    keywords: 'english medium school in nalgonda, best english medium school nalgonda, english speaking school nalgonda',
    schema: null
  },
  '/blog': {
    title: 'Blog & Articles | Insights on Education | Vedant High School',
    description: 'Read the latest articles, educational insights, and guides from Vedant High School Nalgonda. Stay updated on school news and education tips.',
    keywords: 'vedant high school blog, education articles nalgonda, school news nalgonda, parenting tips',
    schema: null
  },
  '/blog/top-10-schools-in-nalgonda-2026': {
    title: 'Top 10 Schools in Nalgonda (2026 Guide) | Vedant High School',
    description: 'Discover the top 10 schools in Nalgonda for 2026. Learn how Vedant High School stands out with its holistic approach and state-of-the-art infrastructure.',
    keywords: 'top 10 schools in nalgonda, best schools in nalgonda 2026, school ranking nalgonda',
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Top 10 Schools in Nalgonda (2026 Guide)",
      "description": "Discover the top 10 schools in Nalgonda for 2026. Learn how Vedant High School stands out with its holistic approach and state-of-the-art infrastructure.",
      "author": {
        "@type": "Organization",
        "name": "Vedant High School"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedant High School",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vedanthighschoolnalgonda.org/logo.png"
        }
      },
      "datePublished": "2026-01-04",
      "image": "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767506238/Screenshot_2026-01-04_at_11.26.40_AM_ld4pnj.png"
    }
  },
  '/blog/how-to-choose-best-school-in-nalgonda': {
    title: 'How to Choose the Best School in Nalgonda | Parents Guide',
    description: 'A comprehensive guide for parents on how to choose the best school in Nalgonda for their children, focusing on curriculum, facilities, and faculty.',
    keywords: 'how to choose a school, choosing best school nalgonda, school admission guide nalgonda',
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "How to Choose the Best School in Nalgonda | Parents Guide",
      "description": "A comprehensive guide for parents on how to choose the best school in Nalgonda for their children, focusing on curriculum, facilities, and faculty.",
      "author": {
        "@type": "Organization",
        "name": "Vedant High School"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedant High School",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vedanthighschoolnalgonda.org/logo.png"
        }
      },
      "datePublished": "2026-01-04",
      "image": "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767522619/Screenshot_2026-01-04_at_3.57.10_PM_y4dyh4.png"
    }
  },
  '/blog/cbse-vs-state-board': {
    title: 'CBSE vs State Board: Which is Better for Your Child?',
    description: 'Explore the differences between CBSE and State Board curriculums. Understand which educational path is the best fit for your child\'s future success.',
    keywords: 'cbse vs state board, cbse curriculum benefits, state board vs cbse, vedant high school cbse',
    schema: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "CBSE vs State Board: Which is Better for Your Child?",
      "description": "Explore the differences between CBSE and State Board curriculums. Understand which educational path is the best fit for your child's future success.",
      "author": {
        "@type": "Organization",
        "name": "Vedant High School"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Vedant High School",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vedanthighschoolnalgonda.org/logo.png"
        }
      },
      "datePublished": "2026-01-03",
      "image": "https://res.cloudinary.com/dkivpkaaj/image/upload/v1767522557/Screenshot_2026-01-03_at_9.07.07_PM_alqg1x.png"
    }
  }
};

function prerender() {
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error(`Error: index.html not found in dist/ directory. Please run 'vite build' first.`);
    process.exit(1);
  }

  const template = fs.readFileSync(INDEX_HTML_PATH, 'utf-8');

  console.log(`Starting pre-rendering for ${Object.keys(ROUTES_SEO).length} routes...`);

  for (const [route, seo] of Object.entries(ROUTES_SEO)) {
    // Generate the path to save the index.html for this route
    // Remove the leading slash and join it to DIST_DIR
    const relativePath = route.substring(1);
    const targetDir = path.join(DIST_DIR, relativePath);

    // Ensure directory exists
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetFile = path.join(targetDir, 'index.html');

    // Modify the SEO tags in the index.html template
    let html = template;

    // 1. Replace Title
    const titleRegex = /<title>[^<]*<\/title>/i;
    const newTitle = `<title>${seo.title}</title>`;
    if (titleRegex.test(html)) {
      html = html.replace(titleRegex, newTitle);
    } else {
      html = html.replace('</head>', `  ${newTitle}\n</head>`);
    }

    // 2. Replace Meta Description
    const descRegex = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i;
    const newDesc = `<meta name="description" content="${seo.description}" />`;
    if (descRegex.test(html)) {
      html = html.replace(descRegex, newDesc);
    } else {
      html = html.replace('</head>', `  ${newDesc}\n</head>`);
    }

    // 3. Replace Meta Keywords
    const keywordsRegex = /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i;
    const newKeywords = `<meta name="keywords" content="${seo.keywords}" />`;
    if (keywordsRegex.test(html)) {
      html = html.replace(keywordsRegex, newKeywords);
    } else {
      html = html.replace('</head>', `  ${newKeywords}\n</head>`);
    }

    // 4. Update Open Graph Titles and descriptions
    html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/gi, `<meta property="og:title" content="${seo.title}" />`);
    html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/gi, `<meta property="og:description" content="${seo.description}" />`);
    html = html.replace(/<meta\s+property="twitter:title"\s+content="[^"]*"\s*\/?>/gi, `<meta property="twitter:title" content="${seo.title}" />`);
    html = html.replace(/<meta\s+property="twitter:description"\s+content="[^"]*"\s*\/?>/gi, `<meta property="twitter:description" content="${seo.description}" />`);

    // 5. Replace Canonical Link
    const canonicalRegex = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i;
    const newCanonical = `<link rel="canonical" href="https://vedanthighschoolnalgonda.org${route}" />`;
    if (canonicalRegex.test(html)) {
      html = html.replace(canonicalRegex, newCanonical);
    } else {
      html = html.replace('</head>', `  ${newCanonical}\n</head>`);
    }

    // 6. Inject Schema Markup if applicable
    if (seo.schema) {
      const schemaString = `\n  <script type="application/ld+json">\n  ${JSON.stringify(seo.schema, null, 2).replace(/\n/g, '\n  ')}\n  </script>\n`;
      html = html.replace('</head>', `${schemaString}</head>`);
    }

    // Write to file
    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`Pre-rendered route: ${route} -> ${targetFile}`);
  }

  console.log('Pre-rendering completed successfully!');
}

prerender();
