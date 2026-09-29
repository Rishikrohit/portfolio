import { Repository } from "../types";
import { GITHUB_OVERRIDES } from "../data/githubOverrides";

const GITHUB_USERNAME = "Rishikrohit";
const CACHE_KEY = `github_repos_${GITHUB_USERNAME}`;
const CACHE_EXPIRY_MS = 1000 * 60 * 30; // 30 minutes cache

// Static backup in case of GitHub rate limiting (HTTP 403) or offline browsing
export const FALLBACK_REPOSITORIES: Repository[] = [
  {
    id: 1,
    name: "Sales-Customer-Analytics-Tableau",
    full_name: "Rishikrohit/Sales-Customer-Analytics-Tableau",
    description: "Interactive Tableau dashboards analyzing sales performance and customer behavior — built as a Data Analyst portfolio project.",
    html_url: "https://github.com/Rishikrohit/Sales-Customer-Analytics-Tableau",
    homepage: "https://public.tableau.com/app/profile/rohit.kavhale/viz/SalesCustomerDashboards_17886968492880/SalesDashboard",
    language: "Tableau",
    stargazers_count: 1,
    forks_count: 0,
    created_at: "2026-08-01T00:00:00Z",
    updated_at: "2026-09-06T12:51:00Z",
    topics: ["tableau", "data-analytics", "sales", "customer-analytics"],
    size: 2048,
    default_branch: "main",
    category: "Tableau",
    technologies: ["Tableau", "Tableau Public", "Data Visualization", "Dashboard Design"],
    tableauUrl: "https://public.tableau.com/app/profile/rohit.kavhale/viz/SalesCustomerDashboards_17886968492880/SalesDashboard",
  },
  {
    id: 2,
    name: "sql-data-analysis-project",
    full_name: "Rishikrohit/sql-data-analysis-project",
    description: "SQL-based data analysis project extracting meaningful business insights using JOIN, GROUP BY, Subqueries, and Window Functions in PostgreSQL.",
    html_url: "https://github.com/Rishikrohit/sql-data-analysis-project",
    homepage: null,
    language: "SQL",
    stargazers_count: 1,
    forks_count: 0,
    created_at: "2026-02-01T00:00:00Z",
    updated_at: "2026-08-23T05:21:17Z",
    topics: ["postgresql", "sql", "data-analysis", "pgadmin4"],
    size: 512,
    default_branch: "main",
    category: "SQL",
    technologies: ["PostgreSQL", "pgAdmin 4", "SQL", "Relational Databases"],
  },
  {
    id: 3,
    name: "Customer-Churn-Analysis",
    full_name: "Rishikrohit/Customer-Churn-Analysis",
    description: "Analyzed 1,000+ customer records using Python, Pandas and NumPy to identify churn patterns and factors.",
    html_url: "https://github.com/Rishikrohit/Customer-Churn-Analysis",
    homepage: null,
    language: "Jupyter Notebook",
    stargazers_count: 1,
    forks_count: 0,
    created_at: "2026-04-01T00:00:00Z",
    updated_at: "2026-08-25T13:50:29Z",
    topics: ["python", "pandas", "numpy", "eda", "churn-analysis"],
    size: 1024,
    default_branch: "main",
    category: "Python",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    id: 4,
    name: "healthcare-analytics-dashboard",
    full_name: "Rishikrohit/healthcare-analytics-dashboard",
    description: "Interactive healthcare analytics dashboard covering patient demographics, billing, admissions, and clinical outcomes with a full data-cleaning pipeline.",
    html_url: "https://github.com/Rishikrohit/healthcare-analytics-dashboard",
    homepage: null,
    language: "HTML",
    stargazers_count: 1,
    forks_count: 0,
    created_at: "2026-07-01T00:00:00Z",
    updated_at: "2026-08-05T15:02:19Z",
    topics: ["power-bi", "dax", "healthcare", "analytics"],
    size: 4096,
    default_branch: "main",
    category: "Data Analytics",
    technologies: ["Power BI", "DAX", "Python", "Data Cleaning"],
  },
  {
    id: 5,
    name: "Hospital-ER-Data-Analysis-Excel",
    full_name: "Rishikrohit/Hospital-ER-Data-Analysis-Excel",
    description: "Interactive Emergency Room (ER) Dashboard built in Microsoft Excel analyzing patient volume, wait time trends, and satisfaction scores using Pivot Tables.",
    html_url: "https://github.com/Rishikrohit/Hospital-ER-Data-Analysis-Excel",
    homepage: null,
    language: "Excel",
    stargazers_count: 2,
    forks_count: 0,
    created_at: "2026-07-15T00:00:00Z",
    updated_at: "2026-08-17T13:47:15Z",
    topics: ["excel", "pivot-tables", "dashboard", "analytics"],
    size: 1536,
    default_branch: "main",
    category: "Spreadsheets",
    technologies: ["Microsoft Excel", "Pivot Tables", "Pivot Charts", "KPI Design"],
  },
  {
    id: 6,
    name: "VBA-Excel-Dashboard-Project",
    full_name: "Rishikrohit/VBA-Excel-Dashboard-Project",
    description: "Excel VBA project showcasing dashboard automation, dynamic reporting, and data analysis skills.",
    html_url: "https://github.com/Rishikrohit/VBA-Excel-Dashboard-Project",
    homepage: null,
    language: "VBA",
    stargazers_count: 2,
    forks_count: 0,
    created_at: "2026-07-20T00:00:00Z",
    updated_at: "2026-08-17T13:47:14Z",
    topics: ["vba", "excel-macros", "automation"],
    size: 2048,
    default_branch: "main",
    category: "Spreadsheets",
    technologies: ["Excel VBA", "Macros", "Automation", "Reporting"],
  },
  {
    id: 7,
    name: "pandas-learning-notes",
    full_name: "Rishikrohit/pandas-learning-notes",
    description: "Notes, examples, and practice code for learning the pandas library.",
    html_url: "https://github.com/Rishikrohit/pandas-learning-notes",
    homepage: null,
    language: "Jupyter Notebook",
    stargazers_count: 1,
    forks_count: 0,
    created_at: "2026-07-26T15:03:03Z",
    updated_at: "2026-08-05T15:02:09Z",
    topics: ["pandas", "python", "data-wrangling"],
    size: 79,
    default_branch: "main",
    category: "Python",
    technologies: ["Pandas", "Python", "Jupyter Notebook"],
  },
  {
    id: 8,
    name: "numpy-learning-notes",
    full_name: "Rishikrohit/numpy-learning-notes",
    description: "Personal notes, array operations, and practice code while learning NumPy.",
    html_url: "https://github.com/Rishikrohit/numpy-learning-notes",
    homepage: null,
    language: "Jupyter Notebook",
    stargazers_count: 1,
    forks_count: 0,
    created_at: "2026-07-25T00:00:00Z",
    updated_at: "2026-08-23T05:20:55Z",
    topics: ["numpy", "python", "linear-algebra"],
    size: 85,
    default_branch: "main",
    category: "Python",
    technologies: ["NumPy", "Python", "Jupyter Notebook"],
  },
  {
    id: 9,
    name: "simple-file-crud",
    full_name: "Rishikrohit/simple-file-crud",
    description: "A simple Python CLI tool to create, read, update, and delete files (CRUD).",
    html_url: "https://github.com/Rishikrohit/simple-file-crud",
    homepage: null,
    language: "Python",
    stargazers_count: 1,
    forks_count: 0,
    created_at: "2026-07-15T00:00:00Z",
    updated_at: "2026-08-05T15:02:16Z",
    topics: ["python", "cli", "file-management"],
    size: 3,
    default_branch: "main",
    category: "Python",
    technologies: ["Python", "CLI", "File I/O"],
  },
  {
    id: 10,
    name: "Bank-Management-System",
    full_name: "Rishikrohit/Bank-Management-System",
    description: "Python application implementing bank account logic, deposits, withdrawals, and account statements.",
    html_url: "https://github.com/Rishikrohit/Bank-Management-System",
    homepage: null,
    language: "Python",
    stargazers_count: 1,
    forks_count: 0,
    created_at: "2026-07-19T07:22:02Z",
    updated_at: "2026-08-05T15:02:13Z",
    topics: ["python", "oop", "finance"],
    size: 2,
    default_branch: "main",
    category: "Python",
    technologies: ["Python", "OOP"],
  },
  {
    id: 11,
    name: "Rishikrohit",
    full_name: "Rishikrohit/Rishikrohit",
    description: "Special GitHub config profile repository.",
    html_url: "https://github.com/Rishikrohit/Rishikrohit",
    homepage: null,
    language: "Markdown",
    stargazers_count: 1,
    forks_count: 0,
    created_at: "2025-09-15T07:14:53Z",
    updated_at: "2026-09-06T13:07:47Z",
    topics: [],
    size: 1,
    default_branch: "main",
    category: "Other",
    technologies: ["Markdown"],
  },
];

export function detectCategory(repo: Partial<Repository>): string {
  const name = (repo.name || "").toLowerCase();
  const desc = (repo.description || "").toLowerCase();
  const lang = (repo.language || "").toLowerCase();
  const text = `${name} ${desc} ${lang}`;

  if (text.includes("tableau")) return "Tableau";
  if (text.includes("power bi") || text.includes("powerbi") || text.includes("dax")) return "Power BI";
  if (text.includes("sql") || text.includes("postgres") || text.includes("mysql") || text.includes("database")) return "SQL";
  if (text.includes("analytics") || text.includes("analysis") || text.includes("dashboard") || text.includes("kpi")) return "Data Analytics";
  if (text.includes("churn") || text.includes("machine learning") || text.includes("ml") || text.includes("model")) return "Machine Learning";
  if (text.includes("excel") || text.includes("vba") || text.includes("pivot")) return "Spreadsheets";
  if (lang === "python" || text.includes("pandas") || text.includes("numpy") || text.includes("jupyter")) return "Python";
  if (lang === "c++" || lang === "cpp") return "C++";
  if (lang === "java") return "Java";
  if (lang === "html" || lang === "javascript" || lang === "typescript" || lang === "css") return "Web Development";
  return "Other";
}

export function extractTechnologies(repo: Partial<Repository>): string[] {
  const techs = new Set<string>();
  if (repo.language) techs.add(repo.language);

  const text = `${repo.name || ""} ${repo.description || ""} ${(repo.topics || []).join(" ")}`.toLowerCase();

  const dict: Record<string, string> = {
    python: "Python",
    pandas: "Pandas",
    numpy: "NumPy",
    matplotlib: "Matplotlib",
    seaborn: "Seaborn",
    sql: "SQL",
    postgresql: "PostgreSQL",
    postgres: "PostgreSQL",
    mysql: "MySQL",
    tableau: "Tableau",
    "power bi": "Power BI",
    excel: "Excel",
    vba: "VBA",
    jupyter: "Jupyter Notebook",
    eda: "EDA",
    dax: "DAX",
    cli: "CLI",
  };

  Object.entries(dict).forEach(([key, val]) => {
    if (text.includes(key)) techs.add(val);
  });

  return Array.from(techs);
}

export async function fetchGithubProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return {
      login: GITHUB_USERNAME,
      name: "Rohit Ashok Kavhale",
      html_url: `https://github.com/${GITHUB_USERNAME}`,
      public_repos: 11,
      followers: 3,
      following: 5,
      bio: "Aspiring Data Analyst · Learning Python, SQL, Statistics & Data Visualization",
    };
  }
}

export async function fetchGithubRepositories(): Promise<Repository[]> {
  try {
    // Check cached repositories in localStorage
    const cached = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(`${CACHE_KEY}_time`);

    if (cached && cachedTime && Date.now() - parseInt(cachedTime, 10) < CACHE_EXPIRY_MS) {
      const parsed: Repository[] = JSON.parse(cached);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }

    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status}`);
    }

    const rawRepos = await res.json();
    if (!Array.isArray(rawRepos) || rawRepos.length === 0) {
      throw new Error("No repositories found in API response");
    }

    const enrichedRepos: Repository[] = rawRepos.map((repo: any) => {
      const override = GITHUB_OVERRIDES[repo.name] || {};
      const category = override.category || detectCategory(repo);
      const technologies = override.technologies || extractTechnologies(repo);

      return {
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: override.customDescription || repo.description || "Project details available on GitHub.",
        html_url: repo.html_url,
        homepage: override.liveDemo || repo.homepage || null,
        language: repo.language,
        stargazers_count: repo.stargazers_count || 0,
        forks_count: repo.forks_count || 0,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        topics: repo.topics || [],
        size: repo.size,
        default_branch: repo.default_branch || "main",
        category,
        technologies,
        liveDemo: override.liveDemo || repo.homepage || null,
        tableauUrl: override.tableauUrl || (category === "Tableau" ? repo.homepage : null),
        powerBIUrl: override.powerBIUrl || (category === "Power BI" ? repo.homepage : null),
      };
    });

    localStorage.setItem(CACHE_KEY, JSON.stringify(enrichedRepos));
    localStorage.setItem(`${CACHE_KEY}_time`, Date.now().toString());

    return enrichedRepos;
  } catch (err) {
    console.warn("Using fallback GitHub repositories due to API constraint:", err);
    return FALLBACK_REPOSITORIES;
  }
}

export async function fetchRepoReadme(repoName: string, defaultBranch = "main"): Promise<string> {
  const branches = [defaultBranch, "main", "master"];
  for (const branch of branches) {
    try {
      const res = await fetch(`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repoName}/${branch}/README.md`);
      if (res.ok) {
        const text = await res.text();
        if (text && !text.includes("404: Not Found")) {
          return text;
        }
      }
    } catch {
      // try next branch
    }
  }
  return "Project details available on GitHub.";
}
