# Pritam Bose — Portfolio

A personal portfolio built with **React 19 + Vite**, styled with **Tailwind CSS v4**,
animated with **Framer Motion**, routed with **React Router** (one page per section).

## Run it

```bash
npm install     # first time only
npm run dev     # local dev server, prints a http://localhost:5173 link
npm run build   # production build into dist/
npm run lint    # code checks
```

## Where everything lives

```
index.html                 Page shell: title, meta tags, font link
vercel.json                Sends every route to index.html so /projects etc. work on Vercel
src/
  main.jsx                 Entry point — mounts React, imports index.css
  App.jsx                  The router: which URL shows which page
  index.css                Theme colours + the few custom CSS blocks
  data/
    site.js                ★ ALL text, links, projects, skills, certificates
  components/
    Navbar.jsx             Top bar + mobile menu (links to the pages)
    Hero.jsx               Home page: intro, typing animation, profile photo
    Projects.jsx           Projects page: cards with live site previews
    Skills.jsx             Skills page: skill chips
    Research.jsx           Research page: status card
    Certifications.jsx     Certifications page: cards, thumbnails, lightbox
    Contact.jsx            Contact page: GitHub / LinkedIn / Email buttons
    Footer.jsx             Copyright line
    ui/
      Reveal.jsx           Scroll-in fade animation used by every page
      SectionHeading.jsx   The eyebrow + title block above each page
      SitePreview.jsx      Scaled live iframe of a deployed site
      ScrollToTop.jsx      Starts each new page at the top
      Icons.jsx            GitHub / LinkedIn logos (not in lucide-react)
  assets/                  profile.png and the certificate images
```

Pages: `/` home · `/projects` · `/skills` · `/research` · `/certifications` · `/contact`.

## Editing content

Open **`src/data/site.js`** — that is the only file you need for content changes:
your name, the typing phrases, project bullets and links, skills, certificates,
and the social/email links. Two things are marked `TODO` there:

- `EMAIL` — still a placeholder (`pritam@example.com`)
- each project's `sourceUrl` — set a real GitHub URL and the Source button appears

## Showing a live site preview

Set `previewUrl` on any project in `src/data/site.js` and the card embeds a
scaled, non-interactive live view of that site (`ui/SitePreview.jsx`). Leave it
`null` for projects with nothing deployed. The embedded site must allow framing
— all current ones do.

## Adding a certificate

1. Drop the image in `src/assets/` with a `cert-…` name.
2. `import` it at the top of `src/data/site.js`.
3. Add an entry to the `certifications` array; `status` controls the icon
   (`completed` / `in-progress`) and `images` controls the lightbox links.
