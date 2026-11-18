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
    merged.works = merged.works.map(work => ({ ...work, tags: Array.isArray(work.tags) ? work.tags : [], linkedMateria: Array.isArray(work.linkedMateria) ? work.linkedMateria : [] }));
    merged.profile.avatarUrl = safeUrl(merged.profile.avatarUrl);
    const resume = String(merged.profile.resumeUrl || '').trim();
    const isBundledResume = !resume || resume === '#' || /^(?:\.\/|\/)?(?:public\/)?resume\.pdf(?:[?#].*)?$/i.test(resume);
    merged.profile.resumeUrl = isBundledResume ? 'resume.pdf' : safeUrl(resume);
    for (const key of ['linkedinUrl', 'facebookUrl']) merged.profile.contact[key] = safeUrl(merged.profile.contact[key]);
    merged.works = merged.works.map(work => ({ ...work, image: safeUrl(work.image), url: safeUrl(work.url) }));
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
        <a class="project-image" href="${url(work.url)}" target="_blank" rel="noreferrer"><img src="${url(work.image)}" alt="${escape(work.title)}" loading="lazy"><span aria-hidden="true">&#8599;</span></a>
        <div class="project-title"><h3>${escape(work.title)}</h3><span>${String(index + 1).padStart(2, '0')}</span></div>
        <dl><div><dt>Role</dt><dd>${escape(work.role)}</dd></div><div><dt>Focus</dt><dd>${escape(work.tags.join(' / '))}</dd></div></dl>
        <p>${escape(work.description)}</p><details><summary>Project details</summary><p>${escape(work.substoryLore)}</p><a class="text-link" href="${url(work.url)}" target="_blank" rel="noreferrer">${escape(work.actionLabel)} &#8599;</a></details>
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
