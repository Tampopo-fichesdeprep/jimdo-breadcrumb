document.addEventListener("DOMContentLoaded", function () {
  const breadcrumb = document.createElement("nav");
  breadcrumb.className = "breadcrumb";

  // Créer le lien "Accueil" avec l'icône
  const homeLink = document.createElement("a");
  homeLink.href = "/";
  homeLink.innerHTML = '<span class="home-icon">🏠</span> Accueil';
  breadcrumb.appendChild(homeLink);

  // Chercher le titre principal de la page
  const pageTitle =
    document.querySelector("h1")?.textContent ||
    document.title ||
    "Page actuelle";

  if (pageTitle) {
    const separator = document.createTextNode(" › ");
    breadcrumb.appendChild(separator);

    const currentPage = document.createElement("span");
    currentPage.textContent = pageTitle.trim();
    breadcrumb.appendChild(currentPage);
  }

  const target = document.querySelector("#content") || document.body;
  target.insertBefore(breadcrumb, target.firstChild);
});
