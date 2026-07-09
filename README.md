# YLS.dev — Java Full Stack Developer Portfolio

Premium, production-grade portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Sticky navbar, scroll-spy, mobile menu
│   └── Footer.jsx       # Minimal footer
├── sections/
│   ├── Hero.jsx         # Animated architecture visual
│   ├── About.jsx        # Two-column layout + feature cards
│   ├── Skills.jsx       # Tech grid + marquee ticker
│   ├── Projects.jsx     # 3D tilt cards + mouse-tracking glow
│   ├── Experience.jsx   # Alternating timeline
│   ├── Achievements.jsx # Cards + animated counters
│   └── Contact.jsx      # Split layout + glassmorphism form
├── hooks/
│   └── useScrollSpy.js  # Active section detection
├── data/
│   └── portfolio.js     # ALL content lives here — edit to personalize
├── index.css            # Tailwind + global utilities
└── App.jsx              # Root with lazy loading
```

---

## Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production build -> dist/
npm run preview   # Preview prod build locally
```

---

## Personalize

Edit **`src/data/portfolio.js`** for all content:
- skills, projects, experiences, achievements

Update contact links in `src/sections/Contact.jsx`.

Add your photo at `public/photo.jpg` and update the avatar block in `About.jsx`.

---

## Deploy to Vercel

**Option A — CLI:**
```bash
npm i -g vercel && vercel --prod
```

**Option B — GitHub:**
1. Push repo to GitHub
2. vercel.com → New Project → Import repo
3. Framework: Vite (auto-detected), Output: `dist`
4. Deploy

---

## Design Tokens

| Token | Value |
|---|---|
| Background | `#020817` |
| Surface | `#0a0f1e` |
| Accent | `#22d3ee` (cyan) |
| Font sans | Inter |
| Font mono | JetBrains Mono |
