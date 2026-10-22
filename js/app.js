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
   WEB AUDIO RETRO SFX SYNTHESIZER (FF7 & YAKUZA 0 PROCEDURAL ENGINE)
   Zero External Audio Files - Procedural Real-Time Audio Synthesis
   ============================================================================ */
const SFX = {
  enabled: (function() {
    try {
      return localStorage.getItem('jehrome_sfx_enabled') === 'true';
    } catch (e) {
      return false;
    }
  })(),
  ctx: null,

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  },

  toggle() {
    this.enabled = !this.enabled;
    try {
      localStorage.setItem('jehrome_sfx_enabled', String(this.enabled));
    } catch (e) {}

    if (this.enabled) {
      this.init();
      const theme = document.documentElement.getAttribute('data-theme') || 'mako';
      if (theme === 'yakuza') {
        this.playYakuzaSelect();
      } else {
        this.playSelect();
      }
    }
    return this.enabled;
  },

  enableAndPlay(fn) {
    if (!this.enabled) {
      this.enabled = true;
      try {
        localStorage.setItem('jehrome_sfx_enabled', 'true');
      } catch (e) {}
      const sfxLabel = document.getElementById('sfx-toggle-label');
      const sfxIcon = document.getElementById('sfx-toggle-icon');
      if (sfxLabel) sfxLabel.textContent = 'SFX: ON';
      if (sfxIcon) sfxIcon.className = 'fa-solid fa-volume-high text-emerald-400';
    }
    this.init();
    if (typeof fn === 'function') {
      fn();
    }
  },

  createNoiseBuffer(duration = 0.2) {
    if (!this.ctx) return null;
    const bufferSize = Math.floor(this.ctx.sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  },

  /* --------------------------------------------------------------------------
     FINAL FANTASY VII SFX SUITE (MIDGAR, CLOUD, MATERIA & CHIMES)
     -------------------------------------------------------------------------- */

  // 1. Classic FF7 Cursor Move Blip
  playCursor() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1520, now);
    osc.frequency.exponentialRampToValueAtTime(1820, now + 0.04);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.05);
  },

  // 2. FF7 Menu Confirm / Select Chime
  playSelect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [880, 1318.5, 1760].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.035);
      gain.gain.setValueAtTime(0.09, now + idx * 0.035);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.035 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.035);
      osc.stop(now + idx * 0.035 + 0.22);
    });
  },

  // 3. FF7 Menu Cancel / Dialog Dismiss Chirp
  playCancel() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [980, 520].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);
      gain.gain.setValueAtTime(0.07, now + idx * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.055);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.04);
      osc.stop(now + idx * 0.04 + 0.06);
    });
  },

  // 4. FF7 Materia Crystal Socket / Shimmer
  playMateriaEquip() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const freqs = [1046.5, 1318.5, 1568, 2093, 2637];
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.024);
      gain.gain.setValueAtTime(0.075, now + idx * 0.024);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.024 + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.024);
      osc.stop(now + idx * 0.024 + 0.3);
    });

    // High crystal harmonic shimmer
    const shimmer = this.ctx.createOscillator();
    const sGain = this.ctx.createGain();
    shimmer.type = 'sine';
    shimmer.frequency.setValueAtTime(3520, now);
    sGain.gain.setValueAtTime(0.03, now + 0.05);
    sGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    shimmer.connect(sGain);
    sGain.connect(this.ctx.destination);
    shimmer.start(now + 0.05);
    shimmer.stop(now + 0.48);
  },

  // 5. Cloud Strife Victory Fanfare Brass Motif
  playCloudCheer() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // FF7 Victory Fanfare Opening Motif: C5, C5, C5, C5(held), Ab4, Bb4, C5 (chord)
    const melody = [
      { f: 523.25, start: 0.00, dur: 0.08 },
      { f: 523.25, start: 0.09, dur: 0.08 },
      { f: 523.25, start: 0.18, dur: 0.08 },
      { f: 523.25, start: 0.27, dur: 0.18 },
      { f: 415.30, start: 0.48, dur: 0.18 },
      { f: 466.16, start: 0.68, dur: 0.18 },
      { f: 523.25, start: 0.88, dur: 0.45, chord: [659.25, 783.99] }
    ];

    melody.forEach(note => {
      const playTone = (freq) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + note.start);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2200, now + note.start);

        gain.gain.setValueAtTime(0.065, now + note.start);
        gain.gain.exponentialRampToValueAtTime(0.001, now + note.start + note.dur);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + note.start);
        osc.stop(now + note.start + note.dur + 0.02);
      };

      playTone(note.f);
      if (note.chord) {
        note.chord.forEach(cf => playTone(cf));
      }
    });
  },

  // 6. Buster Sword Slash / Heavy Blade Cleave
  playSwordSlash() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Filtered noise sweep (air whoosh)
    const noise = this.createNoiseBuffer(0.2);
    if (noise) {
      const noiseSource = this.ctx.createBufferSource();
      noiseSource.buffer = noise;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.Q.setValueAtTime(2.5, now);
      filter.frequency.setValueAtTime(3200, now);
      filter.frequency.exponentialRampToValueAtTime(350, now + 0.16);

      const nGain = this.ctx.createGain();
      nGain.gain.setValueAtTime(0.12, now);
      nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      noiseSource.connect(filter);
      filter.connect(nGain);
      nGain.connect(this.ctx.destination);
      noiseSource.start(now);
      noiseSource.stop(now + 0.19);
    }

    // Heavy low blade swing resonance
    const lowOsc = this.ctx.createOscillator();
    const lowGain = this.ctx.createGain();
    lowOsc.type = 'triangle';
    lowOsc.frequency.setValueAtTime(260, now);
    lowOsc.frequency.exponentialRampToValueAtTime(65, now + 0.18);
    lowGain.gain.setValueAtTime(0.1, now);
    lowGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    lowOsc.connect(lowGain);
    lowGain.connect(this.ctx.destination);
    lowOsc.start(now);
    lowOsc.stop(now + 0.21);

    // Steel blade ring
    [2400, 3100].forEach((freq) => {
      const ring = this.ctx.createOscillator();
      const rGain = this.ctx.createGain();
      ring.type = 'sine';
      ring.frequency.setValueAtTime(freq, now + 0.06);
      rGain.gain.setValueAtTime(0.035, now + 0.06);
      rGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      ring.connect(rGain);
      rGain.connect(this.ctx.destination);
      ring.start(now + 0.06);
      ring.stop(now + 0.24);
    });
  },

  // 7. Limit Break Charge / Mako Surge
  playLimitBreak() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(950, now + 0.32);

    filter.type = 'lowpass';
    filter.Q.setValueAtTime(5, now);
    filter.frequency.setValueAtTime(280, now);
    filter.frequency.exponentialRampToValueAtTime(3200, now + 0.32);

    gain.gain.setValueAtTime(0.02, now);
    gain.gain.linearRampToValueAtTime(0.09, now + 0.26);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.36);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.38);

    // Shimmer burst at climax
    const burst = this.ctx.createOscillator();
    const bGain = this.ctx.createGain();
    burst.type = 'sine';
    burst.frequency.setValueAtTime(1760, now + 0.28);
    bGain.gain.setValueAtTime(0.06, now + 0.28);
    bGain.gain.exponentialRampToValueAtTime(0.001, now + 0.48);
    burst.connect(bGain);
    bGain.connect(this.ctx.destination);
    burst.start(now + 0.28);
    burst.stop(now + 0.5);
  },

  // 8. Tactical Assess / Intel Chord
  playAssess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [440, 554.37, 659.25, 880].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.03);
      gain.gain.setValueAtTime(0.07, now + idx * 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.42);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.03);
      osc.stop(now + 0.44);
    });
  },

  /* --------------------------------------------------------------------------
     YAKUZA 0 SFX SUITE (KAMUROCHO, KIRYU, MAJIMA & BUBBLE ECONOMY)
     -------------------------------------------------------------------------- */

  // 9. Yakuza 0 Substory Intro / Dramatic Guitar Sting
  playYakuzaSubstory() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Dramatic minor pentatonic pluck arpeggio (Japanese Insen scale)
    const notes = [
      { f: 146.83, t: 0.00, v: 0.12 }, // D3
      { f: 220.00, t: 0.02, v: 0.10 }, // A3
      { f: 293.66, t: 0.04, v: 0.09 }, // D4
      { f: 349.23, t: 0.06, v: 0.09 }, // F4
      { f: 440.00, t: 0.08, v: 0.08 }, // A4
      { f: 587.33, t: 0.10, v: 0.08 }  // D5
    ];

    notes.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(note.f, now + note.t);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.Q.setValueAtTime(3.5, now + note.t);
      filter.frequency.setValueAtTime(note.f * 1.8, now + note.t);

      gain.gain.setValueAtTime(note.v, now + note.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + 0.42);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + note.t);
      osc.stop(now + note.t + 0.45);
    });

    // Sub-bass gong impact at climax
    const gong = this.ctx.createOscillator();
    const gGain = this.ctx.createGain();
    gong.type = 'sine';
    gong.frequency.setValueAtTime(82, now + 0.12);
    gong.frequency.exponentialRampToValueAtTime(42, now + 0.5);
    gGain.gain.setValueAtTime(0.12, now + 0.12);
    gGain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
    gong.connect(gGain);
    gGain.connect(this.ctx.destination);
    gong.start(now + 0.12);
    gong.stop(now + 0.58);
  },

  // 10. Kazuma Kiryu Dragon Heat Action Heavy Punch
  playKiryuHeat() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Heavy bass punch kick
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(170, now);
    subOsc.frequency.exponentialRampToValueAtTime(44, now + 0.22);
    subGain.gain.setValueAtTime(0.14, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    subOsc.connect(subGain);
    subGain.connect(this.ctx.destination);
    subOsc.start(now);
    subOsc.stop(now + 0.3);

    // Punch transient crack
    const noise = this.createNoiseBuffer(0.12);
    if (noise) {
      const src = this.ctx.createBufferSource();
      src.buffer = noise;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(1100, now);
      const nGain = this.ctx.createGain();
      nGain.gain.setValueAtTime(0.12, now);
      nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      src.connect(filter);
      filter.connect(nGain);
      nGain.connect(this.ctx.destination);
      src.start(now);
      src.stop(now + 0.09);
    }

    // Mid-range body impact
    const midOsc = this.ctx.createOscillator();
    const midGain = this.ctx.createGain();
    midOsc.type = 'triangle';
    midOsc.frequency.setValueAtTime(220, now);
    midOsc.frequency.exponentialRampToValueAtTime(75, now + 0.14);
    midGain.gain.setValueAtTime(0.09, now);
    midGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    midOsc.connect(midGain);
    midGain.connect(this.ctx.destination);
    midOsc.start(now);
    midOsc.stop(now + 0.18);
  },

  // 11. Goro Majima Mad Dog Slide-Whistle & Knife Gleam
  playMajimaSting() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Wild comic slide-whistle glissando (Majima's mocking call)
    const whistle = this.ctx.createOscillator();
    const wGain = this.ctx.createGain();
    whistle.type = 'sine';
    whistle.frequency.setValueAtTime(680, now);
    whistle.frequency.linearRampToValueAtTime(1950, now + 0.14);
    whistle.frequency.linearRampToValueAtTime(1050, now + 0.24);
    wGain.gain.setValueAtTime(0.08, now);
    wGain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);
    whistle.connect(wGain);
    wGain.connect(this.ctx.destination);
    whistle.start(now);
    whistle.stop(now + 0.28);

    // Sharp metallic knife glint (pling!)
    [3400, 4800].forEach((freq) => {
      const ping = this.ctx.createOscillator();
      const pGain = this.ctx.createGain();
      ping.type = 'sine';
      ping.frequency.setValueAtTime(freq, now + 0.2);
      pGain.gain.setValueAtTime(0.055, now + 0.2);
      pGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      ping.connect(pGain);
      pGain.connect(this.ctx.destination);
      ping.start(now + 0.2);
      ping.stop(now + 0.52);
    });
  },

  // 12. Yakuza 0 Bubble Economy / Cash Fountain Explosion
  playYakuzaMoney() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Fast cascade of bright metallic bell strikes (coins flying everywhere)
    const coinPitches = [1975, 2349, 2793, 3135, 3520, 3951, 4186];
    coinPitches.forEach((freq, idx) => {
      const bell = this.ctx.createOscillator();
      const bGain = this.ctx.createGain();
      bell.type = 'sine';
      bell.frequency.setValueAtTime(freq, now + idx * 0.022);
      bGain.gain.setValueAtTime(0.05, now + idx * 0.022);
      bGain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.022 + 0.18);
      bell.connect(bGain);
      bGain.connect(this.ctx.destination);
      bell.start(now + idx * 0.022);
      bell.stop(now + idx * 0.022 + 0.2);
    });

    // Cash register double bell
    [1350, 2700].forEach(freq => {
      const reg = this.ctx.createOscillator();
      const rGain = this.ctx.createGain();
      reg.type = 'sine';
      reg.frequency.setValueAtTime(freq, now + 0.12);
      rGain.gain.setValueAtTime(0.06, now + 0.12);
      rGain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      reg.connect(rGain);
      rGain.connect(this.ctx.destination);
      reg.start(now + 0.12);
      reg.stop(now + 0.48);
    });
  },

  // 13. Yakuza Arcade Menu Selection Strike
  playYakuzaSelect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(290, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.045);
    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.055);
  },

  // 14. Yakuza 0 Dramatic Chapter Title Stamp
  playYakuzaStamp() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [95, 140, 210].forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.55, now + 0.32);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    });
  }
};

window.SFX = SFX;

/* ============================================================================
   GLOBAL APPLICATION STATE
   ============================================================================ */
window.PortfolioApp = {
  data: null,
  activeMateriaId: null,
  activeMateriaFilterType: 'all',
  activeWorkFilter: 'all',
  activeWorkModalId: null,
  assessHistoryPushed: false,
  routingInitialized: false,

  async init() {
    await this.loadData();
    this.initCharacterCompanions();
    this.initTheme();
    this.initDialogsFallback();
    this.renderAll();
    this.bindGlobalEvents();
    this.initMakoCanvas();
    this.initContactForm();
    this.initRouting();
    this.syncRoute();
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
        SFX.playYakuzaSubstory();
        setTimeout(() => SFX.playYakuzaStamp(), 240);
      } else if (themeName === 'classic') {
        SFX.playSelect();
      } else {
        SFX.playMateriaEquip();
      }
    }

    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      const isMatch = btn.getAttribute('data-theme-btn') === themeName;
      btn.classList.toggle('ring-2', isMatch);
      btn.classList.toggle('ring-emerald-400', isMatch && themeName !== 'yakuza');
      btn.classList.toggle('ring-amber-400', isMatch && themeName === 'yakuza');
      btn.setAttribute('aria-pressed', String(isMatch));
    });

    this.updateCompanionForTheme(themeName, playSound);
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
    if (this.activeMateriaId === materiaId) {
      this.activeMateriaId = null; // Toggle off if already selected
      SFX.playCancel();
    } else {
      this.activeMateriaId = materiaId;
      SFX.playMateriaEquip();
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

      <div class="flex flex-wrap items-center justify-between gap-4 text-xs mb-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="font-mono-hud uppercase opacity-60">Equipped Abilities:</span>
          ${(mat.linkedEffects || []).map(eff => `
            <span class="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-cyan-300 font-mono-hud">
              ${this.escapeHtml(eff)}
            </span>
          `).join('')}
        </div>
        <div class="font-mono-hud opacity-75">
          Equipped in <strong class="text-emerald-400">${linkedProjects.length}</strong> Featured Project(s)
        </div>
      </div>

      <!-- Direct Real-World Projects Embedded Inside Inspector -->
      <div class="mt-4 pt-4 border-t border-emerald-500/20">
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="text-xs font-mono-hud font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <i class="fa-solid fa-folder-open text-[11px]"></i> Real-World Projects Built With This Skill (${linkedProjects.length})
          </span>
          ${linkedProjects.length > 0 ? `
            <a href="#works" class="text-[11px] font-mono-hud text-slate-400 hover:text-emerald-300 transition flex items-center gap-1">
              <span>View in Quest Log</span> <i class="fa-solid fa-arrow-down text-[10px]"></i>
            </a>
          ` : ''}
        </div>

        ${linkedProjects.length > 0 ? `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            ${linkedProjects.map(p => `
              <div class="p-2.5 rounded-lg bg-slate-900/90 border border-slate-700/80 hover:border-emerald-400/50 transition flex items-center justify-between gap-2 group">
                <div class="min-w-0 flex-1">
                  <h5 class="text-xs font-bold text-slate-100 truncate group-hover:text-emerald-300 transition">${this.escapeHtml(p.title)}</h5>
                  <p class="text-[10px] font-mono-hud text-slate-400 truncate">
                    ${this.escapeHtml(p.role)} • <span class="${p.status.toLowerCase() === 'completed' ? 'text-emerald-400' : 'text-amber-400'}">${this.escapeHtml(p.status)}</span>
                  </p>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    class="inspector-assess-btn px-2 py-1 rounded bg-emerald-500/15 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 text-[10px] font-mono-hud transition flex items-center gap-1"
                    data-work-id="${p.id}"
                    title="Assess Intel for ${this.escapeHtml(p.title)}"
                  >
                    <i class="fa-solid fa-magnifying-glass text-[9px]"></i>
                    <span>Assess</span>
                  </button>
                  ${p.url && p.url !== '#' ? `
                    <a
                      href="${this.escapeHtml(p.url)}"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-[10px] font-mono-hud transition"
                      title="Launch ${this.escapeHtml(p.title)}"
                      aria-label="Launch ${this.escapeHtml(p.title)}"
                    >
                      <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                    </a>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <p class="text-xs font-mono-hud text-slate-400 italic">
            Foundational engineering competency applied across all development, documentation, and technical support deliverables.
          </p>
        `}
      </div>
    `;

    box.querySelectorAll('.inspector-assess-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const workId = btn.getAttribute('data-work-id');
        this.openAssessModal(workId);
      });
    });

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
        const linkedCount = this.data.works.filter(w => (w.linkedMateria || []).includes(this.activeMateriaId)).length;
        filterBanner.classList.remove('hidden');
        filterBanner.innerHTML = `
          <div class="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-400/50 text-xs sm:text-sm font-mono-hud shadow-lg">
            <span class="materia-orb materia-${mat?.type || 'magic'} scale-90"></span>
            <span class="text-emerald-300 font-bold uppercase tracking-wider">ACTIVE SKILL FILTER:</span>
            <span class="text-white font-semibold">${this.escapeHtml(mat?.name || '')}</span>
            <span class="opacity-75">(${linkedCount} Project${linkedCount === 1 ? '' : 's'} Found)</span>
            <button type="button" id="banner-clear-materia" class="ml-2 px-2.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs text-amber-300 hover:text-white transition flex items-center gap-1">
              <i class="fa-solid fa-xmark text-[10px]"></i> Clear Filter
            </button>
          </div>
        `;
        document.getElementById('banner-clear-materia')?.addEventListener('click', () => {
          this.activeMateriaId = null;
          SFX.playCursor();
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
  openAssessModal(workId, opts = {}) {
    const work = this.data.works.find(w => w.id === workId);
    const dialog = document.getElementById('assess-modal');
    const content = document.getElementById('assess-modal-content');
    if (!work || !dialog || !content) return;

    this.activeWorkModalId = workId;

    // Yield screen space: hide companion bubble and dim stage so dialogue never blocks modal
    document.getElementById('companion-stage')?.classList.add('dimmed');
    document.getElementById('companion-dialogue')?.classList.add('hidden-bubble');

    const theme = document.documentElement.getAttribute('data-theme') || 'mako';
    if (theme === 'yakuza') {
      SFX.playYakuzaSubstory();
    } else {
      SFX.playAssess();
    }

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
              id="copy-assess-link-btn"
              class="px-4 py-2 rounded text-xs font-mono-hud border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/25 text-cyan-300 transition inline-flex items-center gap-2"
              title="Copy a direct link to this project"
            >
              <i class="fa-solid fa-link"></i> <span id="copy-assess-link-label">COPY LINK</span>
            </button>
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

    if (!dialog.open) dialog.showModal();

    // Make the current project shareable / bookmarkable
    if (!opts.fromRoute) {
      history.pushState({ assess: true }, '', `#work=${encodeURIComponent(workId)}`);
      this.assessHistoryPushed = true;
    }
  },

  /* --------------------------------------------------------------------------
     SHAREABLE DEEP LINKS (#work=<id> / #materia=<id>)
     The hash is the single source of truth so Back/Forward, Esc, light-dismiss,
     and pasted links all converge on the same UI state.
     -------------------------------------------------------------------------- */
  getRoute() {
    const raw = (window.location.hash || '').replace(/^#/, '');
    let hash = raw;
    try {
      hash = decodeURIComponent(raw);
    } catch (_) {
      // Malformed escape sequence — fall through with the raw fragment
    }
    const match = hash.match(/^(work|materia)=(.+)$/);
    if (!match) return { type: null, id: null };
    return { type: match[1], id: match[2] };
  },

  buildWorkUrl(workId) {
    // location.origin is "null" under file://, so trim the hash off the full href instead
    return `${window.location.href.split('#')[0]}#work=${encodeURIComponent(workId)}`;
  },

  initRouting() {
    if (this.routingInitialized) return;
    this.routingInitialized = true;

    const dialog = document.getElementById('assess-modal');

    const onRouteChange = () => this.syncRoute();
    window.addEventListener('hashchange', onRouteChange);
    window.addEventListener('popstate', onRouteChange);

    // Fires for the close button, backdrop light-dismiss, and routing closes
    dialog?.addEventListener('close', () => this.handleAssessClosed());

    // Event delegation for modal buttons (close, cancel, copy link) to prevent listener accumulation
    dialog?.addEventListener('click', (event) => {
      if (event.target.closest('#close-assess-modal-btn, #cancel-assess-modal-btn')) {
        dialog.close();
      } else if (event.target.closest('#copy-assess-link-btn')) {
        if (this.activeWorkModalId) {
          this.copyWorkLink(this.activeWorkModalId);
        }
      }
    });

    // Take over Esc so dismissal is deterministic and cleanup always runs
    dialog?.addEventListener('cancel', (event) => {
      event.preventDefault();
      if (dialog.open) dialog.close();
      this.handleAssessClosed();
    });

    // Belt and braces: some engines drop a modal out of the top layer without
    // dispatching `close` (observed on Esc in Edge). Watch the attribute instead.
    if (dialog && window.MutationObserver) {
      new MutationObserver(() => {
        if (!dialog.open) this.handleAssessClosed();
      }).observe(dialog, { attributes: true, attributeFilter: ['open'] });
    }
  },

  handleAssessClosed() {
    const closedId = this.activeWorkModalId;
    if (!closedId) return; // Already handled (close event + observer can both fire)

    const pushedByUs = this.assessHistoryPushed;
    this.activeWorkModalId = null;
    this.assessHistoryPushed = false;
    SFX.playCancel();

    // Restore companion stage visibility
    document.getElementById('companion-stage')?.classList.remove('dimmed');

    // If the hash already moved elsewhere (Back/Forward), nothing to clean up
    const route = this.getRoute();
    if (route.type !== 'work' || route.id !== closedId) return;

    if (pushedByUs) {
      // Restore the exact pre-modal URL without leaving the site
      history.back();
    } else {
      // Arrived via a deep link: stay on the page, just retire the modal hash
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}#works`);
    }
  },

  syncRoute() {
    const route = this.getRoute();
    const dialog = document.getElementById('assess-modal');

    if (route.type === 'work') {
      const work = this.data?.works?.find(w => w.id === route.id);
      if (!work) {
        // Stale or mistyped link: fall back cleanly instead of opening an empty dialog
        if (dialog?.open) dialog.close();
        history.replaceState(null, '', `${window.location.pathname}${window.location.search}#works`);
        return;
      }
      if (!dialog?.open || this.activeWorkModalId !== route.id) {
        if (this.activeWorkModalId && this.activeWorkModalId !== route.id) {
          // Route switched while modal was open: disarm history.back() to prevent cyclic reopening
          this.assessHistoryPushed = false;
        }
        this.openAssessModal(route.id, { fromRoute: true });
      }
    } else if (dialog?.open) {
      dialog.close();
    }

    if (route.type === 'materia') {
      const mat = this.data?.materia?.find(m => m.id === route.id);
      if (!mat) return;
      if (this.activeMateriaId !== route.id) {
        this.selectMateria(route.id);
        document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },

  async copyWorkLink(workId) {
    const url = this.buildWorkUrl(workId);
    const btn = document.getElementById('copy-assess-link-btn');
    const label = document.getElementById('copy-assess-link-label');

    const flash = (text) => {
      if (label) label.textContent = text;
      btn?.classList.add('ring-2', 'ring-cyan-400');
      setTimeout(() => {
        if (label) label.textContent = 'COPY LINK';
        btn?.classList.remove('ring-2', 'ring-cyan-400');
      }, 1800);
    };

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback for file:// and non-secure contexts
        const ta = document.createElement('textarea');
        ta.value = url;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      SFX.playSelect();
      flash('COPIED!');
    } catch (err) {
      // Never dead-end: let the visitor copy it by hand
      window.prompt('Copy this project link:', url);
    }
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
      // Sync initial state if previously enabled
      if (SFX.enabled) {
        if (sfxLabel) sfxLabel.textContent = 'SFX: ON';
        if (sfxIcon) sfxIcon.className = 'fa-solid fa-volume-high text-emerald-400';
      }

      sfxBtn.addEventListener('click', () => {
        const isOn = SFX.toggle();
        if (sfxLabel) sfxLabel.textContent = isOn ? 'SFX: ON' : 'SFX: OFF';
        if (sfxIcon) {
          sfxIcon.className = isOn ? 'fa-solid fa-volume-high text-emerald-400' : 'fa-solid fa-volume-xmark opacity-60';
        }
      });
    }

    // Soundboard Jukebox Modal (Test & Play FF7 & Yakuza 0 SFX)
    const soundboardBtn = document.getElementById('sfx-soundboard-btn');
    const soundboardModal = document.getElementById('soundboard-modal');
    const soundboardClose = document.getElementById('soundboard-close-btn');

    const openSoundboard = () => {
      SFX.enableAndPlay(() => {
        const theme = document.documentElement.getAttribute('data-theme') || 'mako';
        if (theme === 'yakuza') {
          SFX.playYakuzaSelect();
        } else {
          SFX.playSelect();
        }
      });
      soundboardModal?.showModal();
    };

    soundboardBtn?.addEventListener('click', openSoundboard);
    document.getElementById('mobile-soundboard-btn')?.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
      openSoundboard();
    });

    soundboardClose?.addEventListener('click', () => {
      SFX.playCancel();
      soundboardModal?.close();
    });

    // Soundboard Jukebox Interactive Buttons
    document.querySelectorAll('[data-sfx-play]').forEach(btn => {
      btn.addEventListener('click', () => {
        const soundKey = btn.getAttribute('data-sfx-play');
        SFX.enableAndPlay(() => {
          switch (soundKey) {
            case 'cursor': SFX.playCursor(); break;
            case 'select': SFX.playSelect(); break;
            case 'cancel': SFX.playCancel(); break;
            case 'materia': SFX.playMateriaEquip(); break;
            case 'cloudFanfare': SFX.playCloudCheer(); break;
            case 'swordSlash': SFX.playSwordSlash(); break;
            case 'limitBreak': SFX.playLimitBreak(); break;
            case 'assess': SFX.playAssess(); break;
            case 'substory': SFX.playYakuzaSubstory(); break;
            case 'kiryuHeat': SFX.playKiryuHeat(); break;
            case 'majimaSting': SFX.playMajimaSting(); break;
            case 'money': SFX.playYakuzaMoney(); break;
            case 'stamp': SFX.playYakuzaStamp(); break;
            case 'yakuzaSelect': SFX.playYakuzaSelect(); break;
            default: SFX.playSelect();
          }
        });
      });
    });

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

    // Mission Briefing Guided Tour Triggers
    const triggerTour = () => {
      this.startTour();
    };
    document.getElementById('start-tour-hero-btn')?.addEventListener('click', triggerTour);
    document.getElementById('start-tour-nav-btn')?.addEventListener('click', triggerTour);
    document.getElementById('mobile-tour-btn')?.addEventListener('click', () => {
      mobileMenu?.classList.add('hidden');
      triggerTour();
    });

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

  /* --------------------------------------------------------------------------
     CONTACT FORM (Web3Forms relay — no backend, no cookies, no tracking)
     -------------------------------------------------------------------------- */
  initContactForm() {
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
      const palette = {
        error: 'text-red-400',
        success: 'text-emerald-300',
        info: 'text-cyan-300'
      };
      statusEl.className = `mt-3 text-xs font-mono-hud ${palette[kind] || ''}`;
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

    // Clear an error as soon as the visitor starts fixing it
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
        setStatus('error', '<i class="fa-solid fa-triangle-exclamation mr-1"></i> Please fix the highlighted fields.');
        return;
      }

      if (Date.now() - lastSentAt < COOLDOWN_MS) {
        setStatus('info', '<i class="fa-solid fa-hourglass-half mr-1"></i> Transmission already sent — give it a moment.');
        return;
      }

      const accessKey = form.querySelector('[name="access_key"]')?.value || '';
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        // Relay not configured yet: never lose the message, hand off to email instead
        setStatus('info', `<i class="fa-solid fa-envelope mr-1"></i> Relay not configured yet. <a href="${buildMailto()}" class="underline hover:text-emerald-300">Email me directly instead &rarr;</a>`);
        return;
      }

      form.dataset.sending = 'true';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>TRANSMITTING...</span>';
      }
      setStatus('info', '<i class="fa-solid fa-satellite-dish mr-1"></i> Opening channel...');

      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);

      try {
        const response = await fetch(form.action, {
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
        setStatus('success', '<i class="fa-solid fa-circle-check mr-1"></i> Transmission received. I\'ll reply within 24 hours.');
        SFX.playSelect();
      } catch (err) {
        console.error('Contact form submission failed:', err);
        const isTimeout = err.name === 'AbortError';
        const msg = isTimeout
          ? 'Transmission timed out (15s deadline reached).'
          : 'Transmission failed.';
        setStatus('error', `<i class="fa-solid fa-triangle-exclamation mr-1"></i> ${msg} <a href="${buildMailto()}" class="underline hover:text-emerald-300">Email me directly instead &rarr;</a>`);
      } finally {
        clearTimeout(timer);
        form.dataset.sending = 'false';
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> <span>Transmit Message</span>';
        }
      }
    });
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

  /* --------------------------------------------------------------------------
     INTERACTIVE CHARACTER COMPANIONS (CLOUD STRIFE / KIRYU & MAJIMA)
     -------------------------------------------------------------------------- */
  companionState: {
    docked: false,
    patrolling: true,
    activeSpeaker: 'cloud',
    quoteIndex: 0,
    cloudX: 56,
    cloudDir: 1,
    kiryuX: 160,
    kiryuDir: 1,
    majimaX: 56,
    majimaDir: 1
  },

  tourState: {
    active: false,
    currentStep: 0,
    savedPatrol: true
  },

  tourSteps: [
    {
      targetId: 'hero-status-card',
      scrollTarget: 'home',
      title: 'BRIEFING 1/5 // TACTICAL STATUS',
      dialogue: {
        cloud: "Listen up. This is Jehrome's Tactical Status Card. Level 4 Indie Game Designer & Cisco-certified IT Specialist. You can inspect his HP/MP drive meters and grab his full Resume Dossier right here.",
        kiryu: "Alright, look closely. This is Jehrome's Status Card. Level 4 Game Designer & Cisco NetAcad certified. You can grab his full resume dossier right from this card.",
        majima: "YOO-HOO! Check out the boss's status card! Level 4 Game Designer with maxed-out creativity and drive! Hit that Resume Dossier button to see his full stats!"
      },
      sound: 'select'
    },
    {
      targetId: 'materia-inspector-box',
      scrollTarget: 'about',
      title: 'BRIEFING 2/5 // MATERIA LOADOUT',
      dialogue: {
        cloud: "Here's the Materia Loadout. Magic, Command, Support, and Independent skills. Click any glowing orb to inspect its mastery level and automatically filter the projects below that used it.",
        kiryu: "Materia skills. In Kamurocho, preparation is everything. Click any glowing orb to filter out projects built with Unity, C#, Networking, or Game Design.",
        majima: "Look at these shiny Materia orbs! Green for design, yellow for coding, blue for IT networking! Click any orb to filter the quest log below!"
      },
      sound: 'materia'
    },
    {
      targetId: 'works',
      scrollTarget: 'works',
      title: 'BRIEFING 3/5 // QUEST LOG & ASSESS',
      dialogue: {
        cloud: "Section 03: Quest Log. Don't just click the launch links—hit 'ASSESS INTEL' on any project card for a full tactical radar breakdown of Jehrome's design, code, and documentation.",
        kiryu: "Jehrome's Featured Works. From horror to tabletop political strategy! Hit 'ASSESS INTEL' on any card to view the Substory and technical architecture behind each game.",
        majima: "HYAHAHA! 5 killer projects! Slasher horror, political bribery satire, crocodile catching! Hit 'ASSESS INTEL' on any card for the full substory scoop!"
      },
      sound: 'assess'
    },
    {
      targetId: 'nav-theme-controls',
      scrollTarget: 'home',
      title: 'BRIEFING 4/5 // THEMES & SFX JUKEBOX',
      dialogue: {
        cloud: "Check the top navigation bar. You can switch between modern MAKO tactical mode, retro 1997 Final Fantasy VII blue window mode, and Yakuza 0 mode anytime—plus a full retro SFX Jukebox!",
        kiryu: "Look at the top bar. You can switch to our YAKUZA theme anytime, or retro 1997 FF7 mode. Try the JUKEBOX button to test all 14 synthesized retro sounds!",
        majima: "Hit the YAKUZA button up top for gold and dragon fire! Or hit that JUKEBOX button to hear my crazy whistle and money explosions!"
      },
      sound: 'limitBreak'
    },
    {
      targetId: 'contact-form',
      scrollTarget: 'contact',
      title: 'BRIEFING 5/5 // DIRECT TRANSMISSION',
      dialogue: {
        cloud: "Ready to collaborate or hire? Use this Direct Transmission composer to send Jehrome a message straight to his inbox with <24h reply. That's the briefing. Dismissed!",
        kiryu: "Got an indie game project or IT role? Send a message directly through this Transmission form. It goes straight to Jehrome's inbox. Time to get to work!",
        majima: "Need an elite Game Designer or IT Specialist? Fire off a transmission right here! Fast replies guaranteed! That's the tour, folks!"
      },
      sound: 'fanfare'
    }
  ],

  companionQuotes: {
    cloud: [
      "Not interested... unless you're checking out Jehrome's Featured Works.",
      "Click any glowing Materia orb in Section 02 to filter the projects that used that skill!",
      "Mako levels are stable. Click 'ASSESS INTEL' on any project card for a full tactical breakdown.",
      "SOLDIER 1st Class tip: Switch between MAKO and 1997 mode in the top bar anytime."
    ],
    kiryu: [
      "That's rad! Jehrome's game design and IT documentation skills are built for the big leagues.",
      "In Kamurocho, solid preparation wins every battle. Check out the Substory Intel on each project!",
      "A real dragon backs up creativity with technical fundamentals—4x Cisco NetAcad certified."
    ],
    majima: [
      "KIRYU-CHAN!! ...Oh! A visitor! Go hit 'ASSESS INTEL' on Jehrome's Featured Works right now!",
      "Hehehe! From slasher horror to political tabletop strategy, Jehrome designs 'em all!",
      "24-Hour Cinderella mode activated! Need an Indie Game Designer or IT Specialist? Hit Let's Connect!"
    ]
  },

  initCharacterCompanions() {
    const actorCloud = document.getElementById('actor-cloud');
    const actorKiryu = document.getElementById('actor-kiryu');
    const actorMajima = document.getElementById('actor-majima');
    const spriteCloud = document.getElementById('sprite-cloud-el');
    const spriteKiryu = document.getElementById('sprite-kiryu-el');
    const spriteMajima = document.getElementById('sprite-majima-el');
    const closeBtn = document.getElementById('companion-close-bubble');
    const nextQuoteBtn = document.getElementById('companion-next-quote-btn');
    const patrolBtn = document.getElementById('companion-patrol-toggle-btn');

    if (!actorCloud || !actorKiryu || !actorMajima) return;

    // Click Cloud Strife (Rotates through Cloud's victory fanfare, Buster Sword slash, and Materia chime)
    let cloudSoundIdx = 0;
    actorCloud.addEventListener('click', () => {
      const sounds = [
        () => SFX.playCloudCheer(),
        () => SFX.playSwordSlash(),
        () => SFX.playMateriaEquip()
      ];
      sounds[cloudSoundIdx % sounds.length]();
      cloudSoundIdx++;

      if (spriteCloud) {
        spriteCloud.classList.add('cheer');
        setTimeout(() => spriteCloud.classList.remove('cheer'), 1400);
      }
      this.showCompanionBubble('cloud');
    });

    // Click Kazuma Kiryu (Rotates through Dragon Heat punch, Substory intro, and Title Stamp)
    let kiryuSoundIdx = 0;
    actorKiryu.addEventListener('click', () => {
      const sounds = [
        () => SFX.playKiryuHeat(),
        () => SFX.playYakuzaSubstory(),
        () => SFX.playYakuzaStamp()
      ];
      sounds[kiryuSoundIdx % sounds.length]();
      kiryuSoundIdx++;
      this.showCompanionBubble('kiryu');
    });

    // Click Goro Majima (Rotates through Mad Dog whistle & knife gleam, Cash fountain, and Arcade hit)
    let majimaSoundIdx = 0;
    actorMajima.addEventListener('click', () => {
      const sounds = [
        () => SFX.playMajimaSting(),
        () => SFX.playYakuzaMoney(),
        () => SFX.playYakuzaSelect()
      ];
      sounds[majimaSoundIdx % sounds.length]();
      majimaSoundIdx++;
      this.showCompanionBubble('majima');
    });

    closeBtn?.addEventListener('click', () => {
      if (this.tourState?.active) {
        this.endTour();
      } else {
        SFX.playCancel();
      }
      document.getElementById('companion-dialogue')?.classList.add('hidden-bubble');
    });

    // Companion Dock / Minimize Controller
    const dockBtn = document.getElementById('companion-dock-btn');
    const stage = document.getElementById('companion-stage');
    const bubble = document.getElementById('companion-dialogue');
    const dockLabel = document.getElementById('companion-dock-label');
    const dockIndicator = document.getElementById('companion-dock-indicator');
    const dockIcon = document.getElementById('companion-dock-icon');

    const updateDockUI = (isDocked) => {
      this.companionState.docked = isDocked;
      if (stage) stage.classList.toggle('docked', isDocked);
      if (dockBtn) dockBtn.classList.toggle('is-docked', isDocked);

      if (isDocked) {
        if (bubble) bubble.classList.add('hidden-bubble');
        if (dockLabel) dockLabel.textContent = 'Companions: Off';
        if (dockIndicator) dockIndicator.className = 'w-2 h-2 rounded-full bg-slate-500';
        if (dockIcon) dockIcon.className = 'fa-solid fa-eye-slash text-xs text-slate-400';
      } else {
        const theme = document.documentElement.getAttribute('data-theme') || 'mako';
        const isYakuza = theme === 'yakuza';
        if (dockLabel) dockLabel.textContent = 'Companions';
        if (dockIndicator) {
          dockIndicator.className = `w-2 h-2 rounded-full ${isYakuza ? 'bg-amber-400' : 'bg-emerald-400'}`;
        }
        if (dockIcon) {
          dockIcon.className = `fa-solid fa-user-group text-xs ${isYakuza ? 'text-amber-400' : 'text-emerald-400'}`;
        }
      }
    };

    const setDocked = (isDocked, playSfx = true) => {
      updateDockUI(isDocked);
      try {
        localStorage.setItem('jehrome_companions_docked', isDocked ? 'true' : 'false');
      } catch (err) {}
      if (playSfx) {
        if (isDocked) SFX.playCancel();
        else SFX.playSelect();
      }
    };

    // Load saved dock preference
    const savedDocked = localStorage.getItem('jehrome_companions_docked') === 'true';
    if (savedDocked) {
      updateDockUI(true);
    }

    dockBtn?.addEventListener('click', () => {
      setDocked(!this.companionState.docked, true);
    });

    // Light-dismiss: Clicking outside dismisses companion speech bubble (unless in active tour)
    document.addEventListener('click', (e) => {
      const bubbleEl = document.getElementById('companion-dialogue');
      if (!bubbleEl || bubbleEl.classList.contains('hidden-bubble')) return;
      if (this.tourState?.active) return;

      const target = e.target;
      const isBubble = bubbleEl.contains(target);
      const isActor = !!target.closest('.companion-actor');
      const isDock = !!target.closest('#companion-dock-btn');
      const isTourTrigger = !!target.closest('#companion-start-tour-btn, #nav-tour-btn, #mobile-tour-btn, #hero-tour-btn');

      if (!isBubble && !isActor && !isDock && !isTourTrigger) {
        bubbleEl.classList.add('hidden-bubble');
      }
    });

    // Auto-dim companion stage and dismiss bubble when focusing Contact form inputs
    const contactSection = document.getElementById('contact');
    if (contactSection && stage) {
      contactSection.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('focus', () => {
          stage.classList.add('dimmed');
          document.getElementById('companion-dialogue')?.classList.add('hidden-bubble');
        });
        input.addEventListener('blur', () => {
          stage.classList.remove('dimmed');
        });
      });
    }

    // Auto-restore companion stage whenever any native dialog closes
    document.querySelectorAll('dialog').forEach(dlg => {
      dlg.addEventListener('close', () => {
        stage?.classList.remove('dimmed');
      });
    });

    // Tour Controls inside companion dialogue
    const tourPrevBtn = document.getElementById('tour-prev-btn');
    const tourNextBtn = document.getElementById('tour-next-btn');
    const tourExitBtn = document.getElementById('tour-exit-btn');
    const tourStartCompanionBtn = document.getElementById('companion-start-tour-btn');

    tourPrevBtn?.addEventListener('click', () => this.prevTourStep());
    tourNextBtn?.addEventListener('click', () => this.nextTourStep());
    tourExitBtn?.addEventListener('click', () => this.endTour());
    tourStartCompanionBtn?.addEventListener('click', () => this.startTour());

    // Keyboard navigation during active tour
    window.addEventListener('keydown', (e) => {
      if (!this.tourState?.active) return;
      if (e.key === 'Escape') {
        this.endTour();
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        this.nextTourStep();
      } else if (e.key === 'ArrowLeft') {
        this.prevTourStep();
      }
    });

    nextQuoteBtn?.addEventListener('click', () => {
      const speaker = this.companionState.activeSpeaker;
      if (speaker === 'kiryu') {
        SFX.playKiryuHeat();
      } else if (speaker === 'majima') {
        SFX.playMajimaSting();
      } else {
        SFX.playSwordSlash();
      }
      this.showCompanionBubble(speaker, true);
    });

    patrolBtn?.addEventListener('click', () => {
      SFX.playCursor();
      this.companionState.patrolling = !this.companionState.patrolling;
      const label = document.getElementById('companion-patrol-label');
      if (label) {
        label.textContent = this.companionState.patrolling ? 'Pause Walk' : 'Resume Walk';
      }
    });

    window.addEventListener('resize', () => {
      this.updateBubblePosition();
    });

    // Continuous smooth walking patrol across the bottom viewport track
    const stepPatrol = () => {
      if (this.companionState.patrolling) {
        const theme = document.documentElement.getAttribute('data-theme') || 'mako';
        const maxRight = Math.max(220, window.innerWidth - 160);

        if (theme === 'yakuza') {
          // Move Kiryu
          this.companionState.kiryuX += this.companionState.kiryuDir * 0.85;
          if (this.companionState.kiryuX >= maxRight) {
            this.companionState.kiryuX = maxRight;
            this.companionState.kiryuDir = -1;
          } else if (this.companionState.kiryuX <= 110) {
            this.companionState.kiryuX = 110;
            this.companionState.kiryuDir = 1;
          }
          actorKiryu.style.left = `${this.companionState.kiryuX}px`;
          // Kiryu's sprite naturally faces left; flip when walking right (dir === 1)
          spriteKiryu?.classList.toggle('flipped', this.companionState.kiryuDir === 1);

          // Move Majima ("Majima Everywhere" patrolling alongside Kiryu)
          this.companionState.majimaX += this.companionState.majimaDir * 0.85;
          if (this.companionState.majimaX >= maxRight - 85) {
            this.companionState.majimaX = maxRight - 85;
            this.companionState.majimaDir = -1;
          } else if (this.companionState.majimaX <= 24) {
            this.companionState.majimaX = 24;
            this.companionState.majimaDir = 1;
          }
          actorMajima.style.left = `${this.companionState.majimaX}px`;
          spriteMajima?.classList.toggle('flipped', this.companionState.majimaDir === 1);
        } else {
          // Move Cloud Strife in MAKO & 1997 themes
          this.companionState.cloudX += this.companionState.cloudDir * 0.75;
          if (this.companionState.cloudX >= maxRight) {
            this.companionState.cloudX = maxRight;
            this.companionState.cloudDir = -1;
          } else if (this.companionState.cloudX <= 32) {
            this.companionState.cloudX = 32;
            this.companionState.cloudDir = 1;
          }
          actorCloud.style.left = `${this.companionState.cloudX}px`;
          // Cloud's sprite naturally faces left; flip when walking right (dir === 1)
          spriteCloud?.classList.toggle('flipped', this.companionState.cloudDir === 1);
        }

        // Keep speech bubble synchronized over the walking speaker's head
        const bubble = document.getElementById('companion-dialogue');
        if (bubble && !bubble.classList.contains('hidden-bubble')) {
          this.updateBubblePosition();
        }
      }
      requestAnimationFrame(stepPatrol);
    };

    requestAnimationFrame(stepPatrol);
  },

  /* --------------------------------------------------------------------------
     CHARACTER-LED MISSION BRIEFING ONBOARDING TOUR
     Guided walkthrough of key portfolio systems with live companion commentary
     -------------------------------------------------------------------------- */
  startTour() {
    // If companions were docked, undock them so the tour guide is visible
    if (this.companionState.docked) {
      this.companionState.docked = false;
      document.getElementById('companion-stage')?.classList.remove('docked');
      document.getElementById('companion-dock-btn')?.classList.remove('is-docked');
      const dockLabel = document.getElementById('companion-dock-label');
      if (dockLabel) dockLabel.textContent = 'Companions';
      try {
        localStorage.setItem('jehrome_companions_docked', 'false');
      } catch (err) {}
    }

    this.tourState.active = true;
    this.tourState.savedPatrol = this.companionState.patrolling;
    this.companionState.patrolling = false;

    // Toggle speech bubble controls
    document.getElementById('companion-normal-controls')?.classList.add('hidden');
    document.getElementById('companion-tour-controls')?.classList.remove('hidden');

    this.renderTourStep(0);
  },

  renderTourStep(stepIdx) {
    if (stepIdx < 0 || stepIdx >= this.tourSteps.length) return;
    this.tourState.currentStep = stepIdx;
    const step = this.tourSteps[stepIdx];

    // Clear previous spotlights
    document.querySelectorAll('.tour-spotlight-active').forEach(el => el.classList.remove('tour-spotlight-active'));

    // Highlight target element
    const targetEl = document.getElementById(step.targetId);
    if (targetEl) {
      targetEl.classList.add('tour-spotlight-active');
    }

    // Scroll smoothly to target section
    const scrollEl = document.getElementById(step.scrollTarget);
    if (scrollEl) {
      scrollEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Determine active speaker & themes
    const theme = document.documentElement.getAttribute('data-theme') || 'mako';
    let speaker = 'cloud';
    if (theme === 'yakuza') {
      speaker = this.companionState.activeSpeaker === 'majima' ? 'majima' : 'kiryu';
    }

    const bubble = document.getElementById('companion-dialogue');
    const speakerEl = document.getElementById('companion-speaker');
    const textEl = document.getElementById('companion-text');
    const stepBadge = document.getElementById('tour-step-badge');
    const prevBtn = document.getElementById('tour-prev-btn');
    const nextBtn = document.getElementById('tour-next-btn');

    if (speakerEl) speakerEl.textContent = step.title;
    if (textEl) textEl.textContent = `"${step.dialogue[speaker] || step.dialogue.cloud}"`;
    if (stepBadge) stepBadge.textContent = `STEP ${stepIdx + 1}/${this.tourSteps.length}`;

    if (prevBtn) {
      prevBtn.disabled = stepIdx === 0;
    }
    if (nextBtn) {
      const isLast = stepIdx === this.tourSteps.length - 1;
      nextBtn.innerHTML = isLast
        ? '<span>Finish</span> <i class="fa-solid fa-flag-checkered text-[9px]"></i>'
        : '<span>Next</span> <i class="fa-solid fa-chevron-right text-[9px]"></i>';
    }

    // Trigger step SFX
    if (step.sound === 'materia') SFX.playMateriaEquip();
    else if (step.sound === 'assess') SFX.playAssess();
    else if (step.sound === 'limitBreak') SFX.playLimitBreak();
    else if (step.sound === 'fanfare') {
      if (speaker === 'cloud') SFX.playCloudCheer();
      else SFX.playYakuzaMoney();
    } else {
      SFX.playSelect();
    }

    // Anchor speech bubble directly over companion head
    bubble?.classList.remove('hidden-bubble');
    this.updateBubblePosition();
  },

  nextTourStep() {
    if (this.tourState.currentStep < this.tourSteps.length - 1) {
      this.renderTourStep(this.tourState.currentStep + 1);
    } else {
      this.endTour(true);
    }
  },

  prevTourStep() {
    if (this.tourState.currentStep > 0) {
      this.renderTourStep(this.tourState.currentStep - 1);
    }
  },

  endTour(completed = false) {
    this.tourState.active = false;
    this.companionState.patrolling = this.tourState.savedPatrol;

    // Clear spotlight
    document.querySelectorAll('.tour-spotlight-active').forEach(el => el.classList.remove('tour-spotlight-active'));

    // Restore normal conversation controls
    document.getElementById('companion-tour-controls')?.classList.add('hidden');
    document.getElementById('companion-normal-controls')?.classList.remove('hidden');

    // Restore normal speaker title
    const speaker = this.companionState.activeSpeaker || 'cloud';
    const titles = {
      cloud: 'CLOUD STRIFE // SOLDIER 1ST CLASS',
      kiryu: 'KAZUMA KIRYU // DRAGON OF DOJIMA',
      majima: 'GORO MAJIMA // MAD DOG OF SHIMANO'
    };
    const speakerEl = document.getElementById('companion-speaker');
    if (speakerEl) speakerEl.textContent = titles[speaker] || titles.cloud;

    if (completed) {
      const theme = document.documentElement.getAttribute('data-theme') || 'mako';
      if (theme === 'yakuza') {
        SFX.playYakuzaMoney();
      } else {
        SFX.playCloudCheer();
      }
    } else {
      SFX.playCancel();
    }
  },

  getSpeakerCenter(speaker) {
    if (speaker === 'kiryu') {
      return (this.companionState.kiryuX || 160) + 32;
    }
    if (speaker === 'majima') {
      return (this.companionState.majimaX || 56) + 32;
    }
    return (this.companionState.cloudX || 56) + 24;
  },

  updateBubblePosition() {
    const bubble = document.getElementById('companion-dialogue');
    const tail = document.getElementById('companion-bubble-tail');
    if (!bubble || bubble.classList.contains('hidden-bubble')) return;

    const speaker = this.companionState.activeSpeaker || 'cloud';
    const speakerCenterX = this.getSpeakerCenter(speaker);

    // Height offset: Cloud is ~126px, Kiryu/Majima are taller sprites ~148px
    const bottomY = (speaker === 'cloud') ? 126 : 148;
    bubble.style.bottom = `${bottomY}px`;

    const bubbleWidth = bubble.offsetWidth || 300;
    const viewportWidth = window.innerWidth;
    const margin = 12;

    // Calculate centered X position above speaker's head
    let bubbleLeft = speakerCenterX - (bubbleWidth / 2);

    // Clamp within viewport to prevent overflowing offscreen on mobile/edges
    const maxLeft = Math.max(margin, viewportWidth - bubbleWidth - margin);
    bubbleLeft = Math.max(margin, Math.min(maxLeft, bubbleLeft));
    bubble.style.left = `${bubbleLeft}px`;

    // Position the tail to point directly towards the character's head
    if (tail) {
      let tailOffset = speakerCenterX - bubbleLeft;
      // Keep tail inset from corners to stay attached cleanly to the rounded panel
      tailOffset = Math.max(20, Math.min(bubbleWidth - 20, tailOffset));
      tail.style.left = `${tailOffset}px`;
    }
  },

  updateCompanionForTheme(themeName, showGreeting = false) {
    const actorCloud = document.getElementById('actor-cloud');
    const actorKiryu = document.getElementById('actor-kiryu');
    const actorMajima = document.getElementById('actor-majima');
    if (!actorCloud || !actorKiryu || !actorMajima) return;

    // Update dock button theme accent when active
    const dockIndicator = document.getElementById('companion-dock-indicator');
    const dockIcon = document.getElementById('companion-dock-icon');
    if (!this.companionState.docked) {
      const isYakuza = themeName === 'yakuza';
      if (dockIndicator) {
        dockIndicator.className = `w-2 h-2 rounded-full ${isYakuza ? 'bg-amber-400' : 'bg-emerald-400'}`;
      }
      if (dockIcon) {
        dockIcon.className = `fa-solid fa-user-group text-xs ${isYakuza ? 'text-amber-400' : 'text-emerald-400'}`;
      }
    }

    if (themeName === 'yakuza') {
      actorCloud.classList.add('hidden');
      actorKiryu.classList.remove('hidden');
      actorMajima.classList.remove('hidden');
      if (showGreeting) {
        this.showCompanionBubble('kiryu');
      }
    } else {
      actorKiryu.classList.add('hidden');
      actorMajima.classList.add('hidden');
      actorCloud.classList.remove('hidden');
      if (showGreeting) {
        const spriteCloud = document.getElementById('sprite-cloud-el');
        if (spriteCloud) {
          spriteCloud.classList.add('cheer');
          setTimeout(() => spriteCloud.classList.remove('cheer'), 1200);
        }
        this.showCompanionBubble('cloud');
      }
    }
  },

  showCompanionBubble(speaker, advance = true) {
    const bubble = document.getElementById('companion-dialogue');
    const speakerEl = document.getElementById('companion-speaker');
    const headerEl = document.getElementById('companion-header');
    const textEl = document.getElementById('companion-text');
    const nextBtn = document.getElementById('companion-next-quote-btn');
    if (!bubble || !speakerEl || !textEl) return;

    // If companions were docked, undock them so the visitor sees the speaker
    if (this.companionState.docked) {
      this.companionState.docked = false;
      document.getElementById('companion-stage')?.classList.remove('docked');
      document.getElementById('companion-dock-btn')?.classList.remove('is-docked');
      const dockLabel = document.getElementById('companion-dock-label');
      if (dockLabel) dockLabel.textContent = 'Companions';
      try {
        localStorage.setItem('jehrome_companions_docked', 'false');
      } catch (err) {}
    }

    this.companionState.activeSpeaker = speaker;
    const list = this.companionQuotes[speaker] || this.companionQuotes.cloud;
    if (advance) {
      this.companionState.quoteIndex = (this.companionState.quoteIndex + 1) % list.length;
    }

    const configs = {
      cloud: {
        title: 'CLOUD STRIFE // SOLDIER 1ST CLASS',
        badgeClass: 'text-xs font-mono-hud font-bold uppercase tracking-wider text-emerald-400',
        headerBorder: 'border-emerald-500/25',
        btnClass: 'px-2.5 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/35 border border-emerald-400/40 text-emerald-300 transition'
      },
      kiryu: {
        title: 'KAZUMA KIRYU // DRAGON OF DOJIMA',
        badgeClass: 'text-xs font-mono-hud font-bold uppercase tracking-wider text-red-400',
        headerBorder: 'border-red-500/30',
        btnClass: 'px-2.5 py-1 rounded bg-red-500/20 hover:bg-red-500/35 border border-red-500/40 text-red-300 transition'
      },
      majima: {
        title: 'GORO MAJIMA // MAD DOG OF SHIMANO',
        badgeClass: 'text-xs font-mono-hud font-bold uppercase tracking-wider text-amber-400',
        headerBorder: 'border-amber-500/30',
        btnClass: 'px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/40 text-amber-300 transition'
      }
    };

    const cfg = configs[speaker] || configs.cloud;
    speakerEl.textContent = cfg.title;
    speakerEl.className = cfg.badgeClass;
    if (headerEl) {
      headerEl.className = `flex items-center justify-between gap-3 border-b ${cfg.headerBorder} pb-2 mb-2`;
    }
    if (nextBtn) {
      nextBtn.className = cfg.btnClass;
    }

    textEl.textContent = `"${list[this.companionState.quoteIndex]}"`;
    bubble.classList.remove('hidden-bubble');
    this.updateBubblePosition();
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
