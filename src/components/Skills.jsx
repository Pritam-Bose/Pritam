import { skillGroups } from '../data/site';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Skills() {
  return (
    <section className="py-20">
      <div className="section-wrapper">
        <SectionHeading eyebrow="What I Know" title="Core Skills" />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.group}
              delay={i * 0.08}
              className="bg-bg-card rounded-2xl p-5 border border-border-light shadow-sm"
            >
              <h3 className="text-sm font-semibold text-text-main uppercase tracking-wide mb-3">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-bg-section text-text-secondary border border-border-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
