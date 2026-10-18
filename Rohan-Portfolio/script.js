const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Replace this with your real public contact email before publishing.
const PORTFOLIO_EMAIL = "thurkapallyrohan@gmail.com";

document.getElementById("copyEmail").addEventListener("click", async () => {
  const note = document.getElementById("contactNote");
  if (PORTFOLIO_EMAIL === "your-email@example.com") {
    note.textContent = "Please replace your-email@example.com in script.js with your real contact email before publishing.";
    return;
  }
  try {
    await navigator.clipboard.writeText(PORTFOLIO_EMAIL);
    note.textContent = "Email address copied: " + PORTFOLIO_EMAIL;
  } catch {
    note.textContent = "Contact email: " + PORTFOLIO_EMAIL;
  }
});
