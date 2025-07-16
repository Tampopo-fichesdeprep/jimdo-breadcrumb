// breadcrumb.js – Crée un fil d'Ariane simple à partir de l'URL

document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname.split("/").filter(Boolean);
  if (path.length === 0) return;

  const breadcrumb = document.createElement("nav");
  breadcrumb.className = "breadcrumb";
  breadcrumb.style.fontSize = "0.9em";
  breadcrumb.style.margin = "10px 0";

  const homeLink = document.createElement("a");
  homeLink.href = "/";
  homeLink.textContent = "Accueil";
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

  // Ajoute le fil d’Ariane tout en haut du contenu
  const target = document.querySelector("#content") || document.body;
  target.insertBefore(breadcrumb, target.firstChild);
});
