import React from 'react';

interface Skill {
  category: string;
  items: string[];
}
interface AboutSectionProps {
  id: string;
  title: string;
  paragraphs: string[];
  skills: Skill[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, title, paragraphs, skills }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-slate-100">
          {title}
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 space-y-6 text-lg text-slate-300 leading-relaxed">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-slate-100 mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skillCategory) => (
                <div key={skillCategory.category}>
                  <h4 className="text-xl font-medium text-sky-400 mb-3">{skillCategory.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((item) => (
                      <span
                        key={item}
                        className="bg-slate-700 text-sky-300 px-3 py-1.5 text-sm rounded-full font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;