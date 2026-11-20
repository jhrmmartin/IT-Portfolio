/* Shared data adapter for the editorial site and the existing owner editor. */
(() => {
  const storageKey = 'jehrome_portfolio_data_v1';
  const draftKey = 'jehrome_has_unpublished_draft';
  const assetBase = new URL('../', document.currentScript.src);
  const defaults = JSON.parse(document.getElementById('portfolio-defaults').textContent);

  function normalize(value) {
    if (!value || !value.profile || !Array.isArray(value.works)) {
      throw new Error('Portfolio data must contain a profile and projects.');
    }
    const merged = { ...structuredClone(defaults), ...value };
    merged.profile = { ...defaults.profile, ...value.profile, contact: { ...defaults.profile.contact, ...value.profile.contact } };
    for (const key of ['materia', 'certifications', 'customSections']) {
      if (!Array.isArray(merged[key])) throw new Error('Invalid ' + key + ' collection.');
    }
    merged.works = merged.works.map(work => {
      const fallbackWork = defaults.works.find(dw => dw.id === work.id) || {};
      const rawCs = { ...(fallbackWork.caseStudy || {}), ...(work.caseStudy || {}) };
      const problem = { ...(fallbackWork.caseStudy?.problem || {}), ...(rawCs.problem || {}) };
      const solution = { ...(fallbackWork.caseStudy?.solution || {}), ...(rawCs.solution || {}) };
      const features = Array.isArray(rawCs.features) && rawCs.features.length
        ? rawCs.features.map(f => ({
            eyebrow: String(f.eyebrow || 'KEY FEATURE'),
            title: String(f.title || ''),
            description: String(f.description || ''),
            images: Array.isArray(f.images) ? f.images.filter(Boolean).map(img => safeUrl(img)).filter(u => u !== '#') : [],
            highlights: Array.isArray(f.highlights) ? f.highlights.filter(Boolean).map(String) : []
          }))
        : (fallbackWork.caseStudy?.features || []);
      const techStack = Array.isArray(rawCs.techStack) && rawCs.techStack.length
        ? rawCs.techStack.map(t => ({ name: String(t.name || ''), role: String(t.role || '') })).filter(t => t.name)
        : (fallbackWork.caseStudy?.techStack || []);

      return {
        ...fallbackWork,
        ...work,
        image: safeUrl(work.image || fallbackWork.image),
        url: safeUrl(work.url || fallbackWork.url),
        tags: Array.isArray(work.tags) ? work.tags : (fallbackWork.tags || []),
        linkedMateria: Array.isArray(work.linkedMateria) ? work.linkedMateria : (fallbackWork.linkedMateria || []),
        caseStudy: {
          pitch: String(rawCs.pitch || work.description || ''),
          categoryYear: String(rawCs.categoryYear || `${(work.tags && work.tags[0]) || 'PROJECT'} · 2025`),
          credits: String(rawCs.credits || `${work.role || 'Lead Designer'} — ${merged.profile.name}`),
          logoImage: rawCs.logoImage ? safeUrl(rawCs.logoImage) : '',
          problem: {
            heading: String(problem.heading || 'The Problem'),
            body: String(problem.body || work.weakness || work.description || ''),
            image: problem.image ? safeUrl(problem.image) : '',
            highlights: Array.isArray(problem.highlights) ? problem.highlights.map(String) : []
          },
          solution: {
            heading: String(solution.heading || 'The Solution'),
            body: String(solution.body || work.substoryLore || work.description || ''),
            image: solution.image ? safeUrl(solution.image) : safeUrl(work.image || fallbackWork.image)
          },
          features,
          techStack
        }
      };
    });
    merged.profile.avatarUrl = safeUrl(merged.profile.avatarUrl);
    const resume = String(merged.profile.resumeUrl || '').trim();
    const isBundledResume = !resume || resume === '#' || /^(?:\.\/|\/)?(?:public\/)?resume\.pdf(?:[?#].*)?$/i.test(resume);
    merged.profile.resumeUrl = isBundledResume ? 'resume.pdf' : safeUrl(resume);
    for (const key of ['linkedinUrl', 'facebookUrl']) merged.profile.contact[key] = safeUrl(merged.profile.contact[key]);
    merged.certifications = merged.certifications.map(cert => ({ ...cert, url: safeUrl(cert.url) }));
    return merged;
  }

  function safeUrl(value) {
    const url = String(value || '').trim();
    return /^(https?:\/\/|mailto:|[^:/?#]+(?:\/|\.|$)|\/[^/])/i.test(url) && !/[<>\u0000-\u001f]/.test(url) ? url : '#';
  }

  function renderStatic(data) {
    const profile = data.profile;
    const text = (selector, value) => {
      const element = document.querySelector(selector);
      if (element) element.textContent = value || '';
    };
    const link = (selector, value) => {
      const element = document.querySelector(selector);
      if (element) element.href = safeUrl(value);
    };
    const escape = window.PortfolioApp.escapeHtml;
    const url = value => escape(safeUrl(value));
    const mastheadBrand = document.querySelector('.masthead > a');
    if (mastheadBrand) {
      if (mastheadBrand.querySelector('.brand-logo')) {
        mastheadBrand.setAttribute('aria-label', `ROKU — ${profile.name} Home`);
      } else {
        mastheadBrand.textContent = (profile.name || '').toUpperCase();
      }
    }
    const portraitHeading = document.querySelector('.portrait h2');
    if (portraitHeading) {
      const first = (profile.firstName || profile.name.split(' ')[0] || '').toUpperCase();
      const last = (profile.lastName || profile.name.split(' ').slice(1).join(' ') || '').toUpperCase();
      portraitHeading.innerHTML = last ? `${escape(first)}<br>${escape(last)}` : escape(first);
    }
    document.querySelector('.portrait img').src = safeUrl(profile.avatarUrl);
    text('.profile-copy > p:first-of-type', profile.aboutBio);
    text('.profile-copy > p:nth-of-type(2)', profile.careerGoals);
    text('.profile-facts > div:first-child > p', profile.university);
    document.querySelector('.profile-copy .text-link').href = profile.resumeUrl === 'resume.pdf' ? new URL('resume.pdf', assetBase).href : profile.resumeUrl;
    text('.email', profile.contact.email + ' ↗');
    link('.email', 'mailto:' + profile.contact.email);
    document.querySelector('.profile-facts ul').innerHTML = data.materia.map(skill => `<li>${escape(skill.name)}</li>`).join('');
    document.querySelector('.project-grid').innerHTML = data.works.map((work, index) => `
      <article class="project" data-category="${work.linkedMateria.includes('mat-gamedesign') ? 'Game design' : 'IT &amp; systems'}">
        <a class="project-image" href="#project=${escape(work.id)}" data-open-case-study="${escape(work.id)}"><img src="${url(work.image)}" alt="${escape(work.title)}" loading="lazy"><span aria-hidden="true">&#8599;</span></a>
        <div class="project-title"><h3>${escape(work.title)}</h3><span>${String(index + 1).padStart(2, '0')}</span></div>
        <dl><div><dt>Role</dt><dd>${escape(work.role)}</dd></div><div><dt>Focus</dt><dd>${escape(work.tags.join(' / '))}</dd></div></dl>
        <p>${escape(work.description)}</p>
        <div class="project-actions">
          <button type="button" class="case-study-btn" data-open-case-study="${escape(work.id)}">View case study &rarr;</button>
          <a class="text-link" href="${url(work.url)}" target="_blank" rel="noreferrer">${escape(work.actionLabel)} &#8599;</a>
        </div>
      </article>`).join('');
    document.querySelector('.credentials > div').innerHTML = data.certifications.map(cert => `<a href="${url(cert.url)}" target="_blank" rel="noreferrer"><span>${escape(cert.title)}<small>${escape(cert.issuer)} · ${escape(cert.date)}</small></span><span aria-hidden="true">&#8599;</span></a>`).join('');
    document.querySelector('.timeline-section').innerHTML = '<span class="eyebrow">04 / EXPERIENCE</span><h2 id="timeline-heading">The journey so far.</h2>' + data.customSections.flatMap(section => section.items || []).map(item => `<article><p class="timeline-meta">${escape(item.meta).replace(/\u0007/g, ' / ')}</p><div><h3>${escape(item.title)}</h3><p>${escape(item.description)}</p></div></article>`).join('');
    document.querySelector('[data-filter][aria-pressed="true"]')?.click();
    if (typeof window.refreshPortfolioReveals === 'function') window.refreshPortfolioReveals();
  }

  let cachedCanTransitionDisplay;
  function canTransitionDisplay() {
    if (cachedCanTransitionDisplay !== undefined) return cachedCanTransitionDisplay;
    if (!document.body) return false;
    const probe = document.createElement('div');
    probe.style.cssText = 'position:fixed;visibility:hidden;pointer-events:none;transition:display .1s allow-discrete';
    document.body.appendChild(probe);
    void getComputedStyle(probe).display;
    probe.style.display = 'none';
    cachedCanTransitionDisplay = getComputedStyle(probe).display === 'block';
    probe.remove();
    return cachedCanTransitionDisplay;
  }

  function supportsTopLayerExit() {
    return window.CSS?.supports?.('overlay', 'auto') && canTransitionDisplay();
  }

  async function closeTopLayer(element) {
    if (!element || !element.open) return;
    if (!supportsTopLayerExit()) {
      element.setAttribute('data-closing', '');
      const animations = element.getAnimations({ subtree: true });
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise((r) => setTimeout(r, 2000)),
        ]);
      }
      if (!element.hasAttribute('data-closing')) return;
      element.removeAttribute('data-closing');
    }
    element.close();
  }

  window.PortfolioApp = {
    data: structuredClone(defaults),
    closeTopLayer,
    escapeHtml(value) {
      return String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
    },
    renderAll() {
      window.dispatchEvent(new CustomEvent('portfolio-data-change', { detail: structuredClone(this.data) }));
      if (!document.querySelector('[data-react-portfolio]')) renderStatic(this.data);
    },
    saveData(value, isDraft = true) {
      const normalized = normalize(value);
      localStorage.setItem(storageKey, JSON.stringify(normalized));
      localStorage.setItem(draftKey, String(isDraft));
      this.data = normalized;
      this.renderAll();
    },
    resetToDefault() {
      this.saveData(structuredClone(defaults));
    },
    async loadData() {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved && localStorage.getItem(draftKey) === 'true') {
          this.data = normalize(JSON.parse(saved));
          this.renderAll();
          return;
        }
      } catch { /* Corrupt drafts fall back to published data. */ }
      try {
        const isLocalPreview = /^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname);
        if (isLocalPreview) {
          const localRes = await fetch(new URL('data/portfolio-data.json', assetBase).href, {
            cache: 'no-store',
            signal: AbortSignal.timeout(4000)
          });
          if (localRes.ok) {
            const localData = normalize(await localRes.json());
            if (localStorage.getItem(draftKey) !== 'true') this.data = localData;
            this.renderAll();
            return;
          }
        }
        const repo = localStorage.getItem('jehrome_gh_repo') || 'jhrmmartin/IT-Portfolio';
        if (!/^[\w.-]+\/[\w.-]+$/.test(repo)) return;
        const response = await fetch(`https://api.github.com/repos/${repo}/contents/data/portfolio-data.json?ref=main`, {
          headers: { Accept: 'application/vnd.github.raw+json' },
          cache: 'no-store', signal: AbortSignal.timeout(8000)
        });
        if (!response.ok) return;
        const published = normalize(await response.json());
        // A draft created while the request was pending takes precedence.
        if (localStorage.getItem(draftKey) !== 'true') this.data = published;
      } catch { /* Embedded content remains available offline. */ }
      this.renderAll();
    }
  };

  (function wireCmsLightDismiss() {
    const dialog = document.getElementById('cms-modal');
    if (!dialog) return;
    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      closeTopLayer(dialog);
    });
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      const clickedInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!clickedInside) closeTopLayer(dialog);
    });
  })();

  /* ==========================================================================
     5-STAGE EDITORIAL CASE STUDY MODAL & DEEP-LINK ROUTING (#project=<id>)
     ========================================================================== */
  (function initCaseStudies() {
    const app = window.PortfolioApp;
    let activeProjectId = null;

    function buildBlueprintCard(eyebrow, title, points) {
      const esc = app.escapeHtml;
      const list = (points && points.length ? points : ['Structured design & architecture breakdown']).map((pt, i) => `
        <li><span>${String(i + 1).padStart(2, '0')}</span><div>${esc(pt)}</div></li>
      `).join('');
      return `
        <div class="cs-blueprint-card">
          <span class="cs-blueprint-eyebrow">${esc(eyebrow)}</span>
          <div class="cs-blueprint-title">${esc(title)}</div>
          <ul class="cs-blueprint-list">${list}</ul>
        </div>
      `;
    }

    function renderCaseStudy(workId) {
      const dialog = document.getElementById('case-study-modal');
      const container = document.getElementById('case-study-content');
      if (!dialog || !container || !app.data?.works?.length) return false;

      const works = app.data.works;
      const idx = works.findIndex(w => w.id === workId);
      if (idx === -1) return false;

      const work = works[idx];
      const cs = work.caseStudy || {};
      const esc = app.escapeHtml;
      const url = v => esc(safeUrl(v));

      const prevWork = works[(idx - 1 + works.length) % works.length];
      const nextWork = works[(idx + 1) % works.length];

      const problemHasImg = cs.problem?.image && cs.problem.image !== '#';
      const problemMediaHtml = problemHasImg
        ? `<div class="cs-media-frame"><img src="${url(cs.problem.image)}" alt="${esc(work.title)} — Problem Context" loading="lazy"></div>`
        : buildBlueprintCard('CHALLENGE DIAGNOSTIC', work.weakness || 'Core Problem & Constraints', cs.problem?.highlights || [work.weakness]);

      const solutionImg = (cs.solution?.image && cs.solution.image !== '#') ? cs.solution.image : work.image;
      const solutionMediaHtml = `<div class="cs-media-frame"><img src="${url(solutionImg)}" alt="${esc(work.title)} — Solution Overview" loading="lazy"></div>`;

      const featuresList = Array.isArray(cs.features) && cs.features.length
        ? cs.features
        : [
            {
              eyebrow: '01 / CORE ARCHITECTURE',
              title: work.substoryTitle || work.title,
              description: work.substoryLore || work.description,
              images: [work.image],
              highlights: work.tags || []
            }
          ];

      const featuresHtml = featuresList.map((feat, fIdx) => {
        const validImgs = (feat.images || []).filter(img => img && img !== '#');
        let mediaHtml = '';
        if (validImgs.length >= 2) {
          mediaHtml = `
            <div class="cs-feature-media is-stacked">
              ${validImgs.slice(0, 2).map(img => `<div class="cs-media-frame"><img src="${url(img)}" alt="${esc(feat.title)}" loading="lazy"></div>`).join('')}
            </div>
          `;
        } else if (validImgs.length === 1) {
          mediaHtml = `
            <div class="cs-feature-media">
              <div class="cs-media-frame"><img src="${url(validImgs[0])}" alt="${esc(feat.title)}" loading="lazy"></div>
            </div>
          `;
        } else {
          mediaHtml = `
            <div class="cs-feature-media">
              ${buildBlueprintCard(feat.eyebrow || `FEATURE 0${fIdx + 1}`, 'System Mechanics & Design Breakdown', feat.highlights || [feat.description])}
            </div>
          `;
        }

        return `
          <article class="cs-feature">
            ${mediaHtml}
            <div class="cs-feature-copy">
              <span class="cs-feature-eyebrow">${esc(feat.eyebrow || `0${fIdx + 1} / KEY FEATURE`)}</span>
              <h4>${esc(feat.title)}</h4>
              <p>${esc(feat.description)}</p>
            </div>
          </article>
        `;
      }).join('');

      const techList = Array.isArray(cs.techStack) && cs.techStack.length
        ? cs.techStack
        : (work.tags || []).map(tag => ({ name: tag, role: work.role }));

      const techHtml = techList.map(item => `
        <div class="cs-tech-item">
          <strong>${esc(item.name)}</strong>
          <span>${esc(item.role)}</span>
        </div>
      `).join('');

      const logoHtml = cs.logoImage && cs.logoImage !== '#'
        ? `<img class="cs-hero-logo" src="${url(cs.logoImage)}" alt="${esc(work.title)}">`
        : '';

      container.innerHTML = `
        <div class="cs-topbar">
          <div class="cs-topbar-meta">
            <span class="cs-topbar-index">${String(idx + 1).padStart(2, '0')} / ${String(works.length).padStart(2, '0')}</span>
            <span class="cs-topbar-title">${esc(work.title)}</span>
          </div>
          <div class="cs-topbar-actions">
            <a class="cs-ext-pill" href="${url(work.url)}" target="_blank" rel="noreferrer">${esc(work.actionLabel || 'Open Project')} &#8599;</a>
            <button type="button" class="cs-close-btn" data-close-case-study="true" aria-label="Close case study">&times;</button>
          </div>
        </div>

        <!-- Stage 1: Hero Header (ss1) -->
        <header class="cs-hero">
          ${logoHtml}
          <span class="cs-hero-badge">${esc(work.substoryNumber || `PROJECT 0${idx + 1}`)}</span>
          <h2>${esc(work.title)}</h2>
          <p class="cs-hero-pitch">${esc(cs.pitch || work.description)}</p>
          <div class="cs-hero-category">${esc(cs.categoryYear || `${(work.tags && work.tags[0]) || 'PROJECT'} · 2025`)}</div>
          <p class="cs-hero-credits">${esc(cs.credits || `${work.role} • ${app.data.profile.name}`)}</p>
        </header>

        <!-- Stage 2 & 3: The Problem & The Solution (ss2, ss3) -->
        <section class="cs-narrative" aria-label="Problem and solution overview">
          <div class="cs-split">
            <div class="cs-split-copy">
              <h3>${esc(cs.problem?.heading || 'The Problem')}</h3>
              <p>${esc(cs.problem?.body || work.weakness || work.description)}</p>
            </div>
            <div class="cs-split-media">
              ${problemMediaHtml}
            </div>
          </div>

          <div class="cs-split cs-split-reverse">
            <div class="cs-split-media">
              ${solutionMediaHtml}
            </div>
            <div class="cs-split-copy">
              <h3>${esc(cs.solution?.heading || 'The Solution')}</h3>
              <p>${esc(cs.solution?.body || work.substoryLore || work.description)}</p>
            </div>
          </div>
        </section>

        <!-- Stage 4: KEY FEATURES Band & Alternating Zig-Zag Rows (ss4–ss10) -->
        <div class="cs-features-band">
          <h3>KEY FEATURES:</h3>
        </div>
        <section class="cs-features" aria-label="Key project features">
          ${featuresHtml}
        </section>

        <!-- Stage 5: Primary Action CTA & TECH STACK Grid (ss11) -->
        <div class="cs-cta-row">
          <a class="cs-primary-cta" href="${url(work.url)}" target="_blank" rel="noreferrer">
            ${esc(work.actionLabel || 'Visit Project')} &#8599;
          </a>
        </div>

        <section class="cs-tech" aria-label="Technology stack">
          <h3>TECH STACK</h3>
          <div class="cs-tech-grid">
            ${techHtml}
          </div>
        </section>

        <nav class="cs-footer-nav" aria-label="Browse adjacent project case studies">
          <button type="button" class="cs-nav-btn" data-open-case-study="${esc(prevWork.id)}">&larr; ${esc(prevWork.title)}</button>
          <button type="button" class="cs-nav-btn" data-open-case-study="${esc(nextWork.id)}">${esc(nextWork.title)} &rarr;</button>
        </nav>
      `;

      return true;
    }

    function openCaseStudy(workId, updateHash = true) {
      const dialog = document.getElementById('case-study-modal');
      if (!dialog) return;
      if (!renderCaseStudy(workId)) return;

      activeProjectId = workId;
      if (!dialog.open) dialog.showModal();
      dialog.scrollTop = 0;

      if (updateHash) {
        const targetHash = `#project=${encodeURIComponent(workId)}`;
        if (window.location.hash !== targetHash) {
          history.pushState(null, '', targetHash);
        }
      }
    }

    function closeCaseStudy(clearHash = true) {
      const dialog = document.getElementById('case-study-modal');
      activeProjectId = null;
      if (clearHash && window.location.hash.startsWith('#project=')) {
        history.pushState(null, '', window.location.pathname + window.location.search + '#works');
      }
      if (dialog?.open) closeTopLayer(dialog);
    }

    app.openCaseStudy = openCaseStudy;
    app.closeCaseStudy = closeCaseStudy;

    document.addEventListener('click', (event) => {
      if (!(event.target instanceof Element)) return;
      const openTrigger = event.target.closest('[data-open-case-study]');
      if (openTrigger) {
        event.preventDefault();
        const workId = openTrigger.getAttribute('data-open-case-study');
        if (workId) openCaseStudy(workId, true);
        return;
      }
      const closeTrigger = event.target.closest('[data-close-case-study]');
      if (closeTrigger) {
        event.preventDefault();
        closeCaseStudy(true);
      }
    });

    const csDialog = document.getElementById('case-study-modal');
    if (csDialog) {
      csDialog.addEventListener('cancel', (event) => {
        event.preventDefault();
        closeCaseStudy(true);
      });
      csDialog.addEventListener('click', (event) => {
        if (event.target !== csDialog) return;
        const rect = csDialog.getBoundingClientRect();
        const clickedInside =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;
        if (!clickedInside) closeCaseStudy(true);
      });
    }

    function syncHashRoute() {
      const rawHash = window.location.hash || '';
      if (rawHash.startsWith('#project=')) {
        let id = rawHash.slice('#project='.length);
        try { id = decodeURIComponent(id); } catch { /* retain raw fragment */ }
        if (id) openCaseStudy(id, false);
      } else if (activeProjectId) {
        closeCaseStudy(false);
      }
    }

    window.addEventListener('hashchange', syncHashRoute);
    window.addEventListener('popstate', syncHashRoute);
    window.addEventListener('portfolio-data-change', () => {
      if (activeProjectId) renderCaseStudy(activeProjectId);
      else if (window.location.hash.startsWith('#project=')) syncHashRoute();
    });

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', syncHashRoute, { once: true });
    } else {
      setTimeout(syncHashRoute, 0);
    }
  })();

  (function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const statusEl = document.getElementById('contact-form-status');
    const submitBtn = document.getElementById('contact-submit-btn');
    const topicField = form.querySelector('[name="topic"]');
    const fields = {
      name: document.getElementById('contact-name'),
      email: document.getElementById('contact-email'),
      message: document.getElementById('contact-message')
    };
    const COOLDOWN_MS = 30000;
    let lastSentAt = 0;

    const setStatus = (kind, html) => {
      if (!statusEl) return;
      statusEl.dataset.kind = kind || 'info';
      statusEl.innerHTML = html;
    };

    const setFieldError = (field, message) => {
      if (!field) return;
      const errorEl = document.getElementById(`${field.id}-error`);
      if (message) {
        field.setAttribute('aria-invalid', 'true');
        if (errorEl) {
          errorEl.textContent = message;
          errorEl.classList.remove('hidden');
        }
      } else {
        field.removeAttribute('aria-invalid');
        if (errorEl) {
          errorEl.textContent = '';
          errorEl.classList.add('hidden');
        }
      }
    };

    const validate = () => {
      const name = (fields.name?.value || '').trim();
      const email = (fields.email?.value || '').trim();
      const message = (fields.message?.value || '').trim();
      let firstInvalid = null;

      setFieldError(fields.name, name.length < 2 ? 'Please enter your name.' : '');
      if (name.length < 2) firstInvalid = firstInvalid || fields.name;

      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
      setFieldError(fields.email, emailOk ? '' : 'Please enter a valid email address.');
      if (!emailOk) firstInvalid = firstInvalid || fields.email;

      setFieldError(fields.message, message.length < 10 ? 'A few more words, please (10+ characters).' : '');
      if (message.length < 10) firstInvalid = firstInvalid || fields.message;

      if (firstInvalid) firstInvalid.focus();
      return !firstInvalid;
    };

    Object.values(fields).forEach(field => {
      field?.addEventListener('input', () => {
        if (field.getAttribute('aria-invalid') === 'true') setFieldError(field, '');
      });
    });

    const buildMailto = () => {
      const rawEmail = this.data?.profile?.contact?.email || 'martinjehrome72@gmail.com';
      const email = String(rawEmail).replace(/[^a-zA-Z0-9@._+-]/g, '');
      const topic = topicField?.value || 'Portfolio enquiry';
      const body = [
        `Name: ${(fields.name?.value || '').trim()}`,
        `Email: ${(fields.email?.value || '').trim()}`,
        '',
        (fields.message?.value || '').trim()
      ].join('\n');
      return `mailto:${email}?subject=${encodeURIComponent(`[Portfolio] ${topic}`)}&body=${encodeURIComponent(body)}`;
    };

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (form.dataset.sending === 'true') return;

      if (!validate()) {
        setStatus('error', 'Please fix the highlighted fields.');
        return;
      }

      if (Date.now() - lastSentAt < COOLDOWN_MS) {
        setStatus('info', 'Transmission already sent — give it a moment.');
        return;
      }

      const accessKey = form.querySelector('[name="access_key"]')?.value || '';
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        setStatus('info', `Relay not configured yet. <a href="${buildMailto()}">Email me directly instead &rarr;</a>`);
        return;
      }

      form.dataset.sending = 'true';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Transmitting...';
      }
      setStatus('info', 'Opening channel...');

      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      const endpoint = form.getAttribute('action') || 'https://api.web3forms.com/submit';

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' },
          signal: controller.signal
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.success !== true) {
          throw new Error(result.message || `HTTP ${response.status}`);
        }

        lastSentAt = Date.now();
        form.reset();
        Object.values(fields).forEach(field => setFieldError(field, ''));
        setStatus('success', 'Message delivered. I\'ll reply within 24 hours.');
        
      } catch (err) {
        console.error('Contact form submission failed:', err);
        const isTimeout = err.name === 'AbortError';
        const msg = isTimeout
          ? 'Transmission timed out (15s deadline reached).'
          : 'Transmission failed.';
        setStatus('error', `${msg} <a href="${buildMailto()}">Email me directly instead &rarr;</a>`);
      } finally {
        clearTimeout(timer);
        form.dataset.sending = 'false';
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      }
    });
  }).call(window.PortfolioApp);
  window.PortfolioApp.loadData();
})();
