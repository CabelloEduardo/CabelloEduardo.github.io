import React from 'react';
import { SocialLink } from '../types.js';
import { EmailIcon } from './icons/EmailIcon.js';

interface ContactSectionProps {
  id: string;
  title: string;
  email: string;
  socialLinks: SocialLink[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ id, title, email, socialLinks }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-slate-800"> {/* Changed background to slate-800 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-100"> {/* Changed text to slate-100 */}
          {title}
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-300 mb-8"> {/* Changed text to slate-300 */}
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
          </p>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 mb-12"
          >
            <EmailIcon className="w-5 h-5 mr-2" />
            Send me an Email
          </a>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-slate-400 hover:text-sky-400 transition-colors duration-300"
              >
                <link.icon className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;