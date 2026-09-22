<div align="center">

# 🌟 Gopali Youth Welfare Society (GYWS)
### Official Production Web Application

[![Website](https://img.shields.io/badge/Website-gyws.org-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://gyws.org)
[![Deployment](https://img.shields.io/badge/Hosted%20On-GoViral%20Host-orange?style=for-the-badge&logo=serverfault&logoColor=white)](https://goviralhost.com)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/Maintained%20by-GYWS%20TechOps-green?style=for-the-badge)](https://github.com/GYWS-TechOps)

<p align="center">
  <strong>Empowering rural India through education, skill training, and youth leadership.</strong><br />
  A registered voluntary NGO run by students and faculty members of <strong>IIT Kharagpur</strong> alongside local stakeholders.
</p>

---

</div>

> [!IMPORTANT]
> **Production Notice**: This repository contains the source code for the **working official website of Gopali Youth Welfare Society (GYWS)**. The live web application is deployed and hosted on **GoViral Host**.
>
> 🔗 **Live Website:** [https://gyws.org](https://gyws.org)

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Initiatives Covered](#-key-initiatives-covered)
- [Tech Stack](#-tech-stack)
- [Repository Structure](#-repository-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [Available Scripts](#-available-scripts)
- [Hosting & Deployment (GoViral Host)](#-hosting--deployment-goviral-host)
- [Contributing & Development Guidelines](#-contributing--development-guidelines)
- [Contact & Social Links](#-contact--social-links)

---

## 🌍 Overview

**Gopali Youth Welfare Society (GYWS)** is an NGO established in 2002, run primarily by students and faculty of the **Indian Institute of Technology (IIT) Kharagpur**, working in synergy with the local community in Gopali village, West Bengal.

This repository serves as the central digital portal for GYWS:
- Showcasing our socio-educational initiatives and flagship school.
- Facilitating online donations and child sponsorships.
- Maintaining an archive of past and present society members across governing years.
- Publishing media releases, event reports, newsletters, and announcements.

---

## 🎯 Key Initiatives Covered

- **Jagriti Vidya Mandir (JVM):** Our flagship primary & middle school providing completely free, value-based English medium education to underprivileged children from neighboring villages.
- **LiGHT (Living in Greater Height Together):** A pan-India youth empowerment movement fostering socially responsible leaders through nationwide centers.
- **RISE:** Workshops, vocational training, and developmental programs empowering youth and local villagers.
- **Fundraising & Sponsorship Portals:**
  - *Each Child Sponsorship (JVM Care)*
  - *Hostel Construction & Sustainability Funds*
  - *LiGHT Initiative Donations*

---

## 🛠 Tech Stack

| Category | Technologies / Libraries |
|---|---|
| **Core Framework** | [React 18](https://react.dev/) (Bootstrapped with Create React App) |
| **Routing** | [React Router v6](https://reactrouter.com/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/), [Styled Components](https://styled-components.com/), CSS Modules |
| **UI & Icons** | [React Icons](https://react-icons.github.io/react-icons/), [React Bootstrap Icons](https://icons.getbootstrap.com/) |
| **Carousels & Media** | [React Multi Carousel](https://www.npmjs.com/package/react-multi-carousel), [React Slick](https://react-slick.neostack.com/), Slick Carousel |
| **Editor & Form Tools** | [Quill](https://quilljs.com/) / `react-quilljs`, [PapaParse](https://www.papaparse.com/) |
| **Notifications & SEO**| [React Hot Toast](https://react-hot-toast.com/), [React Helmet](https://github.com/nfl/react-helmet) |
| **HTTP Client** | [Axios](https://axios-http.com/) |
| **Hosting & Infra** | **GoViral Host** (Apache HTTP Server with `.htaccess` rewrite rules for Single Page Application) |

---

## 📁 Repository Structure

```text
GYWS-Deployed/
├── public/
│   ├── .htaccess             # Apache rewrite rules for React Router on GoViral Host
│   ├── assets/               # Static assets & public icons
│   ├── images/               # Media, team, & initiative images
│   ├── gyws_favicon.ico      # Official GYWS favicon
│   ├── index.html            # Main HTML document template
│   └── manifest.json         # Web app manifest
├── src/
│   ├── App.js                # Root app component
│   ├── Routes.jsx            # Dynamic client-side route configurations
│   ├── index.js              # Application entry point
│   ├── index.css             # Global styles and Tailwind utility imports
│   ├── Components/           # Reusable UI widgets & sections
│   │   ├── Donation/         # Donation pages (JVM Care, Hostel, LiGHT)
│   │   ├── Initiatives/      # JVM and project showcase components
│   │   ├── Mailer-Tool/      # Automated email & outreach utilities
│   │   ├── Members/          # Year-wise member directories (2019-20 through 2026-27)
│   │   └── admin/            # Administrative portals & member forms
│   ├── Pages/                # Top-level view pages (Home, About, Media, Donate, etc.)
│   └── utils/                # Utility helpers & shared functions
├── tailwind.config.js        # Tailwind CSS configuration
├── package.json              # Project dependencies & scripts
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your development machine:
- **Node.js**: `v16.x` or `v18.x` (LTS recommended)
- **npm**: `v8.x` or higher (or `yarn` / `pnpm`)
- **Git**: For version control

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GYWS-TechOps/GYWS-Deployed.git
   cd GYWS-Deployed
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```
   > *Note:* If you encounter any peer dependency conflicts with legacy packages, run:
   > ```bash
   > npm install --legacy-peer-deps
   > ```

3. **Start the local development server:**
   ```bash
   npm start
   ```
   The application will be live at [http://localhost:3000](http://localhost:3000) with hot reloading enabled.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
|---|---|
| `npm start` | Runs the app in development mode on `http://localhost:3000`. |
| `npm run build` | Bundles and minifies the React application into production-ready assets inside the `build/` directory. |
| `npm test` | Launches the Jest test runner in interactive watch mode. |
| `npm run eject` | Copies build configuration files and scripts directly into the project (*one-way operation*). |

---

## 🌐 Hosting & Deployment (GoViral Host)

The production environment for **GYWS** is hosted on **GoViral Host**.

### Production Build & Deployment Steps:

1. **Generate the production bundle:**
   ```bash
   npm run build
   ```
   This generates an optimized, minified bundle in the `build/` directory.

2. **Verify Client-Side Routing (`.htaccess`):**
   Ensure `public/.htaccess` is present in the build. It contains the necessary Apache rewrite rules so that client-side routes (e.g., `/about`, `/jvm`, `/donate`) resolve correctly through `index.html` on GoViral Host without throwing 404 errors:
   ```apache
   Options -MultiViews
   RewriteEngine On
   RewriteBase /

   # Redirect non-www to www
   RewriteCond %{HTTP_HOST} !^www\. [NC]
   RewriteRule ^ https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

   # Rewrite all requests to index.html for SPA routing
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^ index.html [L]
   ```

3. **Upload to Server:**
   - Log into the **GoViral Host cPanel** (or connect via SFTP/FTP).
   - Navigate to the web root directory (`public_html` or domain root for `gyws.org`).
   - Upload the contents of the `build/` folder (including `.htaccess`).
   - Clear server cache if applicable, and verify live functionality at [https://gyws.org](https://gyws.org).

---

## 🤝 Contributing & Development Guidelines

1. **Branching Strategy:**
   - Always branch off `main` for new features or bugfixes:
     ```bash
     git checkout -b feature/your-feature-name
     ```
2. **Code Cleanliness:**
   - Follow clean component-based architecture.
   - Utilize Tailwind CSS utility classes and ensure responsiveness across mobile, tablet, and desktop viewports.
3. **Submitting Changes:**
   - Push your branch and open a Pull Request (PR) describing the changes and referencing any related issue.
   - Request review from the **GYWS TechOps** team before merging into `main`.

---

## 📬 Contact & Social Links

Connect with **Gopali Youth Welfare Society**:

- **Official Website:** [https://gyws.org](https://gyws.org)
- **LinkedIn:** [Gopali Youth Welfare Society](https://www.linkedin.com/company/gopali-youth-welfare-society/)
- **Instagram:** [@gyws_iitkgp](https://www.instagram.com/gyws_iitkgp/)
- **Facebook:** [GYWS IIT Kharagpur](https://www.facebook.com/gyws.iitkgp/)
- **Email:** [contact@gyws.org](mailto:contact@gyws.org)
- **Campus Address:** Student Activity Centre (SAC), IIT Kharagpur, Kharagpur, West Bengal - 721302, India

---

<div align="center">
  <sub>Built with ❤️ by the <strong>TechOps Team</strong> at Gopali Youth Welfare Society, IIT Kharagpur.</sub>
</div>
