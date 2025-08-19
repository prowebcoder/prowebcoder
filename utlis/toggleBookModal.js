export const openBookModal = () => {
  document
    .getElementById("uc-book-modal")
    .classList.add("uc-offcanvas-overlay");
  document.getElementById("uc-book-modal").classList.add("uc-open");
};
export const closeBookModal = () => {
  document
    .getElementById("uc-book-modal")
    .classList.remove("uc-offcanvas-overlay");
  document.getElementById("uc-book-modal").classList.remove("uc-open");
};
