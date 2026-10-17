import { profile } from '../data/site';
import Reveal from './ui/Reveal';

export default function Footer() {
  return (
    <Reveal>
      <footer className="py-8 px-6 text-center border-t border-border-light">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
        </p>
      </footer>
    </Reveal>
  );
}
