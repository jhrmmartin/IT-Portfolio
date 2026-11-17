"use strict";

(() => {
  const filters = document.querySelectorAll("[data-filter]");
  const resultCount = document.querySelector(".result-count");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  for (const filter of filters) {
    filter.addEventListener("click", (event) => {
      const category = filter.dataset.filter;
      const animateEntrance = event.isTrusted && !reducedMotion.matches;
      let visibleCount = 0;

      for (const button of filters) {
        button.setAttribute("aria-pressed", String(button === filter));
      }

      for (const project of document.querySelectorAll(".project[data-category]")) {
        const hidden = category !== "All work" && project.dataset.category !== category;
        project.hidden = hidden;
        project.classList.remove("project-entering");
        project.style.animationDelay = "";

        if (!hidden) {
          visibleCount += 1;
          project.querySelector(".project-title > span").textContent = String(visibleCount).padStart(2, "0");
          project.classList.add("is-visible");
          if (animateEntrance) {
            void project.offsetWidth;
            project.style.animationDelay = `${Math.min(visibleCount - 1, 6) * 60}ms`;
            project.classList.add("project-entering");
          }
        }
      }

      if (resultCount) {
        resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "project" : "projects"}`;
      }
    });
  }

  // Fallback for browsers without CSS scroll-driven masthead progress
  const masthead = document.querySelector(".masthead");
  const supportsScrollTimeline =
    window.CSS?.supports?.("(animation-timeline: scroll()) and (animation-range: 0% 100%)");

  if (masthead && !supportsScrollTimeline && !reducedMotion.matches) {
    let ticking = false;
    const syncScrollProgress = () => {
      ticking = false;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      masthead.style.setProperty("--scroll-progress", progress.toFixed(4));
    };
    window.addEventListener("scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(syncScrollProgress);
      }
    }, { passive: true });
    syncScrollProgress();
  }

  // Cross-browser scroll-triggered reveal choreography
  const revealSelector = [
    ".portrait",
    ".profile-copy",
    ".profile-facts",
    ".profile-facts li",
    ".section-heading",
    ".filters",
    ".project",
    ".credentials h2",
    ".credentials a",
    ".timeline-section h2",
    ".timeline-section article",
    "footer .eyebrow",
    "footer h2",
    "footer .email",
    ".message-form"
  ].join(", ");

  let observer = null;

  function setupReveals() {
    const items = Array.from(document.querySelectorAll(revealSelector));
    if (!items.length) return;

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      document.documentElement.classList.remove("has-reveal");
      for (const el of items) el.classList.add("is-visible");
      return;
    }

    document.documentElement.classList.add("has-reveal");

    if (observer) observer.disconnect();
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );

    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    let projectIndex = 0;
    let skillIndex = 0;
    let certIndex = 0;
    let timelineIndex = 0;

    for (const el of items) {
      el.classList.add("reveal-item");

      if (el.matches(".project")) {
        el.style.setProperty("--reveal-delay", `${(projectIndex % 2) * 90}ms`);
        projectIndex += 1;
      } else if (el.matches(".profile-facts li")) {
        el.style.setProperty("--reveal-delay", `${Math.min(skillIndex, 10) * 55}ms`);
        skillIndex += 1;
      } else if (el.matches(".credentials a")) {
        el.style.setProperty("--reveal-delay", `${Math.min(certIndex, 6) * 75}ms`);
        certIndex += 1;
      } else if (el.matches(".timeline-section article")) {
        el.style.setProperty("--reveal-delay", `${Math.min(timelineIndex, 6) * 85}ms`);
        timelineIndex += 1;
      }

      const rect = el.getBoundingClientRect();
      if (rect.top < viewportH * 0.96) {
        el.classList.add("is-visible");
      } else if (!el.classList.contains("is-visible")) {
        observer.observe(el);
      }
    }
  }

  window.refreshPortfolioReveals = setupReveals;
  setupReveals();
})();
