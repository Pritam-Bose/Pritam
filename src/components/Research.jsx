import { FlaskConical } from 'lucide-react';
import { research } from '../data/site';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

export default function Research() {
  return (
    <section className="py-20 bg-bg-section">
      <div className="section-wrapper">
        <SectionHeading
          eyebrow="Academic"
          title={
            <>
              Research Work{' '}
              <span className="text-lg font-normal text-text-muted">
                ({research.status})
              </span>
            </>
          }
        />

        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-4 bg-bg-card rounded-2xl p-6 md:p-8 border border-border-light shadow-sm max-w-xl mx-auto">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FlaskConical size={24} className="text-primary" />
            </div>
            <p className="text-text-secondary text-left leading-relaxed">
              {research.summary}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
