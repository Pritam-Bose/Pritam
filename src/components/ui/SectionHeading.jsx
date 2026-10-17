import Reveal from './Reveal';

// The eyebrow + title block that opens every section.
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="text-center mb-12">
      <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-text-main">{title}</h2>
      {subtitle && (
        <p className="text-text-secondary mt-4 max-w-md mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
