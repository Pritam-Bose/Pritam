import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { profile } from '../data/site';

function useTypingEffect(phrases) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let delay;
    let nextText = displayText;
    let nextDeleting = isDeleting;
    let nextIndex = phraseIndex;

    if (!isDeleting && displayText === phrase) {
      delay = 1800;
      nextDeleting = true;
    } else if (isDeleting && displayText === '') {
      delay = 0;
      nextDeleting = false;
      nextIndex = (phraseIndex + 1) % phrases.length;
    } else {
      delay = isDeleting ? 40 : 80;
      nextText = isDeleting
        ? phrase.slice(0, displayText.length - 1)
        : phrase.slice(0, displayText.length + 1);
    }

    const tick = setTimeout(() => {
      setDisplayText(nextText);
      setIsDeleting(nextDeleting);
      setPhraseIndex(nextIndex);
    }, delay);
    return () => clearTimeout(tick);
  }, [displayText, isDeleting, phraseIndex, phrases]);

  return displayText;
}

export default function Hero() {
  const typedText = useTypingEffect(profile.rotatingPhrases);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Desktop: photo flush against the right edge of the screen */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-0"
      >
        <div className="profile-frame profile-frame-flush">
          <img src={profile.photo} alt={profile.photoAlt} />
        </div>
      </motion.div>

      <div className="section-wrapper w-full py-16 relative z-10">
        {/* Mobile & tablet: photo above the text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:hidden flex justify-center mb-10"
        >
          <div className="profile-frame">
            <img src={profile.photo} alt={profile.photoAlt} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center lg:text-left"
        >
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight mb-4">
            Hi, I'm <span className="text-primary">{profile.name}</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-medium mb-2">
            {profile.headline}
          </p>

          <div className="h-8 flex items-center justify-center lg:justify-start mb-5">
            <span aria-hidden="true" className="text-primary font-medium text-lg">
              {typedText}
            </span>
            <span aria-hidden="true" className="w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            <span className="sr-only">{profile.rotatingPhrases.join(', ')}</span>
          </div>

          <p className="text-text-secondary leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            {profile.intro}
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors duration-200 shadow-md shadow-primary/20"
            >
              View Projects
              <ArrowDown size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-text-main font-medium rounded-xl hover:border-primary hover:text-primary transition-colors duration-200 bg-white/80 lg:bg-transparent"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
