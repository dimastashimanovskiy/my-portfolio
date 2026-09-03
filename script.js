const ICONS = {
  code: '<svg viewBox="0 0 24 24" fill="none" width="15" height="15"><path d="M8 9l-4 4 4 4M16 9l4 4-4 4M14 5l-4 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M3 13l9 5 9-5" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" width="15" height="15"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" width="16" height="16"><rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" stroke-width="2"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M12 3l2.9 6 6.6.7-5 4.4 1.5 6.5L12 17.3 6 20.6l1.5-6.5-5-4.4 6.6-.7L12 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><g transform="translate(2.6,2.6) scale(0.78)"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.6-3.37-1.24-3.37-1.24-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.47.1 2.73.65.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0022 12.25C22 6.58 17.52 2 12 2z"/></g></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M6.94 5a2 2 0 11-4-.01 2 2 0 014 .01zM3.3 8.75h3.6v11.5H3.3V8.75zm6.13 0h3.45v1.57h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.31 2.4 4.31 5.51v6.27h-3.6v-5.56c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.65H9.43V8.75z"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M22 5.9c-.7.33-1.5.55-2.3.65a4 4 0 001.75-2.2c-.77.46-1.63.8-2.54.98A4 4 0 0012.1 9.1c0 .31.04.62.1.9A11.3 11.3 0 013.1 5.1a4 4 0 001.24 5.34c-.65-.02-1.26-.2-1.8-.5v.05a4 4 0 003.2 3.92c-.6.16-1.24.19-1.87.07a4 4 0 003.73 2.78 8 8 0 01-5.9 1.65A11.3 11.3 0 008.29 20.5c7.55 0 11.68-6.26 11.68-11.68l-.01-.53c.8-.58 1.5-1.3 2.04-2.13z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" width="16" height="16"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="2"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><g transform="translate(2.2,2.2) scale(0.82)"><path d="M21.9 4.1a1 1 0 00-1.02-.16L2.6 11.02a1 1 0 00.06 1.87l4.9 1.63 1.9 5.98a1 1 0 001.72.36l2.72-2.99 4.83 3.55a1 1 0 001.58-.6l3.03-14.7a1 1 0 00-.24-1.02zM9.2 14.1l-1.1 3.5-1.1-3.63 10.2-6.5-8 6.63z"/></g></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>',
  vk: '<svg viewBox="0 0 24 24" fill="none" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="6" stroke="currentColor" stroke-width="1.6"/><path d="M7 8c.2 4.2 2.3 6.7 6 6.9V12l2.4 2.9h2.4L14.8 11c1.3-1.4 2-2.4 2.3-3H14.8c-.4 1.1-1.4 2.4-2.3 3.1V8h-2v4c-1.1-.5-1.6-2.3-1.7-4H7z" fill="currentColor"/></svg>',
  viber: '<svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M12 3c-4.4 0-8 2.9-8 7.3 0 2.7 1.5 5.1 3.9 6.5-.1.9-.5 2.4-.6 2.9-.1.4.2.6.5.4.7-.4 2.2-1.3 3-1.9.7.1 1.4.2 2.2.2 4.4 0 8-2.9 8-7.3S16.4 3 12 3z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9.2 9.4c.3 2.9 2.3 4.7 5.1 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M12 8.4c1.5.15 2.4 1.05 2.5 2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  discord: '<svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M8.5 15.5c-2 0-3.6-1.7-3.6-3.9 0-2.1 1.5-3.9 3.5-3.9 1 0 1.7.4 2.2.9M15.5 15.5c2 0 3.6-1.7 3.6-3.9 0-2.1-1.5-3.9-3.5-3.9-1 0-1.7.4-2.2.9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M6 16.5c1.7 1 3.8 1.5 6 1.5s4.3-.5 6-1.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8.3 6.8C9.4 6.3 10.7 6 12 6s2.6.3 3.7.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.11 4.18 2 2 0 014.09 2h3a2 2 0 012 1.72c.13.99.36 1.96.68 2.89a2 2 0 01-.45 2.11L8.1 9.9a16 16 0 006 6l1.18-1.18a2 2 0 012.11-.45 12.8 12.8 0 002.89.68A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" width="14" height="14"><path d="M7 17L17 7M7 7h10v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" width="18" height="18"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M14 2v6h6" stroke="currentColor" stroke-width="2"/></svg>',
  pen: '<svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  code2: '<svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M8 9l-4 4 4 4M16 9l4 4-4 4M14 5l-4 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" width="18" height="18"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  rocket: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"> <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/> </svg>',
};

const PROCESS_ICON_KEYS = ["search", "file", "pen", "code2", "check", "rocket"];

function getProjects() {
  try {
    const stored = JSON.parse(localStorage.getItem("portfolio_projects") || "null");
    if (Array.isArray(stored) && stored.length) return stored;
  } catch (e) {}
  return SITE_CONFIG.projects || [];
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function renderHero() {
  const c = SITE_CONFIG;
  document.getElementById("brandName").textContent = c.name;
  document.getElementById("heroRole").textContent = c.role;
  document.getElementById("heroTitle").innerHTML =
    `${c.heroTitleLine1} <span class="accent">${c.heroTitleAccent}</span><br>${c.heroTitleLine2}`;
  document.getElementById("heroText").textContent = c.heroText;
  document.getElementById("cvBtn").href = c.cvLink || "#";

  const frame = document.getElementById("heroPhotoFrame");
  if (c.heroImage) {
    const img = new Image();
    img.onload = () => {
      frame.innerHTML = "";
      frame.appendChild(img);
      const tint = document.createElement("div");
      tint.className = "photo-tint";
      frame.appendChild(tint);
      const fade = document.createElement("div");
      fade.className = "photo-fade-bottom";
      frame.appendChild(fade);
    };
    img.onerror = () => {};
    img.src = c.heroImage;
    img.alt = c.name;
  }

  const statsWrap = document.getElementById("floatingStats");
  statsWrap.innerHTML = (c.heroStats || [])
    .map(
      (s) => `<div class="stat-pill"><div class="row"><span class="value">${s.value}</span><span class="icon">${ICONS[s.icon] || ""}</span></div><div class="label">${s.label}</div></div>`
    )
    .join("");
  const quickContact = document.createElement("a");
  quickContact.href = "#contact";
  quickContact.className = "stat-pill stat-pill-cta";
  quickContact.innerHTML = `
    <div class="row"><span class="value" style="font-size:15px;">Обсудим задачу?</span></div>
    <div class="label">Напишите мне — отвечаю быстро ${ICONS.telegram}</div>`;
  statsWrap.appendChild(quickContact);

  const badgesList = document.getElementById("heroBadgesList");
  badgesList.innerHTML = (c.heroBadges || []).map((b) => `<li>${b.text}</li>`).join("");

  document.getElementById("socialRow").innerHTML = (c.heroSocials || [])
    .map((s) => `<a class="icon-btn" href="${s.url}" target="_blank" rel="noopener" aria-label="${s.icon}">${ICONS[s.icon] || ""}</a>`)
    .join("");
}

function renderFooter() {
  const c = SITE_CONFIG;
  document.getElementById("footerName").textContent = c.name;
  document.getElementById("footerYear").textContent = new Date().getFullYear();
  document.getElementById("footerSocials").innerHTML = (c.footerSocials || [])
    .map((s) => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.icon}">${ICONS[s.icon] || ""}</a>`)
    .join("");
}

function setupEmailCopyFallback(email) {
  const btn = document.getElementById("contactEmailBtn");
  const toast = document.getElementById("copyToast");
  if (!btn || !toast) return;
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.textContent = "Email скопирован";
    } catch {
      toast.textContent = email;
    }
    toast.classList.add("show");
    clearTimeout(btn._toastTimer);
    btn._toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  });
}

function renderExperience() {
  const wrap = document.getElementById("experienceList");
  if (!wrap) return;
  wrap.innerHTML = (SITE_CONFIG.experience || [])
    .map(
      (e) => `
      <div class="timeline-item">
        <div class="timeline-head"><h4>${e.role}</h4><span class="period">${e.period}</span></div>
        <div class="timeline-org">${e.org}</div>
        <ul>${(e.bullets || []).map((b) => `<li>${b}</li>`).join("")}</ul>
      </div>`
    )
    .join("");
}

function renderAbout() {
  const a = SITE_CONFIG.about;
  document.getElementById("aboutText").textContent = a.text;
  document.getElementById("aboutName").textContent = SITE_CONFIG.name;
  document.getElementById("aboutLocation").textContent = a.location;
  document.getElementById("aboutEmail").textContent = a.email;
  document.getElementById("aboutAvailability").textContent = a.availability;
}

function renderSkills() {
  const wrap = document.getElementById("skillsList");
  wrap.innerHTML = (SITE_CONFIG.skills || [])
    .map(
      (s) => `<div class="skill-row"><div class="top"><span>${s.name}</span><span class="pct">${s.level}%</span></div><div class="skill-bar"><span data-level="${s.level}"></span></div></div>`
    )
    .join("");
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const projects = getProjects();
  if (!projects.length) {
    grid.innerHTML = `<div class="empty-projects">Проектов пока нет. Добавьте первый на странице <a href="admin.html" style="color:var(--accent); font-weight:600;">admin.html</a>.</div>`;
    setupProjectsScroller();
    return;
  }
  grid.innerHTML = projects
    .map((p) => {
      const thumb = p.image
        ? `<img src="${p.image}" alt="${p.title}" />`
        : `<span style="font-size:13px;">Нет изображения</span>`;
      const tags = (p.tags || []).map((t) => `<span>${t}</span>`).join("");
      return `
        <div class="project-card">
          <div class="project-thumb">
            ${p.category ? `<span class="cat-tag"><span class="dot"></span>${p.category}</span>` : ""}
            ${thumb}
          </div>
          <div class="project-body">
            <h4>${p.title}</h4>
            <p>${p.description || ""}</p>
            <div class="project-tags">${tags}</div>
            <div class="project-card-foot">
              <span></span>
              <a class="project-link" href="${p.link || "#"}" target="_blank" rel="noopener">${ICONS.external}</a>
            </div>
          </div>
        </div>`;
    })
    .join("");
  setupProjectsScroller();
}

function setupProjectsScroller() {
  const grid = document.getElementById("projectsGrid");
  const prevBtn = document.getElementById("projectsPrev");
  const nextBtn = document.getElementById("projectsNext");
  if (!grid || !prevBtn || !nextBtn) return;

  function cardStep() {
    const card = grid.querySelector(".project-card");
    const gap = 22;
    return card ? card.getBoundingClientRect().width + gap : 320;
  }

  function updateArrows() {
    const maxScroll = grid.scrollWidth - grid.clientWidth - 2;
    prevBtn.disabled = grid.scrollLeft <= 4;
    nextBtn.disabled = maxScroll <= 4 || grid.scrollLeft >= maxScroll;
  }

  prevBtn.onclick = () => grid.scrollBy({ left: -cardStep(), behavior: "smooth" });
  nextBtn.onclick = () => grid.scrollBy({ left: cardStep(), behavior: "smooth" });
  grid.addEventListener("scroll", updateArrows);
  window.addEventListener("resize", updateArrows);
  updateArrows();
}

function renderProcess() {
  const track = document.getElementById("processTrack");
  track.innerHTML = (SITE_CONFIG.process || [])
    .map(
      (p, i) => `
      <div class="process-step">
        <div class="process-icon">${ICONS[PROCESS_ICON_KEYS[i % PROCESS_ICON_KEYS.length]]}</div>
        <span class="num">${p.num}</span>
        <h4>${p.title}</h4>
        <p>${p.text}</p>
      </div>`
    )
    .join("");
}

let testimonialIndex = 0;
let testimonialTimer = null;
function renderTestimonial() {
  const list = SITE_CONFIG.testimonials || [];
  const slot = document.getElementById("testimonialSlot");
  const dotsWrap = document.getElementById("testimonialDots");
  if (!list.length) {
    slot.innerHTML = `<p style="color:var(--text-dimmer); font-size:13.5px;">Отзывов пока нет — они появятся здесь после первых проектов.</p>`;
    dotsWrap.innerHTML = "";
    return;
  }
  const t = list[testimonialIndex % list.length];
  const initials = t.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  slot.innerHTML = `
    <div class="testimonial-card">
      <p class="body">${t.text}</p>
      <div class="testimonial-author">
        <div class="avatar">${t.avatar ? `<img src="${t.avatar}" alt="${t.name}"/>` : initials}</div>
        <div>
          <div class="name">${t.name}</div>
          <div class="role">${t.role || ""}</div>
        </div>
      </div>
    </div>`;
  dotsWrap.innerHTML = list
    .map((_, i) => `<span class="${i === testimonialIndex % list.length ? "active" : ""}" data-i="${i}"></span>`)
    .join("");
  dotsWrap.querySelectorAll("span").forEach((dot) =>
    dot.addEventListener("click", () => {
      testimonialIndex = parseInt(dot.dataset.i, 10);
      renderTestimonial();
      startTestimonialRotation();
    })
  );
}
function startTestimonialRotation() {
  const list = SITE_CONFIG.testimonials || [];
  if (list.length < 2) return;
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % list.length;
    renderTestimonial();
  }, 5500);
}

function renderNumbers() {
  document.getElementById("numbersGrid").innerHTML = (SITE_CONFIG.numbers || [])
    .map((n) => `<div class="number-card"><div class="val">${n.value}</div><div class="lab">${n.label}</div></div>`)
    .join("");
}

function renderContact() {
  const c = SITE_CONFIG.contact;
  document.getElementById("contactHeading").textContent = c.heading;
  document.getElementById("contactText").textContent = c.text;
  document.getElementById("contactEmail").textContent = c.email;
  document.getElementById("contactEmailBtn").href = `mailto:${c.email}`;
  setupEmailCopyFallback(c.email);
  document.getElementById("contactPhone").textContent = c.phone || "";
  document.getElementById("contactLocation").textContent = SITE_CONFIG.about.location;
  if (c.availabilityText) document.getElementById("contactAvailability").textContent = c.availabilityText;
  const tgBtn = document.getElementById("contactTelegramBtn");
  if (c.telegramUrl) tgBtn.href = c.telegramUrl;
  else tgBtn.style.display = "none";
  setupContactForm(); 
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("contactFormStatus");
  const submitBtn = document.getElementById("contactFormSubmit");
  
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    // НЕ ОТМЕНЯЕМ ОТПРАВКУ! 
    // Форма отправляется стандартным способом через action и method="POST"
    // Мы просто показываем статус
    
    statusEl.className = "contact-form-status";
    submitBtn.disabled = true;
    statusEl.textContent = "⏳ Отправка...";

    // Ждём 3 секунды (время на отправку)
    setTimeout(() => {
      statusEl.textContent = "✅ Спасибо! Сообщение отправлено, я отвечу в ближайшее время.";
      statusEl.classList.add("ok");
      submitBtn.disabled = false;
      
      // Очищаем форму через 5 секунд
      setTimeout(() => {
        form.reset();
      }, 5000);
    }, 3000);

    // Реальная отправка произойдёт сама благодаря action и method="POST"
    // Но нам нужно предотвратить перезагрузку страницы, чтобы увидеть статус
    e.preventDefault(); // Отменяем стандартную отправку
    
    // И отправляем данные через fetch
    try {
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        statusEl.textContent = "✅ Спасибо! Сообщение отправлено, я отвечу в ближайшее время.";
        statusEl.classList.add("ok");
        form.reset();
      } else {
        const errorData = await response.json();
        console.error("Ошибка Formspree:", errorData);
        statusEl.textContent = `❌ Ошибка: ${errorData.error || 'Не удалось отправить'}`;
        statusEl.classList.add("err");
      }
    } catch (error) {
      console.error("❌ Ошибка:", error);
      statusEl.textContent = `❌ Не удалось отправить. Напишите напрямую на ${SITE_CONFIG.contact.email}`;
      statusEl.classList.add("err");
    } finally {
      submitBtn.disabled = false;
    }
  });
}

function setupThemeToggle() {
  const saved = localStorage.getItem("portfolio_theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    if (next === "light") document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("portfolio_theme", next);
  });
}

function setupMobileNav() {
  const nav = document.getElementById("mobileNav");
  document.getElementById("navToggle").addEventListener("click", () => nav.classList.add("open"));
  document.getElementById("mobileNavClose").addEventListener("click", () => nav.classList.remove("open"));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
}

function setupActiveNav() {
  const sections = document.querySelectorAll("main section[id], .hero[id]");
  const links = document.querySelectorAll("nav.main-nav a");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s));
}

function setupReveal() {
  const targets = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((t) => io.observe(t));
}

function setupSkillBars() {
  const bars = document.querySelectorAll(".skill-bar span");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level + "%";
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  bars.forEach((b) => io.observe(b));
}

function init() {
  renderHero();
  renderAbout();
  renderSkills();
  renderExperience();
  renderProjects();
  renderProcess();
  renderTestimonial();
  startTestimonialRotation();
  renderNumbers();
  renderContact();
  renderFooter();
  setupThemeToggle();
  setupMobileNav();
  setupActiveNav();
  setupReveal();
  setupSkillBars();
  setupScrollProgress();
  setupBackToTop();
}

function setupScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;
  function update() {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = max > 0 ? `${(scrolled / max) * 100}%` : "0%";
  }
  document.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function setupBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  function update() {
    btn.classList.toggle("show", window.scrollY > 480);
  }
  document.addEventListener("scroll", update, { passive: true });
  update();
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

document.addEventListener("DOMContentLoaded", init);
