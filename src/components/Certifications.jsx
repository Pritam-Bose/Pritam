import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Clock, X } from 'lucide-react';
import { certifications } from '../data/site';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

function CertificateModal({ image, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={image.title}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        className="relative bg-white rounded-2xl p-3 max-w-2xl w-full shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-text-secondary hover:text-text-main transition-colors z-10"
          aria-label="Close certificate preview"
        >
          <X size={16} />
        </button>
        <div className="mb-2 px-2 pt-1 font-semibold text-text-main">{image.title}</div>
        <img src={image.src} alt={image.title} className="w-full rounded-xl" />
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20">
      <div className="section-wrapper">
        <SectionHeading eyebrow="Achievements" title="Certifications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <Reveal
              key={cert.title}
              delay={i * 0.1}
              className="bg-bg-card rounded-2xl p-5 border border-border-light shadow-sm flex items-start gap-4 transition-all duration-200 hover:shadow-md hover:border-primary/20"
            >
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                  cert.status === 'completed' ? 'bg-primary/10' : 'bg-amber-50'
                }`}
              >
                {cert.status === 'completed' ? (
                  <Award size={20} className="text-primary" />
                ) : (
                  <Clock size={20} className="text-amber-500" />
                )}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-text-main text-sm">{cert.title}</h3>
                <p className="text-xs text-text-muted mt-0.5">
                  {cert.issuer} · {cert.date}
                </p>

                {cert.images.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cert.images.map((image) => (
                      <button
                        key={image.title}
                        onClick={() => setSelectedImage(image)}
                        aria-label={`View ${image.title}`}
                        className="rounded-lg overflow-hidden border border-border-light hover:border-primary focus-visible:border-primary transition-colors"
                      >
                        <img
                          src={image.src}
                          alt={image.title}
                          loading="lazy"
                          className="h-24 w-auto object-cover hover:opacity-90 transition-opacity"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <CertificateModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
