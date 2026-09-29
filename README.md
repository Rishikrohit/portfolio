# 📊 Rohit Ashok Kavhale — Professional Public Data Analyst Portfolio

A modern, high-performance, responsive Data Analyst Portfolio web application built for **Rohit Ashok Kavhale**.

![Rohit Ashok Kavhale Portfolio](public/images/profile.jpg)

---

## 🌟 Key Highlights & Features

- **Personal Profile & Hero Section**:
  - High-resolution circular professional photo presentation.
  - Active status badge: *"Open to Data Analyst Opportunities"*.
  - Fast-action buttons: Direct projects view & direct Resume PDF download.
  - Secondary verified links: GitHub, Tableau Public, LinkedIn, Email.
- **Documented Statistics (Animated Counters)**:
  - **9.64** Current SGPA (2nd Year BCA Topper).
  - **3+** Resume Analytics Projects.
  - **1,000+** Records Analyzed.
  - **5+** SQL Techniques Used.
- **Data Analytics Methodology**:
  - *"How I Work With Data"* 7-step analytical pipeline: Raw Data → Data Cleaning → Exploratory Data Analysis → SQL Analysis → Visualization → Dashboard → Business Insights.
- **Categorized Technical Skills**:
  - Categorized skill cards across: Programming, Python / Data Analysis, Statistics, BI & Visualization, Spreadsheets, Databases, Tools & Platforms, Languages, Soft Skills.
  - **No fake proficiency bars or percentages** — verified competencies presented cleanly.
- **Featured Resume Case Studies**:
  1. **Sales & Customer Dashboards** (Tableau Public / Superstore Analytics).
  2. **Online Bookstore SQL Data Analysis** (PostgreSQL, pgAdmin 4, JOINs, Subqueries, Window Functions).
  3. **Customer Churn Analysis** (Python, Pandas, NumPy, Matplotlib, Seaborn).
  - Modal case study previews with dimensions, slicers, and documented outcomes.
- **Live GitHub Auto-Discovery (`@Rishikrohit`)**:
  - Auto-fetches all public repositories via GitHub REST API.
  - 30-minute client-side caching in `localStorage` + fallback backup for API limits.
  - Real-time search by repository name, description, or technology.
  - Real-time category filtering (Data Analytics, Python, SQL, Power BI, Tableau, Machine Learning, Spreadsheets, Web Dev, Other).
  - Sorting by recently updated, name, or stars.
  - Interactive Project Modal inspecting repository README documentation and links.
- **Tableau Public Showcase**:
  - Direct integration pointing to live dashboards and profile.
- **Education & Experience**:
  - BCA at Dr. Babasaheb Ambedkar Marathwada University (BAMU) — Academic Topper (9.64 SGPA).
  - Data Science & Analytics Intern at Zidio Development.
- **Certifications & Courses**:
  - Dynamic filterable credential cards for Python, SQL, Data Analytics, Power BI, and Excel.
  - Modal previews supporting local PDF documents in `public/certificates/`.
- **Achievements & Honors**:
  - Academic Topper 1st & 2nd Year.
  - 2nd Rank in Android Mobile App Development Competition.
  - 2nd Rank in Promote to Product Competition.
- **Let's Connect (Contact Section)**:
  - Validated contact form with mailto fallback and loading/success states.
  - Direct copy-to-clipboard for Email and Phone.
- **Theme, SEO & Accessibility**:
  - Dark / Light mode toggle with system preference detection and localStorage persistence.
  - Zero layout shift, responsive down to 360px mobile viewports.
  - Open Graph, Twitter metadata, Schema.org `Person` & `WebSite` JSON-LD, `robots.txt`, and `sitemap.xml`.

---

## 🛠️ Tech Stack & Architecture Rationale

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | **React 19 + TypeScript + Vite 8** | Blazing-fast development server, instant HMR, type safety, and optimized static asset bundling. |
| **Styling** | **Tailwind CSS 3.4** | Clean, minimal, modern analytics UI with dark/light themes and zero excess CSS overhead. |
| **Icons** | **Lucide React + Custom SVGs** | Crisp, scalable, modern iconography. |
| **Hosting Targets** | **Vercel / Netlify / GitHub Pages** | Zero-config static asset deployment with immutable asset headers. |

---

## 📂 Project Structure

```
rohit-portfolio/
├── dist/                      # Production build output
├── public/
│   ├── certificates/          # Place certificate PDFs here
│   ├── images/
│   │   └── profile.jpg        # Professional profile photo
│   ├── favicon.svg            # Custom SVG analytics favicon
│   ├── robots.txt             # Search engine crawler instructions
│   ├── sitemap.xml            # SEO sitemap
│   └── resume.pdf             # Actual uploaded resume PDF
├── src/
│   ├── components/
│   │   ├── CertificateModal.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── SocialIcons.tsx
│   │   ├── StatCounter.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   ├── achievements.ts    # Academic topper & competition ranks
│   │   ├── certifications.ts  # Verified course certificates
│   │   ├── experience.ts      # Internship & Education
│   │   ├── featuredProjects.ts# 3 core resume projects
│   │   ├── githubOverrides.ts # Enrichment metadata for GitHub repos
│   │   ├── profile.ts         # Central profile & statistics
│   │   ├── skills.ts          # Categorized technical capabilities
│   │   └── socialLinks.ts     # Verified links & email
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── GithubProjects.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── TableauSection.tsx
│   │   └── Workflow.tsx
│   ├── services/
│   │   └── githubService.ts   # Public GitHub API + Cache + Fallback
│   ├── types/
│   │   └── index.ts           # Shared TypeScript interfaces
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── netlify.toml
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
└── vite.config.ts
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (version 18 or above recommended)
- npm or pnpm

### Installation

1. Navigate to the project directory:
   ```bash
   cd rohit-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build production bundle:
   ```bash
   npm run build
   ```
   The optimized production bundle will be created inside the `dist/` directory.

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🚀 Public Deployment Guide

### Option 1: Vercel (Recommended)
1. Push this repository to your GitHub account (e.g. `Rishikrohit/data-analyst-portfolio`).
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository. Vercel automatically detects Vite.
4. Click **Deploy**. Vercel will build and serve the portfolio with HTTPS and global CDN.

### Option 2: Netlify
1. Log into [netlify.com](https://netlify.com) and click **"Add new site"** -> **"Import an existing project"**.
2. Select your GitHub repository.
3. Build settings will automatically load from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy Site**.

### Option 3: GitHub Pages
1. In `vite.config.ts`, set `base: '/<repository-name>/'` if deploying to a subpath.
2. Run `npm run build`.
3. Deploy the contents of the `dist/` directory to the `gh-pages` branch.

---

## 📝 Content Management & Future Updates

All personal information is strictly centralized in `src/data/` for simple updates:

- **Update Profile, Bio, or Phone**: Edit `src/data/profile.ts`.
- **Add or Edit Skills**: Edit `src/data/skills.ts`.
- **Customize a GitHub Project Title / Demo Link**: Add an entry into `src/data/githubOverrides.ts`.
- **Add New Certificates**:
  1. Drop your PDF into `public/certificates/` (e.g., `public/certificates/new-course.pdf`).
  2. Add the certificate object in `src/data/certifications.ts`.
- **Update Resume PDF**: Replace `public/resume.pdf` with your updated resume file.
- **Update Profile Photo**: Replace `public/images/profile.jpg` with a new image of the same name.
