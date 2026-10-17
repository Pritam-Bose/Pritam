// ============================================================================
//  SITE CONTENT — edit this file to change everything on the portfolio.
//  No other file holds text, links or images.
// ============================================================================

import profilePhoto from '../assets/profile.png';
import certGenAiInternship from '../assets/cert-genai-internship-project.jpg';
import certGenAiTraining from '../assets/cert-genai-training.jpg';
import certIcssTraining from '../assets/cert-cyber-security-training-icss.jpg';
import certRabtechInternship from '../assets/cert-cyber-security-internship-rabtech.jpg';

// TODO: add your GitHub repository links per project, then the Source buttons appear.
export const EMAIL = 'bosepritam762@gmail.com';
export const PHONE = '8910358939';
// WhatsApp / tel links need the country code without the '+'
export const PHONE_COUNTRY_CODE = '91';

export const profile = {
  name: 'Pritam Bose',
  headline: 'CSE Student | Python, DSA, Generative AI',
  // These cycle through the typing animation in the hero section.
  rotatingPhrases: [
    'Building AI Systems',
    'Solving DSA Problems',
    'Exploring Gen AI',
    'Creating Backends',
  ],
  intro:
    'I build practical AI systems and backend-driven applications. Passionate about turning ideas into real, working solutions.',
  photo: profilePhoto,
  photoAlt: 'Portrait of Pritam Bose',
};

// `to` is the page route each navbar item opens.
export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Research', to: '/research' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact', to: '/contact' },
];

export const projects = [
  {
    title: 'FastAPI + Supabase API Explorer',
    summary: [
      'Full-stack database explorer: FastAPI backend over Supabase/PostgreSQL with a React front-end',
      'Protected access control so only authorised users can browse schemas and rows in real time',
      'Deployment-ready architecture, live on Vercel',
    ],
    tech: ['FastAPI', 'React', 'Supabase', 'PostgreSQL'],
    // TODO: add the real repository URL, then the Source button appears.
    sourceUrl: null,
    // previewUrl renders a live, scaled-down view of the site in the card.
    previewUrl: 'https://devfs-five.vercel.app/',
    demoLinks: [{ label: 'Live demo', url: 'https://devfs-five.vercel.app/' }],
  },
  {
    title: 'Chatbot Variant',
    summary: [
      'Domain-specific conversational chatbot built around local AI model experimentation',
    ],
    note: 'Currently runs on local models such as Phi-3 Mini, so it is not deployed as a public web service.',
    tech: ['Python', 'FastAPI', 'Uvicorn', 'llama-cpp-python', 'Edge-TTS'],
    sourceUrl: null,
    previewUrl: null,
    demoLinks: [],
  },
  {
    title: 'ML Analysis — Iris & Pneumonia',
    summary: [
      'Classified the Iris dataset across multiple ML algorithms and compared accuracies',
      'Trained a pneumonia detection model on chest X-ray images',
      'Visualised and compared model performance',
    ],
    tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas'],
    sourceUrl: null,
    previewUrl: null,
    demoLinks: [],
  },
  {
    title: 'Astha Provides',
    summary: [
      'Business website for Astha Provides, an IT services firm covering VAPT, IT support and web development',
    ],
    tech: ['React', 'Tailwind CSS'],
    sourceUrl: null,
    previewUrl: 'https://astha-five-pied.vercel.app/',
    demoLinks: [{ label: 'Live site', url: 'https://astha-five-pied.vercel.app/' }],
  },
  {
    title: 'Cafe Sweetheart',
    summary: [
      'Responsive café landing page practising component-based layout and CSS animation',
    ],
    tech: ['React', 'Tailwind CSS'],
    sourceUrl: null,
    previewUrl: 'https://cafe-sweetheart.vercel.app/',
    demoLinks: [{ label: 'Live site', url: 'https://cafe-sweetheart.vercel.app/' }],
  },
  {
    title: 'Car Shop Dashboard',
    summary: [
      'Dashboard interface demo with data-driven cards and responsive layout work',
    ],
    tech: ['React', 'Tailwind CSS'],
    sourceUrl: null,
    previewUrl: 'https://car-shop-dashboard.vercel.app/',
    demoLinks: [{ label: 'Live site', url: 'https://car-shop-dashboard.vercel.app/' }],
  },
];

export const skillGroups = [
  {
    group: 'Languages',
    items: ['Python', 'JavaScript'],
  },
  {
    group: 'Frameworks & Libraries',
    items: ['React.js', 'FastAPI'],
  },
  {
    group: 'Web & Tools',
    items: [
      'HTML5',
      'CSS3',
      'Git',
      'GitHub',
      'JWT',
      'bcrypt',
      'Uvicorn',
      'Edge-TTS',
      'Web Audio API',
      'Vercel',
      'Railway',
      'Kali Linux',
    ],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    group: 'Core Areas',
    items: [
      'Applied Generative AI',
      'Full-Stack Web Development',
      'API Design',
      'Ethical Hacking Fundamentals',
    ],
  },
  {
    group: 'Security',
    items: [
      'Web Application Security',
      'Vulnerability Assessment',
      'Network Traffic Analysis',
      'OWASP Top 10',
    ],
  },
  {
    group: 'Security Tools',
    items: ['Burp Suite', 'Nmap', 'Wireshark', 'Kali Linux'],
  },
];

export const research = {
  status: 'In progress',
  summary:
    'Working on 2 machine learning-based research papers focusing on practical applications of ML algorithms. Currently in the data collection and experimentation phase.',
};

// status: 'completed' shows a badge icon, 'in-progress' shows a clock icon.
export const certifications = [
  {
    title: 'Generative AI',
    issuer: 'Internship & training certificates',
    date: '2026',
    status: 'completed',
    images: [
      { title: 'Internship Project Certificate', src: certGenAiInternship },
      { title: 'Training Certificate', src: certGenAiTraining },
    ],
  },
  {
    title: 'Cyber Security Training — 3rd Rank',
    issuer: 'Indian Institute of Cyber Security (ICSS)',
    date: 'Feb 2026',
    status: 'completed',
    images: [
      { title: 'Certificate of Recognition — Cyber Security Training', src: certIcssTraining },
    ],
  },
  {
    title: 'Cybersecurity & Ethical Hacking Internship',
    issuer: 'RabTech Academy',
    date: 'Sep 2026',
    status: 'completed',
    images: [
      { title: 'Certificate of Internship — Cybersecurity & Ethical Hacking', src: certRabtechInternship },
    ],
  },
  {
    title: 'Cyber Security Basics',
    issuer: 'Self-study',
    date: 'Ongoing',
    status: 'in-progress',
    images: [],
  },
];

export const contact = {
  blurb:
    'Feel free to reach out for collaborations, project discussions, or just to say hello.',
  // icon must be one of: 'github' | 'linkedin' | 'mail' | 'phone' | 'whatsapp'
  links: [
    { label: 'GitHub', href: 'https://github.com/Pritam-Bose', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pritam-bose-63a3a33a2', icon: 'linkedin' },
    { label: EMAIL, href: `mailto:${EMAIL}`, icon: 'mail' },
    { label: `+${PHONE_COUNTRY_CODE} ${PHONE.slice(0, 5)} ${PHONE.slice(5)}`, href: `tel:+${PHONE_COUNTRY_CODE}${PHONE}`, icon: 'phone' },
    { label: 'WhatsApp', href: `https://wa.me/${PHONE_COUNTRY_CODE}${PHONE}`, icon: 'whatsapp' },
  ],
};
