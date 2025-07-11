// script.js
function adjustNavLinks(prefix) {
  const booksLink = document.getElementById("nav-books");
  const eventsLink = document.getElementById("nav-events");
  const sitemapLink = document.getElementById("nav-sitemap");
  const contactLink = document.getElementById("nav-contact");
  const privacyLink = document.getElementById("nav-privacy");

  if (booksLink) booksLink.href = prefix + "pages/booklist.html";
  if (eventsLink) eventsLink.href = prefix + "pages/events.html";
  if (sitemapLink) sitemapLink.href = prefix + "pages/sitemap.html";
  if (contactLink) contactLink.href = prefix + "pages/contact.html";
  if (privacyLink) privacyLink.href = prefix + "pages/privacy.html";
}
function loadHeaderFooter() {
  const isInPagesFolder = window.location.pathname.includes("/pages/");
  const prefix = isInPagesFolder ? "../" : "";

  // Load header
  fetch(prefix + "pages/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Adjust logo path and home link AFTER header is loaded
      const logoImg = document.getElementById("logo-img");
      const homeLink = document.getElementById("home-link");

      if (logoImg) logoImg.src = prefix + "assets/sl.avif";
      if (homeLink) homeLink.href = prefix + "index.html";
      // Adjust header links
      adjustNavLinks(prefix);
    });

  // Load footer
  fetch(prefix + "pages/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
      adjustNavLinks(prefix); // <-- adjust footer links here!
    });
}
document.addEventListener("DOMContentLoaded", loadHeaderFooter);
