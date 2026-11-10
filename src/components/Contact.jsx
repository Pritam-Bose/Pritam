import { useState } from 'react';
import { Mail, Phone, Check, Download } from 'lucide-react';
import { contact } from '../data/site';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './ui/Icons';

// Maps the icon names used in src/data/site.js to components.
const contactIcons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  phone: Phone,
  whatsapp: WhatsappIcon,
  download: Download,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // mailto: silently does nothing on machines with no mail app, so the email
  // button also copies the address — that always works.
  const copyEmail = (address) => {
    const confirm = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    const legacyCopy = () => {
      const box = document.createElement('textarea');
      box.value = address;
      box.setAttribute('readonly', '');
      box.style.position = 'fixed';
      box.style.opacity = '0';
      document.body.appendChild(box);
      box.select();
      let ok;
      try {
        ok = document.execCommand('copy');
      } catch {
        ok = false;
      }
      document.body.removeChild(box);
      return ok;
    };

    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(address).then(confirm).catch(() => {
        if (legacyCopy()) confirm();
      });
    } else if (legacyCopy()) {
      confirm();
    }
  };

  return (
    <section className="py-20 bg-bg-section">
      <div className="section-wrapper">
        <SectionHeading eyebrow="Get In Touch" title="Contact Me" subtitle={contact.blurb} />

        <Reveal delay={0.1} className="flex justify-center gap-4 flex-wrap">
          {contact.links.map((link) => {
            const Icon = contactIcons[link.icon];
            const isExternal = link.href.startsWith('http');
            const isEmail = link.href.startsWith('mailto:');
            const isDownload = link.href.endsWith('.pdf');
            const showingCopied = isEmail && copied;
            const button = (
              <a
                href={link.href}
                {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
                {...(isEmail && { onClick: () => copyEmail(link.label) })}
                {...(isDownload && { download: true })}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-bg-card rounded-xl border border-border-light shadow-sm text-text-main font-medium text-sm hover:border-primary hover:text-primary hover:shadow-md transition-all duration-200"
              >
                {showingCopied ? (
                  <Check size={18} className="text-green-600" />
                ) : (
                  <Icon size={18} />
                )}
                {showingCopied ? 'Copied to clipboard!' : link.label}
              </a>
            );
            if (!link.tooltip) return <span key={link.label}>{button}</span>;
            return (
              <span key={link.label} className="relative group">
                {button}
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-text-main px-2.5 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                  {link.tooltip}
                </span>
              </span>
            );
          })}
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xs text-text-muted text-center mt-6">
            No mail app set up? The email button copies the address — paste it into any mail app or webmail.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
