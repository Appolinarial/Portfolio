function openMenu() {
  document.getElementById("main-menu").classList.remove("menu-closed");
}
function сloseMenu() {
  document.getElementById("main-menu").classList.add("menu-closed");
}
function translateToEn() {
  fetch("./i18n/en.json")
    .then((response) => response.json())
    .then((jsonResponse) => {
      let elems = document.querySelectorAll("[data-i18n]");
      elems.forEach((elem) => {
        let atributI18nOfThisElem = elem.getAttribute("data-i18n");
        let neededTranslationNomber = atributI18nOfThisElem;
        let translation = jsonResponse[neededTranslationNomber];
        elem.textContent = translation;
      });
    });
}

function translateToRu() {
  fetch("./i18n/ru.json")
    .then((response) => response.json())
    .then((jsonResponse) => {
      let elems = document.querySelectorAll("[data-i18n]");
      elems.forEach((elem) => {
        let atributI18nOfThisElem = elem.getAttribute("data-i18n");
        let neededTranslationNomber = atributI18nOfThisElem;
        let translation = jsonResponse[neededTranslationNomber];
        elem.textContent = translation;
      });
    });
}