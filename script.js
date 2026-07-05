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
    filterSpritz: "Коктейли",
    filterWine: "Вино",
    filterSoft: "Без алкоголя",
    visitEyebrow: "Магазин",
    visitCopy:
      "Адрес и маршрут доступны на Google Maps. Для связи используйте телефон, WhatsApp или Telegram.",
    mapButton: "Открыть Google Maps",
    phoneLabel: "Телефон",
    locationLabel: "Адрес",
    serviceLabel: "Формат",
    serviceValue: "На розлив",
    footerTop: "Наверх",
    sectionBeer: "Пиво на розлив",
    sectionSpritz: "Коктейли",
    sectionWine: "Вино",
    sectionSoft: "Безалкогольные напитки",
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
    filterSpritz: "Cocktailuri",
    filterWine: "Vin",
    filterSoft: "Fara alcool",
    visitEyebrow: "Magazin",
    visitCopy:
      "Adresa si traseul sunt disponibile pe Google Maps. Pentru contact folositi telefonul, WhatsApp sau Telegram.",
    mapButton: "Deschide Google Maps",
    phoneLabel: "Telefon",
    locationLabel: "Adresă",
    serviceLabel: "Format",
    serviceValue: "La draft",
    footerTop: "Sus",
    sectionBeer: "Bere la draft",
    sectionSpritz: "Cocktailuri",
    sectionWine: "Vin",
    sectionSoft: "Băuturi fără alcool",
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
    filterSpritz: "Коктейлі",
    filterWine: "Вино",
    filterSoft: "Без алкоголю",
    visitEyebrow: "Магазин",
    visitCopy:
      "Адреса і маршрут доступні на Google Maps. Для зв'язку використовуйте телефон, WhatsApp або Telegram.",
    mapButton: "Відкрити Google Maps",
    phoneLabel: "Телефон",
    locationLabel: "Адреса",
    serviceLabel: "Формат",
    serviceValue: "На розлив",
    footerTop: "Нагору",
    sectionBeer: "Пиво на розлив",
    sectionSpritz: "Коктейлі",
    sectionWine: "Вино",
    sectionSoft: "Безалкогольні напої",
  },
};

const products = [
  {
    category: "beer",
    group: { ru: "Wissburg", ro: "Wissburg", uk: "Wissburg" },
    name: { ru: "Wissburg Blanche Light", ro: "Wissburg Blanche Light", uk: "Wissburg Blanche Light" },
    description: {
      ru: "Светлое нефильтрованное пшеничное пиво с мягкой свежестью и легкой мутностью.",
      ro: "Bere blondă nefiltrată, cu prospețime fină și textură ușor tulbure.",
      uk: "Світле нефільтроване пшеничне пиво з м'якою свіжістю і легкою мутністю.",
    },
    price: "22",
    art: { kind: "beer", image: "assets/products/beer-light.jpg", liquid: "#f6d776", foam: "#fff9df", accent: "#f0c450", label: "WB" },
  },
  {
    category: "beer",
    group: { ru: "Wissburd", ro: "Wissburd", uk: "Wissburd" },
    name: { ru: "Wissburd Dunkel Neagră", ro: "Wissburd Dunkel Neagră", uk: "Wissburd Dunkel Neagră" },
    description: {
      ru: "Темное фильтрованное пиво с хлебной глубиной, карамелью и плотным солодовым телом.",
      ro: "Bere neagră filtrată, cu note de pâine, caramel și corp malțat plin.",
      uk: "Темне фільтроване пиво з хлібною глибиною, карамеллю і щільним солодовим тілом.",
    },
    price: "22",
    art: { kind: "beer", image: "assets/products/beer-dark.jpg", liquid: "#5a2a16", foam: "#f4dfbd", accent: "#8a4b23", label: "DN" },
  },
  {
    category: "beer",
    group: { ru: "Wissburg", ro: "Wissburg", uk: "Wissburg" },
    name: { ru: "Wissburg Lager Light", ro: "Wissburg Lager Light", uk: "Wissburg Lager Light" },
    description: {
      ru: "Светлый фильтрованный лагер с чистым вкусом, зерновой основой и освежающим финишем.",
      ro: "Lager blond filtrat, curat, cu bază de cereale și final răcoritor.",
      uk: "Світлий фільтрований лагер з чистим смаком, зерновою основою і освіжаючим фінішем.",
    },
    price: "22",
    art: { kind: "beer", image: "assets/products/beer-lager.jpg", liquid: "#e8aa22", foam: "#fff2c8", accent: "#d7a11e", label: "WL" },
  },
  {
    category: "beer",
    group: { ru: "Milk Stout", ro: "Milk Stout", uk: "Milk Stout" },
    name: { ru: "Milk Stout Dark", ro: "Milk Stout Dark", uk: "Milk Stout Dark" },
    description: {
      ru: "Темный фильтрованный молочный стаут с кремовой текстурой и мягкой кофейной сладостью.",
      ro: "Stout negru filtrat, cremos, cu dulceață fină și note ușoare de cafea.",
      uk: "Темний фільтрований молочний стаут з кремовою текстурою і м'якою кавовою солодкістю.",
    },
    price: "24",
    art: { kind: "beer", image: "assets/products/beer-stout.jpg", liquid: "#2c1710", foam: "#f8ead1", accent: "#a56a34", label: "MS" },
  },
  {
    category: "beer",
    group: { ru: "Sofivske", ro: "Sofivske", uk: "Sofivske" },
    name: { ru: "Sofivske Blondă", ro: "Sofivske Blondă", uk: "Sofivske Blondă" },
    description: {
      ru: "Светлое нефильтрованное пиво с мягким солодовым вкусом и свежим ароматом.",
      ro: "Bere blondă nefiltrată, cu gust moale de malț și aromă proaspătă.",
      uk: "Світле нефільтроване пиво з м'яким солодовим смаком і свіжим ароматом.",
    },
    price: "23",
    art: { kind: "beer", image: "assets/products/beer-light.jpg", liquid: "#f0b833", foam: "#fff6d8", accent: "#e2a525", label: "SB" },
  },
  {
    category: "beer",
    group: { ru: "Alpenrebel", ro: "Alpenrebel", uk: "Alpenrebel" },
    name: { ru: "Alpenrebel Lager Austria", ro: "Alpenrebel Lager Austria", uk: "Alpenrebel Lager Austria" },
    description: {
      ru: "Австрийский лагер с плотным солодовым профилем, чистым ароматом и выразительным вкусом.",
      ro: "Lager austriac cu profil malțat plin, aromă curată și gust expresiv.",
      uk: "Австрійський лагер з щільним солодовим профілем, чистим ароматом і виразним смаком.",
    },
    price: "32",
    art: { kind: "beer", image: "assets/products/beer-lager.jpg", liquid: "#d49325", foam: "#fff1c7", accent: "#497b82", label: "AR" },
  },
  {
    category: "beer",
    group: { ru: "Umanske", ro: "Umanske", uk: "Umanske" },
    name: { ru: "Umanske cu Miere Light", ro: "Umanske cu Miere Light", uk: "Umanske cu Miere Light" },
    description: {
      ru: "Светлое фильтрованное пиво с медовой мягкостью, теплым ароматом и округлым послевкусием.",
      ro: "Bere blondă filtrată cu miere, aromă caldă și postgust rotund.",
      uk: "Світле фільтроване пиво з медовою м'якістю, теплим ароматом і округлим післясмаком.",
    },
    price: "22",
    art: { kind: "beer", image: "assets/products/beer-lager.jpg", liquid: "#efb13a", foam: "#fff4cb", accent: "#e0a300", label: "UM" },
  },
  {
    category: "beer",
    group: { ru: "Umanpivo", ro: "Umanpivo", uk: "Umanpivo" },
    name: { ru: "Videnske Umanpivo Light", ro: "Videnske Umanpivo Light", uk: "Videnske Umanpivo Light" },
    description: {
      ru: "Светлое фильтрованное пиво венского типа с янтарным оттенком и мягким солодом.",
      ro: "Bere blondă filtrată de tip vienez, cu nuanță ambrată și malț fin.",
      uk: "Світле фільтроване пиво віденського типу з бурштиновим відтінком і м'яким солодом.",
    },
    price: "22",
    art: { kind: "beer", image: "assets/products/beer-lager.jpg", liquid: "#c87423", foam: "#fff0c6", accent: "#a85b1d", label: "VU" },
  },
  {
    category: "spritz",
    group: { ru: "Frugio Frizante", ro: "Frugio Frizante", uk: "Frugio Frizante" },
    name: { ru: "Aperitivo Spritz", ro: "Aperitivo Spritz", uk: "Aperitivo Spritz" },
    description: {
      ru: "Оранжевый aperitivo с цитрусовой горчинкой, ярким ароматом и освежающей газацией.",
      ro: "Aperitivo portocaliu cu amărui citric, aromă intensă și perlare răcoritoare.",
      uk: "Помаранчевий aperitivo з цитрусовою гірчинкою, яскравим ароматом і освіжаючою газацією.",
    },
    price: "22",
    art: { kind: "spritz", image: "assets/products/cocktail-aperitivo.jpg", liquid: "#ef6d2f", accent: "#d94c22", garnish: "#ffb23d", label: "AP" },
  },
  {
    category: "spritz",
    group: { ru: "Frugio Frizante", ro: "Frugio Frizante", uk: "Frugio Frizante" },
    name: { ru: "Fragolino Spritz", ro: "Fragolino Spritz", uk: "Fragolino Spritz" },
    description: {
      ru: "Ягодный spritz с мягкой сладостью, фруктовым ароматом и легкой свежестью.",
      ro: "Spritz cu fructe roșii, dulceață fină, aromă fructată și prospețime ușoară.",
      uk: "Ягідний spritz з м'якою солодкістю, фруктовим ароматом і легкою свіжістю.",
    },
    price: "22",
    art: { kind: "spritz", image: "assets/products/cocktail-fragolino.jpg", liquid: "#c93455", accent: "#ef7e8f", garnish: "#ff8fa3", label: "FR" },
  },
  {
    category: "spritz",
    group: { ru: "Frugio Frizante", ro: "Frugio Frizante", uk: "Frugio Frizante" },
    name: { ru: "Vermouth Spritz", ro: "Vermouth Spritz", uk: "Vermouth Spritz" },
    description: {
      ru: "Ароматный spritz на вермуте с травяными нотами, сладостью и легкой пряностью.",
      ro: "Spritz pe bază de vermut, cu note de plante, dulceață și condimente fine.",
      uk: "Ароматний spritz на вермуті з трав'яними нотами, солодкістю і легкою пряністю.",
    },
    price: "22",
    art: { kind: "spritz", image: "assets/products/cocktail-vermouth.jpg", liquid: "#9c3f35", accent: "#5b8e51", garnish: "#77b46a", label: "VM" },
  },
  {
    category: "spritz",
    group: { ru: "Frugio Frizante", ro: "Frugio Frizante", uk: "Frugio Frizante" },
    name: { ru: "Extra Dry", ro: "Extra Dry", uk: "Extra Dry" },
    description: {
      ru: "Сухой игристый коктейль с чистым вкусом, легкими пузырьками и свежим финишем.",
      ro: "Cocktail perlant sec, cu gust curat, bule fine și final proaspăt.",
      uk: "Сухий ігристий коктейль з чистим смаком, легкими бульбашками і свіжим фінішем.",
    },
    price: "22",
    art: { kind: "spritz", image: "assets/products/cocktail-extra-dry.jpg", liquid: "#f7d96d", accent: "#f2bd30", garnish: "#f0c450", label: "ED" },
  },
  {
    category: "spritz",
    group: { ru: "Frugio Frizante", ro: "Frugio Frizante", uk: "Frugio Frizante" },
    name: { ru: "Lavanda Spritz", ro: "Lavanda Spritz", uk: "Lavanda Spritz" },
    description: {
      ru: "Лавандовый spritz с цветочным ароматом, легкой сладостью и прохладным послевкусием.",
      ro: "Spritz cu lavandă, aromă florală, dulceață ușoară și final răcoros.",
      uk: "Лавандовий spritz з квітковим ароматом, легкою солодкістю і прохолодним післясмаком.",
    },
    price: "22",
    art: { kind: "spritz", image: "assets/products/cocktail-lavanda.jpg", liquid: "#b977dd", accent: "#7d4db0", garnish: "#9f7ad9", label: "LV" },
  },
  {
    category: "spritz",
    group: { ru: "Frugio Frizante", ro: "Frugio Frizante", uk: "Frugio Frizante" },
    name: { ru: "Hugo Spritz", ro: "Hugo Spritz", uk: "Hugo Spritz" },
    description: {
      ru: "Свежий коктейль с легкой сладостью, травяным акцентом и чистой газированной основой.",
      ro: "Cocktail proaspăt cu dulceață fină, accent ierbos și bază perlantă.",
      uk: "Свіжий коктейль з легкою солодкістю, трав'яним акцентом і чистою газованою основою.",
    },
    price: "22",
    art: { kind: "spritz", image: "assets/products/cocktail-hugo.jpg", liquid: "#f3d768", accent: "#3f9b63", garnish: "#75c986", label: "HU" },
  },
  {
    category: "wine",
    group: { ru: "Vin aromat", ro: "Vin aromat", uk: "Vin aromat" },
    name: {
      ru: "Гранат, ананас, черника, клубника, персик",
      ro: "Granat, ananas, afine, căpșună, piersică",
      uk: "Гранат, ананас, чорниця, полуниця, персик",
    },
    description: {
      ru: "Ароматное фруктовое вино на розлив: гранат, ананас, черника, клубника и персик.",
      ro: "Vin aromat la draft: granat, ananas, afine, căpșună și piersică.",
      uk: "Ароматне фруктове вино на розлив: гранат, ананас, чорниця, полуниця і персик.",
    },
    price: "30",
    wide: true,
    art: { kind: "fruit", image: "assets/products/wine-fruit-single.jpg", liquid: "#d9355f", accent: "#f3bc22", label: "6" },
  },
  {
    category: "soft",
    group: { ru: "Безалкогольные напитки", ro: "Bauturi fara alcool", uk: "Безалкогольні напої" },
    name: { ru: "Kvas Tradițional de Uman", ro: "Kvas Tradițional de Uman", uk: "Kvas Tradițional de Uman" },
    description: {
      ru: "Традиционный квас Uman с хлебным ароматом, мягкой кислинкой и плотным вкусом.",
      ro: "Kvas tradițional Uman cu aromă de pâine, aciditate fină și gust plin.",
      uk: "Традиційний квас Uman з хлібним ароматом, м'якою кислинкою і щільним смаком.",
    },
    price: "22",
    art: { kind: "soft", image: "assets/products/kvas.jpg", liquid: "#8b4f27", accent: "#d2a56d", label: "KV" },
  },
  {
    category: "soft",
    group: { ru: "Безалкогольные напитки", ro: "Bauturi fara alcool", uk: "Безалкогольні напої" },
    name: { ru: "Limonade", ro: "Limonade", uk: "Limonade" },
    description: {
      ru: "Классический лимонад с лимонной свежестью, легкой сладостью и чистой газацией.",
      ro: "Limonadă clasică, cu prospețime de lămâie, dulceață ușoară și perlare curată.",
      uk: "Класичний лимонад з лимонною свіжістю, легкою солодкістю і чистою газацією.",
    },
    price: "22",
    art: { kind: "soft", image: "assets/products/lemonade.jpg", liquid: "#f6cf52", accent: "#5fb96f", label: "LM" },
  },
  {
    category: "soft",
    group: { ru: "Slush", ro: "Slush", uk: "Slush" },
    name: { ru: "Slush Căpșună", ro: "Slush Căpșună", uk: "Slush Căpșună" },
    description: {
      ru: "Ледяной клубничный slush с ярким ягодным вкусом для жаркой погоды.",
      ro: "Slush rece de căpșună, cu gust intens de fructe roșii pentru zile calde.",
      uk: "Крижаний полуничний slush з яскравим ягідним смаком для спекотної погоди.",
    },
    price: "17",
    art: { kind: "soft", image: "assets/products/slush-strawberry.jpg", liquid: "#e93d36", accent: "#ff6b6b", label: "SL" },
  },
  {
    category: "soft",
    group: { ru: "Slush", ro: "Slush", uk: "Slush" },
    name: { ru: "Slush Mojito", ro: "Slush Mojito", uk: "Slush Mojito" },
    description: {
      ru: "Освежающий slush mojito с лаймом, мятой и прохладным цитрусовым вкусом.",
      ro: "Slush mojito răcoritor, cu lime, mentă și gust citric rece.",
      uk: "Освіжаючий slush mojito з лаймом, м'ятою і прохолодним цитрусовим смаком.",
    },
    price: "15",
    art: { kind: "soft", image: "assets/products/slush-mojito.jpg", liquid: "#9fd84d", accent: "#5fb96f", label: "MJ" },
  },
];

const filterButtons = document.querySelectorAll(".filter-button");
const languageButtons = document.querySelectorAll(".language-button");
const productGrid = document.querySelector(".product-grid");

let currentFilter = "all";
let currentLanguage = "ru";

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
  if (art.image) {
    return `<img src="${escapeHtml(art.image)}" alt="" loading="lazy">`;
  }

  const liquid = art.liquid;
  const accent = art.accent;
  const foam = art.foam || "#fff2ce";
  const label = escapeHtml(art.label);
  const visualId = `v-${art.kind}-${art.label.replace(/[^a-z0-9]/gi, "").toLowerCase() || "drink"}`;

  if (art.kind === "spritz") {
    return `
      <svg viewBox="0 0 160 150" aria-hidden="true">
        <defs>
          <radialGradient id="${visualId}-bg" cx="35%" cy="24%" r="78%">
            <stop offset="0" stop-color="#fff8d7"/>
            <stop offset="1" stop-color="#e9d39c"/>
          </radialGradient>
          <linearGradient id="${visualId}-liq" x1="48" y1="40" x2="105" y2="106">
            <stop offset="0" stop-color="#fff4b3"/>
            <stop offset=".36" stop-color="${liquid}"/>
            <stop offset="1" stop-color="${accent}"/>
          </linearGradient>
          <linearGradient id="${visualId}-glass" x1="52" y1="30" x2="104" y2="116">
            <stop offset="0" stop-color="#ffffff" stop-opacity=".78"/>
            <stop offset=".44" stop-color="#ffffff" stop-opacity=".18"/>
            <stop offset="1" stop-color="#17251d" stop-opacity=".2"/>
          </linearGradient>
        </defs>
        <circle cx="80" cy="75" r="68" fill="url(#${visualId}-bg)"/>
        <ellipse cx="81" cy="126" rx="44" ry="8" fill="#17251d" opacity=".18"/>
        <path d="M51 31h58l-13 74c-2 11-9 17-17 17s-15-6-17-17z" fill="url(#${visualId}-glass)" stroke="#17251d" stroke-width="4" stroke-linejoin="round"/>
        <path d="M59 58h42l-9 45c-2 8-7 12-13 12s-11-4-13-12z" fill="url(#${visualId}-liq)"/>
        <path d="M62 67c11 4 24 3 36-2" fill="none" stroke="#fff6d8" stroke-width="3" opacity=".7"/>
        <path d="M66 39h28" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".72"/>
        <path d="M69 46c-5 23-3 49 6 66" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".28"/>
        <circle cx="72" cy="75" r="5" fill="#fff7db" opacity=".78"/>
        <circle cx="88" cy="67" r="4" fill="#fff7db" opacity=".68"/>
        <circle cx="85" cy="88" r="4" fill="#fff7db" opacity=".55"/>
        <circle cx="103" cy="50" r="15" fill="${art.garnish}" stroke="#17251d" stroke-width="4"/>
        <path d="M103 36v28M89 50h28" stroke="#fff7db" stroke-width="2.5" stroke-linecap="round" opacity=".82"/>
        <path d="M105 24l15 82" stroke="#17251d" stroke-width="4" stroke-linecap="round"/>
        <path d="M80 120v13M61 134h38" fill="none" stroke="#17251d" stroke-width="5" stroke-linecap="round"/>
        <text x="80" y="104" text-anchor="middle" font-size="18" font-weight="950" fill="#fff7d8" stroke="#17251d" stroke-width="3" paint-order="stroke">${label}</text>
      </svg>
    `;
  }

  if (art.kind === "wine") {
    return `
      <svg viewBox="0 0 160 150" aria-hidden="true">
        <defs>
          <radialGradient id="${visualId}-bg" cx="35%" cy="24%" r="78%">
            <stop offset="0" stop-color="#fff8d7"/>
            <stop offset="1" stop-color="#e9d39c"/>
          </radialGradient>
          <linearGradient id="${visualId}-wine" x1="60" y1="48" x2="96" y2="84">
            <stop offset="0" stop-color="#fff3a5"/>
            <stop offset=".46" stop-color="${liquid}"/>
            <stop offset="1" stop-color="${accent}"/>
          </linearGradient>
        </defs>
        <circle cx="80" cy="75" r="68" fill="url(#${visualId}-bg)"/>
        <ellipse cx="80" cy="126" rx="42" ry="8" fill="#17251d" opacity=".16"/>
        <path d="M55 27h50c-1 40-8 61-25 61S56 67 55 27Z" fill="rgba(255,255,255,.62)" stroke="#17251d" stroke-width="4"/>
        <path d="M62 52h36c-3 22-9 33-18 33S65 74 62 52Z" fill="url(#${visualId}-wine)"/>
        <path d="M62 56c12 4 24 4 36 0" stroke="#fff7db" stroke-width="3" opacity=".62"/>
        <path d="M66 34c-5 18-3 35 6 49" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".32"/>
        <path d="M80 88v32M59 124h42" fill="none" stroke="#17251d" stroke-width="5" stroke-linecap="round"/>
        <circle cx="113" cy="66" r="13" fill="${accent}" opacity=".9"/>
        <path d="M107 57c7 4 12 10 14 17" stroke="#fff7db" stroke-width="2.5" stroke-linecap="round" opacity=".8"/>
        <text x="80" y="139" text-anchor="middle" font-size="18" font-weight="950" fill="#17251d">${label}</text>
      </svg>
    `;
  }

  if (art.kind === "fruit") {
    return `
      <svg viewBox="0 0 160 150" aria-hidden="true">
        <defs>
          <radialGradient id="${visualId}-bg" cx="35%" cy="24%" r="78%">
            <stop offset="0" stop-color="#fff8d7"/>
            <stop offset="1" stop-color="#e9d39c"/>
          </radialGradient>
          <linearGradient id="${visualId}-fruit" x1="52" y1="42" x2="101" y2="104">
            <stop offset="0" stop-color="#f7d96d"/>
            <stop offset=".48" stop-color="${liquid}"/>
            <stop offset="1" stop-color="#7b2443"/>
          </linearGradient>
        </defs>
        <circle cx="80" cy="75" r="68" fill="url(#${visualId}-bg)"/>
        <ellipse cx="80" cy="127" rx="46" ry="8" fill="#17251d" opacity=".18"/>
        <path d="M54 30h52c-1 41-8 62-26 62S55 71 54 30Z" fill="rgba(255,255,255,.64)" stroke="#17251d" stroke-width="4"/>
        <path d="M62 52h36c-3 24-9 36-18 36S65 76 62 52Z" fill="url(#${visualId}-fruit)"/>
        <path d="M66 37c-5 17-3 34 6 50" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".32"/>
        <circle cx="53" cy="82" r="15" fill="#d9355f" stroke="#17251d" stroke-width="3"/>
        <circle cx="103" cy="83" r="14" fill="#6d3ea0" stroke="#17251d" stroke-width="3"/>
        <circle cx="77" cy="57" r="13" fill="#f2b33b" stroke="#17251d" stroke-width="3"/>
        <path d="M66 34c13-10 26-10 40-2M48 58c9-11 19-14 31-9" fill="none" stroke="#2f8f56" stroke-width="6" stroke-linecap="round"/>
        <path d="M80 92v29M59 124h42" fill="none" stroke="#17251d" stroke-width="5" stroke-linecap="round"/>
        <text x="80" y="139" text-anchor="middle" font-size="20" font-weight="950" fill="#17251d">${label}</text>
      </svg>
    `;
  }

  if (art.kind === "soft") {
    const isSlush = label === "SL" || label === "MJ";

    if (isSlush) {
      return `
        <svg viewBox="0 0 160 150" aria-hidden="true">
          <defs>
            <radialGradient id="${visualId}-bg" cx="35%" cy="24%" r="78%">
              <stop offset="0" stop-color="#fff8d7"/>
              <stop offset="1" stop-color="#e9d39c"/>
            </radialGradient>
            <linearGradient id="${visualId}-slush" x1="52" y1="44" x2="104" y2="120">
              <stop offset="0" stop-color="#fff4b3"/>
              <stop offset=".42" stop-color="${liquid}"/>
              <stop offset="1" stop-color="${accent}"/>
            </linearGradient>
          </defs>
          <circle cx="80" cy="75" r="68" fill="url(#${visualId}-bg)"/>
          <ellipse cx="81" cy="128" rx="42" ry="8" fill="#17251d" opacity=".18"/>
          <path d="M55 55h50l-9 69H64z" fill="rgba(255,255,255,.62)" stroke="#17251d" stroke-width="4" stroke-linejoin="round"/>
          <path d="M62 66h36l-7 52H69z" fill="url(#${visualId}-slush)"/>
          <path d="M55 56c4-17 16-27 30-25 12 1 21 11 23 25z" fill="url(#${visualId}-slush)" stroke="#17251d" stroke-width="4"/>
          <path d="M68 46c10-5 20-5 30 1M63 73c10 4 22 4 35-2" stroke="#fff7db" stroke-width="3" opacity=".68"/>
          <path d="M101 28l19 58" stroke="#17251d" stroke-width="4" stroke-linecap="round"/>
          <path d="M72 69c-3 18-2 34 4 49" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".3"/>
          <text x="80" y="105" text-anchor="middle" font-size="20" font-weight="950" fill="#17251d">${label}</text>
        </svg>
      `;
    }

    return `
      <svg viewBox="0 0 160 150" aria-hidden="true">
        <defs>
          <radialGradient id="${visualId}-bg" cx="35%" cy="24%" r="78%">
            <stop offset="0" stop-color="#fff8d7"/>
            <stop offset="1" stop-color="#e9d39c"/>
          </radialGradient>
          <linearGradient id="${visualId}-soft" x1="58" y1="44" x2="101" y2="120">
            <stop offset="0" stop-color="#fff2b8"/>
            <stop offset=".5" stop-color="${liquid}"/>
            <stop offset="1" stop-color="${accent}"/>
          </linearGradient>
        </defs>
        <circle cx="80" cy="75" r="68" fill="url(#${visualId}-bg)"/>
        <ellipse cx="80" cy="127" rx="43" ry="8" fill="#17251d" opacity=".17"/>
        <path d="M53 37h54v78c0 11-8 19-19 19H72c-11 0-19-8-19-19z" fill="rgba(255,255,255,.62)" stroke="#17251d" stroke-width="4" stroke-linejoin="round"/>
        <path d="M61 70h38v43c0 8-5 13-13 13H74c-8 0-13-5-13-13z" fill="url(#${visualId}-soft)"/>
        <path d="M61 54c9-9 25-8 39 0" stroke="${foam}" stroke-width="9" stroke-linecap="round"/>
        <path d="M69 45c-5 24-3 52 6 76" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".3"/>
        <circle cx="106" cy="49" r="12" fill="${accent}" stroke="#17251d" stroke-width="3"/>
        <path d="M103 35c8-10 17-13 27-9" fill="none" stroke="#2f8f56" stroke-width="5" stroke-linecap="round"/>
        <text x="80" y="112" text-anchor="middle" font-size="20" font-weight="950" fill="#fff7d8" stroke="#17251d" stroke-width="3" paint-order="stroke">${label}</text>
      </svg>
    `;
  }

  return `
    <svg viewBox="0 0 160 150" aria-hidden="true">
      <defs>
        <radialGradient id="${visualId}-bg" cx="35%" cy="24%" r="78%">
          <stop offset="0" stop-color="#fff8d7"/>
          <stop offset="1" stop-color="#e9d39c"/>
        </radialGradient>
        <linearGradient id="${visualId}-beer" x1="55" y1="42" x2="105" y2="132">
          <stop offset="0" stop-color="#fff0a8"/>
          <stop offset=".45" stop-color="${liquid}"/>
          <stop offset="1" stop-color="${accent}"/>
        </linearGradient>
        <linearGradient id="${visualId}-glass" x1="53" y1="34" x2="108" y2="136">
          <stop offset="0" stop-color="#ffffff" stop-opacity=".72"/>
          <stop offset=".46" stop-color="#ffffff" stop-opacity=".18"/>
          <stop offset="1" stop-color="#17251d" stop-opacity=".16"/>
        </linearGradient>
      </defs>
      <circle cx="80" cy="75" r="68" fill="url(#${visualId}-bg)"/>
      <ellipse cx="81" cy="132" rx="48" ry="8" fill="#17251d" opacity=".18"/>
      <path d="M52 43h56v77c0 11-8 19-19 19H71c-11 0-19-8-19-19z" fill="url(#${visualId}-glass)" stroke="#17251d" stroke-width="4" stroke-linejoin="round"/>
      <path d="M61 67h39v50c0 8-5 13-13 13H74c-8 0-13-5-13-13z" fill="url(#${visualId}-beer)"/>
      <path d="M60 50c7-11 17-6 22-4 9-10 18-5 21 4 7 0 12 4 12 10 0 8-6 12-13 12H59c-8 0-14-5-14-12 0-6 6-10 15-10Z" fill="${foam}" stroke="#17251d" stroke-width="4"/>
      <path d="M66 77c11 4 23 3 35-2" stroke="#fff7db" stroke-width="3" opacity=".55"/>
      <path d="M70 47c-5 25-3 55 6 80" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".32"/>
      <path d="M108 75h11c10 0 16 7 16 17s-7 18-17 18h-10" fill="none" stroke="#17251d" stroke-width="7" stroke-linecap="round"/>
      <path d="M120 88c3 6 2 12-2 17" fill="none" stroke="${accent}" stroke-width="4" stroke-linecap="round"/>
      <text x="81" y="112" text-anchor="middle" font-size="20" font-weight="950" fill="#fff7d8" stroke="#17251d" stroke-width="3" paint-order="stroke">${label}</text>
    </svg>
  `;
}

function renderProducts() {
  productGrid.innerHTML = "";
  let lastCategory = "";

  products
    .filter((product) => currentFilter === "all" || product.category === currentFilter)
    .forEach((product) => {
      if (currentFilter === "all" && product.category !== lastCategory) {
        const divider = document.createElement("div");
        divider.className = `catalog-divider catalog-divider-${product.category}`;
        divider.innerHTML = `
          <span>${escapeHtml(t(`section${product.category[0].toUpperCase()}${product.category.slice(1)}`))}</span>
        `;
        productGrid.appendChild(divider);
        lastCategory = product.category;
      }

      const card = document.createElement("article");
      card.className = [
        "product-card",
        product.wide ? "wide-card" : "",
      ]
        .filter(Boolean)
        .join(" ");
      card.dataset.category = product.category;

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

applyLanguage(currentLanguage);

window.draftGo = {
  applyLanguage,
  renderProducts,
  setFilter,
};

globalThis.draftGo = window.draftGo;
