"use strict";

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
        if (animateEntrance) {
          void project.offsetWidth;
          project.style.animationDelay = `${Math.min(visibleCount - 1, 6) * 55}ms`;
          project.classList.add("project-entering");
        }
      }
    }

    if (resultCount) {
      resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "project" : "projects"}`;
    }
  });
}
