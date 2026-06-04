# Vignesh P — Premium Portfolio

Award-winning portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and GSAP.

## ✨ Features

- **Cinematic Landing** — GSAP text reveal animations, gradient headlines, animated stats
- **Career Timeline** — Interactive scroll-triggered timeline with alternating layout
- **Expertise Cards** — 4 skill category sections with glassmorphism
- **Featured Projects** — Expandable case-study cards with tech stack & highlights
- **Animated Counters** — Real-time counting up from 0 when in viewport
- **Premium Certifications** — Rich metadata display with issuer, category, year, color-coded badges
- **Award Certificate Card** — Special featured card for CODELEE 3rd place award
- **Internship Certificate** — Dedicated showcase for MERN Stack Internship
- **Coding Profiles** — Interactive cards for LeetCode, CodeChef, SkillRack, GitHub, LinkedIn
- **Custom Cursor** — Smooth magnetic cursor dot (desktop only)
- **Mobile Responsive** — Hamburger menu with animated drawer
- **Dark Theme** — Professional dark mode with custom scrollbar

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
vignesh-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Full name "Vignesh P" logo
│   │   ├── Hero.jsx                # Landing with quick stats
│   │   ├── About.jsx               # Who I am section
│   │   ├── Timeline.jsx            # GSAP scroll-triggered career timeline
│   │   ├── Expertise.jsx           # 4 skill category cards
│   │   ├── Experience.jsx          # Internship showcase + tech arsenal
│   │   ├── Projects.jsx            # Expandable case-study cards
│   │   ├── Achievements.jsx        # Counters + CODELEE award certificate
│   │   ├── Certifications.jsx      # Professional 2-column cert grid
│   │   ├── CodingProfiles.jsx      # Interactive profile links
│   │   └── Contact.jsx             # Minimalist contact section
│   ├── data/
│   │   └── index.js                # All portfolio content (edit here!)
│   ├── App.jsx                     # Main component orchestrator
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Global styles + custom scrollbar
├── index.html                      # HTML entry with SEO meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js              # Custom colors & fonts
└── postcss.config.js
```

## 🎨 Customization

**All content lives in `src/data/index.js`**

Update these sections:
- `personal` — Name, title, email, LinkedIn, GitHub, resume link
- `stats` — Quick stat badges in hero
- `timeline` — Career milestones
- `expertise` — Skill categories
- `stack` — Technical arsenal items
- `projects` — Project case studies with highlights
- `achievements` — Counter values
- `certifications` — Certificates with category, issuer, year, color
- `awards` — Competition awards (like CODELEE)
- `codingProfiles` — Platform links + stats

**Colors in `tailwind.config.js`:**
```js
colors: {
  bg: '#080808',        // Background
  surface: '#111111',   // Card surface
  border: '#1f1f1f',    // Border color
  accent: '#6ee7b7',    // Primary accent (emerald)
  accent2: '#818cf8',   // Secondary accent (indigo)
  muted: '#555555',     // Text muted
}
```

## 📦 Tech Stack

- **React 18** — UI library
- **Vite** — Build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations & transitions
- **GSAP** — Scroll-triggered effects
- **React Icons** — Icon library

## 🌐 Deployment

### Vercel
```bash
npm run build
# Deploy the `dist` folder
```

### Netlify
```bash
npm run build
# Deploy the `dist` folder
```

### GitHub Pages
```bash
# Add to vite.config.js:
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})

npm run build
# Deploy the `dist` folder to gh-pages branch
```

## 📄 Resume Setup

Place your resume PDF at `public/resume.pdf`

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 📝 Certificates & Awards

**Certifications section includes:**
- Featured internship certificate with special styling
- 6 professional certifications with:
  - Category badges (Database, AI, Engineering, Languages, Internship)
  - Color-coded by category
  - Issuer metadata
  - Year badges

**Award Certificate:**
- 3rd Place CODELEE DS Warriors
- Trophy visual + medal icon
- Competition badge + certificate tag
- Full event details

## 🎯 Performance

- Fast initial load (~143KB gzipped)
- Lazy loading with viewport detection
- Optimized animations with Framer Motion
- GSAP scroll triggers for performance

## 📞 Contact

Vignesh P  
📧 vignesh@example.com  
🔗 [LinkedIn](https://linkedin.com/in/vignesh-p)  
💻 [GitHub](https://github.com/vignesh-p)

---

Built with ❤️ by Vignesh P
