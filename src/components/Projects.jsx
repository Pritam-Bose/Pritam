import { ExternalLink } from 'lucide-react';
import { projects } from '../data/site';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import SitePreview from './ui/SitePreview';
import { GithubIcon } from './ui/Icons';

export default function Projects() {
  return (
    <section className="py-20 bg-bg-section">
      <div className="section-wrapper">
        <SectionHeading eyebrow="My Work" title="Featured Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.1}
              className="bg-bg-card rounded-2xl p-6 border border-border-light shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-text-main mb-3">
                {project.title}
              </h3>

              {project.previewUrl && (
                <SitePreview url={project.previewUrl} title={project.title} />
              )}

              <ul className="space-y-1.5 mb-4">
                {project.summary.map((point) => (
                  <li key={point} className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-primary mt-1 text-xs">●</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/12"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.note && (
                <p className="text-xs text-text-muted italic mb-4 leading-relaxed">
                  {project.note}
                </p>
              )}

              {/* Links pinned to the card bottom so cards line up */}
              <div className="mt-auto pt-2 flex flex-wrap items-center gap-x-5 gap-y-2">
                {project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-text-main hover:text-primary transition-colors"
                  >
                    <GithubIcon size={15} />
                    Source
                  </a>
                )}
                {project.demoLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                  >
                    <ExternalLink size={15} className="flex-shrink-0" />
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
