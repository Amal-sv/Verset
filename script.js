const lang = {
  current: "fr",
  selectedDomain: ""
};

const domains = {
  physics: {
    icon: "⚛️",
    fr: "Physique et chimie",
    ar: "الفيزياء والكيمياء"
  },
  math: {
    icon: "🔢",
    fr: "Mathématiques et informatique",
    ar: "الرياضيات والإعلاميات"
  },
  geology: {
    icon: "⛰️",
    fr: "Géologie",
    ar: "الجيولوجيا"
  },
  biology: {
    icon: "🧬",
    fr: "Biologie",
    ar: "البيولوجيا"
  }
};

const texts = {
  fr: {
    fields: "Choisissez votre filière",
    fieldDesc: "Sélectionnez un domaine scientifique.",
    details: "Découvrez les versets et leurs explications.",
    science: "Explication scientifique",
    link: "Lien avec le verset",
    source: "Voir le verset",
    back: "← Retour",
    search: "Rechercher un verset...",
    empty: "Aucun résultat.",
    method: "Les rapprochements présentés sont des interprétations. Ils ne constituent pas des preuves scientifiques établies. Les ouvrages du Dr Zaghloul El-Naggar peuvent être consultés comme références interprétatives ; les informations scientifiques doivent être vérifiées séparément."
  },
  ar: {
    fields: "اختر الشعبة",
    fieldDesc: "اختر المجال العلمي الذي تريد استكشافه.",
    details: "اكتشف الآيات والشروح العلمية.",
    science: "الشرح العلمي",
    link: "وجه الارتباط بالآية",
    source: "عرض الآية",
    back: "رجوع ←",
    search: "ابحث عن آية...",
    empty: "لا توجد نتائج.",
    method: "الروابط المعروضة تفسيرات اجتهادية وليست أدلة علمية قطعية. يمكن الرجوع إلى مؤلفات الدكتور زغلول النجار كمراجع تفسيرية، مع التحقق المستقل من المعلومات العلمية."
  }
};

const verses = [
  {
    cat: "physics",
    ref: "يس: 40",
    frRef: "Yâ-Sîn : 40",
    url: "https://quran.com/36/40",
    ar: "لَا الشَّمْسُ يَنْبَغِي لَهَا أَنْ تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ وَكُلٌّ فِي فَلَكٍ يَسْبَحُونَ",
    fr: "Le Soleil ne peut rattraper la Lune, ni la nuit devancer le jour. Et chacun vogue dans une orbite.",
    arScience: "تتحرك الأجرام السماوية وفق مدارات وحركات تحكمها قوانين الجاذبية.",
    frScience: "Les astres effectuent des mouvements régis notamment par les lois de la gravitation.",
    arLink: "تصف الآية حركة الشمس والقمر وانتظامهما.",
    frLink: "Le verset évoque le mouvement et l'organisation du Soleil et de la Lune."
  },
  {
    cat: "physics",
    ref: "الذاريات: 47",
    frRef: "Adh-Dhâriyât : 47",
    url: "https://quran.com/51/47",
    ar: "وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ",
    fr: "Le ciel, Nous l'avons construit avec puissance, et Nous sommes certes capables d'étendre.",
    arScience: "تشير المشاهدات الفلكية إلى أن الكون يتمدد وأن المسافات بين المجرات البعيدة تزداد مع الزمن.",
    frScience: "Les observations astronomiques montrent que l'Univers est en expansion et que les distances entre les galaxies lointaines augmentent.",
    arLink: "يربط بعض المفسرين لفظ لموسعون بتمدد الكون، بينما توجد تفسيرات لغوية أخرى.",
    frLink: "Certains commentateurs rapprochent le terme mûsi‘ûn de l'expansion de l'Univers. D'autres interprétations linguistiques existent."
  },
  {
    cat: "physics",
    ref: "النور: 40",
    frRef: "An-Nûr : 40",
    url: "https://quran.com/24/40",
    ar: "أَوْ كَظُلُمَاتٍ فِي بَحْرٍ لُجِّيٍّ يَغْشَاهُ مَوْجٌ مِنْ فَوْقِهِ مَوْجٌ مِنْ فَوْقِهِ سَحَابٌ ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ",
    fr: "Ou comme des ténèbres dans une mer profonde, recouverte par une vague, au-dessus de laquelle se trouve une autre vague, au-dessus de laquelle se trouve un nuage.",
    arScience: "تتناقص شدة الضوء مع ازدياد عمق البحر بسبب امتصاص الماء للضوء وتشتته.",
    frScience: "La lumière solaire diminue avec la profondeur de l'océan, car l'eau absorbe et diffuse la lumière.",
    arLink: "تصف الآية ظلمات البحر العميق، ويربط بعض الباحثين وصف الموج بالأمواج الداخلية.",
    frLink: "Le verset décrit l'obscurité des profondeurs marines. Certains auteurs rapprochent aussi les vagues des phénomènes de vagues internes."
  },
  {
    cat: "math",
    ref: "الرحمن: 5",
    frRef: "Ar-Rahmân : 5",
    url: "https://quran.com/55/5",
    ar: "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ",
    fr: "Le Soleil et la Lune évoluent selon un calcul précis.",
    arScience: "يمكن حساب حركات الشمس والقمر الظاهرية باستخدام النماذج الرياضية والفلكية.",
    frScience: "Les mouvements apparents du Soleil et de la Lune peuvent être décrits et prédits grâce à des modèles mathématiques.",
    arLink: "تشير الآية إلى انتظام حركة الشمس والقمر وارتباطها بالحساب.",
    frLink: "Le verset évoque la régularité des mouvements astronomiques et leur relation avec le calcul."
  },
  {
    cat: "math",
    ref: "الرعد: 8",
    frRef: "Ar-Ra‘d : 8",
    url: "https://quran.com/13/8",
    ar: "وَكُلُّ شَيْءٍ عِنْدَهُ بِمِقْدَارٍ",
    fr: "Et toute chose a auprès de Lui sa mesure.",
    arScience: "تعتمد الرياضيات والفيزياء على قياس الكميات وتحديد مقاديرها.",
    frScience: "Les mathématiques et la physique reposent sur la mesure, les proportions et la quantification des phénomènes.",
    arLink: "تتناول الآية مفهوم المقدار والتقدير دون تقديم نظرية رياضية محددة.",
    frLink: "Le verset évoque la notion de mesure sans présenter directement une théorie mathématique."
  },
  {
    cat: "math",
    ref: "مريم: 94",
    frRef: "Maryam : 94",
    url: "https://quran.com/19/94",
    ar: "لَقَدْ أَحْصَاهُمْ وَعَدَّهُمْ عَدًّا",
    fr: "Il les a certes dénombrés et les a comptés un à un.",
    arScience: "يقوم الإحصاء على جمع البيانات وعد العناصر وتحليلها.",
    frScience: "Les statistiques reposent sur la collecte, le dénombrement et l'analyse des données.",
    arLink: "تتضمن الآية مفهوم الإحصاء والعد الدقيق، دون أن تصف الحواسيب مباشرة.",
    frLink: "Le verset évoque le dénombrement précis, sans décrire directement les ordinateurs."
  },
  {
    cat: "geology",
    ref: "الغاشية: 19",
    frRef: "Al-Ghâshiyah : 19",
    url: "https://quran.com/88/19",
    ar: "وَإِلَى الْجِبَالِ كَيْفَ نُصِبَتْ",
    fr: "Et les montagnes, comment elles sont dressées ?",
    arScience: "تتشكل الجبال بعمليات جيولوجية متنوعة، منها تصادم الصفائح التكتونية والنشاط البركاني.",
    frScience: "Les montagnes se forment par différents processus géologiques, notamment la collision des plaques tectoniques et l'activité volcanique.",
    arLink: "تدعو الآية إلى التأمل في تكوين الجبال وهيئتها.",
    frLink: "Le verset invite à observer et à réfléchir à la structure et à la formation des montagnes."
  },
  {
    cat: "geology",
    ref: "النمل: 88",
    frRef: "An-Naml : 88",
    url: "https://quran.com/27/88",
    ar: "وَتَرَى الْجِبَالَ تَحْسَبُهَا جَامِدَةً وَهِيَ تَمُرُّ مَرَّ السَّحَابِ",
    fr: "Et tu verras les montagnes, tu les crois immobiles, alors qu'elles passent comme passent les nuages.",
    arScience: "تتحرك الصفائح التكتونية ببطء شديد، وقد تحمل معها السلاسل الجبلية.",
    frScience: "Les plaques tectoniques se déplacent très lentement, entraînant avec elles les chaînes montagneuses.",
    arLink: "يربط بعض الكتّاب الآية بحركة الصفائح، لكن سياقها يُفسر أيضًا بأنه وصف لأحداث يوم القيامة، فلا يصح الجزم بهذا الربط.",
    frLink: "Certains auteurs rapprochent ce verset de la tectonique des plaques. Son contexte est aussi interprété comme une description du Jour du Jugement ; ce rapprochement reste donc incertain."
  },
  {
    cat: "geology",
    ref: "الزمر: 21",
    frRef: "Az-Zumar : 21",
    url: "https://quran.com/39/21",
    ar: "أَلَمْ تَرَ أَنَّ اللَّهَ أَنْزَلَ مِنَ السَّمَاءِ مَاءً فَسَلَكَهُ يَنَابِيعَ فِي الْأَرْضِ",
    fr: "Ne vois-tu pas qu'Allah fait descendre du ciel une eau qu'Il fait pénétrer sous terre sous forme de sources ?",
    arScience: "تتسرب مياه الأمطار إلى التربة والصخور وتغذي المياه الجوفية التي قد تظهر على شكل ينابيع.",
    frScience: "L'eau de pluie s'infiltre dans les sols et les roches, alimente les nappes souterraines et peut réapparaître sous forme de sources.",
    arLink: "تصف الآية انتقال مياه الأمطار إلى باطن الأرض وظهورها في الينابيع.",
    frLink: "Le verset décrit le passage de l'eau de pluie vers le sous-sol et son apparition sous forme de sources."
  },
  {
    cat: "biology",
    ref: "المؤمنون: 14",
    frRef: "Al-Mu'minûn : 14",
    url: "https://quran.com/23/14",
    ar: "ثُمَّ خَلَقْنَا النُّطْفَةَ عَلَقَةً فَخَلَقْنَا الْعَلَقَةَ مُضْغَةً",
    fr: "Puis Nous avons fait de la goutte une adhérence, et de l'adhérence Nous avons créé une masse semblable à une bouchée.",
    arScience: "يمر الجنين بمراحل متتابعة من الانقسام الخلوي والتمايز وتكوين الأعضاء.",
    frScience: "L'embryon passe par plusieurs étapes successives : division cellulaire, différenciation et formation progressive des organes.",
    arLink: "يربط بعض المفسرين الأوصاف القرآنية بالمراحل المبكرة للتطور الجنيني، مع ضرورة التمييز بين الألفاظ القرآنية والمصطلحات الطبية.",
    frLink: "Certains commentateurs rapprochent les descriptions coraniques des premières étapes du développement embryonnaire. Il faut distinguer les termes coraniques de la terminologie médicale moderne."
  },
  {
    cat: "biology",
    ref: "الحجر: 22",
    frRef: "Al-Hijr : 22",
    url: "https://quran.com/15/22",
    ar: "وَأَرْسَلْنَا الرِّيَاحَ لَوَاقِحَ فَأَنْزَلْنَا مِنَ السَّمَاءِ مَاءً فَأَسْقَيْنَاكُمُوهُ",
    fr: "Et Nous envoyons les vents fécondants, puis Nous faisons descendre du ciel une eau dont Nous vous abreuvons.",
    arScience: "تساهم الرياح في نقل حبوب اللقاح بين بعض النباتات، وتؤدي دورًا في العمليات الجوية المرتبطة بالأمطار.",
    frScience: "Le vent transporte le pollen de certaines plantes et participe à leur reproduction. Il intervient également dans plusieurs processus atmosphériques.",
    arLink: "يمكن ربط وصف الرياح باللواقح بوظائفها في الطبيعة، مع مراعاة تعدد التفسيرات.",
    frLink: "L'expression vents fécondants peut être rapprochée des fonctions du vent dans la nature, tout en tenant compte des différentes interprétations."
  },
  {
    cat: "biology",
    ref: "النحل: 69",
    frRef: "An-Nahl : 69",
    url: "https://quran.com/16/69",
    ar: "ثُمَّ كُلِي مِنْ كُلِّ الثَّمَرَاتِ فَاسْلُكِي سُبُلَ رَبِّكِ ذُلُلًا يَخْرُجُ مِنْ بُطُونِهَا شَرَابٌ مُخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِلنَّاسِ",
    fr: "Puis mange de tous les fruits et suis les voies de ton Seigneur, rendues faciles pour toi. De leurs ventres sort une boisson aux couleurs variées, dans laquelle il y a une guérison pour les gens.",
    arScience: "ينتج النحل العسل أساسًا من رحيق الأزهار. ويحتوي العسل على مركبات ذات خصائص مضادة لبعض الميكروبات وله استعمالات طبية محددة.",
    frScience: "Les abeilles produisent du miel principalement à partir du nectar des fleurs. Le miel possède certaines propriétés antimicrobiennes et des applications médicales spécifiques.",
    arLink: "تشير الآية إلى إنتاج العسل واختلاف ألوانه وخصائصه النافعة، لكنه ليس علاجًا لجميع الأمراض.",
    frLink: "Le verset évoque la production du miel, la diversité de ses couleurs et ses propriétés bénéfiques. Le miel n'est cependant pas un traitement universel."
  }
];

function getProgressLabel(page) {
  const steps = {
    language: "1 / 3",
    fields: "2 / 3",
    details: "3 / 3"
  };

  return steps[page] || "1 / 3";
}

function showPage(page) {
  document.querySelectorAll(".page").forEach((section) => {
    section.classList.toggle("active", section.id === page);
  });

  const progress = document.getElementById("progress");
  if (progress) {
    progress.textContent = getProgressLabel(page);
  }

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function chooseLanguage(language) {
  lang.current = language;

  document.documentElement.lang = language;
  document.body.dir = language === "ar" ? "rtl" : "ltr";

  const t = texts[language];

  const fieldTitle = document.getElementById("fieldTitle");
  const fieldDescription = document.getElementById("fieldDescription");
  const backLanguage = document.getElementById("backLanguage");
  const backFields = document.getElementById("backFields");

  if (fieldTitle) fieldTitle.textContent = t.fields;
  if (fieldDescription) fieldDescription.textContent = t.fieldDesc;
  if (backLanguage) backLanguage.textContent = t.back;
  if (backFields) backFields.textContent = t.back;

  displayDomains();
  showPage("fields");
}

function displayDomains() {
  const grid = document.getElementById("fieldGrid");
  if (!grid) return;

  grid.innerHTML = "";

  Object.keys(domains).forEach((key) => {
    const domain = domains[key];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";

    const icon = document.createElement("span");
    icon.textContent = domain.icon;

    const title = document.createElement("h2");
    title.textContent = domain[lang.current];

    button.append(icon, title);
    button.addEventListener("click", () => selectDomain(key));
    grid.appendChild(button);
  });
}

function selectDomain(domain) {
  lang.selectedDomain = domain;

  const domainTitle = document.getElementById("domainTitle");
  const domainDescription = document.getElementById("domainDescription");
  const searchInput = document.getElementById("search");
  const method = document.getElementById("method");

  if (domainTitle) {
    domainTitle.textContent = domains[domain][lang.current];
  }

  if (domainDescription) {
    domainDescription.textContent = texts[lang.current].details;
  }

  if (searchInput) {
    searchInput.placeholder = texts[lang.current].search;
    searchInput.value = "";
  }

  if (method) {
    method.textContent = texts[lang.current].method;
  }

  displayVerses();
  showPage("details");
}

function displayVerses() {
  const container = document.getElementById("versesContainer");
  const searchInput = document.getElementById("search");

  if (!container || !searchInput) return;

  container.innerHTML = "";

  const searchTerm = searchInput.value.trim().toLowerCase();

  const filtered = verses.filter((verse) => {
    const searchable = [
      verse.ar,
      verse.fr,
      verse.arScience,
      verse.frScience,
      verse.arLink,
      verse.frLink,
      verse.ref,
      verse.frRef
    ].join(" ").toLowerCase();

    return verse.cat === lang.selectedDomain && searchable.includes(searchTerm);
  });

  if (filtered.length === 0) {
    container.textContent = texts[lang.current].empty;
    return;
  }

  filtered.forEach((verse) => {
    const card = document.createElement("article");
    card.className = "verse";

    const reference = document.createElement("span");
    reference.className = "reference";
    reference.textContent = lang.current === "ar" ? verse.ref : verse.frRef;

    const arabic = document.createElement("p");
    arabic.className = "arabic";
    arabic.dir = "rtl";
    arabic.textContent = `﴿ ${verse.ar} ﴾`;

    const translation = document.createElement("p");
    translation.textContent = lang.current === "fr" ? verse.fr : "";

    const science = document.createElement("div");
    science.className = "science";

    const scienceTitle = document.createElement("h3");
    scienceTitle.textContent = texts[lang.current].science;

    const scienceText = document.createElement("p");
    scienceText.textContent = lang.current === "ar" ? verse.arScience : verse.frScience;
    science.append(scienceTitle, scienceText);

    const connection = document.createElement("div");
    connection.className = "connection";

    const connectionTitle = document.createElement("h3");
    connectionTitle.textContent = texts[lang.current].link;

    const connectionText = document.createElement("p");
    connectionText.textContent = lang.current === "ar" ? verse.arLink : verse.frLink;
    connection.append(connectionTitle, connectionText);

    const source = document.createElement("p");
    const sourceLink = document.createElement("a");
    sourceLink.href = verse.url;
    sourceLink.target = "_blank";
    sourceLink.rel = "noopener noreferrer";
    sourceLink.textContent = `${texts[lang.current].source} ↗`;
    source.appendChild(sourceLink);

    card.append(reference, arabic, translation, science, connection, source);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("progress");
  if (progress) {
    progress.textContent = "1 / 3";
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => chooseLanguage(button.dataset.language));
  });

  document.getElementById("backLanguage")?.addEventListener("click", () => showPage("language"));
  document.getElementById("backFields")?.addEventListener("click", () => showPage("fields"));
  document.getElementById("search")?.addEventListener("input", displayVerses);

  displayDomains();
  showPage("language");
});
