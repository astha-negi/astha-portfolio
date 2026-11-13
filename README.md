# astha-portfolio

Personal portfolio site for Astha Negi.

## Stack

React 19 + Vite, Tailwind CSS v4, Lenis for smooth scrolling. No backend, no
database, no API keys - it is a static site.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # outputs to dist/
npm run preview  # serve the built dist/ locally
```

## Editing the content

**All copy lives in `src/data/content.js`.** No component holds hard-coded
text, so updating the site means editing that one file:

| Export         | Controls                                        |
| -------------- | ----------------------------------------------- |
| `profile`      | Name, role, tagline, email, social links        |
| `about`        | About paragraphs, education card, the 3 stats   |
| `skills`       | Skill groups and their accent colour            |
| `experience`   | Work timeline entries                           |
| `projects`     | Project cards                                   |
| `achievements` | Achievements and leadership                     |
| `navLinks`     | Nav items (ids must match the section `id`s)    |

### Before deploying

1. **Set your real LinkedIn URL** - `profile.linkedin` in
   `src/data/content.js` is a guess and is marked with a `TODO`.
2. Add a `Download Resume` link if you want one - drop the PDF in `public/`
   and link to `/your-resume.pdf`.

### Accent colours

`src/accents.js` holds complete Tailwind class strings per accent name. Tailwind
only generates classes it can see as literal text, so a dynamic
`` `text-${name}-400` `` would be stripped from the production build. Add new
accents there rather than interpolating class names.

## Layout

```
src/
  App.jsx               Section order, Lenis setup, preloader gate
  accents.js            Accent colour class maps
  index.css             Tailwind import, base styles, keyframes
  data/content.js       All site copy
  hooks/useReveal.js    IntersectionObserver scroll-reveal
  components/
    Preloader.jsx       First-paint loading veil
    ScrollProgress.jsx  Top progress bar
    Blobs.jsx           Background gradient blobs
    Nav.jsx             Sticky nav + active-section tracking
    Section.jsx         Section shell, Kicker, Heading, Reveal
    Hero.jsx            Landing with typewriter role
    About.jsx           Bio, stats, education
    Skills.jsx          Tech stack grid
    Experience.jsx      Work timeline
    Projects.jsx        Project cards
    Achievements.jsx    Achievements strip
    Contact.jsx         Contact links
    Footer.jsx
```

## Accessibility

Semantic landmarks, keyboard-only focus rings, `aria-current` on the active nav
item, and decorative visuals hidden from assistive tech. Every animation -
including the preloader and Tailwind's built-ins - is disabled under
`prefers-reduced-motion: reduce`.

## Deploying

Static output, so anything that serves files works.

- **Vercel** - import the repo; it detects Vite. Build `npm run build`, output `dist`.
- **Netlify** - same two values.
- **GitHub Pages** - set `base: '/<repo-name>/'` in `vite.config.js` first,
  then publish `dist/`.
