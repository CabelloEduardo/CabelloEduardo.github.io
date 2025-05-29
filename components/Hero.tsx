import React from 'react';

interface HeroProps {
  name: string;
  title: string;
  bio: string;
  profileImageUrl: string;
  cvUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, bio, profileImageUrl, cvUrl }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-700/20 rounded-full filter blur-3xl animate-pulse-slow opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-sky-800/20 rounded-full filter blur-3xl animate-pulse-slower opacity-50"></div>
         <div className="absolute top-1/3 right-1/5 w-80 h-80 bg-indigo-700/10 rounded-full filter blur-3xl animate-pulse-slow opacity-40 animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/5 w-72 h-72 bg-purple-700/10 rounded-full filter blur-3xl animate-pulse-slower opacity-40 animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-slate-100">
              Hi, I'm <span className="block sm:inline text-sky-400">{name}</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300 mb-6">
              {title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl mx-auto md:mx-0">
              {bio}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                View My Work
              </a>
              {cvUrl && (
                 <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-sky-500 border-2 border-sky-500 text-sky-500 hover:text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Download CV
                </a>
              )}
            </div>
          </div>
          <div className="flex justify-center md:mt-0 mt-12">
            <img
              src={profileImageUrl}
              alt={name}
              className="rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover shadow-2xl border-4 border-sky-500/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;