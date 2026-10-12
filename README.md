# IRAKOZE Nicky — Portfolio Website

Personal portfolio website for IRAKOZE Nicky, Software Engineer & Full-Stack Developer.

Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## Getting Started

### Prerequisites
- Node.js 18 or later
- npm 9 or later

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production
```bash
npm run build
```
Output goes to the `dist/` folder.

### Preview production build locally
```bash
npm run preview
```

---

## Adding Your CV PDF

1. Name your CV file exactly: `IRAKOZE_Nicky_CV.pdf`
2. Place it in the `public/` folder:
   ```
   public/IRAKOZE_Nicky_CV.pdf
   ```
3. The **Download CV** button in the Hero section will automatically link to it.

---

## Updating Project Screenshots

Screenshots are not yet integrated. To add them:

1. Add image files to `public/images/projects/` (e.g. `the-open-room.png`)
2. Open `src/data/projects.ts`
3. Add an `image` field to each project object:
   ```ts
   image: '/images/projects/the-open-room.png',
   ```
4. Update `ProjectCard.tsx` to render the image if present.

---

## Updating Project Links

Open `src/data/projects.ts` and update `githubUrl` and `liveUrl` for each project:

```ts
{
  id: 'the-open-room',
  githubUrl: 'https://github.com/nixky23/the-open-room',
  liveUrl: 'https://the-open-room.vercel.app', // add when deployed
  ...
}
```

---

## Updating Work Experience Dates (Hardware Store)

Open `src/data/experience.ts` and replace the placeholder dates:

```ts
{
  id: 'hardware-store',
  startDate: '2021',   // replace with actual year
  endDate: '2022',     // replace with actual year
  ...
}
```

---

## Deploying to Vercel

1. Push your project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel auto-detects Vite — no extra configuration needed.
4. Set the output directory to `dist` if prompted.
5. Click **Deploy**.

Your site will be live at `https://your-project.vercel.app`.

### Custom domain
In the Vercel dashboard → **Settings → Domains**, add your custom domain (e.g. `irakozenicky.dev`).

---

## Deploying to Netlify

1. Run `npm run build` locally or connect your GitHub repo.
2. Set **Build command**: `npm run build`
3. Set **Publish directory**: `dist`
4. Click **Deploy site**.

---

## Adding a Contact Form Backend

The contact form currently uses a `mailto:` fallback (opens your email client). To receive messages directly:

### Option A — Formspree (free, no backend needed)
1. Create an account at [formspree.io](https://formspree.io)
2. Create a form and copy the endpoint URL (e.g. `https://formspree.io/f/xabcdef`)
3. In `src/components/Contact.tsx`, replace the `mailto` fallback with a `fetch` POST to that URL.

### Option B — EmailJS
1. Set up an account at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Replace the form submission logic in `Contact.tsx` with the EmailJS `send` call.

---

## Project Structure

```
src/
├── components/        # All UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectDetails.tsx
│   ├── Education.tsx
│   ├── GitHubSection.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
├── context/
│   └── ThemeContext.tsx   # Dark/light mode
├── data/                  # All content — edit here
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── education.ts
├── types/
│   └── index.ts           # TypeScript interfaces
├── App.tsx
├── main.tsx
└── index.css
```

---

## Checklist — Items Still Needing Your Input

- [ ] Add `IRAKOZE_Nicky_CV.pdf` to `public/` folder
- [ ] Update `githubUrl` for each project with the actual repository URL
- [ ] Add `liveUrl` for any deployed projects
- [ ] Update work experience dates for Hardware Store (`src/data/experience.ts`)
- [ ] Add project screenshots when available
- [ ] Connect contact form to a real backend (Formspree or EmailJS) for direct message delivery
- [ ] Set up a custom domain after deployment (optional)
- [ ] Add phone number and LinkedIn to contact info once available (optional)
