// utils/togglePortfolioModal.ts
export const openPortfolioModal = () => {
  const el = document.getElementById("uc-portfolio-modal");
  if (!el) return;
  el.classList.add("uc-offcanvas-overlay");
  el.classList.add("uc-open");
};

export const closePortfolioModal = () => {
  const el = document.getElementById("uc-portfolio-modal");
  if (!el) return;
  el.classList.remove("uc-offcanvas-overlay");
  el.classList.remove("uc-open");
};

// NEW: open and pass the project payload to the modal via CustomEvent
export const openPortfolioWith = (project) => {
  window.dispatchEvent(new CustomEvent("portfolio:open", { detail: project }));
  openPortfolioModal();
};
