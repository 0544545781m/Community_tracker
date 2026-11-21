# Community Development Project Tracking and Monitoring System (CD-PTMS)

A modern, responsive, web-based platform designed for Metropolitan, Municipal, and District Assemblies (MMDAs) across Ghana to register, monitor, manage, and publicly report on community development projects.

Designed as a general-purpose administrative system supporting all 16 regions and 261 MMDAs in Ghana.

---

## ⚡ Direct Live Server Launch (No Terminal or Build Required!)

This project is built as a **Direct Web-Based Application**. You can launch and test it immediately in your browser using **VS Code Live Server**:

1. In VS Code, right-click on **`index.html`** in the project explorer.
2. Select **"Open with Live Server"**.
3. The complete application will launch instantly in your web browser!

---

## 🏛️ Administrative Hierarchy

```text
Republic of Ghana
 └── 16 Official Administrative Regions (GAR, AR, CR, WR, NR, etc.)
      └── Metropolitan, Municipal & District Assemblies (MMDAs)
           └── Communities & Electoral Areas (Towns, Wards, Sub-districts)
                └── Development Projects
                     └── Evidence-Based Progress Updates & Audit Records
```

---

## 🛠️ Technology Stack (Direct Web-Ready)

- **Frontend:** HTML5, Semantic Web Components
- **Styling:** Tailwind CSS (via CDN) with customized Civic & Government Palette:
  - **Executive Navy:** `#0A192F`, `#102A43`, `#334E68`
  - **Accent Emerald Green:** `#047857`, `#059669`
  - **National Gold Accent:** `#D97706`, `#F59E0B`
  - **Slate Canvas:** `#F8FAFC`
- **Iconography:** Lucide Icons (via CDN)
- **Data Visualizations:** Chart.js (via CDN)
- **Backend Services:** Firebase Authentication, Cloud Firestore, Firebase Storage (with integrated persistent client fallback)
- **Version Control:** Git & GitHub

---

## 👥 Interactive User Roles & Testing Matrix

You can switch roles directly from the **Role Selector** in the top navigation bar to test all user permissions:

1. **Super Administrator (National Level):** Full oversight over all 16 regions and 261 MMDAs, global audit trails, cross-district statistics.
2. **Municipal/District Administrator (MMDA Level):** Manages local communities, registers new projects, verifies field progress reports, and generates MMDA-level reports.
3. **Project Officer (Field Inspector):** Submits field inspection progress percentages, milestones achieved, and site photographs.
4. **Public Citizen (Transparency Portal):** Searches, filters, and monitors publicly approved development projects, budgets, contractors, and progress photos.

---

## 📁 Project Directory Structure

```text
Community_tracker/
├── index.html               # Main Web Application & Citizen Portal
├── css/
│   └── styles.css           # Custom government styling & scrollbars
├── js/
│   ├── constants.js         # 16 Regions of Ghana, MMDAs, categories, statuses, funding sources
│   ├── firebase-config.js   # Firebase initialization & local fallback engine
│   ├── utils.js             # Currency formatting (GH₵), date formatters, status badges
│   ├── data.js              # State management & persistent storage (projects, updates, audit)
│   └── app.js               # Application UI controller, charts, tab switching & modals
├── README.md                # System documentation
└── .gitignore               # Version control rules
```

---

## 📄 License & Attribution
Developed for educational and academic research purposes (BTech ICT Final Year Engineering Project).
