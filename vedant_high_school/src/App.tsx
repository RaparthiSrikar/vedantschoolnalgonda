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
import CustomCursor from './components/CustomCursor';
import AdmissionsModal from './components/AdmissionsModal';
import './App.css';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage(Page.Home);
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: Page) => {
    window.location.hash = page;
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