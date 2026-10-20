/**
 * ============================================================================
 * JEHROME MARTIN PORTFOLIO — CORE ENGINE (FF7 REMAKE/CLASSIC + YAKUZA 0)
 * ============================================================================
 */

const STORAGE_KEY = 'jehrome_portfolio_data_v1';
const THEME_KEY = 'jehrome_portfolio_theme';

// Built-in default data (ensures 100% compatibility even when opened via file://)
const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    name: "Jehrome Martin",
    firstName: "Jehrome",
    lastName: "Martin",
    title: "Aspiring IT Specialist & Indie Game Designer",
    yakuzaTitle: "CREATIVE SYSTEMS ARCHITECT • BAKUNAWA STUDIOS COLLABORATOR",
    yakuzaSubtitle: "4th Year BSIT • Game Designer & Technical Support Specialist",
    level: 4,
    classTitle: "SOLDIER 1st Class / Game Designer",
    hp: 4200,
    mp: 999,
    limitGauge: 88,
    university: "Pamantasan Ng Lungsod Ng Valenzuela",
    heroIntro: "A 4th Year BSIT Student at Pamantasan Ng Lungsod Ng Valenzuela, passionate about blending technical expertise with creative game design to craft meaningful digital experiences.",
    aboutBio: "I'm a 4th Year BSIT student at Pamantasan Ng Lungsod Ng Valenzuela with a deep passion for game design and development. I believe in the power of games to educate, entertain, and create meaningful experiences that connect people.",
    careerGoals: "Aspiring to become an Indie Game Designer, creating meaningful, entertaining, and immersive games to contribute not just in the Technology Industry but also in the Game Industry. I also aim to expand my knowledge in Technical Support to provide comprehensive solutions and assistance in IT environments.",
    avatarUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile%20Picture-CXzJFdP48c1peUFMtOS2rL481xFrEn.png",
    resumeUrl: "resume.pdf",
    contact: {
      email: "martinjehrome72@gmail.com",
      linkedinName: "Jehrome Martin",
      linkedinUrl: "https://www.linkedin.com/in/jehrome-martin-1662a4412",
      facebookName: "Rokuuu.ro",
      facebookUrl: "https://www.facebook.com/Rokuuu.ro"
    }
  },
  materia: [
    {
      id: "mat-gamedesign",
      name: "Game Design",
      type: "magic",
      categoryLabel: "Magic Materia • Creative & Design",
      level: 5,
      maxLevel: 5,
      ap: "MASTER",
      description: "Core mechanics design, spatial level layout, player psychology, and rule balancing across digital and tabletop mediums.",
      linkedEffects: ["Spatial Level Layout", "Core Loop Balancing", "Player Tension Pacing"]
    },
    {
      id: "mat-storytelling",
      name: "Storytelling & Narrative",
      type: "magic",
      categoryLabel: "Magic Materia • Creative & Design",
      level: 5,
      maxLevel: 5,
      ap: "MASTER",
      description: "Crafting atmospheric lore, environmental storytelling, and engaging scenarios inspired by classic JRPGs and cinema.",
      linkedEffects: ["Environmental Lore", "Cinematic Direction", "Dialogue & Pacing"]
    },
    {
      id: "mat-figma",
      name: "Figma & UI/UX",
      type: "magic",
      categoryLabel: "Magic Materia • Creative & Design",
      level: 4,
      maxLevel: 5,
      ap: "4,200 / 5,000 AP",
      description: "Wireframing, interactive HUD prototyping, and visual asset assembly for web apps and game interfaces.",
      linkedEffects: ["HUD Wireframing", "Interactive Prototypes", "Visual Systems"]
    },
    {
      id: "mat-unity",
      name: "Unity Engine",
      type: "command",
      categoryLabel: "Command Materia • Engineering & Dev",
      level: 4,
      maxLevel: 5,
      ap: "4,500 / 5,000 AP",
      description: "Building 2D/3D interactive gameplay systems, scene hierarchy management, and rapid game prototyping.",
      linkedEffects: ["2D/3D Scene Assembly", "Gameplay Scripting", "Asset Integration"]
    },
    {
      id: "mat-web",
      name: "HTML / CSS / JavaScript",
      type: "command",
      categoryLabel: "Command Materia • Engineering & Dev",
      level: 4,
      maxLevel: 5,
      ap: "4,400 / 5,000 AP",
      description: "Developing responsive modern web applications, interactive UIs, and DOM-driven frontend experiences.",
      linkedEffects: ["Responsive Layouts", "Interactive DOM Logic", "Modern CSS Styling"]
    },
    {
      id: "mat-python-c",
      name: "Python & C",
      type: "command",
      categoryLabel: "Command Materia • Engineering & Dev",
      level: 3,
      maxLevel: 5,
      ap: "3,100 / 5,000 AP",
      description: "Algorithmic problem solving, structured programming fundamentals, and automation scripting.",
      linkedEffects: ["Algorithmic Logic", "Memory & Structs", "Backend Scripting"]
    },
    {
      id: "mat-techsupport",
      name: "IT & Network Support",
      type: "support",
      categoryLabel: "Support Materia • IT & Infrastructure",
      level: 5,
      maxLevel: 5,
      ap: "MASTER",
      description: "Cisco-certified network addressing, device configuration, security hardening, and end-user troubleshooting.",
      linkedEffects: ["Network Diagnostics", "Cisco IOS Config", "Endpoint Security"]
    },
    {
      id: "mat-docs",
      name: "System Documentation",
      type: "support",
      categoryLabel: "Support Materia • IT & Infrastructure",
      level: 5,
      maxLevel: 5,
      ap: "MASTER",
      description: "Authoring Game Design Documents (GDD), ARTA compliance workflows, process flows, and technical specifications.",
      linkedEffects: ["Game Design Docs (GDD)", "ARTA Compliance", "Process Flowcharts"]
    },
    {
      id: "mat-leadership",
      name: "Project Management & Comms",
      type: "independent",
      categoryLabel: "Independent Materia • Leadership & Soft Skills",
      level: 5,
      maxLevel: 5,
      ap: "MASTER",
      description: "Leading multidisciplinary student and indie teams, public speaking, stakeholder pitching, and agile task coordination.",
      linkedEffects: ["Team Coordination", "Public Speaking", "Interpersonal Synergy"]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Cisco Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "May 2025",
      url: "https://blobs.vusercontent.net/blob/Cisco%20Networking%20Basics-ZQf1deEpcABQqvOUxFMZnA0HrzXAUZ.pdf",
      code: "NET-101"
    },
    {
      id: "cert-2",
      title: "Network Addressing & Basic Troubleshooting",
      issuer: "Cisco Networking Academy",
      date: "May 2025",
      url: "https://blobs.vusercontent.net/blob/Cisco%20Network%20Addressing%20and%20Basic%20Troubleshooting-Wbo9ccMz6OPiW1zYyipg98v11Ys9dy.pdf",
      code: "NET-204"
    },
    {
      id: "cert-3",
      title: "Networking Devices & Configuration",
      issuer: "Cisco Networking Academy",
      date: "May 2025",
      url: "https://blobs.vusercontent.net/blob/CIsco%20Network%20Devices%20and%20Configuration-e0ZqXuP3VZTfNSeh3QIvi4pXOcNoIS.pdf",
      code: "NET-302"
    },
    {
      id: "cert-4",
      title: "Network Support & Security",
      issuer: "Cisco Networking Academy",
      date: "May 2025",
      url: "https://blobs.vusercontent.net/blob/Cisco%20Network%20Support%20and%20Security-4B0BB5L7E2fDJLMs0SjXdmDaf0zKlm.pdf",
      code: "SEC-401"
    }
  ],
  works: [
    {
      id: "work-valyou",
      title: "ValYOU",
      role: "Documentation Lead",
      status: "Completed",
      image: "valyou.png",
      url: "https://app-dev-teal.vercel.app/",
      actionLabel: "Visit Web App",
      actionIcon: "fa-solid fa-arrow-up-right-from-square",
      description: "A web application designed to automate an ARTA-compliant Customer Satisfaction Survey system. Managed the full documentation process including process flows, compliance records, and design assets using Google Docs, Excel, and Canva.",
      tags: ["WebApp", "Documentation", "ARTA"],
      linkedMateria: ["mat-docs", "mat-web", "mat-figma", "mat-leadership"],
      substoryNumber: "SUBSTORY #01",
      substoryTitle: "The Paperwork Phantom of Valenzuela",
      substoryLore: "Faced with complex Anti-Red Tape Authority (ARTA) compliance requirements for citizen feedback, led the structured documentation architecture—translating regulatory mandates into clear process flows, data schemas, and accessible UI assets.",
      weakness: "Manual Survey Bottlenecks & Compliance Gaps",
      tacticalGauges: {
        design: 80,
        engineering: 70,
        documentation: 100,
        leadership: 90
      }
    },
    {
      id: "work-shadow",
      title: "Shadow of the Past",
      role: "Lead Game Designer",
      status: "Completed",
      image: "shadow.jpg",
      url: "https://bakunawa-studios.itch.io/shadow-of-the-past",
      actionLabel: "View on Itch.io",
      actionIcon: "fa-solid fa-gamepad",
      description: "A slasher horror game built around an atmospheric, real-camera video experience. Developed the complete spatial map layout and game environmental layers to create an immersive, tension-filled cinematic atmosphere.",
      tags: ["Horror Game", "Narrative", "Slasher Film"],
      linkedMateria: ["mat-gamedesign", "mat-storytelling", "mat-unity"],
      substoryNumber: "SUBSTORY #02",
      substoryTitle: "Through the VHS Lens",
      substoryLore: "Designed the complete spatial map architecture and environmental layering for Bakunawa Studios' slasher horror title. Balanced sightlines, choke points, and found-footage camera framing to sustain dread from start to finish.",
      weakness: "Predictable Jump Scares (Solved via Spatial Tension)",
      tacticalGauges: {
        design: 100,
        engineering: 75,
        documentation: 85,
        leadership: 90
      }
    },
    {
      id: "work-piso",
      title: "Piso Politiko",
      role: "Lead Game Designer",
      status: "Completed",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Piso%20Politiko%20Gamecon-TC1ZV07pV1XXnAPVE4GKgJWC4JbpWg.jpg",
      url: "https://www.youtube.com/watch?v=ww4mUkbBn_o",
      actionLabel: "Watch on YouTube",
      actionIcon: "fa-brands fa-youtube",
      description: "A hybrid tabletop game that explores Philippine politics through strategic gameplay, social deduction, and resource control.",
      tags: ["Tabletop Game", "Game Design", "Strategy"],
      linkedMateria: ["mat-gamedesign", "mat-storytelling", "mat-leadership", "mat-docs"],
      substoryNumber: "SUBSTORY #03",
      substoryTitle: "The Campaign Trail Gambit",
      substoryLore: "Created a satirical yet deeply strategic hybrid tabletop experience mirroring local political dynamics. Iterated extensively on economy balancing, player negotiation loops, and rulebook clarity for GameCon showcase.",
      weakness: "Runaway Leader Problem (Solved via Dynamic Catch-up Mechanics)",
      tacticalGauges: {
        design: 100,
        engineering: 65,
        documentation: 95,
        leadership: 95
      }
    },
    {
      id: "work-buwaya",
      title: "Buwaya Catch",
      role: "Game Designer",
      status: "Completed",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Buwaya%20Catch%20Banner-E0eYYOC22VZisFWvnWG4PC7SZZ8x0h.jpg",
      url: "https://bakunawa-studios.itch.io/buwaya-catch",
      actionLabel: "View on Itch.io",
      actionIcon: "fa-solid fa-gamepad",
      description: "A fast-paced video game spin-off of Piso Politiko featuring the iconic crocodile character in an arcade progression loop.",
      tags: ["Video Game", "Arcade", "Unity"],
      linkedMateria: ["mat-gamedesign", "mat-unity", "mat-python-c"],
      substoryNumber: "SUBSTORY #04",
      substoryTitle: "Enter the Crocodile",
      substoryLore: "Expanded the Piso Politiko universe into digital arcade territory using Unity. Tuned spawn curves, arcade scoring feedback, and hazard escalation to make every 60-second session immediately replayable.",
      weakness: "Short Session Fatigue (Solved via Escalating Arcade Combos)",
      tacticalGauges: {
        design: 95,
        engineering: 85,
        documentation: 80,
        leadership: 80
      }
    },
    {
      id: "work-readysetbag",
      title: "Ready-Set-Bag!",
      role: "Project Manager & Game Designer",
      status: "In Progress",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GAME%20DOCU-p4YiK612wV33KIrxwkXfOeZeJeTee2.png",
      url: "https://readysetbag.website/landing.html",
      actionLabel: "Visit Website",
      actionIcon: "fa-solid fa-arrow-up-right-from-square",
      description: "An educational mobile game teaching disaster preparedness and emergency go-bag readiness to Grade 6 students.",
      tags: ["Educational", "Mobile Game", "Capstone"],
      linkedMateria: ["mat-leadership", "mat-gamedesign", "mat-docs", "mat-unity"],
      substoryNumber: "SUBSTORY #05",
      substoryTitle: "Operation Go-Bag Readiness",
      substoryLore: "Spearheading both project management and game design for our BSIT Capstone project. Translating disaster risk reduction curricula for Grade 6 learners into engaging mobile gameplay mechanics with measurable educational retention.",
      weakness: "Dry Educational Content (Solved via Gamified Time-Trial Packing)",
      tacticalGauges: {
        design: 95,
        engineering: 80,
        documentation: 95,
        leadership: 100
      }
    }
  ],
  customSections: [
    {
      id: "sec-chronicle",
      title: "Career & Development Chronicle",
      subtitle: "KEY MILESTONES & QUEST LOG",
      layout: "timeline",
      items: [
        {
          id: "item-1",
          title: "Capstone Project Manager & Game Designer — Ready-Set-Bag!",
          meta: "2025 – Present • Pamantasan Ng Lungsod Ng Valenzuela",
          badge: "Active Quest",
          description: "Leading the end-to-end development, documentation, and school testing of an educational mobile game for Grade 6 disaster preparedness."
        },
        {
          id: "item-2",
          title: "Cisco Networking Academy — 4x Certification Completion",
          meta: "May 2025 • IT Infrastructure & Security",
          badge: "Mastered",
          description: "Completed comprehensive coursework and lab simulations across Networking Basics, Addressing & Troubleshooting, Device Configuration, and Network Security."
        },
        {
          id: "item-3",
          title: "Lead Game Designer — Bakunawa Studios Collaborations",
          meta: "2024 – 2025 • Indie Game Development",
          badge: "Completed",
          description: "Designed core mechanics, spatial layouts, and tabletop-to-digital systems for Shadow of the Past, Piso Politiko, and Buwaya Catch."
        }
      ]
    }
  ]
};

/* ============================================================================
   WEB AUDIO RETRO SFX SYNTHESIZER (Zero External Assets, Muted by Default)
   ============================================================================ */
const SFX = {
  enabled: false,
  ctx: null,

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  },

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.init();
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      this.playSelect();
    }
    return this.enabled;
  },

  // Classic FF7 Cursor Move Blip
  playCursor() {
    if (!this.enabled) return;
    this.init();
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1480, now);
    osc.frequency.exponentialRampToValueAtTime(1760, now + 0.045);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.055);
  },

  // Materia Slot / Confirm Chime
  playSelect() {
    if (!this.enabled) return;
    this.init();
    const now = this.ctx.currentTime;
    [880, 1318.5, 1760].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);
      gain.gain.setValueAtTime(0.09, now + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.04);
      osc.stop(now + idx * 0.04 + 0.24);
    });
  },

  // Tactical Assess / Substory Open Chord
  playAssess() {
    if (!this.enabled) return;
    this.init();
    const now = this.ctx.currentTime;
    [440, 554.37, 659.25, 880].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.03);
      gain.gain.setValueAtTime(0.07, now + idx * 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.03);
      osc.stop(now + 0.46);
    });
  },

  // Yakuza 0 Dramatic Low Impact Stamp
  playYakuzaStamp() {
    if (!this.enabled) return;
    this.init();
    const now = this.ctx.currentTime;
    [110, 146.83, 220].forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.65, now + 0.32);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    });
  }
};

/* ============================================================================
   GLOBAL APPLICATION STATE
   ============================================================================ */
window.PortfolioApp = {
  data: null,
  activeMateriaId: null,
  activeMateriaFilterType: 'all',
  activeWorkFilter: 'all',

  async init() {
    await this.loadData();
    this.initTheme();
    this.initDialogsFallback();
    this.renderAll();
    this.bindGlobalEvents();
    this.initMakoCanvas();
  },

  async loadData() {
    // 1. If the owner has unpublished local draft edits in this browser, preview them
    const hasDraft = localStorage.getItem('jehrome_has_unpublished_draft') === 'true';
    const saved = localStorage.getItem(STORAGE_KEY);
    if (hasDraft && saved) {
      try {
        this.data = JSON.parse(saved);
        return;
      } catch (e) {
        console.warn('Failed to parse local draft, falling back to live data.', e);
      }
    }

    // 2. Fetch live data directly from GitHub Raw API first (instant real-time updates across all browsers!)
    try {
      const ghRes = await fetch('https://api.github.com/repos/jhrmmartin/IT-Portfolio/contents/data/portfolio-data.json', {
        headers: { 'Accept': 'application/vnd.github.raw+json' },
        cache: 'no-store'
      });
      if (ghRes.ok) {
        this.data = await ghRes.json();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
        return;
      }
    } catch (_) {
      // Fallback to local/Vercel static file if offline or rate-limited
    }

    // 3. Fetch live data from local/Vercel server with cache-busting
    try {
      const res = await fetch(`data/portfolio-data.json?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        this.data = await res.json();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
        return;
      }
    } catch (_) {
      // Expected if opened directly via file:// protocol
    }

    // 3. Fallback to cached localStorage or built-in defaults
    if (saved) {
      try {
        this.data = JSON.parse(saved);
        return;
      } catch (_) {}
    }

    this.data = structuredClone(DEFAULT_PORTFOLIO_DATA);
  },

  saveData(newData, isDraft = true) {
    this.data = newData;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    localStorage.setItem('jehrome_has_unpublished_draft', isDraft ? 'true' : 'false');
    this.renderAll();
  },

  resetToDefault() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('jehrome_has_unpublished_draft');
    this.data = structuredClone(DEFAULT_PORTFOLIO_DATA);
    this.activeMateriaId = null;
    this.renderAll();
  },

  /* --------------------------------------------------------------------------
     THEME CONTROLLER (FF7R Mako Dark / Classic 1997 Blue / Yakuza 0 Dragon Gold)
     -------------------------------------------------------------------------- */
  initTheme() {
    let savedTheme = localStorage.getItem(THEME_KEY) || 'mako';
    if (savedTheme === 'light') savedTheme = 'yakuza';
    this.setTheme(savedTheme, false);
  },

  setTheme(themeName, playSound = true) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem(THEME_KEY, themeName);
    if (playSound) {
      if (themeName === 'yakuza') {
        SFX.playYakuzaStamp();
      } else {
        SFX.playCursor();
      }
    }

    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      const isMatch = btn.getAttribute('data-theme-btn') === themeName;
      btn.classList.toggle('ring-2', isMatch);
      btn.classList.toggle('ring-emerald-400', isMatch && themeName !== 'yakuza');
      btn.classList.toggle('ring-amber-400', isMatch && themeName === 'yakuza');
      btn.setAttribute('aria-pressed', String(isMatch));
    });
  },

  /* --------------------------------------------------------------------------
     DIALOG LIGHT-DISMISS FALLBACK (per modern-web-guidance: light-dismiss-a-dialog)
     -------------------------------------------------------------------------- */
  initDialogsFallback() {
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      document.querySelectorAll('dialog.ff-dialog').forEach(dialog => {
        dialog.addEventListener('click', (event) => {
          if (event.target !== dialog) return;
          const rect = dialog.getBoundingClientRect();
          const isDialogContent = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
          );
          if (isDialogContent) return;
          dialog.close();
        });
      });
    }
  },

  /* --------------------------------------------------------------------------
     MASTER RENDER PIPELINE
     -------------------------------------------------------------------------- */
  renderAll() {
    this.renderProfile();
    this.renderMateriaLoadout();
    this.renderActiveMateriaInspector();
    this.renderCertifications();
    this.renderWorks();
    this.renderCustomSections();
    this.observeScrollAnimations();
  },

  renderProfile() {
    const p = this.data.profile;
    const setTxt = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };

    setTxt('nav-name', p.name);
    setTxt('hero-first-name', p.firstName || p.name.split(' ')[0]);
    setTxt('hero-last-name', p.lastName || p.name.split(' ').slice(1).join(' '));
    setTxt('hero-yakuza-title', p.yakuzaTitle);
    setTxt('hero-intro', p.heroIntro);
    setTxt('hud-class', p.classTitle);
    setTxt('hud-level', String(p.level).padStart(2, '0'));
    setTxt('hud-hp', `${p.hp.toLocaleString()} / ${p.hp.toLocaleString()}`);
    setTxt('hud-mp', `${p.mp} / ${p.mp}`);
    setTxt('hud-limit-pct', `${p.limitGauge}%`);
    setTxt('about-bio', p.aboutBio);
    setTxt('about-career-goals', p.careerGoals);
    setTxt('footer-university', `BSIT Student at ${p.university}`);

    const avatarEl = document.getElementById('hero-avatar');
    if (avatarEl && p.avatarUrl) avatarEl.src = p.avatarUrl;

    const resumeEl = document.getElementById('contact-resume-link');
    if (resumeEl && p.resumeUrl) resumeEl.href = p.resumeUrl;

    const emailLink = document.getElementById('contact-email-link');
    const emailTxt = document.getElementById('contact-email-txt');
    if (emailLink && p.contact?.email) {
      emailLink.href = `mailto:${p.contact.email}`;
      if (emailTxt) emailTxt.textContent = p.contact.email;
    }

    const liLink = document.getElementById('contact-linkedin-link');
    const liTxt = document.getElementById('contact-linkedin-txt');
    if (liLink && p.contact?.linkedinUrl) {
      liLink.href = p.contact.linkedinUrl;
      if (liTxt) liTxt.textContent = p.contact.linkedinName || p.name;
    }

    const fbLink = document.getElementById('contact-facebook-link');
    const fbTxt = document.getElementById('contact-facebook-txt');
    if (fbLink && p.contact?.facebookUrl) {
      fbLink.href = p.contact.facebookUrl;
      if (fbTxt) fbTxt.textContent = p.contact.facebookName || 'Facebook';
    }
  },

  /* --------------------------------------------------------------------------
     MATERIA LOADOUT SYSTEM (SKILLS & EQUIPMENT RACK)
     -------------------------------------------------------------------------- */
  renderMateriaLoadout() {
    const container = document.getElementById('materia-slots-container');
    const rackSockets = document.getElementById('weapon-materia-rack');
    if (!container) return;

    const filteredMateria = this.data.materia.filter(m =>
      this.activeMateriaFilterType === 'all' || m.type === this.activeMateriaFilterType
    );

    container.innerHTML = filteredMateria.map(mat => {
      const isSelected = this.activeMateriaId === mat.id;
      return `
        <button
          type="button"
          class="materia-slot-btn ff-cursor-item ${isSelected ? 'active' : ''}"
          data-materia-id="${mat.id}"
          aria-pressed="${isSelected}"
        >
          <span class="materia-orb materia-${mat.type}"></span>
          <span class="font-medium text-sm">${this.escapeHtml(mat.name)}</span>
          <span class="text-[11px] font-mono-hud opacity-70 ml-1">LV.${mat.level}</span>
        </button>
      `;
    }).join('');

    // Render top weapon visual sockets
    if (rackSockets) {
      const topSlots = this.data.materia.slice(0, 6);
      rackSockets.innerHTML = topSlots.map((mat, idx) => {
        const isSelected = this.activeMateriaId === mat.id;
        const linkHtml = idx % 2 === 0 && idx < topSlots.length - 1
          ? `<div class="materia-rack-link" title="Linked Materia Pair"></div>`
          : `<div class="w-2"></div>`;
        return `
          <div class="flex items-center">
            <button
              type="button"
              class="materia-rack-socket transition transform hover:scale-110 ${isSelected ? 'ring-2 ring-emerald-400' : ''}"
              data-materia-id="${mat.id}"
              title="Equip ${this.escapeHtml(mat.name)}"
              aria-label="Inspect ${this.escapeHtml(mat.name)} Materia"
            >
              <span class="materia-orb materia-${mat.type}"></span>
            </button>
            ${linkHtml}
          </div>
        `;
      }).join('');
    }

    // Bind click events to Materia buttons and sockets
    document.querySelectorAll('[data-materia-id]').forEach(btn => {
      btn.addEventListener('mouseenter', () => SFX.playCursor());
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-materia-id');
        this.selectMateria(id);
      });
    });
  },

  selectMateria(materiaId) {
    SFX.playSelect();
    if (this.activeMateriaId === materiaId) {
      this.activeMateriaId = null; // Toggle off if already selected
    } else {
      this.activeMateriaId = materiaId;
    }
    this.renderMateriaLoadout();
    this.renderActiveMateriaInspector();
    this.renderWorks();
  },

  renderActiveMateriaInspector() {
    const box = document.getElementById('materia-inspector-box');
    if (!box) return;

    const mat = this.data.materia.find(m => m.id === this.activeMateriaId) || this.data.materia[0];
    if (!mat) return;

    const stars = Array.from({ length: mat.maxLevel || 5 }, (_, i) =>
      `<i class="fa-solid fa-star ${i < mat.level ? 'text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.7)]' : 'opacity-25'}"></i>`
    ).join(' ');

    const linkedProjects = this.data.works.filter(w =>
      Array.isArray(w.linkedMateria) && w.linkedMateria.includes(mat.id)
    );

    const isFilterActive = this.activeMateriaId === mat.id;

    box.innerHTML = `
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-500/20 pb-4 mb-4">
        <div class="flex items-center gap-3.5">
          <span class="materia-orb materia-${mat.type} scale-125"></span>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="text-lg font-bold tracking-wide">${this.escapeHtml(mat.name)}</h4>
              <span class="text-xs font-mono-hud px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                ${this.escapeHtml(mat.ap || 'MASTER')}
              </span>
            </div>
            <p class="text-xs font-mono-hud opacity-75 mt-0.5">${this.escapeHtml(mat.categoryLabel)}</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="text-sm tracking-widest" title="Materia Mastery Level">${stars}</div>
          ${isFilterActive ? `
            <button type="button" id="clear-materia-filter-btn" class="text-xs font-mono-hud px-3 py-1.5 rounded border border-amber-400/50 text-amber-300 hover:bg-amber-400/10 transition">
              <i class="fa-solid fa-rotate-left mr-1"></i> Reset Filter
            </button>
          ` : `
            <button type="button" id="activate-materia-filter-btn" class="text-xs font-mono-hud px-3 py-1.5 rounded border border-emerald-400/40 text-emerald-300 hover:bg-emerald-400/10 transition">
              <i class="fa-solid fa-bolt mr-1"></i> Highlight Linked Works (${linkedProjects.length})
            </button>
          `}
        </div>
      </div>

      <p class="text-sm leading-relaxed opacity-90 mb-4">${this.escapeHtml(mat.description)}</p>

      <div class="flex flex-wrap items-center justify-between gap-4 text-xs">
        <div class="flex flex-wrap items-center gap-2">
          <span class="font-mono-hud uppercase opacity-60">Equipped Abilities:</span>
          ${(mat.linkedEffects || []).map(eff => `
            <span class="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-cyan-300 font-mono-hud">
              ${this.escapeHtml(eff)}
            </span>
          `).join('')}
        </div>
        <div class="font-mono-hud opacity-75">
          Used in <strong class="text-emerald-400">${linkedProjects.length}</strong> Featured Quest(s)
        </div>
      </div>
    `;

    const clearBtn = document.getElementById('clear-materia-filter-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.activeMateriaId = null;
        SFX.playCursor();
        this.renderMateriaLoadout();
        this.renderActiveMateriaInspector();
        this.renderWorks();
      });
    }

    const activateBtn = document.getElementById('activate-materia-filter-btn');
    if (activateBtn) {
      activateBtn.addEventListener('click', () => {
        this.selectMateria(mat.id);
        document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  },

  /* --------------------------------------------------------------------------
     CISCO NETACAD CERTIFICATIONS (KEY ITEMS / LICENSES)
     -------------------------------------------------------------------------- */
  renderCertifications() {
    const list = document.getElementById('certifications-list');
    if (!list) return;

    list.innerHTML = this.data.certifications.map(cert => `
      <li class="ff-panel p-3.5 flex items-center justify-between gap-3 group hover:border-cyan-400/60 transition">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-9 h-9 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <div class="min-w-0">
            <a href="${this.escapeHtml(cert.url)}" target="_blank" rel="noopener noreferrer" class="font-semibold text-sm hover:text-cyan-400 transition block truncate">
              ${this.escapeHtml(cert.title)}
            </a>
            <div class="text-xs opacity-65 font-mono-hud flex items-center gap-2">
              <span>${this.escapeHtml(cert.code || 'CISCO')}</span>
              <span>•</span>
              <span>${this.escapeHtml(cert.date)}</span>
            </div>
          </div>
        </div>
        <a
          href="${this.escapeHtml(cert.url)}"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs font-mono-hud px-2.5 py-1.5 rounded bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 shrink-0 transition"
          title="Open Certificate PDF"
        >
          VERIFY <i class="fa-solid fa-arrow-up-right-from-square ml-1 text-[10px]"></i>
        </a>
      </li>
    `).join('');
  },

  /* --------------------------------------------------------------------------
     FEATURED WORKS (QUEST & SUBSTORY LOG + TACTICAL ASSESS)
     -------------------------------------------------------------------------- */
  renderWorks() {
    const grid = document.getElementById('works-grid');
    const filterBanner = document.getElementById('active-materia-work-banner');
    if (!grid) return;

    // Show active Materia filter banner if a Materia orb is selected
    if (filterBanner) {
      if (this.activeMateriaId) {
        const mat = this.data.materia.find(m => m.id === this.activeMateriaId);
        filterBanner.classList.remove('hidden');
        filterBanner.innerHTML = `
          <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-400/50 text-sm">
            <span class="materia-orb materia-${mat?.type || 'magic'}"></span>
            <span>Highlighting projects linked with <strong>${this.escapeHtml(mat?.name || '')}</strong> Materia</span>
            <button type="button" id="banner-clear-materia" class="ml-2 text-xs font-mono-hud underline hover:text-emerald-300">
              Show All
            </button>
          </div>
        `;
        document.getElementById('banner-clear-materia')?.addEventListener('click', () => {
          this.activeMateriaId = null;
          this.renderMateriaLoadout();
          this.renderActiveMateriaInspector();
          this.renderWorks();
        });
      } else {
        filterBanner.classList.add('hidden');
        filterBanner.innerHTML = '';
      }
    }

    const worksToRender = this.data.works.filter(w => {
      if (this.activeWorkFilter === 'all') return true;
      if (this.activeWorkFilter === 'completed') return w.status.toLowerCase() === 'completed';
      if (this.activeWorkFilter === 'in-progress') return w.status.toLowerCase() !== 'completed';
      if (this.activeWorkFilter === 'games') {
        return w.tags.some(t => /game|horror|arcade|tabletop|unity/i.test(t));
      }
      if (this.activeWorkFilter === 'web-it') {
        return w.tags.some(t => /web|doc|arta|it/i.test(t));
      }
      return true;
    });

    grid.innerHTML = worksToRender.map(work => {
      const isCompleted = work.status.toLowerCase() === 'completed';
      const statusBadgeClass = isCompleted
        ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50'
        : 'bg-amber-950/90 text-amber-300 border-amber-500/50';

      const usesActiveMateria = this.activeMateriaId
        ? (work.linkedMateria || []).includes(this.activeMateriaId)
        : null;

      const cardHighlightClass = usesActiveMateria === true
        ? 'work-card-highlighted'
        : usesActiveMateria === false
          ? 'work-card-dimmed'
          : '';

      const equippedOrbs = (work.linkedMateria || [])
        .map(mId => this.data.materia.find(m => m.id === mId))
        .filter(Boolean)
        .map(m => `<span class="materia-orb materia-${m.type} scale-75" title="${this.escapeHtml(m.name)}"></span>`)
        .join('');

      return `
        <article class="ff-panel ff-panel-interactive flex flex-col overflow-hidden ${cardHighlightClass}">
          <!-- Image Header -->
          <div class="h-48 overflow-hidden relative group bg-slate-950">
            <img
              src="${this.escapeHtml(work.image)}"
              alt="${this.escapeHtml(work.title)}"
              class="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

            <!-- Top Substory & Status Badges -->
            <div class="absolute top-3 left-3 right-3 flex justify-between items-center gap-2">
              <span class="substory-badge">${this.escapeHtml(work.substoryNumber || 'QUEST LOG')}</span>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-mono-hud font-semibold border backdrop-blur-md ${statusBadgeClass}">
                ${this.escapeHtml(work.status)}
              </span>
            </div>

            <!-- Bottom Equipped Materia Bar -->
            <div class="absolute bottom-2.5 left-3 flex items-center gap-1 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-700/80" title="Equipped Materia on this Project">
              <span class="text-[10px] font-mono-hud text-slate-400 mr-1">MATERIA:</span>
              ${equippedOrbs || '<span class="text-[10px] font-mono-hud text-slate-400">NONE</span>'}
            </div>
          </div>

          <!-- Card Body -->
          <div class="p-6 flex-1 flex flex-col">
            <div class="mb-2">
              <h3 class="text-xl font-bold tracking-tight">${this.escapeHtml(work.title)}</h3>
              <p class="text-xs font-mono-hud text-emerald-400 font-semibold uppercase tracking-wider mt-0.5">
                ${this.escapeHtml(work.role)}
              </p>
            </div>

            <p class="text-sm opacity-85 leading-relaxed mb-4 flex-1">
              ${this.escapeHtml(work.description)}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              ${(work.tags || []).map(tag => `
                <span class="text-xs font-mono-hud px-2.5 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/70">
                  ${this.escapeHtml(tag)}
                </span>
              `).join('')}
            </div>

            <!-- Dual Action Footer: Tactical Assess + Direct Launch -->
            <div class="pt-4 border-t border-slate-700/40 flex items-center justify-between gap-3">
              <button
                type="button"
                class="assess-trigger-btn flex-1 py-2 px-3 rounded text-xs font-mono-hud font-semibold border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-300 transition flex items-center justify-center gap-2"
                data-work-id="${work.id}"
              >
                <i class="fa-solid fa-crosshairs"></i> ASSESS INTEL
              </button>
              <a
                href="${this.escapeHtml(work.url)}"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 py-2 px-3 rounded text-xs font-mono-hud font-semibold bg-emerald-500/20 hover:bg-emerald-500/35 text-emerald-300 border border-emerald-500/40 transition flex items-center justify-center gap-2"
              >
                <span>${this.escapeHtml(work.actionLabel || 'Open')}</span>
                <i class="${this.escapeHtml(work.actionIcon || 'fa-solid fa-arrow-right')}"></i>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Bind Assess Modal Triggers
    document.querySelectorAll('.assess-trigger-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => SFX.playCursor());
      btn.addEventListener('click', () => {
        const workId = btn.getAttribute('data-work-id');
        this.openAssessModal(workId);
      });
    });
  },

  /* --------------------------------------------------------------------------
     FF7 REMAKE "TACTICAL ASSESS" + YAKUZA 0 "SUBSTORY" MODAL
     -------------------------------------------------------------------------- */
  openAssessModal(workId) {
    const work = this.data.works.find(w => w.id === workId);
    const dialog = document.getElementById('assess-modal');
    const content = document.getElementById('assess-modal-content');
    if (!work || !dialog || !content) return;

    SFX.playAssess();

    const gauges = work.tacticalGauges || { design: 85, engineering: 80, documentation: 85, leadership: 85 };
    const linkedMats = (work.linkedMateria || [])
      .map(id => this.data.materia.find(m => m.id === id))
      .filter(Boolean);

    content.innerHTML = `
      <!-- Top Tactical Header -->
      <div class="flex items-center justify-between border-b border-emerald-500/30 pb-4 mb-5">
        <div>
          <div class="flex items-center gap-2.5 mb-1">
            <span class="substory-badge">${this.escapeHtml(work.substoryNumber || 'TACTICAL INTEL')}</span>
            <span class="text-xs font-mono-hud text-cyan-400 uppercase tracking-widest">
              // FF7R ASSESS SCAN COMPLETE
            </span>
          </div>
          <h3 id="assessModalTitle" class="text-2xl font-bold tracking-tight">
            ${this.escapeHtml(work.title)}
          </h3>
        </div>
        <button
          type="button"
          id="close-assess-modal-btn"
          class="w-9 h-9 rounded-lg border border-slate-600 hover:border-emerald-400 flex items-center justify-center text-slate-300 hover:text-white transition"
          aria-label="Close Tactical Assess Modal"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Left Column: Visual & Gauges -->
        <div class="md:col-span-5 space-y-4">
          <div class="rounded-lg overflow-hidden border border-slate-700 relative h-44 bg-slate-950">
            <img src="${this.escapeHtml(work.image)}" alt="${this.escapeHtml(work.title)}" class="w-full h-full object-cover">
            <div class="absolute bottom-0 inset-x-0 bg-slate-950/85 px-3 py-1.5 text-xs font-mono-hud text-emerald-300 flex justify-between">
              <span>ROLE: ${this.escapeHtml(work.role)}</span>
              <span>${this.escapeHtml(work.status)}</span>
            </div>
          </div>

          <!-- Tactical Contribution Gauges -->
          <div class="bg-slate-900/90 border border-slate-800 rounded-lg p-4 space-y-3">
            <div class="text-xs font-mono-hud uppercase tracking-wider text-cyan-400 mb-1">
              Tactical Contribution Breakdown
            </div>
            ${[
              { label: 'Game / System Design', val: gauges.design, color: 'bg-emerald-400' },
              { label: 'Technical / Engineering', val: gauges.engineering, color: 'bg-amber-400' },
              { label: 'Documentation & Specs', val: gauges.documentation, color: 'bg-cyan-400' },
              { label: 'Leadership & Synergy', val: gauges.leadership, color: 'bg-purple-400' }
            ].map(g => `
              <div>
                <div class="flex justify-between text-xs font-mono-hud mb-1">
                  <span>${g.label}</span>
                  <span class="text-emerald-300">${g.val}%</span>
                </div>
                <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div class="h-full ${g.color} gauge-fill" style="width: ${g.val}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Right Column: Yakuza 0 Substory Briefing & Materia -->
        <div class="md:col-span-7 flex flex-col justify-between space-y-4">
          <div class="space-y-4">
            <!-- Yakuza 0 Substory Card -->
            <div class="yakuza-banner rounded-r-lg">
              <div class="text-xs font-mono-hud text-amber-400 uppercase tracking-wider">
                Substory Archive // Behind The Build
              </div>
              <h4 class="text-lg font-bold text-white mt-0.5">
                "${this.escapeHtml(work.substoryTitle || work.title)}"
              </h4>
            </div>

            <p class="text-sm leading-relaxed opacity-90">
              ${this.escapeHtml(work.substoryLore || work.description)}
            </p>

            <!-- Target Weakness / Problem Solved -->
            <div class="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/30">
              <div class="text-xs font-mono-hud uppercase text-amber-300 font-semibold mb-1">
                <i class="fa-solid fa-triangle-exclamation mr-1"></i> Challenge / Problem Solved
              </div>
              <p class="text-xs font-mono-hud text-amber-100">
                ${this.escapeHtml(work.weakness || 'Delivered end-to-end design and system documentation.')}
              </p>
            </div>

            <!-- Linked Materia Orbs -->
            <div>
              <div class="text-xs font-mono-hud uppercase opacity-70 mb-2">
                Equipped Materia Used in This Project:
              </div>
              <div class="flex flex-wrap gap-2">
                ${linkedMats.map(m => `
                  <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-slate-800 border border-slate-700">
                    <span class="materia-orb materia-${m.type} scale-75"></span>
                    <span>${this.escapeHtml(m.name)}</span>
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Modal Action Footer -->
          <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              id="cancel-assess-modal-btn"
              class="px-4 py-2 rounded text-xs font-mono-hud border border-slate-700 hover:bg-slate-800 transition"
            >
              Close Window
            </button>
            <a
              href="${this.escapeHtml(work.url)}"
              target="_blank"
              rel="noopener noreferrer"
              class="px-5 py-2 rounded text-xs font-mono-hud font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <span>${this.escapeHtml(work.actionLabel || 'Launch Project')}</span>
              <i class="${this.escapeHtml(work.actionIcon || 'fa-solid fa-arrow-up-right-from-square')}"></i>
            </a>
          </div>
        </div>
      </div>
    `;

    dialog.showModal();

    document.getElementById('close-assess-modal-btn')?.addEventListener('click', () => dialog.close());
    document.getElementById('cancel-assess-modal-btn')?.addEventListener('click', () => dialog.close());
  },

  /* --------------------------------------------------------------------------
     CUSTOM FLEXIBLE MODULE SECTIONS RENDERER
     -------------------------------------------------------------------------- */
  renderCustomSections() {
    const container = document.getElementById('custom-modules-container');
    if (!container) return;

    const sections = this.data.customSections || [];
    if (sections.length === 0) {
      container.innerHTML = '';
      return;
    }

    container.innerHTML = sections.map(sec => {
      const items = sec.items || [];
      let itemsMarkup = '';

      if (sec.layout === 'cards') {
        itemsMarkup = `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${items.map(item => `
              <div class="ff-panel p-6 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between gap-2 mb-2">
                    <span class="text-xs font-mono-hud text-emerald-400">${this.escapeHtml(item.meta || '')}</span>
                    ${item.badge ? `<span class="substory-badge">${this.escapeHtml(item.badge)}</span>` : ''}
                  </div>
                  <h4 class="text-lg font-bold mb-2">${this.escapeHtml(item.title)}</h4>
                  <p class="text-sm opacity-85 leading-relaxed">${this.escapeHtml(item.description || '')}</p>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      } else {
        // Default: Timeline Chronicle Layout
        itemsMarkup = `
          <div class="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-500/30">
            ${items.map(item => `
              <div class="pl-11 relative">
                <span class="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#00f5a0] absolute left-[9px] top-5"></span>
                <div class="ff-panel p-5">
                  <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h4 class="text-base font-bold">${this.escapeHtml(item.title)}</h4>
                    ${item.badge ? `<span class="substory-badge">${this.escapeHtml(item.badge)}</span>` : ''}
                  </div>
                  <p class="text-xs font-mono-hud text-cyan-400 mb-2">${this.escapeHtml(item.meta || '')}</p>
                  <p class="text-sm opacity-85 leading-relaxed">${this.escapeHtml(item.description || '')}</p>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      return `
        <section class="py-16 border-t border-emerald-500/15">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-10">
              <p class="text-xs font-mono-hud uppercase tracking-widest text-emerald-400 mb-1">
                // ${this.escapeHtml(sec.subtitle || 'CAREER MODULE')}
              </p>
              <h2 class="text-3xl font-bold tracking-tight">${this.escapeHtml(sec.title)}</h2>
            </div>
            ${itemsMarkup}
          </div>
        </section>
      `;
    }).join('');
  },

  /* --------------------------------------------------------------------------
     GLOBAL UI EVENTS (FILTERS, MOBILE MENU, SFX, TYPING, PARTICLES)
     -------------------------------------------------------------------------- */
  bindGlobalEvents() {
    // Theme Switcher Buttons
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.setTheme(btn.getAttribute('data-theme-btn'), true);
      });
    });

    // Materia Category Filter Tabs
    document.querySelectorAll('[data-materia-filter]').forEach(tab => {
      tab.addEventListener('click', () => {
        SFX.playCursor();
        this.activeMateriaFilterType = tab.getAttribute('data-materia-filter');
        document.querySelectorAll('[data-materia-filter]').forEach(t => {
          const active = t === tab;
          t.classList.toggle('bg-emerald-500/20', active);
          t.classList.toggle('border-emerald-400', active);
          t.classList.toggle('text-emerald-300', active);
        });
        this.renderMateriaLoadout();
      });
    });

    // Works Category Filter Tabs
    document.querySelectorAll('[data-work-filter]').forEach(tab => {
      tab.addEventListener('click', () => {
        SFX.playCursor();
        this.activeWorkFilter = tab.getAttribute('data-work-filter');
        document.querySelectorAll('[data-work-filter]').forEach(t => {
          const active = t === tab;
          t.classList.toggle('bg-emerald-500/20', active);
          t.classList.toggle('border-emerald-400', active);
          t.classList.toggle('text-emerald-300', active);
        });
        this.renderWorks();
      });
    });

    // SFX Toggle Button
    const sfxBtn = document.getElementById('sfx-toggle-btn');
    const sfxLabel = document.getElementById('sfx-toggle-label');
    const sfxIcon = document.getElementById('sfx-toggle-icon');
    if (sfxBtn) {
      sfxBtn.addEventListener('click', () => {
        const isOn = SFX.toggle();
        if (sfxLabel) sfxLabel.textContent = isOn ? 'SFX: ON' : 'SFX: OFF';
        if (sfxIcon) {
          sfxIcon.className = isOn ? 'fa-solid fa-volume-high text-emerald-400' : 'fa-solid fa-volume-xmark opacity-60';
        }
      });
    }

    // Mobile Menu Drawer
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const isHidden = mobileMenu.classList.contains('hidden');
        if (mobileMenuIcon) {
          mobileMenuIcon.className = isHidden ? 'fa-solid fa-bars text-xl' : 'fa-solid fa-xmark text-xl';
        }
      });
      document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          if (mobileMenuIcon) mobileMenuIcon.className = 'fa-solid fa-bars text-xl';
        });
      });
    }

    // Typing Effect for Hero Subtitle
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
      const phrases = [
        "Aspiring IT Specialist & Indie Game Designer",
        "Lead Game Designer • Spatial & Narrative Systems",
        "Cisco-Certified Network & Technical Support",
        "Crafting Meaningful Digital & Tabletop Worlds"
      ];
      let phraseIdx = 0;
      let charIdx = 0;
      let isDeleting = false;

      const tick = () => {
        const currentPhrase = phrases[phraseIdx];
        typingElement.textContent = currentPhrase.substring(0, charIdx);

        if (!isDeleting && charIdx < currentPhrase.length) {
          charIdx++;
          setTimeout(tick, 42);
        } else if (!isDeleting && charIdx === currentPhrase.length) {
          isDeleting = true;
          setTimeout(tick, 2600);
        } else if (isDeleting && charIdx > 0) {
          charIdx--;
          setTimeout(tick, 22);
        } else {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(tick, 400);
        }
      };
      setTimeout(tick, 500);
    }
  },

  observeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  },

  /* --------------------------------------------------------------------------
     LIFESTREAM / MAKO PARTICLE CANVAS
     -------------------------------------------------------------------------- */
  initMakoCanvas() {
    const canvas = document.getElementById('mako-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 42 }, (_, idx) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.2 + 0.6,
      vx: (Math.random() - 0.5) * 0.35,
      vy: -(Math.random() * 0.55 + 0.15),
      alpha: Math.random() * 0.55 + 0.15,
      variant: idx % 2 // 0 = primary theme hue, 1 = secondary theme hue
    }));

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height);
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'mako';
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        let hue = p.variant === 0 ? 162 : 192; // Mako Emerald & Cyan
        if (currentTheme === 'yakuza') {
          hue = p.variant === 0 ? 42 : 352; // Yakuza 0 Sovereign Gold & Dragon Crimson
        } else if (currentTheme === 'classic') {
          hue = p.variant === 0 ? 195 : 225; // Classic 1997 Crystal Blue & Ice
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 95%, 60%, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${hue}, 95%, 60%, 0.8)`;
        ctx.fill();
      }
      requestAnimationFrame(renderFrame);
    };

    renderFrame();
  },

  escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.PortfolioApp.init();
});
