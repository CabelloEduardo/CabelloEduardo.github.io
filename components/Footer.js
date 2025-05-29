import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-slate-500">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-xs mt-2 text-slate-600">
          Web portfolio design and initial development by Google Gemini. Customized by {name}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;