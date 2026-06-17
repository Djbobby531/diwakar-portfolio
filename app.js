const portfolioData = {
  name: "Diwakar Jilakara",
  initials: "DJ",
  role: "Data Engineer",
  availability: "Open to Data Engineer and Data Platform roles — 4+ years of Azure & AWS pipeline experience",
  heroTitle: "Building data pipelines that scale to millions.",
  summary:
    "Data Engineer with 4+ years building cloud-native ETL/ELT pipelines, distributed data platforms, and multi-tenant integration systems on Azure and AWS. Delivered pipelines processing 750K+ records/day at 99.99% uptime.",
  resume: "resume.html",
  linkedin: "https://linkedin.com/in/jilakara-diwakar-b45699225",
  github: {
    username: "Djbobby531",
    url: "https://github.com/Djbobby531",
    repositoriesUrl: "https://github.com/Djbobby531?tab=repositories",
    avatarUrl: "https://avatars.githubusercontent.com/u/113097368?v=4",
  },
  leetcode: {
    username: "diwakarjilakara",
    url: "https://leetcode.com/u/diwakarjilakara/",
    fallbackStats: {
      totalSolved: 45,
      totalQuestions: 3400,
      easySolved: 22,
      mediumSolved: 18,
      hardSolved: 5,
    },
  },
  stats: {
    experience: "4+",
    projects: "750K+",
    leetcode: "15+",
  },
  projects: [
    {
      name: "Data Migration Control Plane",
      type: "Data Platform",
      summary:
        "Enterprise data migration platform with a FastAPI pipeline backend, drag-and-drop workflow builder, schema validation engine, and AI-assisted operations on Docker Compose.",
      impact:
        "Multi-tenant SaaS architecture supporting 15+ database connectors with zero data loss guarantees across PostgreSQL, Redis, and Azurite — 70% reduction in manual transfer effort.",
      stack: ["TypeScript", "React", "FastAPI", "PostgreSQL", "Docker", "Redis"],
      link: "https://github.com/Djbobby531/Datanue",
    },
    {
      name: "ecommerce-microservices-architecture",
      type: "System Design",
      summary:
        "Scalable e-commerce microservices system design with service boundaries, Kafka event streaming, Kubernetes orchestration, and Mermaid architecture diagrams.",
      impact:
        "Demonstrates distributed systems thinking: service decomposition, async communication, infrastructure choices, and production scalability tradeoffs.",
      stack: ["Microservices", "Kafka", "Kubernetes", "Mermaid"],
      link: "https://github.com/Djbobby531/ecommerce-microservices-architecture",
    },
    {
      name: "ChessIQ — AI Chess Coach",
      type: "AI Application",
      summary:
        "Full-stack AI coaching app combining Stockfish depth analysis with LangChain LLM explanations. Recognizes 500+ named openings and delivers scorecards, board review, and natural-language Q&A.",
      impact:
        "Shows production AI integration: Stockfish engine + LangChain RAG pipeline + React UI — real-time move analysis with human-readable explanations.",
      stack: ["Python", "FastAPI", "Stockfish", "LangChain", "React"],
      link: "https://github.com/Djbobby531",
    },
  ],
  skills: [
    {
      icon: "⚡",
      title: "Data Engineering",
      text:
        "PySpark ETL/ELT pipelines, Azure Data Factory, Apache Kafka, Apache Airflow, schema validation, incremental and full-load strategies at 750K+ records/day.",
    },
    {
      icon: "☁️",
      title: "Cloud & Storage",
      text:
        "Microsoft Azure (ADF, Blob Storage, Cosmos DB, SQL Hyperscale, Data Lake), AWS (S3, Glue), Terraform, Docker, Kubernetes.",
    },
    {
      icon: "🤖",
      title: "AI & Automation",
      text:
        "LangChain, LangGraph, RAG pipelines, Azure OpenAI — AI-driven pipeline automation and natural-language querying of job history via GenAI chatbot.",
    },
    {
      icon: "🔧",
      title: "DevOps & Methods",
      text:
        "CI/CD, GitHub Actions, Azure DevOps, IAM/RBAC, JWT session management, observability, Docker, Kubernetes, Agile/Scrum.",
    },
  ],
  analytics: {
    enableLocationLookup: true,
    locationEndpoint: "https://ipapi.co/json/",
    counterEndpoint: "https://api.counterapi.dev/v1/djbobby531-portfolio/page-views",
  },
};

const fallbackRepos = [
  {
    name: "ecommerce-microservices-architecture",
    description:
      "Comprehensive system design document for a scalable e-commerce microservices platform with Kafka, Kubernetes, and Mermaid diagrams.",
    html_url: "https://github.com/Djbobby531/ecommerce-microservices-architecture",
    language: "System Design",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "jwt-auth-service",
    description: "Standalone JWT-based authentication service with Node.js, Express, SQLite, bcrypt, and Docker Compose.",
    html_url: "https://github.com/Djbobby531/jwt-auth-service",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "redis-caching-microservice",
    description: "Node.js microservice with Redis cache-aside caching layer, Docker Compose setup, and integration tests.",
    html_url: "https://github.com/Djbobby531/redis-caching-microservice",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "LeetCodeSolutions",
    description: "Public repository for coding interview and algorithm practice.",
    html_url: "https://leetcode.com/u/diwakarjilakara/",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    name: "Datanue",
    description: "TypeScript project from the Djbobby531 GitHub profile.",
    html_url: "https://github.com/Djbobby531/Datanue",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
  },
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function animateCount(element, target, duration = 1400) {
  if (!element) return;
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = String(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function setText(selector, text) {
  const node = $(selector);
  if (node) node.textContent = text;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function bindProfile() {
  document.title = `${portfolioData.name} | ${portfolioData.role}`;
  $('[name="description"]')?.setAttribute("content", portfolioData.summary);
  $(".brand-mark").textContent = portfolioData.initials;

  $$("[data-bind='name']").forEach((node) => {
    node.textContent = portfolioData.name;
  });
  $$("[data-bind='role']").forEach((node) => {
    node.textContent = portfolioData.role;
  });
  $$("[data-bind='availability']").forEach((node) => {
    node.textContent = portfolioData.availability;
  });
  $$("[data-bind='heroTitle']").forEach((node) => {
    node.textContent = portfolioData.heroTitle;
  });
  $$("[data-bind='summary']").forEach((node) => {
    node.textContent = portfolioData.summary;
  });

  setText("[data-stat='experience']", portfolioData.stats.experience);
  setText("[data-stat='projects']", portfolioData.stats.projects);
  setText("[data-stat='leetcode']", portfolioData.stats.leetcode);

  const links = {
    github: portfolioData.github.url,
    repositories: portfolioData.github.repositoriesUrl,
    leetcode: portfolioData.leetcode.url,
    resume: portfolioData.resume,
    linkedin: portfolioData.linkedin,
  };

  Object.entries(links).forEach(([key, value]) => {
    $$(`[data-link='${key}']`).forEach((node) => {
      node.href = value;
    });
  });
}

function renderProjects() {
  const grid = $("#project-grid");
  grid.innerHTML = portfolioData.projects
    .map(
      (project, index) => `
        <article class="project-card">
          <div>
            <div class="project-index">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <span>${escapeHtml(project.type)}</span>
            </div>
            <h3>${escapeHtml(project.name)}</h3>
            <p>${escapeHtml(project.summary)}</p>
            <p>${escapeHtml(project.impact)}</p>
          </div>
          <div>
            <div class="tag-list">
              ${project.stack.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
            </div>
            <a class="button ghost" href="${project.link}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(
              project.name
            )}">Open repo</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSkills() {
  $("#skills-grid").innerHTML = portfolioData.skills
    .map(
      (skill, i) => `
        <article class="skill-card reveal" style="animation-delay:${i * 80}ms">
          <p class="skill-icon" aria-hidden="true">${skill.icon || "◆"}</p>
          <h3>${escapeHtml(skill.title)}</h3>
          <p>${escapeHtml(skill.text)}</p>
        </article>
      `
    )
    .join("");
}

function renderRepos(repos) {
  $("#repo-list").innerHTML = repos
    .slice(0, 6)
    .map(
      (repo) => `
        <article class="repo-card">
          <h3><a href="${repo.html_url}" target="_blank" rel="noreferrer">${escapeHtml(repo.name)}</a></h3>
          <p>${escapeHtml(repo.description || "Repository description not provided yet.")}</p>
          <div class="repo-meta">
            <span>${escapeHtml(repo.language || "Code")}</span>
            <span>${repo.stargazers_count || 0} stars</span>
            <span>${repo.forks_count || 0} forks</span>
          </div>
        </article>
      `
    )
    .join("");
}

async function loadGitHub() {
  const username = portfolioData.github.username;
  const isPlaceholder = !username;

  if (isPlaceholder) {
    $("#github-status").textContent = "Using repository fallback";
    $("#github-name").textContent = "Djbobby531";
    $("#github-bio").textContent = "Showing verified public repositories from the configured GitHub profile.";
    setText("#repo-count", String(fallbackRepos.length));
    setText("#follower-count", "--");
    setText("#star-count", String(fallbackRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0)));
    renderRepos(fallbackRepos);
    return;
  }

  try {
    $("#github-status").textContent = "Loading public GitHub data";
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`),
    ]);

    if (!profileRes.ok || !reposRes.ok) throw new Error("GitHub request failed");

    const profile = await profileRes.json();
    const repos = await reposRes.json();
    const visibleRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.pushed_at || b.updated_at) - new Date(a.pushed_at || a.updated_at));
    const stars = visibleRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    $("#github-status").textContent = "Live from GitHub";
    $("#github-name").textContent = profile.name || profile.login || "Djbobby531";
    $("#github-bio").textContent =
      profile.bio ||
      "Public repositories and profile metrics are loaded directly from the GitHub API for Djbobby531.";
    setText("#repo-count", profile.public_repos);
    setText("#follower-count", profile.followers);
    setText("#star-count", stars);
    setText("[data-stat='experience']", profile.public_repos);
    renderRepos(visibleRepos.length ? visibleRepos : fallbackRepos);
  } catch (error) {
    $("#github-status").textContent = "GitHub fallback active";
    $("#github-bio").textContent =
      "GitHub could not be reached from this browser session, so the portfolio is showing verified repository fallback data.";
    renderRepos(fallbackRepos);
  }
}

function renderLeetCode(stats) {
  const total = Number(stats.totalSolved || stats.total_solved || 0);
  const questions = Number(stats.totalQuestions || stats.total_questions || 3400);
  const easy = Number(stats.easySolved || stats.easy_solved || 0);
  const medium = Number(stats.mediumSolved || stats.medium_solved || 0);
  const hard = Number(stats.hardSolved || stats.hard_solved || 0);
  const progress = questions > 0 ? Math.max(0, Math.min(total / questions, 1)) : 0.04;

  const totalEl = $("#leetcode-total");
  if (total > 0) {
    animateCount(totalEl, total, 1000);
  } else {
    totalEl.textContent = "--";
  }
  $("#leetcode-ring").style.strokeDashoffset = String(302 - 302 * Math.max(progress, 0.04));

  $("#difficulty-grid").innerHTML = [
    { label: "Easy", value: easy, color: "#22c55e", sub: "solved" },
    { label: "Medium", value: medium, color: "#f59e0b", sub: "solved" },
    { label: "Hard", value: hard, color: "#ef4444", sub: "solved" },
  ]
    .map(
      ({ label, value, color, sub }) => `
        <article class="difficulty-card">
          <strong style="color:${color}">${value}</strong>
          <span>${label}</span>
          <p>${sub}</p>
        </article>
      `
    )
    .join("");
}

async function loadLeetCode() {
  const username = portfolioData.leetcode.username;
  const controller = new AbortController();
  const tid = setTimeout(() => controller.abort(), 6000);
  try {
    const res = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`, { signal: controller.signal });
    clearTimeout(tid);
    if (!res.ok) throw new Error("API unavailable");
    const data = await res.json();
    renderLeetCode({
      totalSolved: data.solvedProblem || 0,
      totalQuestions: data.totalProblem || 3400,
      easySolved: data.easySolved || 0,
      mediumSolved: data.mediumSolved || 0,
      hardSolved: data.hardSolved || 0,
    });
  } catch {
    clearTimeout(tid);
    renderLeetCode(portfolioData.leetcode.fallbackStats);
  }
}

function detectDevice() {
  const width = window.innerWidth;
  if (width < 680) return "Mobile";
  if (width < 1024) return "Tablet";
  return "Desktop";
}

function trackVisits() {
  const key = "portfolio.localVisitCount";
  const visits = Number(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, String(visits));
  $("#local-visits").textContent = String(visits);

  const referrer = document.referrer ? new URL(document.referrer).hostname : "Direct";
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown timezone";
  $("#session-source").textContent = referrer;
  $("#session-detail").textContent = `${detectDevice()} browser, ${timezone}`;

  trackGlobalVisit();

  if (!portfolioData.analytics.enableLocationLookup) return;

  fetch(portfolioData.analytics.locationEndpoint)
    .then((response) => {
      if (!response.ok) throw new Error("Location lookup unavailable");
      return response.json();
    })
    .then((data) => {
      const city = data.city || "Unknown city";
      const region = data.region || data.region_code || "";
      const country = data.country_name || data.country || "Unknown country";
      $("#visitor-location").textContent = [city, region].filter(Boolean).join(", ") || country;
      $("#visitor-network").textContent = `${country}${data.org ? `, ${data.org}` : ""}`;
    })
    .catch(() => {
      $("#visitor-location").textContent = "Private or blocked";
      $("#visitor-network").textContent =
        "Use Plausible, Umami, Google Analytics, or a serverless endpoint for deploy-wide visitor reports.";
    });
}

async function trackGlobalVisit() {
  const endpoint = portfolioData.analytics.counterEndpoint?.replace(/\/$/, "");
  if (!endpoint) {
    $("#global-visits").textContent = String(localStorage.getItem("portfolio.localVisitCount") || "1");
    $("#global-visits-detail").textContent = "Global counter endpoint is not configured.";
    return;
  }

  const sessionKey = "portfolio.globalVisitTracked";
  const alreadyCounted = sessionStorage.getItem(sessionKey);
  const path = alreadyCounted ? endpoint : `${endpoint}/up`;

  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error("Counter request failed");
    const data = await response.json();
    const count = Number(data.count ?? data.value ?? 0);
    const incremented = !alreadyCounted;
    sessionStorage.setItem(sessionKey, "true");
    if (count > 0) {
      animateCount($("#global-visits"), count);
    } else {
      $("#global-visits").textContent = "--";
    }
    $("#global-visits-detail").textContent = incremented
      ? "This visit was counted in the site-wide total."
      : "Live count loaded — your session was already counted.";
  } catch (error) {
    const local = localStorage.getItem("portfolio.localVisitCount") || "1";
    $("#global-visits").textContent = local;
    $("#global-visits-detail").textContent = "Counter endpoint unavailable — showing your local visit count.";
    const badge = $("#live-badge");
    if (badge) badge.style.display = "none";
  }
}

function setupChrome() {
  const header = $(".site-header");
  const scrollTopBtn = $("#scroll-top");

  const updateHeader = () => {
    const scrolled = window.scrollY > 16;
    header.dataset.elevated = String(scrolled);
    if (scrollTopBtn) {
      scrollTopBtn.hidden = !scrolled;
    }
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  scrollTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const savedTheme = localStorage.getItem("portfolio.theme");
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;

  $(".theme-toggle").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio.theme", next);
  });

  setupMobileMenu();
  setupActiveNav();
}

function setupMobileMenu() {
  const btn = $(".nav-toggle");
  const nav = $("#mobile-nav");
  const backdrop = $("#mobile-backdrop");
  if (!btn || !nav) return;

  const open = () => {
    btn.setAttribute("aria-expanded", "true");
    nav.classList.add("is-open");
    nav.removeAttribute("aria-hidden");
    backdrop.classList.add("is-open");
    document.documentElement.dataset.mobileOpen = "true";
    document.body.style.overflow = "hidden";
    btn.setAttribute("aria-label", "Close menu");
  };

  const close = () => {
    btn.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    nav.setAttribute("aria-hidden", "true");
    backdrop.classList.remove("is-open");
    delete document.documentElement.dataset.mobileOpen;
    document.body.style.overflow = "";
    btn.setAttribute("aria-label", "Open menu");
  };

  btn.addEventListener("click", () => {
    nav.classList.contains("is-open") ? close() : open();
  });

  backdrop.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) close();
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close);
  });
}

function setupActiveNav() {
  const sections = [
    { id: "top", navHref: "#top" },
    { id: "work", navHref: "#work" },
    { id: "github", navHref: "#github" },
    { id: "leetcode", navHref: "#leetcode" },
    { id: "analytics", navHref: "#analytics" },
    { id: "contact", navHref: "#contact" },
  ];

  if (!("IntersectionObserver" in window)) return;

  const navLinks = $$(".nav a, .mobile-nav a");

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("is-active", href === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

function setupRevealAnimations() {
  const animated = [
    ".hero-content > *",
    ".section-heading",
    ".project-card",
    ".github-summary",
    ".repo-card",
    ".leetcode-panel",
    ".skill-card",
    ".analytics-card",
    ".contact-layout > *",
  ];
  const nodes = $$(animated.join(","));

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  nodes.forEach((node) => node.classList.add("reveal"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" }
  );
  nodes.forEach((node) => observer.observe(node));
}

function init() {
  bindProfile();
  renderProjects();
  renderSkills();
  loadGitHub();
  loadLeetCode();
  trackVisits();
  setupChrome();
  setupRevealAnimations();
  const yearEl = $("#footer-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", init);
