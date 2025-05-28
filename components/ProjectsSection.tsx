import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  id: string;
  title: string;
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id, title, projects }) => {
  return (
    <section id={id} className="py-16 md:py-24 bg-slate-800"> {/* Changed from slate-100 to slate-800 for dark theme */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-slate-100"> {/* Changed text to slate-100 */}
          {title}
        </h2>
        {projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400 text-lg">No projects to display yet. Check back soon!</p> /* Changed text to slate-400 */
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;