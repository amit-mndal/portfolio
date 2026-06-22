# Amit Mandal — Portfolio

Inspired by [achyutkatiyar.com](https://www.achyutkatiyar.com/).

Built with **Next.js 15**, **Tailwind CSS v4**, **Framer Motion**, **Three.js** (star background), and **shadcn/ui** components.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## ⚠️ IMPORTANT — Folder rename after unzipping

The `app/routes/` folder must be renamed to `app/(routes)/` after you unzip.
The parentheses make it a **route group** in Next.js App Router (so the folder name doesn't appear in the URL).

```
app/
  (routes)/        ← rename from "routes" to "(routes)"
    about/
      page.tsx
    experience/
      page.tsx
    projects/
      page.tsx
    contact/
      page.tsx
```

On Mac/Linux:
```bash
mv app/routes "app/(routes)"
```

On Windows (PowerShell):
```powershell
Rename-Item "app\routes" "(routes)"
```

---

## 📁 Project Structure

```
amit-portfolio/
├── app/
│   ├── (routes)/           # Route group — no URL prefix
│   │   ├── about/page.tsx
│   │   ├── experience/page.tsx
│   │   ├── projects/page.tsx
│   │   └── contact/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── client-layout.tsx
│   └── page.tsx            # Home page
├── components/
│   ├── home/               # Hero, FeaturedProjects, Skills, Achievements
│   ├── layout/             # Navbar, Footer
│   ├── shared/             # StarHeader, ScrollProgress, ScrollToTop, FloatingSocials
│   ├── projects/           # ProjectCard
│   ├── ui/                 # Button, Badge, Card, Tabs, Input, Textarea, Label
│   ├── 3d-card.tsx
│   ├── star-background.tsx
│   ├── star-background-canvas.tsx
│   ├── tech-icon.tsx
│   ├── theme-provider.tsx
│   └── theme-switch.tsx
├── data/
│   ├── achievements.ts
│   ├── education.ts
│   ├── experience.ts
│   ├── navigation.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── social.ts
├── lib/
│   ├── icons.tsx
│   └── utils.ts
├── public/
│   └── resume.pdf          ← Add your resume here!
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 🎨 Customization

All your personal data lives in `/data/` — update these files to change content without touching components:

| File | What it controls |
|------|-----------------|
| `data/projects.ts` | Project cards |
| `data/skills.ts` | Skills tab section |
| `data/experience.ts` | Experience timeline |
| `data/achievements.ts` | Achievements grid |
| `data/education.ts` | Education cards |
| `data/social.ts` | Social links (navbar, footer, floating) |
| `data/navigation.ts` | Navbar links |

---

## 📸 Add your profile photo

Place a `profile.webp` (or `.jpg`) in `public/images/` and update the hero component if you want a photo instead of the initials card.

---

## 📄 Add your resume

Place your resume PDF at:
```
public/resume.pdf
```

---

## 🚢 Deployment

**Vercel (recommended)**:
1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Zero config needed — Next.js is auto-detected

**Render** (for full-stack with API):
- Add `npm run build` as build command
- `npm run start` as start command
