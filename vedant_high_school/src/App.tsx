import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Events from './components/Events';
import Contact from './components/Contact';
import LearningTools from './components/LearningTools';
import BestSchool from './components/seo/BestSchool';
import CbseSchool from './components/seo/CbseSchool';
import EnglishMediumSchool from './components/seo/EnglishMediumSchool';
import Blog from './components/blog/Blog';
import BlogTop10 from './components/blog/BlogTop10';
import BlogHowToChoose from './components/blog/BlogHowToChoose';
import BlogCbseVsState from './components/blog/BlogCbseVsState';
import CustomCursor from './components/CustomCursor';
import AdmissionsModal from './components/AdmissionsModal';
import { SEO_CONFIG } from './seoData';
import './App.css';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    const handlePathChange = () => {
      const path = window.location.pathname as Page;
      if (Object.values(Page).includes(path)) {
        setCurrentPage(path);
      } else {
        setCurrentPage(Page.Home);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePathChange);
    handlePathChange();

    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  // Dynamic SEO Update
  useEffect(() => {
    const seo = SEO_CONFIG[currentPage];
    if (seo) {
      document.title = seo.title;

      // Update Meta Description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', seo.description);

      // Update Meta Keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', seo.keywords);
    }
  }, [currentPage]);

  const navigateTo = (page: Page) => {
    window.history.pushState({}, '', page);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onNavigate={navigateTo} />;
      case Page.About: return <About />;
      case Page.Academics: return <Academics />;
      case Page.Admissions: return <Admissions />;
      case Page.Events: return <Events />;
      case Page.Contact: return <Contact />;
      case Page.LearningTools: return <LearningTools />;
      case Page.BestSchool: return <BestSchool onNavigate={navigateTo} />;
      case Page.CbseSchool: return <CbseSchool onNavigate={navigateTo} />;
      case Page.EnglishMediumSchool: return <EnglishMediumSchool onNavigate={navigateTo} />;
      case Page.Blog: return <Blog onNavigate={navigateTo} />;
      case Page.BlogTop10: return <BlogTop10 onNavigate={navigateTo} />;
      case Page.BlogHowToChoose: return <BlogHowToChoose onNavigate={navigateTo} />;
      case Page.BlogCbseVsState: return <BlogCbseVsState onNavigate={navigateTo} />;
      default: return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="app-container">
      {/* Global Pencil Cursor */}
      <CustomCursor />
      <AdmissionsModal />


      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      <main className="main-content">
        {renderPage()}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;