import React from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import AboutSection from './components/AboutSection.js';
import ProjectsSection from './components/ProjectsSection.js';
import ContactSection from './components/ContactSection.js';
import Footer from './components/Footer.js';
import { NAV_LINKS, USER_PROFILE, PROJECTS_DATA, SOCIAL_LINKS } from './constants.js';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-300">
      <Header navLinks={NAV_LINKS} />
      <main className="flex-grow">
        <Hero 
          name={USER_PROFILE.name}
          title={USER_PROFILE.title}
          bio={USER_PROFILE.shortBio}
          profileImageUrl={USER_PROFILE.profileImageUrl}
          cvUrl={USER_PROFILE.cvUrl}
        />
        <AboutSection 
          id="about"
          title="About Me"
          paragraphs={USER_PROFILE.longBio}
          skills={USER_PROFILE.skills}
        />
        <ProjectsSection 
          id="projects"
          title="My Projects"
          projects={PROJECTS_DATA}
        />
        <ContactSection 
          id="contact"
          title="Get In Touch"
          email={USER_PROFILE.email}
          socialLinks={SOCIAL_LINKS}
        />
      </main>
      <Footer name={USER_PROFILE.name} />
    </div>
  );
};

export default App;