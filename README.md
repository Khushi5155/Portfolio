# Khushi Kumari | Software Engineer & Full-Stack Developer Portfolio

A modern, minimal, high-performance developer portfolio built with **React 19**, **Vite 7**, and **Tailwind CSS v4**. Engineered specifically for SDE internships, full-stack development, and AI-powered software roles.

---

## 🌟 Overview

This portfolio showcases the software projects, open-source achievements, and technical capabilities of **Khushi Kumari**, a 5th-semester Computer Science & Engineering undergraduate at **Guru Gobind Singh Indraprastha University (GGSIPU)** with a **9.0 / 10.0 CGPA**.

### Live Highlights
* **FoundrOS:** Winner at HackHazards 2026 (Top 25 out of 2,657 projects).
* **Dockfleet:** Team Winner at FOSS Hack 2026 (out of 2,360+ teams).
* **GirlScript Summer of Code (GSSoC 2025):** Top 25 Contributor nationwide with official Letter of Recommendation.
* **Social Winter of Code (SWOC 2026):** Top 2 Contributor nationwide.

---

## 🚀 Key Features

* **Refined Minimalist Dark Theme:** Deep charcoal canvas (`#090d16`), subtle slate surfaces, and sophisticated emerald accents (`#10b981`), avoiding neon fatigue.
* **Dynamic Project Filtering:** Real-time, zero-reload filtering across categories:
  * `All`
  * `Full Stack`
  * `AI / ML`
  * `Frontend`
  * `Open Source`
* **Interactive Project Details Modal:** Rich expandable dialog for each project displaying architectural problem-solving, key engineering highlights, tech stack badges, and direct links to code and live deployments.
* **Scroll-Spy Navigation:** Active section detection automatically highlights the current view in the fixed desktop and mobile headers.
* **Credentials & LOR Modal:** High-resolution Letter of Recommendation preview and a gallery of 13 verified certificates with keyboard `Escape` dismissal and click-outside closing.
* **Client-Side Validated Contact Flow:** Form validation (RFC-compliant email, name, and message length) paired with an instant one-click copy email button.
* **Authentic Resume System:** Integrated `Khushi_Kumari_Resume.pdf` download linked directly from the header, hero, and about sections.
* **Comprehensive Accessibility (a11y):** Semantic HTML5, `:focus-visible` emerald rings, meaningful `alt` text, `aria-label` tags, and global `prefers-reduced-motion` compliance.
* **Production SEO:** Custom SVG monogram favicon (`<K />`), OpenGraph meta tags, Twitter card previews, and structured metadata.

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Framework & Core** | React 19.1, React DOM 19.1 |
| **Build Tool & Bundler** | Vite 7.1 with `@vitejs/plugin-react` |
| **Styling Engine** | Tailwind CSS v4 with `@tailwindcss/vite` |
| **Motion & Animations** | Framer Motion 12.23 |
| **Icons System** | Lucide React |
| **Code Quality** | ESLint 9.33 with React Hooks & Refresh plugins |

---

## 📦 Project Structure

```
Portfolio-main/
├── public/
│   ├── certificates/        # 13 verified certificates (PNG)
│   ├── favicon.svg          # Custom SVG developer monogram (<K />)
│   ├── lor-gssoc.jpg        # Official GSSoC Letter of Recommendation
│   ├── profile.jpg          # Profile photo for OpenGraph & preview
│   └── resume.pdf           # Authentic verified resume document
├── src/
│   ├── assets/              # Project screenshots and UI graphics
│   ├── components/
│   │   ├── Navbar.jsx       # Scroll-spy navigation with mobile drawer
│   │   ├── Button.jsx       # Reusable button supporting links, variants & downloads
│   │   ├── CardContainer.jsx# Sequential page layout coordinator
│   │   ├── CardItem.jsx     # Reusable glassmorphism surface
│   │   └── Footer.jsx       # Minimal footer with social links & back-to-top
│   ├── sections/
│   │   ├── Home.jsx         # Hero section with headline, bio & dual CTAs
│   │   ├── About.jsx        # Bio narrative, 9.0 CGPA, and key metric cards
│   │   ├── Skills.jsx       # 6 categorized technical skill groups
│   │   ├── Projects.jsx     # Flagship cards, filter engine & details modal
│   │   ├── Experience.jsx   # Software engineer internship & open source timeline
│   │   ├── Achievements.jsx # Hackathon wins, rankings, LOR & certificate viewer
│   │   ├── Education.jsx    # B.Tech CSE degree, GGSIPU standing, core coursework
│   │   └── Contact.jsx      # Validated contact form & direct reach channels
│   ├── App.jsx              # Root application component
│   ├── index.css            # Tailwind v4 @theme, custom scrollbar & a11y rules
│   └── main.jsx             # React DOM entry point
├── index.html               # Production SEO metadata & font preconnects
├── package.json             # Clean dependencies & scripts
├── vite.config.js           # Vite plugins configuration
└── eslint.config.js         # Linter rules
```

---

## 💻 Local Development Setup

### Prerequisites
* **Node.js:** v18.0.0 or higher
* **npm:** v9.0.0 or higher

### 1. Clone the repository
```bash
git clone https://github.com/Khushi5155/Portfolio-main.git
cd Portfolio-main
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Run Linter
```bash
npm run lint
```

### 5. Create production build
```bash
npm run build
```

### 6. Preview production build locally
```bash
npm run preview
```

---

## 🌐 Deployment Guidelines

### Deploying to Vercel
1. Push your code to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. If your repository root contains the subfolder `Portfolio-main`, set the **Root Directory** in Vercel project settings to `Portfolio-main`.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

### Deploying to Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com).
2. Set **Base directory** to `Portfolio-main` (if nested) or leave empty if flattened.
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## 👤 Author

**Khushi Kumari**
* **Role:** Software Engineer | Full-Stack Developer | AI Enthusiast
* **University:** Guru Gobind Singh Indraprastha University (GGSIPU)
* **Email:** [kkaayana5155@gmail.com](mailto:kkaayana5155@gmail.com)
* **LinkedIn:** [linkedin.com/in/khushi-kumari-bb4305327](https://www.linkedin.com/in/khushi-kumari-bb4305327)
* **GitHub:** [github.com/Khushi5155](https://github.com/Khushi5155)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
