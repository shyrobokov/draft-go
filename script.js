const translations = {
  ru: {
    navCatalog: "Каталог",
    navContacts: "Контакты",
    heroEyebrow: "Разливное пиво и напитки",
    heroCopy:
      "Draft & Go - магазин разливного пива, spritz-коктейлей, винных напитков, кваса и лимонада. Все цены указаны за 1 литр в леях.",
    heroCatalog: "Смотреть каталог",
    heroMap: "Открыть карту",
    badgeLine1: "Пиво на розлив",
    badgeLine2: "от 19,90 lei",
    statBeer: "сортов пива",
    statCocktails: "коктейлей на розлив",
    statSoft: "безалкогольных напитка",
    statPrice: "цена за литр",
    catalogEyebrow: "Каталог",
    catalogTitle: "Ассортимент Draft & Go",
    catalogNote: "Карточки с описанием, изображением и актуальной ценой за 1 литр.",
    filterAll: "Все",
    filterBeer: "Пиво",
    filterSpritz: "Spritz",
    filterWine: "Вино",
    filterSoft: "Без алкоголя",
    visitEyebrow: "Магазин",
    visitCopy:
      "Адрес и маршрут доступны на Google Maps. Для связи используйте телефон, WhatsApp или Telegram.",
    mapButton: "Открыть Google Maps",
    phoneLabel: "Телефон",
    locationLabel: "Локация",
    serviceLabel: "Формат",
    serviceValue: "На розлив",
    footerTop: "Наверх",
    recommended: "Рекомендуем",
  },
  ro: {
    navCatalog: "Catalog",
    navContacts: "Contacte",
    heroEyebrow: "Bere si bauturi la draft",
    heroCopy:
      "Draft & Go - magazin cu bere la draft, cocktailuri spritz, bauturi vinicole, kvas si limonada. Toate preturile sunt pentru 1 litru, in lei.",
    heroCatalog: "Vezi catalogul",
    heroMap: "Deschide harta",
    badgeLine1: "Bere la draft",
    badgeLine2: "de la 19,90 lei",
    statBeer: "sortimente de bere",
    statCocktails: "cocktailuri la draft",
    statSoft: "bauturi fara alcool",
    statPrice: "pret pe litru",
    catalogEyebrow: "Catalog",
    catalogTitle: "Sortiment Draft & Go",
    catalogNote: "Carduri cu descriere, imagine si pret actual pentru 1 litru.",
    filterAll: "Toate",
    filterBeer: "Bere",
    filterSpritz: "Spritz",
    filterWine: "Vin",
    filterSoft: "Fara alcool",
    visitEyebrow: "Magazin",
    visitCopy:
      "Adresa si traseul sunt disponibile pe Google Maps. Pentru contact folositi telefonul, WhatsApp sau Telegram.",
    mapButton: "Deschide Google Maps",
    phoneLabel: "Telefon",
    locationLabel: "Locatie",
    serviceLabel: "Format",
    serviceValue: "La draft",
    footerTop: "Sus",
    recommended: "Recomandat",
  },
  uk: {
    navCatalog: "Каталог",
    navContacts: "Контакти",
    heroEyebrow: "Розливне пиво та напої",
    heroCopy:
      "Draft & Go - магазин розливного пива, spritz-коктейлів, винних напоїв, квасу та лимонаду. Усі ціни вказані за 1 літр у леях.",
    heroCatalog: "Дивитися каталог",
    heroMap: "Відкрити мапу",
    badgeLine1: "Пиво на розлив",
    badgeLine2: "від 19,90 lei",
    statBeer: "сортів пива",
    statCocktails: "коктейлів на розлив",
    statSoft: "безалкогольні напої",
    statPrice: "ціна за літр",
    catalogEyebrow: "Каталог",
    catalogTitle: "Асортимент Draft & Go",
    catalogNote: "Картки з описом, зображенням і актуальною ціною за 1 літр.",
    filterAll: "Усе",
    filterBeer: "Пиво",
    filterSpritz: "Spritz",
    filterWine: "Вино",
    filterSoft: "Без алкоголю",
    visitEyebrow: "Магазин",
    visitCopy:
      "Адреса і маршрут доступні на Google Maps. Для зв'язку використовуйте телефон, WhatsApp або Telegram.",
    mapButton: "Відкрити Google Maps",
    phoneLabel: "Телефон",
    locationLabel: "Локація",
    serviceLabel: "Формат",
    serviceValue: "На розлив",
    footerTop: "Нагору",
    recommended: "Рекомендуємо",
  },
};

const products = [
  {
    category: "beer",
    group: { ru: "Пиво Umanpivo", ro: "Bere Umanpivo", uk: "Пиво Umanpivo" },
    name: { ru: "Stout cu lapte", ro: "Stout cu lapte", uk: "Stout cu lapte" },
    description: {
      ru: "Темный молочный стаут с кремовой текстурой, мягкой сладостью и кофейным оттенком.",
      ro: "Stout brun cu textura cremoasa, dulceata fina si note usoare de cafea.",
      uk: "Темний молочний стаут з кремовою текстурою, м'якою солодкістю і кавовим відтінком.",
    },
    price: "21,90",
    recommended: true,
    art: { kind: "beer", liquid: "#2c1710", foam: "#f8ead1", accent: "#a56a34", label: "ST" },
  },
  {
    category: "beer",
    group: { ru: "Пиво Umanpivo", ro: "Bere Umanpivo", uk: "Пиво Umanpivo" },
    name: { ru: "IPA", ro: "IPA", uk: "IPA" },
    description: {
      ru: "Яркий эль с выраженной хмелевой горчинкой, цитрусовым ароматом и сухим финишем.",
      ro: "Ale expresiv cu amarui de hamei, aroma citrica si final sec.",
      uk: "Яскравий ель з виразною хмелевою гірчинкою, цитрусовим ароматом і сухим фінішем.",
    },
    price: "21,90",
    art: { kind: "beer", liquid: "#d98a1f", foam: "#fff2cf", accent: "#3b7a34", label: "IPA" },
  },
  {
    category: "beer",
    group: { ru: "Пиво Umanpivo", ro: "Bere Umanpivo", uk: "Пиво Umanpivo" },
    name: { ru: "Sofiivske", ro: "Sofiivske", uk: "Sofiivske" },
    description: {
      ru: "Светлое нефильтрованное пиво с мягким зерновым вкусом и легкой мутностью.",
      ro: "Bere blonda nefiltrata cu gust moale de malt si aspect usor tulbure.",
      uk: "Світле нефільтроване пиво з м'яким зерновим смаком і легкою мутністю.",
    },
    price: "19,90",
    art: { kind: "beer", liquid: "#f0b833", foam: "#fff6d8", accent: "#e2a525", label: "SO" },
  },
  {
    category: "beer",
    group: { ru: "Пиво Umanpivo", ro: "Bere Umanpivo", uk: "Пиво Umanpivo" },
    name: { ru: "Blanche", ro: "Blanche", uk: "Blanche" },
    description: {
      ru: "Пшеничное светлое пиво с легкой пряностью, свежестью и мягкой кислинкой.",
      ro: "Bere alba de grau, usor condimentata, proaspata si delicat acrisoara.",
      uk: "Пшеничне світле пиво з легкою пряністю, свіжістю і м'якою кислинкою.",
    },
    price: "20,90",
    art: { kind: "beer", liquid: "#f6d776", foam: "#fff9df", accent: "#f0c450", label: "BL" },
  },
  {
    category: "beer",
    group: { ru: "Пиво Umanpivo", ro: "Bere Umanpivo", uk: "Пиво Umanpivo" },
    name: { ru: "Dunkel", ro: "Dunkel", uk: "Dunkel" },
    description: {
      ru: "Темное пиво с хлебной глубиной, карамелью и мягким солодовым телом.",
      ro: "Bere bruna cu note de paine, caramel si corp maltat rotund.",
      uk: "Темне пиво з хлібною глибиною, карамеллю і м'яким солодовим тілом.",
    },
    price: "20,90",
    art: { kind: "beer", liquid: "#5a2a16", foam: "#f4dfbd", accent: "#8a4b23", label: "DU" },
  },
  {
    category: "beer",
    group: { ru: "Пиво Umanpivo", ro: "Bere Umanpivo", uk: "Пиво Umanpivo" },
    name: { ru: "Lager", ro: "Lager", uk: "Lager" },
    description: {
      ru: "Легкий светлый лагер с чистым вкусом, зерновой основой и освежающим финишем.",
      ro: "Lager blond lejer, curat, cu baza de cereale si final racoritor.",
      uk: "Легкий світлий лагер з чистим смаком, зерновою основою і освіжаючим фінішем.",
    },
    price: "19,90",
    art: { kind: "beer", liquid: "#e8aa22", foam: "#fff2c8", accent: "#d7a11e", label: "LG" },
  },
  {
    category: "beer",
    group: { ru: "Пиво Umanpivo", ro: "Bere Umanpivo", uk: "Пиво Umanpivo" },
    name: { ru: "Vieneza", ro: "Vieneza", uk: "Vieneza" },
    description: {
      ru: "Янтарное пиво с карамельными оттенками, мягкой сладостью и сбалансированной горчинкой.",
      ro: "Bere ambra cu nuante caramelizate, dulceata fina si amarui echilibrat.",
      uk: "Бурштинове пиво з карамельними відтінками, м'якою солодкістю і збалансованою гірчинкою.",
    },
    price: "19,90",
    art: { kind: "beer", liquid: "#c87423", foam: "#fff0c6", accent: "#a85b1d", label: "VI" },
  },
  {
    category: "beer",
    group: { ru: "Пиво Umanpivo", ro: "Bere Umanpivo", uk: "Пиво Umanpivo" },
    name: { ru: "Пиво с медом", ro: "Bere cu miere", uk: "Пиво з медом" },
    description: {
      ru: "Светлое пиво с медовой мягкостью, теплым ароматом и округлым послевкусием.",
      ro: "Bere blonda cu dulceata de miere, aroma calda si postgust rotund.",
      uk: "Світле пиво з медовою м'якістю, теплим ароматом і округлим післясмаком.",
    },
    price: "20,90",
    art: { kind: "beer", liquid: "#efb13a", foam: "#fff4cb", accent: "#e0a300", label: "MI" },
  },
  {
    category: "beer",
    group: { ru: "Enkidus Braustube", ro: "Enkidus Braustube", uk: "Enkidus Braustube" },
    name: { ru: "Alpenrebel", ro: "Alpenrebel", uk: "Alpenrebel" },
    description: {
      ru: "Австрийское пиво с плотным солодовым профилем и выразительным чистым вкусом.",
      ro: "Bere din Austria cu profil maltat plin si gust curat, expresiv.",
      uk: "Австрійське пиво з щільним солодовим профілем і виразним чистим смаком.",
    },
    price: "25,90",
    art: { kind: "beer", liquid: "#d49325", foam: "#fff1c7", accent: "#497b82", label: "AR" },
  },
  {
    category: "beer",
    group: { ru: "Enkidus Braustube", ro: "Enkidus Braustube", uk: "Enkidus Braustube" },
    name: { ru: "Danube Crown", ro: "Danube Crown", uk: "Danube Crown" },
    description: {
      ru: "Австрийский сорт с благородной солодовой базой, чистым ароматом и мягким финишем.",
      ro: "Sort austriac cu baza maltata nobila, aroma curata si final fin.",
      uk: "Австрійський сорт з благородною солодовою базою, чистим ароматом і м'яким фінішем.",
    },
    price: "25,90",
    art: { kind: "beer", liquid: "#e0a032", foam: "#fff3cc", accent: "#c79d2c", label: "DC" },
  },
  {
    category: "spritz",
    group: { ru: "Spritz cocktail", ro: "Spritz cocktail", uk: "Spritz cocktail" },
    name: { ru: "Lavanda Spritz", ro: "Lavanda Spritz", uk: "Lavanda Spritz" },
    description: {
      ru: "Лавандовый spritz с цветочным ароматом, легкой сладостью и прохладным послевкусием.",
      ro: "Spritz cu lavanda, aroma florala, dulceata usoara si final racoros.",
      uk: "Лавандовий spritz з квітковим ароматом, легкою солодкістю і прохолодним післясмаком.",
    },
    price: "20,90",
    art: { kind: "spritz", liquid: "#b977dd", accent: "#7d4db0", garnish: "#9f7ad9", label: "LV" },
  },
  {
    category: "spritz",
    group: { ru: "Spritz cocktail", ro: "Spritz cocktail", uk: "Spritz cocktail" },
    name: { ru: "Hugo Spritz", ro: "Hugo Spritz", uk: "Hugo Spritz" },
    description: {
      ru: "Свежий коктейль с легкой сладостью, травяным акцентом и чистой газированной основой.",
      ro: "Cocktail proaspat cu dulceata fina, accent ierbos si baza perlanta.",
      uk: "Свіжий коктейль з легкою солодкістю, трав'яним акцентом і чистою газованою основою.",
    },
    price: "20,90",
    art: { kind: "spritz", liquid: "#f3d768", accent: "#3f9b63", garnish: "#75c986", label: "HU" },
  },
  {
    category: "spritz",
    group: { ru: "Spritz cocktail", ro: "Spritz cocktail", uk: "Spritz cocktail" },
    name: { ru: "Aperitivo Spritz", ro: "Aperitivo Spritz", uk: "Aperitivo Spritz" },
    description: {
      ru: "Оранжевый aperitivo с цитрусовой горчинкой, ярким ароматом и освежающей газацией.",
      ro: "Aperitivo portocaliu cu amarui citric, aroma intensa si perlare racoritoare.",
      uk: "Помаранчевий aperitivo з цитрусовою гірчинкою, яскравим ароматом і освіжаючою газацією.",
    },
    price: "21,90",
    art: { kind: "spritz", liquid: "#ef6d2f", accent: "#d94c22", garnish: "#ffb23d", label: "AP" },
  },
  {
    category: "wine",
    group: { ru: "Wine cocktail", ro: "Wine cocktail", uk: "Wine cocktail" },
    name: { ru: "Glera Frizante", ro: "Glera Frizante", uk: "Glera Frizante" },
    description: {
      ru: "Игристый винный напиток с легкими пузырьками, сухим характером и фруктовой свежестью.",
      ro: "Bautura vinicola perlanta, cu bule fine, caracter sec si prospetime fructata.",
      uk: "Ігристий винний напій з легкими бульбашками, сухим характером і фруктовою свіжістю.",
    },
    price: "38,90",
    art: { kind: "wine", liquid: "#f7d96d", accent: "#f2bd30", label: "GL" },
  },
  {
    category: "wine",
    group: { ru: "Wine cocktail", ro: "Wine cocktail", uk: "Wine cocktail" },
    name: { ru: "Vermouth", ro: "Vermouth", uk: "Vermouth" },
    description: {
      ru: "Ароматизированный винный напиток с травяными нотами, сладостью и легкой пряностью.",
      ro: "Bautura vinificata aromatizata, cu note de plante, dulceata si condimente fine.",
      uk: "Ароматизований винний напій з трав'яними нотами, солодкістю і легкою пряністю.",
    },
    price: "20,90",
    art: { kind: "wine", liquid: "#9c3f35", accent: "#5b8e51", label: "VM" },
  },
  {
    category: "wine",
    group: { ru: "Wine cocktail", ro: "Wine cocktail", uk: "Wine cocktail" },
    name: { ru: "Fragolino", ro: "Fragolino", uk: "Fragolino" },
    description: {
      ru: "Фруктовый винный напиток с ягодным ароматом, мягкой сладостью и легкой свежестью.",
      ro: "Bautura vinicola fructata, cu aroma de fructe rosii si dulceata fina.",
      uk: "Фруктовий винний напій з ягідним ароматом, м'якою солодкістю і легкою свіжістю.",
    },
    price: "19,90",
    art: { kind: "wine", liquid: "#c93455", accent: "#ef7e8f", label: "FR" },
  },
  {
    category: "wine",
    group: {
      ru: "Полусладкое фруктовое вино",
      ro: "Vin demidulce, fructat",
      uk: "Напівсолодке фруктове вино",
    },
    name: {
      ru: "Ананас, вишня, клубника, гранат, персик, смородина",
      ro: "Ananas, cireasa, capsuna, rodie, piersica, coacaze",
      uk: "Ананас, вишня, полуниця, гранат, персик, смородина",
    },
    description: {
      ru: "Фруктовая линейка для сладкого бокала: тропические, ягодные и сочные летние вкусы.",
      ro: "Gama fructata pentru un pahar demidulce: arome tropicale, de fructe rosii si de vara.",
      uk: "Фруктова лінійка для солодкого келиха: тропічні, ягідні і соковиті літні смаки.",
    },
    price: "24,90",
    wide: true,
    art: { kind: "fruit", liquid: "#d9355f", accent: "#f3bc22", label: "6" },
  },
  {
    category: "soft",
    group: { ru: "Безалкогольные напитки", ro: "Bauturi fara alcool", uk: "Безалкогольні напої" },
    name: { ru: "Квас", ro: "Kvas", uk: "Квас" },
    description: {
      ru: "Традиционный квас Uman с хлебным ароматом, мягкой кислинкой и плотным вкусом.",
      ro: "Kvas traditional Uman cu aroma de paine, aciditate fina si gust plin.",
      uk: "Традиційний квас Uman з хлібним ароматом, м'якою кислинкою і щільним смаком.",
    },
    price: "16,90",
    art: { kind: "soft", liquid: "#8b4f27", accent: "#d2a56d", label: "KV" },
  },
  {
    category: "soft",
    group: { ru: "Безалкогольные напитки", ro: "Bauturi fara alcool", uk: "Безалкогольні напої" },
    name: { ru: "Лимонад", ro: "Limonada", uk: "Лимонад" },
    description: {
      ru: "Классический лимонад с лимонной свежестью, легкой сладостью и чистой газацией.",
      ro: "Limonada clasica, cu prospetime de lamaie, dulceata usoara si perlare curata.",
      uk: "Класичний лимонад з лимонною свіжістю, легкою солодкістю і чистою газацією.",
    },
    price: "15,90",
    art: { kind: "soft", liquid: "#f6cf52", accent: "#5fb96f", label: "LM" },
  },
];

const filterButtons = document.querySelectorAll(".filter-button");
const languageButtons = document.querySelectorAll(".language-button");
const productGrid = document.querySelector(".product-grid");
const hero = document.querySelector(".hero");
const variantButtons = document.querySelectorAll(".variant-button");

let currentFilter = "all";
let currentLanguage = "ru";
let currentVariant = "1";

function t(key) {
  return translations[currentLanguage][key] || translations.ru[key] || key;
}

function localized(value) {
  return value[currentLanguage] || value.ru;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function productVisual(art) {
  const liquid = art.liquid;
  const accent = art.accent;
  const foam = art.foam || "#fff2ce";
  const label = escapeHtml(art.label);

  if (art.kind === "spritz") {
    return `
      <svg viewBox="0 0 160 150" aria-hidden="true">
        <circle cx="80" cy="75" r="68" fill="#fff4d2"/>
        <path d="M54 32h52l-12 66H66z" fill="rgba(255,255,255,.68)" stroke="#17251d" stroke-width="4"/>
        <path d="M62 59h36l-7 38H69z" fill="${liquid}"/>
        <path d="M80 98v27M61 126h38" fill="none" stroke="#17251d" stroke-width="5" stroke-linecap="round"/>
        <circle cx="100" cy="50" r="14" fill="${art.garnish}"/>
        <path d="M103 25l16 53" stroke="#17251d" stroke-width="4" stroke-linecap="round"/>
        <circle cx="75" cy="74" r="3" fill="#fff7db"/><circle cx="88" cy="68" r="2.5" fill="#fff7db"/>
        <text x="80" y="131" text-anchor="middle" font-size="22" font-weight="900" fill="${accent}">${label}</text>
      </svg>
    `;
  }

  if (art.kind === "wine") {
    return `
      <svg viewBox="0 0 160 150" aria-hidden="true">
        <circle cx="80" cy="75" r="68" fill="#fff4d2"/>
        <path d="M58 28h44c-1 38-8 56-22 56S59 66 58 28Z" fill="rgba(255,255,255,.7)" stroke="#17251d" stroke-width="4"/>
        <path d="M64 51h32c-3 20-8 30-16 30s-13-10-16-30Z" fill="${liquid}"/>
        <path d="M80 84v34M59 121h42" fill="none" stroke="#17251d" stroke-width="5" stroke-linecap="round"/>
        <path d="M100 49c16 1 25 8 27 22" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>
        <circle cx="120" cy="75" r="7" fill="${accent}"/>
        <text x="80" y="139" text-anchor="middle" font-size="21" font-weight="900" fill="#17251d">${label}</text>
      </svg>
    `;
  }

  if (art.kind === "fruit") {
    return `
      <svg viewBox="0 0 160 150" aria-hidden="true">
        <circle cx="80" cy="75" r="68" fill="#fff4d2"/>
        <circle cx="54" cy="78" r="22" fill="#e33f4f"/>
        <circle cx="80" cy="60" r="24" fill="#f2b33b"/>
        <circle cx="104" cy="80" r="23" fill="#6d3ea0"/>
        <circle cx="74" cy="96" r="20" fill="#eb7b31"/>
        <path d="M72 35c12-12 25-12 37-2" fill="none" stroke="#2f8f56" stroke-width="7" stroke-linecap="round"/>
        <path d="M47 55c9-13 19-17 31-12" fill="none" stroke="#2f8f56" stroke-width="6" stroke-linecap="round"/>
        <text x="80" y="134" text-anchor="middle" font-size="28" font-weight="950" fill="#17251d">${label}</text>
      </svg>
    `;
  }

  if (art.kind === "soft") {
    return `
      <svg viewBox="0 0 160 150" aria-hidden="true">
        <circle cx="80" cy="75" r="68" fill="#fff4d2"/>
        <path d="M55 38h48l-7 78H62z" fill="rgba(255,255,255,.7)" stroke="#17251d" stroke-width="4"/>
        <path d="M61 70h36l-4 42H65z" fill="${liquid}"/>
        <path d="M64 51h30" stroke="${foam}" stroke-width="8" stroke-linecap="round"/>
        <circle cx="105" cy="48" r="12" fill="${accent}"/>
        <path d="M103 34c8-10 17-13 27-9" fill="none" stroke="#2f8f56" stroke-width="5" stroke-linecap="round"/>
        <text x="80" y="137" text-anchor="middle" font-size="22" font-weight="900" fill="#17251d">${label}</text>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 160 150" aria-hidden="true">
      <circle cx="80" cy="75" r="68" fill="#fff4d2"/>
      <path d="M53 42h54v76c0 10-8 18-18 18H71c-10 0-18-8-18-18z" fill="rgba(255,255,255,.7)" stroke="#17251d" stroke-width="4"/>
      <path d="M61 68h38v48c0 7-5 12-12 12H73c-7 0-12-5-12-12z" fill="${liquid}"/>
      <path d="M59 51c6-11 17-6 22-4 9-10 17-5 20 4 7 0 12 4 12 10 0 8-6 12-13 12H59c-8 0-14-5-14-12 0-6 6-10 14-10Z" fill="${foam}" stroke="#17251d" stroke-width="4"/>
      <path d="M107 73h11c10 0 16 7 16 17s-7 18-17 18h-10" fill="none" stroke="#17251d" stroke-width="7" stroke-linecap="round"/>
      <path d="M119 87c3 6 2 12-2 17" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <text x="80" y="116" text-anchor="middle" font-size="22" font-weight="900" fill="#fff7d8">${label}</text>
    </svg>
  `;
}

function renderProducts() {
  productGrid.innerHTML = "";

  products
    .filter((product) => currentFilter === "all" || product.category === currentFilter)
    .forEach((product) => {
      const card = document.createElement("article");
      card.className = [
        "product-card",
        product.recommended ? "recommended" : "",
        product.wide ? "wide-card" : "",
      ]
        .filter(Boolean)
        .join(" ");
      card.dataset.category = product.category;

      const badge = product.recommended ? `<span class="recommend-label">${t("recommended")}</span>` : "";
      card.innerHTML = `
        <div class="product-top">
          <div class="product-visual">${productVisual(product.art)}</div>
          <div class="product-main">
            <p class="product-group">${escapeHtml(localized(product.group))}</p>
            <h3>${escapeHtml(localized(product.name))}</h3>
            <p>${escapeHtml(localized(product.description))}</p>
          </div>
        </div>
        <div class="product-bottom">
          ${badge}
          <span class="price">${escapeHtml(product.price)}</span>
        </div>
      `;
      productGrid.appendChild(card);
    });
}

function applyLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderProducts();
}

function setFilter(filter) {
  currentFilter = filter;

  filterButtons.forEach((item) => {
    const isActive = item.dataset.filter === filter;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-selected", String(isActive));
  });

  renderProducts();
}

function setHeroVariant(variant) {
  currentVariant = variant;
  hero.classList.remove("hero-variant-1", "hero-variant-2", "hero-variant-3", "hero-variant-4");
  hero.classList.add(`hero-variant-${variant}`);

  variantButtons.forEach((button) => {
    const isActive = button.dataset.variant === variant;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filter);
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

variantButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setHeroVariant(button.dataset.variant);
  });
});

applyLanguage(currentLanguage);
setHeroVariant(currentVariant);

window.draftGo = {
  applyLanguage,
  renderProducts,
  setFilter,
  setHeroVariant,
};

globalThis.draftGo = window.draftGo;
