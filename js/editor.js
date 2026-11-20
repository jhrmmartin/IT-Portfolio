/**
 * ============================================================================
 * JEHROME MARTIN PORTFOLIO — OWNER-ONLY NO-CODE "TACTICAL TERMINAL" (CMS)
 * Hidden from public visitors + Protected by SHA-256 Security Clearance Gate.
 * ============================================================================
 */

const PASSCODE_HASH_KEY = 'jehrome_cms_passcode_hash_v1';
// SHA-256 hash of default passcode: "SOLDIER7"
const DEFAULT_PASSCODE_HASH = '38d49cd1bae573060f7fac8059b45abeb054d1baa8d4890c1c102262a66210de';

window.PortfolioEditor = {
  isAuthenticated: false,
  activeTab: 'works',
  editingWorkIndex: null,
  editingMateriaIndex: null,
  secretClickCount: 0,
  secretClickTimer: null,

  init() {
    this.bindSecretTriggers();
  },

  /* --------------------------------------------------------------------------
     HIDDEN OWNER TRIGGERS (No Public Buttons Visible to Visitors)
     1. Keyboard Shortcut: Ctrl + Shift + E
     2. Footer Secret Trigger: 5 rapid clicks on "SYS.BUILD // FF7-Y0"
     3. URL Parameter: ?admin=1 or #admin
     -------------------------------------------------------------------------- */
  bindSecretTriggers() {
    // 1. Keyboard shortcut: Ctrl + Shift + E
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'e') {
        e.preventDefault();
        this.openEditor();
      }
    });

    // 2. Secret 5-click trigger on footer build label (useful on mobile/tablet)
    const secretFooterEl = document.getElementById('secret-admin-trigger');
    if (secretFooterEl) {
      secretFooterEl.addEventListener('click', () => {
        this.secretClickCount++;
        clearTimeout(this.secretClickTimer);
        if (this.secretClickCount >= 5) {
          this.secretClickCount = 0;
          this.openEditor();
        } else {
          this.secretClickTimer = setTimeout(() => {
            this.secretClickCount = 0;
          }, 1200);
        }
      });
    }

    // 3. URL parameter check (?admin=1 or #admin)
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === '1' || window.location.hash === '#admin') {
      setTimeout(() => this.openEditor(), 400);
    }
  },

  /* --------------------------------------------------------------------------
     SHA-256 CRYPTOGRAPHIC HASH HELPER
     -------------------------------------------------------------------------- */
  async sha256(message) {
    if (window.crypto && window.crypto.subtle) {
      const msgBuffer = new TextEncoder().encode(message);
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
    // Pure JS SHA-256 fallback for restricted non-secure contexts
    return this.sha256Fallback(message);
  },

  sha256Fallback(ascii) {
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }
    const mathPow = Math.pow;
    const maxWord = mathPow(2, 32);
    const lengthProperty = 'length';
    let i, j;
    let result = '';
    const words = [];
    const asciiBitLength = ascii[lengthProperty] * 8;
    let hash = [];
    const k = [];
    let primeCounter = 0;
    const isComposite = {};
    for (let candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (i = 0; i < 313; i += candidate) {
          isComposite[i] = candidate;
        }
        hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
      }
    }
    ascii += '\x80';
    while ((ascii[lengthProperty] % 64) - 56) ascii += '\x00';
    for (i = 0; i < ascii[lengthProperty]; i++) {
      j = ascii.charCodeAt(i);
      if (j >> 8) return '';
      words[i >> 2] |= j << ((3 - i) % 4) * 8;
    }
    words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
    words[words[lengthProperty]] = asciiBitLength;
    for (j = 0; j < words[lengthProperty]; ) {
      const w = words.slice(j, (j += 16));
      const oldHash = hash;
      hash = hash.slice(0, 8);
      for (i = 0; i < 64; i++) {
        const i2 = i + j;
        const w15 = w[i - 15],
          w2 = w[i - 2];
        const a = hash[0],
          e = hash[4];
        const temp1 =
          hash[7] +
          (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) +
          ((e & hash[5]) ^ (~e & hash[6])) +
          k[i] +
          (w[i] =
            i < 16
              ? w[i]
              : (w[i - 16] +
                  (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) +
                  w[i - 7] +
                  (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) |
                0);
        const temp2 =
          (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) +
          ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash = [(temp1 + temp2) | 0].concat(hash);
        hash[4] = (hash[4] + temp1) | 0;
      }
      for (i = 0; i < 8; i++) {
        hash[i] = (hash[i] + oldHash[i]) | 0;
      }
    }
    for (i = 0; i < 8; i++) {
      for (j = 3; j + 1; j--) {
        const b = (hash[i] >> (j * 8)) & 255;
        result += (b < 16 ? 0 : '') + b.toString(16);
      }
    }
    return result;
  },

  openEditor() {
    const dialog = document.getElementById('cms-modal');
    if (!dialog) return;

    if (!this.isAuthenticated) {
      this.renderAuthLockScreen();
    } else {
      this.renderEditorUI();
    }
    dialog.showModal();
  },

  /* --------------------------------------------------------------------------
     SHINRA SECURITY CLEARANCE LOCK SCREEN
     -------------------------------------------------------------------------- */
  renderAuthLockScreen(errorMsg = '') {
    const container = document.getElementById('cms-modal-content');
    const dialog = document.getElementById('cms-modal');
    if (!container) return;

    container.innerHTML = `
      <div class="max-w-md mx-auto py-6 text-center space-y-5">
        <div class="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-400/50 flex items-center justify-center text-emerald-400 text-2xl mx-auto shadow-[0_0_20px_rgba(0,229,176,0.3)]">
          <i class="fa-solid fa-lock"></i>
        </div>

        <div>
          <p class="text-xs font-mono-hud text-emerald-400 uppercase tracking-widest mb-1">
            // PORTFOLIO OWNER ACCESS • LEVEL 1 CLEARANCE
          </p>
          <h3 id="cmsModalTitle" class="text-2xl font-bold">Welcome back.</h3>
          <p class="text-xs opacity-75 mt-1">
            Sign in to update your projects, profile, and credentials.
          </p>
        </div>

        ${errorMsg ? `
          <div class="p-3 rounded bg-red-500/15 border border-red-500/40 text-red-300 text-xs font-mono-hud">
            <i class="fa-solid fa-triangle-exclamation mr-1"></i> ${errorMsg}
          </div>
        ` : ''}

        <form id="cms-auth-form" class="space-y-4 text-left">
          <div>
            <label for="cms-passcode-input" class="block text-xs font-mono-hud uppercase opacity-80 mb-1.5">
              Security Passcode
            </label>
            <input
              type="password"
              id="cms-passcode-input"
              required
              autocomplete="current-password"
              placeholder="Enter owner passcode..."
              class="w-full px-4 py-2.5 rounded bg-slate-900 border border-slate-700 focus:border-emerald-400 focus:outline-none text-sm font-mono-hud tracking-widest"
            >
          </div>

          <div class="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              id="cms-auth-cancel-btn"
              class="px-4 py-2 rounded text-xs font-mono-hud border border-slate-700 hover:bg-slate-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="px-5 py-2 rounded text-xs font-mono-hud font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition shadow-lg shadow-emerald-500/20"
            >
              <i class="fa-solid fa-key mr-1"></i> Unlock editor
            </button>
          </div>
        </form>
      </div>
    `;

    setTimeout(() => document.getElementById('cms-passcode-input')?.focus(), 50);

    document.getElementById('cms-auth-cancel-btn')?.addEventListener('click', () => {
      if (window.PortfolioApp?.closeTopLayer) window.PortfolioApp.closeTopLayer(dialog);
      else dialog?.close();
    });

    document.getElementById('cms-auth-form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = document.getElementById('cms-passcode-input')?.value || '';
      const enteredHash = await this.sha256(input.trim());
      const expectedHash = localStorage.getItem(PASSCODE_HASH_KEY) || DEFAULT_PASSCODE_HASH;

      if (enteredHash === expectedHash) {
        this.isAuthenticated = true;
        this.renderEditorUI();
      } else {
        this.renderAuthLockScreen('ACCESS DENIED: Invalid Security Passcode.');
      }
    });
  },

  renderEditorUI() {
    const container = document.getElementById('cms-modal-content');
    if (!container || !window.PortfolioApp?.data) return;

    const tabs = [
      { id: 'works', label: 'Projects', icon: 'fa-solid fa-gamepad' },
      { id: 'materia', label: 'Skills', icon: 'fa-solid fa-circle-dot' },
      { id: 'certs', label: 'Credentials', icon: 'fa-solid fa-certificate' },
      { id: 'custom', label: 'Experience', icon: 'fa-solid fa-layer-group' },
      { id: 'profile', label: 'Profile & Contact', icon: 'fa-solid fa-user-astronaut' },
      { id: 'security', label: 'Live Cloud Sync & Security', icon: 'fa-solid fa-cloud-arrow-up' }
    ];

    const hasDraft = localStorage.getItem('jehrome_has_unpublished_draft') === 'true';

    container.innerHTML = `
      <!-- Top Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-500/30 pb-4 mb-5">
        <div>
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full ${hasDraft ? 'bg-amber-400' : 'bg-emerald-400'} animate-pulse"></span>
            <span class="text-xs font-mono-hud text-emerald-400 uppercase tracking-widest">
              PORTFOLIO EDITOR • ${hasDraft ? 'UNPUBLISHED DRAFT CHANGES' : 'SAVED CONTENT'}
            </span>
          </div>
          <h3 id="cmsModalTitle" class="text-xl font-bold mt-0.5">
            Your portfolio studio
          </h3>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            id="cms-publish-live-btn"
            class="px-3.5 py-1.5 rounded text-xs font-mono-hud font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25 transition flex items-center gap-1.5"
            title="Push your changes live to GitHub & Vercel so everyone's browser sees them immediately!"
          >
            <i class="fa-solid fa-cloud-arrow-up"></i> Publish Live to Website
          </button>

          <button
            type="button"
            id="cms-export-json-btn"
            class="px-3 py-1.5 rounded text-xs font-mono-hud bg-cyan-500/20 hover:bg-cyan-500/35 text-cyan-300 border border-cyan-500/40 transition"
            title="Download portfolio-data.json backup"
          >
            <i class="fa-solid fa-download mr-1"></i> Export JSON
          </button>

          <label class="px-3 py-1.5 rounded text-xs font-mono-hud bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 cursor-pointer transition">
            <i class="fa-solid fa-upload mr-1"></i> Import JSON
            <input type="file" id="cms-import-json-input" accept=".json" class="hidden">
          </label>

          <button
            type="button"
            id="cms-reset-btn"
            class="px-3 py-1.5 rounded text-xs font-mono-hud bg-red-500/15 hover:bg-red-500/30 text-red-300 border border-red-500/30 transition"
            title="Restore factory default portfolio content"
          >
            <i class="fa-solid fa-rotate-left mr-1"></i> Reset
          </button>

          <button
            type="button"
            id="cms-lock-btn"
            class="px-3 py-1.5 rounded text-xs font-mono-hud bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition"
            title="Lock terminal and require passcode again"
          >
            <i class="fa-solid fa-lock mr-1"></i> Lock
          </button>

          <button
            type="button"
            id="cms-close-btn"
            class="w-8 h-8 rounded-lg border border-slate-600 hover:border-emerald-400 flex items-center justify-center text-slate-300 hover:text-white transition"
            aria-label="Close Module Editor"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex flex-wrap gap-2 border-b border-slate-800 pb-3 mb-5">
        ${tabs.map(t => `
          <button
            type="button"
            data-cms-tab="${t.id}" aria-pressed="${this.activeTab === t.id}"
            class="px-3.5 py-2 rounded-lg text-xs font-mono-hud font-semibold transition flex items-center gap-2 border ${
              this.activeTab === t.id
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200'
            }"
          >
            <i class="${t.icon}"></i>
            <span>${t.label}</span>
          </button>
        `).join('')}
      </div>

      <!-- Active Tab Body -->
      <div id="cms-tab-body" class="max-h-[62vh] overflow-y-auto pr-1 space-y-6">
        ${this.renderActiveTabContent()}
      </div>

      <!-- Status Footer -->
      <div class="mt-5 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-hud text-slate-400">
        <span id="cms-status-msg" role="status" aria-live="polite">Edits are saved as drafts in this browser. Publish Live shares them with visitors.</span>
        <span class="text-emerald-400">Owner Trigger: Ctrl + Shift + E</span>
      </div>
    `;

    this.bindEditorEvents();
    container.querySelectorAll('form').forEach(form => {
      form.addEventListener('input', () => {
        const status = document.getElementById('cms-status-msg');
        status.textContent = 'Form changes pending. Use the save button below this form to apply them.';
        status.dataset.state = 'pending';
      });
    });
    container.querySelectorAll('label').forEach((label, index) => {
      const field = label.querySelector('input, select, textarea') || label.parentElement.querySelector('input, select, textarea');
      if (field && !field.id) field.id = 'cms-field-' + index;
      if (field) label.htmlFor = field.id;
    });
  },

  renderActiveTabContent() {
    const data = window.PortfolioApp.data;
    const esc = window.PortfolioApp.escapeHtml;

    /* ------------------------------------------------------------------------
       TAB 1: FEATURED WORKS / QUESTS
       ------------------------------------------------------------------------ */
    if (this.activeTab === 'works') {
      return `
        <div class="space-y-6">
          <!-- Add / Edit Work Form -->
          <form id="cms-work-form" class="bg-slate-900/90 border border-emerald-500/30 rounded-lg p-5 space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-sm font-mono-hud uppercase text-emerald-400 font-bold">
                ${this.editingWorkIndex !== null ? 'Edit project' : '+ Create a project'}
              </h4>
              ${this.editingWorkIndex !== null ? `
                <button type="button" id="cms-cancel-edit-work" class="text-xs font-mono-hud text-amber-400 underline">
                  Cancel Edit
                </button>
              ` : ''}
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Project Title *</label>
                <input type="text" name="title" required placeholder="e.g. Ready-Set-Bag!" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Your Role *</label>
                <input type="text" name="role" required placeholder="e.g. Lead Game Designer" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Filter Category *</label>
                <select name="filterCategory" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
                  <option value="Game design">Game design</option>
                  <option value="IT & systems">IT &amp; systems</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Image Path or URL *</label>
                <input type="text" name="image" required placeholder="valyou.png or https://..." class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">External URL *</label>
                <input type="text" name="url" required placeholder="https://..." class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Button Label</label>
                <input type="text" name="actionLabel" placeholder="View on Itch.io / Visit Website" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Focus Tags (comma-separated)</label>
                <input type="text" name="tags" placeholder="Video Game, Unity, Narrative" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Project Badge #</label>
                <input type="text" name="substoryNumber" placeholder="PROJECT 06" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
            </div>

            <div>
              <label class="block text-xs font-mono-hud mb-1 opacity-80">Card Summary Description *</label>
              <textarea name="description" rows="2" required placeholder="Concise overview shown on the main card..." class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm"></textarea>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">The Solution (Case Study Overview)</label>
                <textarea name="substoryLore" rows="2" placeholder="How your project solved the problem..." class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm"></textarea>
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">The Problem (Core Challenge Solved)</label>
                <textarea name="weakness" rows="2" placeholder="What real-world problem or design gap existed..." class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm"></textarea>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Category · Year Eyebrow</label>
                <input type="text" name="csCategoryYear" placeholder="CAPSTONE PROJECT · 2025" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Team / Studio Credits Line</label>
                <input type="text" name="csCredits" placeholder="Lead Game Designer: Jehrome Martin • Bakunawa Studios" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Problem Image URL (Optional)</label>
                <input type="text" name="csProblemImage" placeholder="https://... or leave blank for diagnostic card" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Case Study Hero Elevator Pitch</label>
                <input type="text" name="csPitch" placeholder="A 1-LINE UPPERCASE SUMMARY AT THE TOP OF THE CASE STUDY..." class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Project Logo Image URL (Optional)</label>
                <input type="text" name="csLogoImage" placeholder="https://... (replaces text title if provided)" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Key Features (1 per line: Eyebrow | Headline | Description | ImageURL1,ImageURL2)</label>
                <textarea name="csFeaturesText" rows="3" placeholder="01 / EXPLORATION | NAVIGATE ROOMS | Players explore rooms... | image1.png" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm"></textarea>
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Tech Stack (1 per line: Tool Name | Specific Role)</label>
                <textarea name="csTechText" rows="3" placeholder="Unity Engine | Core gameplay & UI systems&#10;C# | Gameplay scripting" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm"></textarea>
              </div>
            </div>

            <button type="submit" class="px-5 py-2 rounded text-xs font-mono-hud font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition">
              <i class="fa-solid fa-floppy-disk mr-1"></i> ${this.editingWorkIndex !== null ? 'Update Project' : 'Add Project to Portfolio'}
            </button>
          </form>

          <!-- Existing Works List -->
          <div class="space-y-2.5">
            <h4 class="text-xs font-mono-hud uppercase tracking-wider opacity-70">
              Your projects (${data.works.length})
            </h4>
            ${data.works.map((w, idx) => `
              <div class="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <div class="flex items-center gap-3">
                  <img src="${esc(w.image)}" alt="" class="w-12 h-12 rounded object-cover bg-slate-950 border border-slate-700">
                  <div>
                    <div class="font-bold text-sm flex items-center gap-2">
                      <span>${esc(w.title)}</span>
                      <span class="text-[11px] font-mono-hud px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300">${(w.linkedMateria || []).includes('mat-gamedesign') ? 'Game design' : 'IT &amp; systems'}</span>
                    </div>
                    <div class="text-xs opacity-70 font-mono-hud">${esc(w.role)} • ${esc((w.tags || []).join(', '))}</div>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  <button type="button" data-work-move="${idx}:-1" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs" title="Move Up">↑</button>
                  <button type="button" data-work-move="${idx}:1" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs" title="Move Down">↓</button>
                  <button type="button" data-work-edit="${idx}" class="px-3 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/35 text-cyan-300 border border-cyan-500/30 text-xs font-mono-hud">Edit</button>
                  <button type="button" data-work-delete="${idx}" class="px-3 py-1 rounded bg-red-500/20 hover:bg-red-500/35 text-red-300 border border-red-500/30 text-xs font-mono-hud">Delete</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    /* ------------------------------------------------------------------------
       TAB 2: SKILLS & EXPERTISE
       ------------------------------------------------------------------------ */
    if (this.activeTab === 'materia') {
      return `
        <div class="space-y-6">
          <form id="cms-materia-form" class="bg-slate-900/90 border border-emerald-500/30 rounded-lg p-5 space-y-4">
            <h4 class="text-sm font-mono-hud uppercase text-emerald-400 font-bold">
              + Add Skill &amp; Expertise
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Skill Name *</label>
                <input type="text" name="name" required placeholder="e.g. Unreal Engine 5" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Discipline Pillar</label>
                <select name="type" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
                  <option value="magic">Creative &amp; Narrative Design</option>
                  <option value="command">Software &amp; Game Engineering</option>
                  <option value="support">IT Infrastructure &amp; Systems</option>
                  <option value="independent">Leadership &amp; Direction</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-mono-hud mb-1 opacity-80">Short Note (Optional)</label>
              <input type="text" name="description" placeholder="How you apply this skill..." class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
            </div>

            <button type="submit" class="px-5 py-2 rounded text-xs font-mono-hud font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition">
              <i class="fa-solid fa-plus mr-1"></i> Add Skill
            </button>
          </form>

          <div class="space-y-2">
            ${data.materia.map((m, idx) => `
              <div class="flex items-center justify-between gap-3 p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                <div>
                  <div class="font-bold text-sm">${esc(m.name)}</div>
                  <div class="text-xs opacity-70">${esc(m.description || m.categoryLabel || '')}</div>
                </div>
                <button type="button" data-materia-delete="${idx}" class="px-3 py-1 rounded bg-red-500/20 hover:bg-red-500/35 text-red-300 border border-red-500/30 text-xs font-mono-hud">
                  Remove
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    /* ------------------------------------------------------------------------
       TAB 3: CERTIFICATIONS
       ------------------------------------------------------------------------ */
    if (this.activeTab === 'certs') {
      return `
        <div class="space-y-6">
          <form id="cms-cert-form" class="bg-slate-900/90 border border-emerald-500/30 rounded-lg p-5 space-y-4">
            <h4 class="text-sm font-mono-hud uppercase text-emerald-400 font-bold">
              + Add New Certification / License
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="md:col-span-2">
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Certification Title *</label>
                <input type="text" name="title" required placeholder="e.g. CompTIA A+ / Cisco CyberOps" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Issuing Organization *</label>
                <input type="text" name="issuer" required placeholder="e.g. Cisco Networking Academy / University of Makati" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Date Earned *</label>
                <input type="text" name="date" required placeholder="November 2026" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
            </div>
            <div>
              <label class="block text-xs font-mono-hud mb-1 opacity-80">Certificate PDF / Verification Link *</label>
              <input type="text" name="url" required placeholder="UMAK.pdf or https://..." class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
            </div>
            <button type="submit" class="px-5 py-2 rounded text-xs font-mono-hud font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition">
              <i class="fa-solid fa-plus mr-1"></i> Add Credential
            </button>
          </form>

          <div class="space-y-2">
            ${data.certifications.map((c, idx) => `
              <div class="flex items-center justify-between gap-3 p-3 rounded-lg bg-slate-900/70 border border-slate-800">
                <div>
                  <div class="font-bold text-sm">${esc(c.title)}</div>
                  <div class="text-xs font-mono-hud opacity-70">${esc(c.issuer || 'Certified Credential')} · ${esc(c.date)}</div>
                </div>
                <button type="button" data-cert-delete="${idx}" class="px-3 py-1 rounded bg-red-500/20 hover:bg-red-500/35 text-red-300 border border-red-500/30 text-xs font-mono-hud">
                  Delete
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    /* ------------------------------------------------------------------------
       TAB 4: CUSTOM FLEXIBLE MODULES (TIMELINE / CARDS)
       ------------------------------------------------------------------------ */
    if (this.activeTab === 'custom') {
      const sections = data.customSections || [];
      return `
        <div class="space-y-6">
          <!-- Create New Custom Section -->
          <form id="cms-new-section-form" class="bg-slate-900/90 border border-emerald-500/30 rounded-lg p-5 space-y-4">
            <h4 class="text-sm font-mono-hud uppercase text-emerald-400 font-bold">
              + Create New Custom Portfolio Section (e.g. Work Experience, Game Jams, Dev Log)
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Section Title *</label>
                <input type="text" name="title" required placeholder="e.g. Game Jams & Awards" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">HUD Subtitle</label>
                <input type="text" name="subtitle" placeholder="ACHIEVEMENT LOG" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
              </div>
              <div>
                <label class="block text-xs font-mono-hud mb-1 opacity-80">Visual Layout</label>
                <select name="layout" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
                  <option value="timeline">Timeline Chronicle</option>
                  <option value="cards">3-Column Tactical Cards</option>
                </select>
              </div>
            </div>
            <button type="submit" class="px-5 py-2 rounded text-xs font-mono-hud font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition">
              <i class="fa-solid fa-folder-plus mr-1"></i> Create Section
            </button>
          </form>

          <!-- Add Entry to Existing Section -->
          ${sections.map((sec, sIdx) => `
            <div class="p-5 rounded-lg bg-slate-900/75 border border-slate-800 space-y-4">
              <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span class="text-xs font-mono-hud text-emerald-400 uppercase">${esc(sec.layout)} MODULE</span>
                  <h5 class="text-base font-bold">${esc(sec.title)}</h5>
                </div>
                <button type="button" data-sec-delete="${sIdx}" class="px-3 py-1 rounded bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-mono-hud">
                  Delete Section
                </button>
              </div>

              <!-- Add Item Form -->
              <form data-sec-item-form="${sIdx}" class="grid grid-cols-1 md:grid-cols-4 gap-3 bg-slate-950/60 p-3.5 rounded border border-slate-800">
                <input type="text" name="title" required placeholder="Entry Title (e.g. Intern IT Support)" class="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs">
                <input type="text" name="meta" placeholder="Date / Org (e.g. 2026 • Company)" class="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs">
                <input type="text" name="badge" placeholder="Badge (e.g. Completed)" class="px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs">
                <button type="submit" class="px-3 py-1.5 rounded bg-cyan-500/25 hover:bg-cyan-500/40 text-cyan-200 border border-cyan-500/40 text-xs font-mono-hud font-semibold">
                  + Add Entry
                </button>
                <textarea name="description" rows="2" required placeholder="Entry details..." class="md:col-span-4 px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs"></textarea>
              </form>

              <!-- Items inside section -->
              <div class="space-y-2">
                ${(sec.items || []).map((item, iIdx) => `
                  <div class="flex items-center justify-between gap-3 p-2.5 rounded bg-slate-950/80 border border-slate-800/80 text-xs">
                    <div>
                      <span class="font-bold">${esc(item.title)}</span>
                      <span class="opacity-60 font-mono-hud ml-2">${esc(item.meta || '')}</span>
                    </div>
                    <button type="button" data-sec-item-delete="${sIdx}:${iIdx}" class="text-red-400 hover:underline font-mono-hud">
                      Remove
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }

    /* ------------------------------------------------------------------------
       TAB 5: PROFILE & CONTACT LINKS
       ------------------------------------------------------------------------ */
    if (this.activeTab === 'profile') {
      const p = data.profile;
      return `
        <form id="cms-profile-form" class="bg-slate-900/90 border border-emerald-500/30 rounded-lg p-5 space-y-4">
          <h4 class="text-sm font-mono-hud uppercase text-emerald-400 font-bold">
            Edit Profile &amp; Contact Links
          </h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-mono-hud mb-1 opacity-80">Full Name *</label>
              <input type="text" name="name" required value="${esc(p.name)}" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
            </div>
            <div>
              <label class="block text-xs font-mono-hud mb-1 opacity-80">University</label>
              <input type="text" name="university" value="${esc(p.university || '')}" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
            </div>
            <div>
              <label class="block text-xs font-mono-hud mb-1 opacity-80">Email Address *</label>
              <input type="email" name="email" required value="${esc(p.contact?.email || '')}" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-mono-hud mb-1 opacity-80">Portrait Image URL</label>
              <input type="text" name="avatarUrl" value="${esc(p.avatarUrl || '')}" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
            </div>
            <div>
              <label class="block text-xs font-mono-hud mb-1 opacity-80">Resume PDF Path or URL</label>
              <input type="text" name="resumeUrl" value="${esc(p.resumeUrl || '')}" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-mono-hud mb-1 opacity-80">LinkedIn URL</label>
              <input type="text" name="linkedinUrl" value="${esc(p.contact?.linkedinUrl || '')}" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
            </div>
            <div>
              <label class="block text-xs font-mono-hud mb-1 opacity-80">Facebook URL</label>
              <input type="text" name="facebookUrl" value="${esc(p.contact?.facebookUrl || '')}" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">
            </div>
          </div>

          <div>
            <label class="block text-xs font-mono-hud mb-1 opacity-80">About Me Bio</label>
            <textarea name="aboutBio" rows="3" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">${esc(p.aboutBio)}</textarea>
          </div>

          <div>
            <label class="block text-xs font-mono-hud mb-1 opacity-80">Career Goals</label>
            <textarea name="careerGoals" rows="3" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm">${esc(p.careerGoals)}</textarea>
          </div>

          <button type="submit" class="px-5 py-2 rounded text-xs font-mono-hud font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition">
            <i class="fa-solid fa-floppy-disk mr-1"></i> Save Profile
          </button>
        </form>
      `;
    }

    /* ------------------------------------------------------------------------
       TAB 6: PUBLISHING (GITHUB + VERCEL) & PASSCODE SETTINGS
       ------------------------------------------------------------------------ */
    const savedGhToken = localStorage.getItem('jehrome_gh_token') || '';
    const savedGhRepo = localStorage.getItem('jehrome_gh_repo') || 'jhrmmartin/IT-Portfolio';

    return `
      <div class="space-y-6">
        <!-- Real-Time GitHub & Vercel Live Cloud Sync Configuration -->
        <form id="cms-github-sync-form" class="bg-slate-900/90 border border-emerald-500/40 rounded-lg p-5 space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-2">
            <h4 class="text-sm font-mono-hud uppercase text-emerald-400 font-bold">
              <i class="fa-solid fa-cloud-arrow-up mr-1"></i> 1-Click Real-Time Live Website Sync (GitHub + Vercel)
            </h4>
            <a
              href="https://github.com/settings/tokens/new?scopes=repo&description=Jehrome+Portfolio+Live+CMS"
              target="_blank"
              rel="noopener noreferrer"
              class="text-xs font-mono-hud text-cyan-300 hover:underline"
            >
              Get GitHub Token (1-Click) <i class="fa-solid fa-arrow-up-right-from-square ml-1"></i>
            </a>
          </div>

          <p class="text-xs opacity-85 leading-relaxed">
            Why didn't edits show on other people's browsers before? Because browser edits start as a <strong>local preview</strong> on your device.
            By pasting your GitHub Personal Access Token below once, clicking <strong>"Publish Live to Website"</strong> in the top bar will commit your changes directly to <code class="text-emerald-300">jhrmmartin/IT-Portfolio</code> so <strong>every visitor's browser updates in real-time!</strong>
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-xs font-mono-hud mb-1 opacity-80">GitHub Repository</label>
              <input type="text" name="ghRepo" value="${esc(savedGhRepo)}" required class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm font-mono-hud">
            </div>
            <div class="md:col-span-2">
              <label class="block text-xs font-mono-hud mb-1 opacity-80">GitHub Personal Access Token (Stored Privately in Your Browser Only) *</label>
              <input type="password" name="ghToken" value="${esc(savedGhToken)}" required placeholder="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm font-mono-hud">
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button type="submit" class="px-5 py-2 rounded text-xs font-mono-hud font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition">
              <i class="fa-solid fa-floppy-disk mr-1"></i> Save Publishing Settings
            </button>
            ${savedGhToken ? `<span class="text-xs font-mono-hud text-emerald-400"><i class="fa-solid fa-circle-check mr-1"></i> Token Saved in Browser</span>` : `<span class="text-xs font-mono-hud text-amber-400">Token not set yet</span>`}
          </div>
        </form>

        <form id="cms-passcode-change-form" class="bg-slate-900/90 border border-cyan-500/30 rounded-lg p-5 space-y-4 max-w-lg">
          <h4 class="text-sm font-mono-hud uppercase text-cyan-400 font-bold">
            Update Terminal Security Passcode
          </h4>
          <div>
            <label class="block text-xs font-mono-hud mb-1 opacity-80">New Passcode *</label>
            <input type="password" name="newPasscode" required minlength="4" placeholder="Enter new passcode..." class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm font-mono-hud">
          </div>
          <div>
            <label class="block text-xs font-mono-hud mb-1 opacity-80">Confirm New Passcode *</label>
            <input type="password" name="confirmPasscode" required minlength="4" placeholder="Confirm new passcode..." class="w-full px-3 py-2 rounded bg-slate-950 border border-slate-700 text-sm font-mono-hud">
          </div>
          <button type="submit" class="px-5 py-2 rounded text-xs font-mono-hud font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition">
            <i class="fa-solid fa-key mr-1"></i> Update Passcode Hash
          </button>
        </form>
      </div>
    `;
  },

  bindEditorEvents() {
    const app = window.PortfolioApp;
    const dialog = document.getElementById('cms-modal');

    // Close Modal
    document.getElementById('cms-close-btn')?.addEventListener('click', () => {
      if (app?.closeTopLayer) app.closeTopLayer(dialog);
      else dialog?.close();
    });

    // Lock Terminal Button
    document.getElementById('cms-lock-btn')?.addEventListener('click', () => {
      this.isAuthenticated = false;
      if (app?.closeTopLayer) app.closeTopLayer(dialog);
      else dialog?.close();
    });

    // Tab Switching
    document.querySelectorAll('[data-cms-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeTab = btn.getAttribute('data-cms-tab');
        this.editingWorkIndex = null;
        this.renderEditorUI();
      });
    });

    // Export JSON
    document.getElementById('cms-export-json-btn')?.addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(app.data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'portfolio-data.json';
      a.click();
      URL.revokeObjectURL(url);
      this.flashStatus('Downloaded portfolio-data.json! Replace data/portfolio-data.json to make permanent.');
    });

    // Import JSON
    document.getElementById('cms-import-json-input')?.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result));
          if (parsed.profile && parsed.works) {
            app.saveData(parsed);
            this.renderEditorUI();
            this.flashStatus('Imported portfolio-data.json successfully!');
          }
        } catch (err) {
          alert('Invalid JSON file.');
        }
      };
      reader.readAsText(file);
    });

    // Reset to Default
    document.getElementById('cms-reset-btn')?.addEventListener('click', () => {
      if (confirm('Reset all local customizations back to the default portfolio state?')) {
        app.resetToDefault();
        this.renderEditorUI();
        this.flashStatus('Restored default portfolio data.');
      }
    });

    /* --- Work Form Events --- */
    const workForm = document.getElementById('cms-work-form');
    if (workForm) {
      if (this.editingWorkIndex !== null) {
        const w = app.data.works[this.editingWorkIndex];
        if (w) {
          workForm.elements.title.value = w.title || '';
          workForm.elements.role.value = w.role || '';
          if (workForm.elements.filterCategory) {
            workForm.elements.filterCategory.value = (w.linkedMateria || []).includes('mat-gamedesign') ? 'Game design' : 'IT & systems';
          }
          workForm.elements.image.value = w.image || '';
          workForm.elements.url.value = w.url || '';
          workForm.elements.actionLabel.value = w.actionLabel || 'Visit Website';
          workForm.elements.tags.value = (w.tags || []).join(', ');
          workForm.elements.substoryNumber.value = w.substoryNumber || '';
          workForm.elements.description.value = w.description || '';
          workForm.elements.substoryLore.value = w.substoryLore || '';
          workForm.elements.weakness.value = w.weakness || '';
          const cs = w.caseStudy || {};
          if (workForm.elements.csCategoryYear) workForm.elements.csCategoryYear.value = cs.categoryYear || '';
          if (workForm.elements.csCredits) workForm.elements.csCredits.value = cs.credits || '';
          if (workForm.elements.csPitch) workForm.elements.csPitch.value = cs.pitch || '';
          if (workForm.elements.csLogoImage) workForm.elements.csLogoImage.value = cs.logoImage || '';
          if (workForm.elements.csProblemImage) workForm.elements.csProblemImage.value = cs.problem?.image || '';
          if (workForm.elements.csFeaturesText) {
            workForm.elements.csFeaturesText.value = (cs.features || []).map(f =>
              [f.eyebrow || '', f.title || '', f.description || '', (f.images || []).join(',')].join(' | ')
            ).join('\n');
          }
          if (workForm.elements.csTechText) {
            workForm.elements.csTechText.value = (cs.techStack || []).map(t =>
              `${t.name || ''} | ${t.role || ''}`
            ).join('\n');
          }
        }
      }

      document.getElementById('cms-cancel-edit-work')?.addEventListener('click', () => {
        this.editingWorkIndex = null;
        this.renderEditorUI();
      });

      workForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(workForm);
        const filterCategory = fd.get('filterCategory') || 'Game design';
        const existingWork = this.editingWorkIndex !== null ? app.data.works[this.editingWorkIndex] : null;
        const prevLinked = Array.isArray(existingWork?.linkedMateria) ? existingWork.linkedMateria : [];
        const selectedMateria = filterCategory === 'Game design'
          ? Array.from(new Set(['mat-gamedesign', ...prevLinked]))
          : prevLinked.filter(id => id !== 'mat-gamedesign');
        const prevCs = existingWork?.caseStudy || {};
        const parsedFeatures = (fd.get('csFeaturesText') || '').split('\n').map(l => l.trim()).filter(Boolean).map((line, i) => {
          const parts = line.split('|').map(s => s.trim());
          const prevFeat = (prevCs.features || [])[i] || {};
          return {
            eyebrow: parts[0] || prevFeat.eyebrow || `0${i + 1} / KEY FEATURE`,
            title: parts[1] || prevFeat.title || fd.get('title').trim(),
            description: parts[2] || prevFeat.description || '',
            images: parts[3] ? parts[3].split(',').map(s => s.trim()).filter(Boolean) : (prevFeat.images || []),
            highlights: prevFeat.highlights || []
          };
        });
        const parsedTech = (fd.get('csTechText') || '').split('\n').map(l => l.trim()).filter(Boolean).map(line => {
          const [name, role] = line.split('|').map(s => s.trim());
          return { name: name || '', role: role || fd.get('role').trim() };
        }).filter(t => t.name);

        const problemBody = fd.get('weakness').trim() || prevCs.problem?.body || 'Delivered full design & technical implementation.';
        const solutionBody = fd.get('substoryLore').trim() || prevCs.solution?.body || fd.get('description').trim();

        const newWork = {
          id: existingWork ? existingWork.id : `work-${Date.now()}`,
          title: fd.get('title').trim(),
          role: fd.get('role').trim(),
          status: existingWork?.status || 'Completed',
          image: fd.get('image').trim(),
          url: fd.get('url').trim(),
          actionLabel: fd.get('actionLabel').trim() || 'Open Project',
          actionIcon: 'fa-solid fa-arrow-up-right-from-square',
          description: fd.get('description').trim(),
          tags: fd.get('tags').split(',').map(s => s.trim()).filter(Boolean),
          linkedMateria: selectedMateria,
          substoryNumber: fd.get('substoryNumber').trim() || `PROJECT 0${app.data.works.length + 1}`,
          substoryTitle: existingWork?.substoryTitle || fd.get('title').trim(),
          substoryLore: solutionBody,
          weakness: problemBody,
          tacticalGauges: existingWork?.tacticalGauges || { design: 95, engineering: 85, documentation: 90, leadership: 90 },
          caseStudy: {
            pitch: (fd.get('csPitch') || '').trim() || prevCs.pitch || fd.get('description').trim().toUpperCase(),
            categoryYear: (fd.get('csCategoryYear') || '').trim() || prevCs.categoryYear || 'PROJECT · 2025',
            credits: (fd.get('csCredits') || '').trim() || prevCs.credits || `${fd.get('role').trim()} • Jehrome Martin`,
            logoImage: (fd.get('csLogoImage') || '').trim() || '',
            problem: {
              heading: 'The Problem',
              body: problemBody,
              image: (fd.get('csProblemImage') || '').trim() || '',
              highlights: prevCs.problem?.highlights || [problemBody]
            },
            solution: {
              heading: 'The Solution',
              body: solutionBody,
              image: fd.get('image').trim()
            },
            features: parsedFeatures.length ? parsedFeatures : (prevCs.features || []),
            techStack: parsedTech.length ? parsedTech : (prevCs.techStack || [])
          }
        };

        if (this.editingWorkIndex !== null) {
          app.data.works[this.editingWorkIndex] = newWork;
          this.editingWorkIndex = null;
        } else {
          app.data.works.unshift(newWork);
        }

        app.saveData(app.data);
        this.renderEditorUI();
        this.flashStatus('Saved project to Featured Works!');
      });
    }

    document.querySelectorAll('[data-work-edit]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.editingWorkIndex = Number(btn.getAttribute('data-work-edit'));
        this.renderEditorUI();
      });
    });

    document.querySelectorAll('[data-work-delete]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-work-delete'));
        app.data.works.splice(idx, 1);
        app.saveData(app.data);
        this.renderEditorUI();
        this.flashStatus('Removed project.');
      });
    });

    document.querySelectorAll('[data-work-move]').forEach(btn => {
      btn.addEventListener('click', () => {
        const [idx, dir] = btn.getAttribute('data-work-move').split(':').map(Number);
        const target = idx + dir;
        if (target < 0 || target >= app.data.works.length) return;
        const temp = app.data.works[idx];
        app.data.works[idx] = app.data.works[target];
        app.data.works[target] = temp;
        app.saveData(app.data);
        this.renderEditorUI();
      });
    });

    /* --- Skills Form Events --- */
    const matForm = document.getElementById('cms-materia-form');
    if (matForm) {
      matForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(matForm);
        const type = fd.get('type');
        const labels = {
          magic: 'Pillar I • Creative & Narrative Design',
          command: 'Pillar II • Software & Game Engineering',
          support: 'Pillar III • IT Infrastructure & Systems',
          independent: 'Pillar IV • Leadership & Direction'
        };
        app.data.materia.push({
          id: `mat-${Date.now()}`,
          name: fd.get('name').trim(),
          type,
          categoryLabel: labels[type] || 'Skill',
          level: 5,
          maxLevel: 5,
          ap: 'MASTER',
          description: (fd.get('description') || '').trim(),
          linkedEffects: []
        });
        app.saveData(app.data);
        this.renderEditorUI();
        this.flashStatus('Added new skill!');
      });
    }

    document.querySelectorAll('[data-materia-delete]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-materia-delete'));
        app.data.materia.splice(idx, 1);
        app.saveData(app.data);
        this.renderEditorUI();
      });
    });

    /* --- Certification Form Events --- */
    const certForm = document.getElementById('cms-cert-form');
    if (certForm) {
      certForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(certForm);
        app.data.certifications.push({
          id: `cert-${Date.now()}`,
          title: fd.get('title').trim(),
          code: 'CERT',
          issuer: (fd.get('issuer') || '').trim() || 'Certified Credential',
          date: fd.get('date').trim(),
          url: fd.get('url').trim()
        });
        app.saveData(app.data);
        this.renderEditorUI();
        this.flashStatus('Added Certification!');
      });
    }

    document.querySelectorAll('[data-cert-delete]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.getAttribute('data-cert-delete'));
        app.data.certifications.splice(idx, 1);
        app.saveData(app.data);
        this.renderEditorUI();
      });
    });

    /* --- Custom Section Events --- */
    const secForm = document.getElementById('cms-new-section-form');
    if (secForm) {
      secForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(secForm);
        app.data.customSections = app.data.customSections || [];
        app.data.customSections.push({
          id: `sec-${Date.now()}`,
          title: fd.get('title').trim(),
          subtitle: fd.get('subtitle').trim() || 'CAREER MODULE',
          layout: fd.get('layout') || 'timeline',
          items: []
        });
        app.saveData(app.data);
        this.renderEditorUI();
        this.flashStatus('Created new custom section!');
      });
    }

    document.querySelectorAll('[data-sec-delete]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sIdx = Number(btn.getAttribute('data-sec-delete'));
        app.data.customSections.splice(sIdx, 1);
        app.saveData(app.data);
        this.renderEditorUI();
      });
    });

    document.querySelectorAll('[data-sec-item-form]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const sIdx = Number(form.getAttribute('data-sec-item-form'));
        const fd = new FormData(form);
        app.data.customSections[sIdx].items.unshift({
          id: `item-${Date.now()}`,
          title: fd.get('title').trim(),
          meta: fd.get('meta').trim(),
          badge: fd.get('badge').trim(),
          description: fd.get('description').trim()
        });
        app.saveData(app.data);
        this.renderEditorUI();
        this.flashStatus('Added entry to custom module!');
      });
    });

    document.querySelectorAll('[data-sec-item-delete]').forEach(btn => {
      btn.addEventListener('click', () => {
        const [sIdx, iIdx] = btn.getAttribute('data-sec-item-delete').split(':').map(Number);
        app.data.customSections[sIdx].items.splice(iIdx, 1);
        app.saveData(app.data);
        this.renderEditorUI();
      });
    });

    /* --- Profile Form Events --- */
    const profileForm = document.getElementById('cms-profile-form');
    if (profileForm) {
      profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(profileForm);
        const name = fd.get('name').trim();
        const parts = name.split(' ');
        app.data.profile.avatarUrl = fd.get('avatarUrl').trim();
        app.data.profile.resumeUrl = fd.get('resumeUrl').trim();
        app.data.profile.university = fd.get('university').trim();
        app.data.profile.name = name;
        app.data.profile.firstName = parts[0] || name;
        app.data.profile.lastName = parts.slice(1).join(' ') || '';
        app.data.profile.aboutBio = fd.get('aboutBio').trim();
        app.data.profile.careerGoals = fd.get('careerGoals').trim();
        if (app.data.profile.contact) {
          app.data.profile.contact.email = fd.get('email').trim();
          app.data.profile.contact.linkedinUrl = (fd.get('linkedinUrl') || '').trim() || app.data.profile.contact.linkedinUrl;
          app.data.profile.contact.facebookUrl = (fd.get('facebookUrl') || '').trim() || app.data.profile.contact.facebookUrl;
        }
        app.saveData(app.data);
        this.flashStatus('Updated Profile & Contact Links!');
      });
    }

    // Publish Live to GitHub & Vercel
    document.getElementById('cms-publish-live-btn')?.addEventListener('click', () => {
      this.publishToGitHub();
    });

    const ghSyncForm = document.getElementById('cms-github-sync-form');
    if (ghSyncForm) {
      ghSyncForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(ghSyncForm);
        localStorage.setItem('jehrome_gh_repo', fd.get('ghRepo').trim());
        localStorage.setItem('jehrome_gh_token', fd.get('ghToken').trim());
        this.flashStatus('Publishing settings saved. Use Publish Live when ready.');
      });
    }

    /* --- Passcode Change Form Events --- */
    const passForm = document.getElementById('cms-passcode-change-form');
    if (passForm) {
      passForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fd = new FormData(passForm);
        const p1 = fd.get('newPasscode').trim();
        const p2 = fd.get('confirmPasscode').trim();
        if (p1 !== p2) {
          alert('Passcodes do not match!');
          return;
        }
        const newHash = await this.sha256(p1);
        localStorage.setItem(PASSCODE_HASH_KEY, newHash);
        passForm.reset();
        this.flashStatus('Updated owner security passcode!');
      });
    }
  },

  async publishToGitHub() {
    const app = window.PortfolioApp;
    if (!this.isAuthenticated) return;
    const token = localStorage.getItem('jehrome_gh_token');
    const repo = localStorage.getItem('jehrome_gh_repo') || 'jhrmmartin/IT-Portfolio';

    if (!token) {
      this.activeTab = 'security';
      this.renderEditorUI();
      this.flashStatus('Please paste your GitHub Personal Access Token below once to enable 1-click Live Website Publishing!');
      return;
    }

    const btn = document.getElementById('cms-publish-live-btn');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Publishing Live...';
    }
    this.flashStatus('Connecting to GitHub API and publishing live to all browsers...');

    try {
      if (!/^[\w.-]+\/[\w.-]+$/.test(repo)) throw new Error('Enter a repository as owner/name.');
      const apiUrl = `https://api.github.com/repos/${repo}/contents/data/portfolio-data.json`;
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json'
      };

      // 1. Get current file SHA from GitHub
      let sha = undefined;
      const getRes = await fetch(apiUrl + '?ref=main', { headers, cache: 'no-store' });
      if (!getRes.ok && getRes.status !== 404) throw new Error('Could not read the current published version.');
      if (getRes.ok) {
        const fileMeta = await getRes.json();
        sha = fileMeta.sha;
      }

      // 2. Encode UTF-8 JSON to Base64 safely
      const publishedData = structuredClone(app.data);
      const jsonStr = JSON.stringify(publishedData, null, 2);
      const utf8Bytes = new TextEncoder().encode(jsonStr);
      let binary = '';
      for (let i = 0; i < utf8Bytes.length; i++) {
        binary += String.fromCharCode(utf8Bytes[i]);
      }
      const base64Content = btoa(binary);

      // 3. Commit updated portfolio-data.json directly to main branch
      const putRes = await fetch(apiUrl, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          message: 'Live portfolio update via Portfolio Editor',
          content: base64Content,
          sha,
          branch: 'main'
        })
      });

      if (!putRes.ok) {
        const errData = await putRes.json().catch(() => ({}));
        throw new Error(errData.message || `GitHub API returned ${putRes.status}`);
      }

      if (JSON.stringify(app.data) === JSON.stringify(publishedData)) {
        app.saveData(publishedData, false);
      }
      this.renderEditorUI();
      this.flashStatus('Published to GitHub. Visitors will receive the update when they reload.');
    } catch (err) {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i> Publish Live to Website';
      }
      alert(`Failed to publish to GitHub: ${err.message}. Check your token in the "Live Cloud Sync & Security" tab.`);
    }
  },

  flashStatus(msg) {
    const el = document.getElementById('cms-status-msg');
    if (el) {
      el.textContent = `✓ ${msg}`;
      el.classList.add('text-emerald-400');
      el.dataset.state = 'saved';
    }
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.PortfolioEditor.init(), { once: true });
} else {
  window.PortfolioEditor.init();
}
