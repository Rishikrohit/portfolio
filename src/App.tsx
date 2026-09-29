import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Workflow } from './sections/Workflow';
import { Skills } from './sections/Skills';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { GithubProjects } from './sections/GithubProjects';
import { TableauSection } from './sections/TableauSection';
import { EducationSection } from './sections/Education';
import { CertificationsSection } from './sections/Certifications';
import { AchievementsSection } from './sections/Achievements';
import { ContactSection } from './sections/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white transition-colors duration-200">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="flex-grow">
        <Hero />
        <About />
        <Workflow />
        <Skills />
        <FeaturedProjects />
        <GithubProjects />
        <TableauSection />
        <EducationSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
