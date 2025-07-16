// breadcrumb.js avec icône "maison" pour Accueil

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.split("/").filter(Boolean);
  if (path.length === 0) return;

  const breadcrumb = document.createElement("nav");
  breadcrumb.className = "breadcrumb";

  const homeLink = document.createElement("a");
  homeLink.href = "/";
  homeLink.innerHTML = '<span class="home-icon">🏠</span>Accueil';
  breadcrumb.appendChild(homeLink);

  path.forEach((segment, index) => {
    const separator = document.createTextNode(" › ");
    breadcrumb.appendChild(separator);

    const crumb = document.createElement("a");
    const linkPath = "/" + path.slice(0, index + 1).join("/");
    crumb.href = linkPath;
    crumb.textContent = decodeURIComponent(segment.replace(/[-_]/g, " "));
    breadcrumb.appendChild(crumb);
  });

  const target = document.querySelector("#content") || document.body;
  target.insertBefore(breadcrumb, target.firstChild);
});
