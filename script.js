const publications = [
  {
    title: "网络群体认知计算建模研究综述",
    venue: "通信学报, 2026, 47(3). DOI: 10.11959/j.issn.1000-436x.2026034",
    year: "2026",
    type: "journal",
    firstAuthor: true,
    image: "graph/群体认知.png",
    authors: ["尹公主", "张宏莉", "田逸艺", "田泽庶", "孟辰", "何嘉豪", "黄圣鹏"],
    paper: "https://doi.org/10.11959/j.issn.1000-436x.2026034",
    code: ""
  },
  {
    title: "Discrepancy-Aware Disentangled Contrastive Learning for Multimodal Rumor Detection",
    venue: "ICASSP, 2026. DOI: 10.1109/ICASSP55912.2026.11465114",
    year: "2026",
    type: "conference",
    firstAuthor: false,
    image: "assets/pubs/dadcl.png",
    authors: ["Kun Lu", "Hongli Zhang", "Yuchen Yang", "Chao Meng", "Gongzhu Yin", "et al."],
    paper: "https://doi.org/10.1109/ICASSP55912.2026.11465114",
    code: ""
  },
  {
    title: "STAGL: A Sign-Target Aware Graph Learning Framework for Stance Detection",
    venue: "ICASSP, 2026. DOI: 10.1109/ICASSP55912.2026.11460943",
    year: "2026",
    type: "conference",
    firstAuthor: false,
    image: "assets/pubs/stagl.png",
    authors: ["Chao Meng", "Hongli Zhang", "Chen Meng", "Gongzhu Yin", "et al."],
    paper: "https://doi.org/10.1109/ICASSP55912.2026.11460943",
    code: ""
  },
  {
    title: "TGCL: Target-aware Graph Contrastive Learning for Stance Detection",
    venue: "ICC, 2026",
    year: "2026",
    type: "conference",
    firstAuthor: false,
    image: "assets/pubs/tgcl.png",
    authors: ["Chao Meng", "Hongli Zhang", "Gongzhu Yin", "et al."],
    paper: "https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=TGCL%3A%20Target-aware%20Graph%20Contrastive%20Learning%20for%20Stance%20Detection",
    code: ""
  },
  {
    title: "MHGCA: Multi-scale heterogeneous graph learning with content-structure alignment for social spammer detection",
    venue: "World Wide Web, 2026",
    year: "2026",
    type: "journal",
    firstAuthor: false,
    image: "assets/pubs/mhgca.png",
    authors: ["Kun Lu", "Hongli Zhang", "Yuchen Yang", "Gongzhu Yin", "Yang Gao", "Binxing Fang"],
    paper: "https://link.springer.com/article/10.1007/s11280-026-01404-z",
    code: ""
  },
  {
    title: "Ignite Forecasting with SPARK: An Efficient Generative Framework for Refining LLMs in Temporal Knowledge Graph Forecasting",
    venue: "DASFAA / LNCS, 2026",
    year: "2026",
    type: "conference",
    firstAuthor: true,
    image: "graph/ScreenShot_2026-06-04_195415_673.png",
    authors: ["Gongzhu Yin", "Hongli Zhang", "Yi Luo", "Yuchen Yang", "Kun Lu", "Chao Meng"],
    paper: "https://doi.org/10.1007/978-981-95-3830-0_57",
    code: "https://github.com/yin-gz/SPARK",
    bibtex: `@inproceedings{yin2026ignite,
  title = {Ignite Forecasting with {SPARK}: An Efficient Generative Framework for Refining {LLM}s in Temporal Knowledge Graph Forecasting},
  author = {Yin, Gongzhu and Zhang, Hongli and Luo, Yi and Yang, Yuchen and Lu, Kun and Meng, Chao},
  booktitle = {Database Systems for Advanced Applications},
  pages = {746--756},
  year = {2026},
  publisher = {Springer Nature Singapore},
  series = {Lecture Notes in Computer Science},
  volume = {15987},
  doi = {10.1007/978-981-95-3830-0_57},
  url = {https://doi.org/10.1007/978-981-95-3830-0_57}
}`
  },
  {
    title: "Inductive Link Prediction on N-ary Relational Facts via Semantic Hypergraph Reasoning",
    venue: "KDD, 2025",
    year: "2025",
    type: "conference",
    firstAuthor: true,
    image: "graph/KDD.png",
    authors: ["Gongzhu Yin", "Hongli Zhang", "Yuchen Yang", "Yi Luo"],
    paper: "https://doi.org/10.1145/3690624.3709195",
    code: "https://github.com/yin-gz/Nary-Inductive-SubGraph",
    bibtex: `@inproceedings{yin2025inductive,
  title = {Inductive Link Prediction on {N}-ary Relational Facts via Semantic Hypergraph Reasoning},
  author = {Yin, Gongzhu and Zhang, Hongli and Yang, Yuchen and Luo, Yi},
  booktitle = {Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data Mining},
  pages = {1821--1832},
  year = {2025},
  publisher = {Association for Computing Machinery},
  doi = {10.1145/3690624.3709195},
  url = {https://doi.org/10.1145/3690624.3709195}
}`
  },
  {
    title: "Implicit Sign-Enhanced Stance Detection Model with Semantic Graph Attention Network",
    venue: "IEEE ICC, 2025",
    year: "2025",
    type: "conference",
    firstAuthor: false,
    image: "assets/pubs/implicit-stance.png",
    authors: ["Chao Meng", "Hongli Zhang", "Gongzhu Yin", "Yuchen Yang", "Yang Gao", "Binxing Fang"],
    paper: "https://doi.org/10.1109/ICC52391.2025.11160845",
    code: ""
  },
  {
    title: "GMCL: Graph-Enhanced Multimodal Contrastive Learning for Rumor Detection",
    venue: "ICASSP, 2025",
    year: "2025",
    type: "conference",
    firstAuthor: false,
    image: "assets/pubs/gmcl.png",
    authors: ["Kun Lu", "Hongli Zhang", "Tianze Sun", "Yuchen Yang", "Chao Meng", "Gongzhu Yin", "Binxing Fang"],
    paper: "https://doi.org/10.1109/ICASSP49660.2025.10890376",
    code: ""
  },
  {
    title: "Stance classification model with knowledge-aware multi-feature attention network",
    venue: "Neural Computing and Applications, 2025",
    year: "2025",
    type: "journal",
    firstAuthor: false,
    image: "assets/pubs/sckman.png",
    authors: ["Chao Meng", "Binxing Fang", "Hongli Zhang", "Yuchen Yang", "Gongzhu Yin", "Kun Lu"],
    paper: "https://doi.org/10.1007/s00521-025-11147-z",
    code: ""
  },
  {
    title: "Sign-Aware Graph Learning Framework for Stance Detection",
    venue: "IEEE Signal Processing Letters, 2025",
    year: "2025",
    type: "journal",
    firstAuthor: false,
    image: "assets/pubs/sagl.png",
    authors: ["Chao Meng", "Hongli Zhang", "Gongzhu Yin", "Yang Gao", "Binxing Fang"],
    paper: "https://doi.org/10.1109/LSP.2025.3588084",
    code: ""
  },
  {
    title: "Beyond Individuals: Modeling Mutual and Multiple Interactions for Inductive Link Prediction between Groups",
    venue: "WSDM, 2023",
    year: "2023",
    type: "conference",
    firstAuthor: true,
    image: "graph/WSDM.png",
    authors: ["Gongzhu Yin", "Xing Wang", "Hongli Zhang", "Chao Meng", "Yuchen Yang", "Kun Lu", "Yi Luo"],
    paper: "https://doi.org/10.1145/3539597.3570448",
    code: "https://github.com/yin-gz/group-link-prediction"
  },
  {
    title: "Cost-effective CNNs-based prototypical networks for few-shot relation classification across domains",
    venue: "Knowledge-Based Systems, 2022",
    year: "2022",
    type: "journal",
    firstAuthor: true,
    image: "graph/KBS.png",
    authors: ["Gongzhu Yin", "Xing Wang", "Hongli Zhang", "Jinlin Wang"],
    paper: "https://doi.org/10.1016/j.knosys.2022.109470",
    code: "https://github.com/yin-gz/Multi-Channel-Proto"
  }
];

const myNames = new Set(["Gongzhu Yin", "Yin Gongzhu", "尹公主"]);

function renderAuthors(authors) {
  return authors
    .map((author) => (myNames.has(author) ? `<strong>${author}</strong>` : author))
    .join(", ");
}

function linkOrPending(url, label) {
  if (!url) {
    return `<span>${label}</span>`;
  }
  return `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function bibtexKey(pub, index) {
  const firstAuthor = pub.authors[0] || "paper";
  const lastName = firstAuthor
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .split(/\s+/)
    .slice(-1)[0] || "paper";
  const keyword = pub.title
    .replace(/^[^:]+:\s*/, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .split(/\s+/)[0] || "work";
  return `${lastName.toLowerCase()}${pub.year}${keyword.toLowerCase()}${index + 1}`;
}

function extractDoi(venue) {
  const match = venue.match(/10\.\d{4,9}\/[^\s,;]+/i);
  return match ? match[0] : "";
}

function cleanVenue(venue) {
  return venue
    .replace(/\s*DOI:\s*10\.\d{4,9}\/[^\s,;]+/i, "")
    .replace(/\s*\.\s*$/, "")
    .trim();
}

function renderBibtex(pub, index) {
  if (pub.bibtex) {
    return pub.bibtex;
  }

  const entryType = pub.type === "journal" ? "article" : "inproceedings";
  const venueField = pub.type === "journal" ? "journal" : "booktitle";
  const doi = extractDoi(pub.venue);
  const lines = [
    `@${entryType}{${bibtexKey(pub, index)},`,
    `  title = {${pub.title}},`,
    `  author = {${pub.authors.join(" and ")}},`,
    `  ${venueField} = {${cleanVenue(pub.venue)}},`,
    `  year = {${pub.year}},`
  ];

  if (doi) {
    lines.push(`  doi = {${doi}},`);
  }

  if (pub.paper) {
    lines.push(`  url = {${pub.paper}},`);
  }

  const last = lines.pop().replace(/,$/, "");
  return [...lines, last, "}"].join("\n");
}

function renderPublications() {
  const list = document.querySelector("#publication-list");
  if (!list) return;
  list.dataset.filter = "first";
  list.innerHTML = publications
    .map((pub, index) => `
      <article class="publication-card" data-type="${pub.type}" data-first="${pub.firstAuthor}">
        <img class="pub-thumb" src="${pub.image}" alt="Visual summary for ${pub.title}">
        <div class="pub-body">
          <div class="pub-meta">
            <span class="tag">${pub.year}</span>
            <span class="tag alt">${pub.type}</span>
            ${pub.firstAuthor ? '<span class="tag">First-author work</span>' : ""}
          </div>
          <h3 class="pub-title">${pub.title}</h3>
          <p class="pub-venue">${pub.venue}</p>
          <p class="pub-authors">${renderAuthors(pub.authors)}</p>
          <div class="pub-links">
            ${linkOrPending(pub.paper, "Paper")}
            ${linkOrPending(pub.code, "Code")}
            <details class="bibtex-details">
              <summary class="bibtex-summary">BibTeX</summary>
              <pre class="bibtex-block"><code>${escapeHtml(renderBibtex(pub, index))}</code></pre>
            </details>
          </div>
        </div>
      </article>
    `)
    .join("");
}

function setupFilters() {
  const buttons = document.querySelectorAll(".filter-button");
  const cards = document.querySelectorAll(".publication-card");
  const list = document.querySelector("#publication-list");

  function applyFilter(filter) {
    if (list) {
      list.dataset.filter = filter;
    }

    cards.forEach((card) => {
      const isMatch =
        filter === "all" ||
        (filter === "first" && card.dataset.first === "true") ||
        card.dataset.type === filter;
      card.classList.toggle("is-hidden", !isMatch);
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      applyFilter(button.dataset.filter);
    });
  });

  const defaultFilter = document.querySelector(".filter-button.active")?.dataset.filter || "first";
  applyFilter(defaultFilter);
}

function setupPageNavigation() {
  const links = document.querySelectorAll(".tab-link");
  const sections = [...links]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function setActive(tabId) {
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${tabId}`);
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        setActive(target.id);
      }
      document.querySelector(".tabs")?.classList.remove("open");
      document.querySelector(".nav-toggle")?.setAttribute("aria-expanded", "false");
    });
  });

  const initialTab = window.location.hash.replace("#", "") || "about";
  setActive(initialTab);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
  }
}

function setupNavigationToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".tabs");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

renderPublications();
setupFilters();
setupPageNavigation();
setupNavigationToggle();
