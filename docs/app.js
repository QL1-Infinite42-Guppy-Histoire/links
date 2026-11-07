"use strict";

/* ============================================================
   BRAND — the brand name and tagline live HERE ONLY.
   To rename the brand, change this one block; every page
   picks the values up from the [data-brand] elements.
   ============================================================ */
var BRAND = {
  name: {
    en: "Guppy's Guide",
    ja: "グッピーズガイド"
  },
  tagline: {
    en: "Don't Panic — a hitchhiker's toolbox for 42 Chain & QL1",
    ja: "あわてないで。42 Chain・QL1 のための道具箱"
  }
};

(function () {
  var lang = document.documentElement.lang === "ja" ? "ja" : "en";

  // Apply the brand name / tagline from the BRAND constant above.
  document.querySelectorAll('[data-brand="name"]').forEach(function (el) {
    el.textContent = BRAND.name[lang];
  });
  document.querySelectorAll('[data-brand="tagline"]').forEach(function (el) {
    el.textContent = BRAND.tagline[lang];
  });
  document.title = BRAND.name[lang] + " — " + BRAND.tagline[lang];

  // Language selector: persist the choice, then jump to that page.
  var sel = document.getElementById("langSel");
  if (sel) {
    sel.addEventListener("change", function () {
      try { localStorage.setItem("links_lang", sel.value); } catch (e) {}
      location.href = (sel.value === "ja" ? "ja.html" : "en.html") + location.search + location.hash;
    });
  }
})();
