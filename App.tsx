import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { NAV_LINKS, USER_PROFILE, PROJECTS_DATA, SOCIAL_LINKS } from './constants';

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