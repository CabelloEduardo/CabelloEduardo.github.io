import React from 'react';
import { Project } from '../types';
import { GitHubIcon } from './icons/GitHubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-700 rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-sky-500/10 hover:shadow-xl transform hover:-translate-y-1 h-full">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
          {project.year && <span className="text-xs text-slate-400 bg-slate-600 px-2 py-0.5 rounded-full font-medium">{project.year}</span>}
        </div>
        <p className="text-slate-300 text-sm mb-4 flex-grow">
          {project.description}
        </p>
        {project.longDescription && (
          <details className="mb-4 text-sm text-slate-400">
            <summary className="cursor-pointer text-sky-400 hover:text-sky-300 font-medium">Read more</summary>
            <p className="mt-2 prose prose-sm prose-invert max-w-none text-slate-400">{project.longDescription}</p>
          </details>
        )}
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-400 uppercase mb-1.5 tracking-wider">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-slate-600 text-sky-300 px-2.5 py-1 text-xs rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex space-x-4 pt-4 border-t border-slate-600">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center space-x-1.5 group"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GitHubIcon className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors duration-200" />
              <span className="text-sm">GitHub</span>
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors duration-200 flex items-center space-x-1.5 group"
              aria-label={`Live demo of ${project.title}`}
            >
              <ExternalLinkIcon className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors duration-200" />
               <span className="text-sm">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;