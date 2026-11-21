# Community Development Project Tracking and Monitoring System (CD-PTMS)

A web-based platform designed for Metropolitan, Municipal, and District Assemblies (MMDAs) across Ghana to register, monitor, manage, and publicly report on community development projects.

Designed as a general-purpose, multi-tenant administrative system supporting all 16 regions and 261 MMDAs in Ghana.

---

## 🏛️ Administrative Hierarchy

```text
Ghana
 └── 16 Administrative Regions
      └── Metropolitan, Municipal & District Assemblies (MMDAs)
           └── Communities (Towns, Sub-Districts, Electoral Areas)
                └── Development Projects
                     └── Evidence-Based Progress Updates & Audit Records
```

---

## 🛠️ Technology Stack

- **Frontend:** React with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Executive Navy `#0A192F`, Emerald Green `#059669`, Warm Gold `#D97706`)
- **Backend & Database:** Firebase (Authentication, Cloud Firestore, Firebase Storage)
- **Icons:** Lucide React
- **Visualizations & Charts:** Recharts
- **Version Control:** Git & GitHub

---

## 👥 User Roles & Access Control

1. **Super Administrator (National Level):** Full platform oversight, region and MMDA registry, global auditing, cross-district statistics.
2. **Municipal/District Administrator (MMDA Level):** Manages local communities, creates and assigns projects, verifies submitted progress reports, generates MMDA-level reports.
3. **Project Officer (Field Level):** Submits milestone updates, photographic evidence, and progress percentages on assigned projects.
4. **Public User (Citizen Portal):** Searches, filters, and inspects publicly approved development projects, budgets, locations, and progress history.

---

## 📁 Project Structure

```text
src/
├── assets/             # Static logos, emblems, SVGs
├── components/
│   ├── common/         # Error boundaries, breadcrumbs, fallbacks
│   ├── layout/         # TopNav, Sidebar, Footer, MobileNav
│   └── ui/             # Reusable primitives (Buttons, Cards, Badges, Modals, Tables)
├── config/
│   ├── constants.ts    # Ghana regions, categories, statuses, funding sources
│   ├── firebase.ts     # Firebase client SDK initialization
│   └── theme.ts        # Design tokens
├── context/
│   └── AuthContext.tsx # User session and role-based permissions
├── features/
│   ├── administrative/ # Region and MMDA management
│   ├── analytics/      # Recharts dashboards and KPI summaries
│   ├── audit/          # Immutable activity log viewer
│   ├── auth/           # Login, profile, password reset
│   ├── communities/    # Community registration within MMDAs
│   ├── progress/       # Milestone submission and independent verification
│   ├── projects/       # Project registration, detail views, and filtering
│   ├── public/         # Public transparency portal
│   └── reports/        # District summary and export generation
├── hooks/              # Custom reusable hooks
├── lib/
│   ├── formatters.ts   # Ghana Cedis currency (GHS), dates, status badges
│   └── utils.ts        # Tailwind class merging utility
├── routes/             # Role-protected route guards
└── types/              # Strongly typed TypeScript data models
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or newer)
- npm (v9 or newer)

### 2. Environment Configuration
Copy `.env.example` to `.env` and fill in your Firebase project credentials:

```bash
cp .env.example .env
```

### 3. Installation & Local Development
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

### 4. Production Build
```bash
npm run build
```

---

## 📄 License
This project is developed for educational and academic research purposes (BTech ICT Final Year Project).

