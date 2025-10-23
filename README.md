# Developer Dashboard

A **React + TypeScript Developer Dashboard** that displays real-time information for developers such as weather, GitHub stats, motivational quotes, and a personal to-do list all in a clean, customizable interface.

This project is part of a group learning initiative to explore **React fundamentals**, **API integration**, **state management**, and **modern frontend tooling** using **Vite**.

---

## Project Overview

**Goal:**
Build an interactive Developer Dashboard to practice real-world React development concepts including components, hooks, API calls, local storage, and responsive design.

**Core Features (MVP):**

* Weather widget (fetches from a public API)
* GitHub stats widget (user info, repos, followers)
* Motivational quote widget (random daily quote)
* To-Do list (add, delete, and toggle tasks with persistence)
* Light/Dark theme toggle (stored in local storage)

---

## Tech Stack

| Category               | Technology                                                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Frontend Framework** | [React](https://react.dev/)                                                                                                   |
| **Language**           | [TypeScript](https://www.typescriptlang.org/)                                                                                 |
| **Bundler/Dev Server** | [Vite](https://vitejs.dev/)                                                                                                   |
| **Styling**            | [Tailwind CSS](https://tailwindcss.com/)                                                                                      |
| **State Management**   | React Context API / useState                                                                                                  |
| **APIs**               | Open-Meteo (Weather), GitHub API, ZenQuotes                                                                                   |
| **Deployment**         | [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), [GitHub Pages](https://pages.github.com/)                 |
| **Optional Tools**     | [Framer Motion](https://www.framer.com/motion/) (animations), [React Query](https://tanstack.com/query/latest) (data caching) |

---

## Installation & Setup

Follow these steps to get the project running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/developer-dashboard.git
cd developer-dashboard
```

### 2. Install Dependencies

Make sure you have **Node.js (v18 or later)** and **npm** installed.

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Open in Browser

Visit:

```
http://localhost:5173
```

You should see the Developer Dashboard running locally.

---

## Project Structure

```
src/
│
├── components/       # Widgets and UI components
│   ├── Header.tsx
│   ├── WeatherWidget.tsx
│   ├── GitHubWidget.tsx
│   ├── QuoteWidget.tsx
│   └── TodoWidget.tsx
│
├── context/          # Theme context (light/dark)
│   └── ThemeContext.tsx
│
├── hooks/            # Custom hooks for API calls or localStorage
│   └── useFetch.ts
│
├── types/            # TypeScript interfaces and types
│   └── weather.ts
│
├── utils/            # Helper functions
│   └── formatDate.ts
│
├── App.tsx           # Main layout and component composition
├── main.tsx          # React entry point
└── index.css         # Tailwind base styles
```

---

## API References

| Feature          | API                                                | Example URL                                                         |
| ---------------- | -------------------------------------------------- | ------------------------------------------------------------------- |
| **Weather**      | [Open-Meteo](https://open-meteo.com/)              | `https://api.open-meteo.com/v1/forecast?latitude=...&longitude=...` |
| **GitHub Stats** | [GitHub REST API](https://docs.github.com/en/rest) | `https://api.github.com/users/{username}`                           |
| **Quotes**       | [ZenQuotes API](https://zenquotes.io/)             | `https://zenquotes.io/api/random`                                   |

---

## Learning Goals

* Build and structure a **React + TypeScript** application
* Manage **state and context** effectively
* Fetch and display data from **multiple public APIs**
* Store data persistently with **local storage**
* Implement a **responsive** and **theme-aware** layout
* Collaborate effectively using **Git branching and pull requests**

---

## Contributing Guide

### Branch Strategy

| Branch      | Purpose                                                      |
| ----------- | ------------------------------------------------------------ |
| `main`      | Stable, production-ready code                                |
| `dev`       | Ongoing development and integration                          |
| `feature/*` | Individual feature branches (e.g., `feature/weather-widget`) |
| `fix/*`     | Bug fixes or improvements                                    |

### Contribution Workflow

1. **Create a new feature branch:**

   ```bash
   git checkout -b feature/widget-name
   ```
2. **Implement your feature** — use modular and well-structured components.
3. **Test and lint** your code before pushing.
4. **Commit changes** with a clear and concise message:

   ```bash
   git commit -m "Add: Weather widget with API integration"
   ```
5. **Push your branch**:

   ```bash
   git push origin feature/widget-name
   ```
6. **Open a Pull Request (PR)** into the `dev` branch.
7. **Request reviews** from team members before merging.

### Code Style Rules

* Use **TypeScript interfaces** for props and API data.
* Follow **PascalCase** for component names.
* Keep components **small, reusable, and well-documented**.
* Use **Tailwind CSS** for styling avoid inline styles when possible.

---

## Requirements Checklist (MVP)

* [x] Vite + React + TypeScript setup
* [x] TailwindCSS installed and configured
* [x] Header with theme toggle
* [x] Weather widget (API)
* [x] GitHub widget (API)
* [x] Quote widget (API)
* [x] To-Do list (local storage)
* [x] Responsive grid layout
* [x] Local storage persistence for theme and to-dos

---

## Stretch Goals (Optional Enhancements)

* Drag-and-drop widgets
* Animations with Framer Motion
* Authentication (save dashboard preferences)
* GitHub chart visualization
* Add more widgets (news, crypto, etc.)
* Caching with React Query

---

## Deployment

Before deployment, test your production build locally:

```bash
npm run build
npm run preview
```

Then deploy the `dist/` folder using any of the following platforms:

* **[Vercel](https://vercel.com/)**
* **[Netlify](https://netlify.com/)**
* **[GitHub Pages](https://pages.github.com/)**
* Or any preferred static hosting provider.

---

## Team Collaboration

| Role              | Name                                   | Responsibility                                    |
| ----------------- | -------------------------------------- | ------------------------------------------------- |
| **Project Leads** | *Derrick Mugisha*, *Yvette Manishimwe* | Setup, structure, deployment                      |
| **Students**      | *All members*                          | Build individual widgets and merge into shared UI |
| **QA / Reviewer** | *Derrick Mugisha*, *Yvette Manishimwe* | Code review, testing, feedback                    |

---

## References

* [React Documentation](https://react.dev/)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/)
* [Vite Documentation](https://vitejs.dev/guide/)
* [TailwindCSS Documentation](https://tailwindcss.com/docs)
* [Our google doc of the project](https://docs.google.com/document/d/1gJgI0vYWs1EM9H3xRurG3_RkIO9olP-w-W0pl02hdEs/edit?tab=t.0)


## The image preview of a simple design 
![Screenshot](public/images/figma%20preview.png)


---
