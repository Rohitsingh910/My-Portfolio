# Rohit Singh | Premium Java Full Stack Developer Portfolio

[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD627)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://pages.github.com/)

A premium, production-ready, and fully responsive software engineering portfolio showcasing expertise in **Java, Spring Boot, React.js, Node.js, and Machine Learning models**. Built using modern design systems, fluid scrolling spy animations, glassmorphism UI elements, and interactive 3D card tilt effects.

---

## 🏗️ Project & Deployment Architecture

Below is the workflow and data flow architecture of the portfolio application, showing how modular data connects to interactive sections and deploys automatically:

```mermaid
graph TD
    %% Define Node Styles
    classDef data fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff;
    classDef src fill:#3b82f6,stroke:#2563eb,stroke-width:2px,color:#fff;
    classDef build fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff;
    classDef deploy fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff;

    %% Data Configuration Layer
    subgraph DL ["Data Layer"]
        A["portfolio.js <br> (Profile Details, Projects, Skills, Internships)"]:::data
    end

    %% UI Components & Logic Layer
    subgraph FL ["Frontend Logic (React + Vite)"]
        B["Navbar.jsx & Footer.jsx <br> (Dynamic Socials/Resumes)"]:::src
        C["useScrollSpy.js <br> (Scroll spy active sections)"]:::src
        D["Interactive Sections <br> (Hero, About, Skills, Projects, Experience, Contact)"]:::src
    end

    %% Compilation Layer
    subgraph BP ["Build Pipeline"]
        E["Vite Compiler <br> (Asset optimization & Minification)"]:::build
        F["dist/ <br> (Static HTML, CSS, and JS Assets)"]:::build
    end

    %% Deployment Target
    subgraph PD ["Production Deployment"]
        G["GitHub Pages <br> (Live Website Hosting)"]:::deploy
    end

    %% Flow Connections
    A -->|Data Injection| B
    A -->|Data Injection| D
    C -->|Active State Hook| B
    B -->|User Interactivity| E
    D -->|User Interactivity| E
    E -->|Build Command| F
    F -->|Git Subtree Push| G
```

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx       # Responsive sticky header, navigation links, scroll-spy activation
│   └── Footer.jsx       # Minimalist social links, email, and copyright footer
├── sections/
│   ├── Hero.jsx         # Animated particle hero visual and introductory banner
│   ├── About.jsx        # Grid layout with professional metrics and circular profile container
│   ├── Skills.jsx       # Categorized interactive technical skill badges + marquee animation
│   ├── Projects.jsx     # Featured projects grid with 3D hover tilt card effect and image previews
│   ├── Experience.jsx   # Interactive internship timeline tracking roles and tech highlights
│   ├── Achievements.jsx # Skill scores, contest ratings, and certification status
│   └── Contact.jsx      # Functional secure contact section with input validation
├── hooks/
│   └── useScrollSpy.js  # React hook tracking window position to highlight active header links
├── data/
│   └── portfolio.js     # Single-source-of-truth data configuration file
├── index.css            # Custom styling overrides, animation, and Tailwind directives
└── App.jsx              # Application root with lazy-loading hooks
```

---

## ⚡ Quick Start

### 1. Prerequisites
Make sure you have **Node.js** (v18+) installed on your machine.

### 2. Setup Dependencies
Clone the repository and install the npm packages:
```bash
# Clone the repository
git clone https://github.com/Rohitsingh910/My-Portfolio.git

# Navigate to project folder
cd My-Portfolio

# Install dependencies
npm install
```

### 3. Running Locally
Launch the local development server:
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser to view the application.

### 4. Code Quality & Linting
Ensure all code format and syntax standards are met:
```bash
npm run lint
```

### 5. Compiling Production Bundle
Compile the optimized build bundle:
```bash
npm run build
```
Production assets will be generated in the `/dist` directory.

---

## ✍️ How to Personalize

All profile content and credentials live in a single config file for easy updates:

1. Open **`src/data/portfolio.js`** in your editor.
2. Edit the **`personalInfo`** object (name, subtitle, resume links, email, phone, and profile paths).
3. Modify the **`skills`**, **`projects`**, **`experiences`**, and **`achievements`** lists to match your career updates.
4. Save the file. The Vite dev server will update your browser instantly using HMR.

To update your profile picture, place your image (e.g. `Rohit.jpg`) inside the `/public` folder, then update the `avatar` path inside `portfolio.js`:
```javascript
export const personalInfo = {
  // ...
  avatar: "/Rohit.jpg",
};
```

---

## 🚀 Deployment to GitHub Pages

To compile and push your changes to **GitHub Pages** (`gh-pages` branch) dynamically:

```bash
# 1. Compile the latest production build
npm run build

# 2. Add and commit dist folder temporarily
git add dist -f
git commit -m "chore: temporary deploy commit"

# 3. Push compiled assets as root of the remote gh-pages branch
git subtree push --prefix dist origin gh-pages

# 4. Revert the temporary commit locally to keep working directory clean
git reset --hard HEAD~1
```

Once the push completes, GitHub will automatically deploy the build and host your portfolio at **[https://rohitsingh910.github.io/My-Portfolio/](https://rohitsingh910.github.io/My-Portfolio/)**.
