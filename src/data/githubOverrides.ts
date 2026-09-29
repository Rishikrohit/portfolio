export interface RepoOverride {
  featured?: boolean;
  category?: string;
  customTitle?: string;
  customDescription?: string;
  image?: string;
  liveDemo?: string;
  tableauUrl?: string;
  powerBIUrl?: string;
  technologies?: string[];
}

export const GITHUB_OVERRIDES: Record<string, RepoOverride> = {
  "Sales-Customer-Analytics-Tableau": {
    featured: true,
    category: "Tableau",
    customTitle: "Sales & Customer Dashboards (Tableau)",
    customDescription: "Interactive Tableau dashboards analyzing retail sales performance and customer behavior with dynamic filters.",
    tableauUrl: "https://public.tableau.com/app/profile/rohit.kavhale/viz/SalesCustomerDashboards_17886968492880/SalesDashboard",
    technologies: ["Tableau", "Tableau Public", "Data Visualization", "Dashboard Design"],
  },
  "sql-data-analysis-project": {
    featured: true,
    category: "SQL",
    customTitle: "Online Bookstore SQL Analysis",
    customDescription: "PostgreSQL analytical database project analyzing 1,000+ customer transactions using advanced joins, subqueries, and window functions.",
    technologies: ["PostgreSQL", "pgAdmin 4", "SQL", "Database Design"],
  },
  "Customer-Churn-Analysis": {
    featured: true,
    category: "Python",
    customTitle: "Customer Churn Analysis",
    customDescription: "Exploratory Data Analysis using Python, Pandas, and NumPy to uncover churn patterns across 1,000+ customer records.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
  },
  "healthcare-analytics-dashboard": {
    featured: false,
    category: "Data Analytics",
    customTitle: "Healthcare Analytics Dashboard",
    customDescription: "Executive healthcare analytics dashboard covering patient admissions, billing, and clinical outcomes with DAX measures and clean pipeline.",
    technologies: ["Power BI", "DAX", "Python", "Data Cleaning", "HTML/JS"],
  },
  "Hospital-ER-Data-Analysis-Excel": {
    featured: false,
    category: "Spreadsheets",
    customTitle: "Hospital Emergency Room (ER) Dashboard",
    customDescription: "Interactive Excel dashboard analyzing patient flow, wait times, and satisfaction scores with Pivot Tables.",
    technologies: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "Data Analytics"],
  },
  "VBA-Excel-Dashboard-Project": {
    featured: false,
    category: "Spreadsheets",
    customTitle: "VBA Excel Automated Dashboard",
    customDescription: "Automated Excel reporting and dynamic data analysis macros using Visual Basic for Applications (VBA).",
    technologies: ["Excel VBA", "Macros", "Automation", "Reporting"],
  },
  "simple-file-crud": {
    featured: false,
    category: "Python",
    customTitle: "File Manager CLI (CRUD)",
    customDescription: "A Python command-line utility for managing file CRUD operations (Create, Read, Update, Delete) with defensive error handling.",
    technologies: ["Python", "CLI", "File I/O"],
  },
  "Bank-Management-System": {
    featured: false,
    category: "Python",
    customTitle: "Bank Management System",
    customDescription: "Object-oriented Python banking application handling account management, deposits, withdrawals, and transaction records.",
    technologies: ["Python", "OOP", "Banking System"],
  },
  "numpy-learning-notes": {
    featured: false,
    category: "Python",
    customTitle: "NumPy Learning Notes & Practice",
    customDescription: "Comprehensive notebooks, array operations, vectorization techniques, and mathematical computations in NumPy.",
    technologies: ["NumPy", "Python", "Jupyter Notebook"],
  },
  "pandas-learning-notes": {
    featured: false,
    category: "Python",
    customTitle: "Pandas Learning Notes & Practice",
    customDescription: "Hands-on data manipulation notebooks covering indexing, grouping, merging, pivot tables, and time-series analysis.",
    technologies: ["Pandas", "Python", "Jupyter Notebook"],
  },
  "Rishikrohit": {
    featured: false,
    category: "Other",
    customTitle: "GitHub Config & Special Repository",
    customDescription: "Personal GitHub configuration profile and documentation.",
    technologies: ["Markdown", "GitHub"],
  },
};
