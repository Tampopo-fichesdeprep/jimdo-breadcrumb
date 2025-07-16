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
document.addEventListener("DOMContentLoaded", function () {
  const tags = [];

  const url = window.location.href.toLowerCase();
  const title = document.querySelector("h1")?.textContent.toLowerCase() || "";

  const emojiTags = {
    "ULIS": "🧩",
    "Différenciation": "🎯",
    "Adaptation": "🛠️",
    "RASED / Maîtresse E": "🧠",
    "Apprentissage de la lecture": "📖",
    "Numération": "🔢",
    "Calcul": "➕",
    "Fiche de prep": "📋",
    "Évaluation": "📝",
    "Rituels": "🔁",
    "Gestion de classe": "🧑‍🏫",
    "Matériel à imprimer": "🖨️"
  };

  function detect(label, ...keywords) {
    for (const word of keywords) {
      if (url.includes(word) || title.includes(word)) {
        tags.push({ label, icon: emojiTags[label] || "" });
        break;
      }
    }
  }

  // Détection intelligente
  detect("ULIS", "ulis");
  detect("Différenciation", "différenciation", "differenciation");
  detect("Adaptation", "adaptation");
  detect("RASED / Maîtresse E", "rased", "maitresse e", "maîtresse e");
  detect("Apprentissage de la lecture", "apprendre à lire", "lecture");
  detect("Numération", "numération");
  detect("Calcul", "calcul", "additions", "soustractions", "multiplications");
  detect("Fiche de prep", "fiche de prep");
  detect("Évaluation", "évaluation");
  detect("Rituels", "rituel");
  detect("Gestion de classe", "gestion de classe");
  detect("Matériel à imprimer", "à imprimer", "pdf", "matériel");

  if (tags.length > 0) {
    const tagContainer = document.createElement("div");
    tagContainer.className = "auto-tags";
    tags.forEach(({ label, icon }) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = `${icon} ${label}`;
      tagContainer.appendChild(span);
    });

    const h1 = document.querySelector("h1");
    if (h1 && h1.parentNode) {
      h1.parentNode.insertBefore(tagContainer, h1.nextSibling);
    }
  }
});
