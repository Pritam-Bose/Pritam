import { motion } from 'framer-motion';

// Fades content up once it scrolls into view. Used by every section so the
// reveal behaviour stays identical across the page.
export default function Reveal({ delay = 0, className = '', children }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
