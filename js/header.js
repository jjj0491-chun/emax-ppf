const TRANSLATIONS = {
  en: {
    nav: {
      about: 'About Us',
      products: 'Our Products',
      faqs: 'FAQs',
      dealers: 'Our Dealers',
      contact: 'Contact Us',
    },
    title: {
      '/': 'EMAX-PPF Emax Paint Protection Film',
      '/index.html': 'EMAX-PPF Emax Paint Protection Film',
      '/about.html': 'About Us | EMAX PPF',
      '/products.html': 'Products | EMAX PPF',
      '/faqs.html': 'FAQs | EMAX PPF',
      '/dealers.html': 'Our Dealers | EMAX PPF',
      '/contact.html': 'Contact Us | EMAX PPF',
      '/emax-premium.html': 'Emax Premium | EMAX PPF',
      '/emax-platinum.html': 'Emax Platinum | EMAX PPF',
      '/emax-white.html': 'Emax White | EMAX PPF',
      '/emax-black.html': 'Emax Black | EMAX PPF',
      '/emax-matte.html': 'Emax Matte | EMAX PPF',
    },
  },
  zh: {
    nav: {
      about: '关于我们',
      products: '产品介绍',
      faqs: '常见问题',
      dealers: '经销商',
      contact: '联系我们',
    },
    title: {
      '/': 'EMAX PPF',
      '/index.html': 'EMAX PPF',
      '/about.html': '关于我们 | EMAX PPF',
      '/products.html': '产品介绍 | EMAX PPF',
      '/faqs.html': '常见问题 | EMAX PPF',
      '/dealers.html': '经销商 | EMAX PPF',
      '/contact.html': '联系我们 | EMAX PPF',
      '/emax-premium.html': 'Emax Premium | EMAX PPF',
      '/emax-platinum.html': 'Emax Platinum | EMAX PPF',
      '/emax-white.html': 'Emax White | EMAX PPF',
      '/emax-black.html': 'Emax Black | EMAX PPF',
      '/emax-matte.html': 'Emax Matte | EMAX PPF',
    },
  },
};

const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = ['en', 'zh'];
const originalTextNodes = new WeakMap();

const PAGE_TEXT_TRANSLATIONS = {
  '/index.html': {
    'Emax Paint Protection Film (Emax PPF) focus on the research and development, sales and installation services of paint protection film products, Argotec TPU substrate ...': 'Emax Paint Protection Film (Emax PPF) 专注于漆面保护膜 产品的研发，销售及安装服务，採用美国Argotec TPU 基材，高弹 力，高韧性，不易破损...',
    'Learn More': '了解更多',
    'Paint Protection Film Product': 'Paint Protection Film 产品',
    'Thickness of 7.5mil, the strongest level of super protection, anti-scratch, self-repairing and anti-fouling': '厚度7.5mil , 最强等级超强防护、 抗刮痕、自修复抗污',
    'Effectively improve body brightness by 40%': '有效提高40%的车身亮度',
    'No residual glue, anti-yellowing': '不留残胶、抗黄变',
    '7-year warranty': '7年保固',
    'Thickness of 6.5mil, super protection, anti-scratch, self-repairing and anti-fouling': '厚度6.5mil , 超强防护、抗刮痕、 自修复抗污',
    'Effectively improve body brightness by 30%': '有效提高30%的车身亮度',
    '5-year warranty': '5年保固',
    'Whole car protection': '全车车漆保护',
    'Front protection': '车头全保护',
    'INTERIOR Paint Protection': '内饰保护膜',
    'Contact Us': '​联络我们',
    'Submit': '送出',
  },
  '/about.html': {
    'Emax Paint Protection Film (Emax PPF) focus on the research and development, sales and installation services of paint protection film products, Argotec TPU substrate for use in the united states, high elasticity, high toughness, high self-repairing coatings for use in the united states, anti-scratch and high self-repair.': 'Emax Paint Protection Film (Emax PPF) 专注于漆面保护膜产品的研发，销售及安装服务，採用美国Argotec TPU 基材，高弹力，高韧性，不易破损，採用德國BASF抗刮痕及高自修复性涂层，也採用了美国Ashland胶水粘着力强，不易脱胶，收边处理更 容易，撕下后不留残胶。',
    'Emax PPF construction by the Japanese cutting machine with pre-cut parts, do not need to disassemble parts, and reduce blade on the car caused by accidental damage.': 'Emax PPF 的施工由日本專用的电腦切割机配合專用軟件预先裁切，无需拆零件，并大幅减低刀片在车身上带来的意外伤害。',
    'Emax PPF has super anti-scratch, weather-resistant and heat-resistant, products are not easy to aging, and we use the united states substrate, coating, glue layer in the world is in the leading level of other countries.': 'Emax PPF 具有超强抗刮痕，耐侯性及耐高温，产品不易老化，而且我們所採用的美国基材，涂层，胶层在世界上是处于领先其它国家的水平。',
    "EMAX's Computer Cutting System": 'Paint Protection Film 产品',
    "EMAX's computer cutting system, which uses high-precision 3D scanners to collect data from real vehicles and convert 3D to 2D dimensions with dedicated software, has a global data acquisition center, global synchronization and updating of data with Japan.": 'EMAX采用的电脑裁切系统，是以高精确度的3D扫描仪，实车采集数据，并以 专用软件将3D转成2D尺寸，此裁切系统软件，在全球皆设有采集数据中心，全球同步更新最新数据，并配合日本 Graphtec裁切机器裁切稳定且精准。',
    'Cutting machine, cutting and precision.': '大幅降低在车上用刀裁膜，减低风险。',
    'Greatly reduce the risk of cutting film with a knife in the car.': '准确度更高，收边更美观。',
    'More than 95% do not have to disassemble the body of another piece, reduce construction risk.': '95%以上不用拆车身另件，减少施工风险。',
    'Higher accuracy, more beautiful edge. Cutting is accurate and does not require excessive stretching by technicians.': '切割准确，无需技师过度拉伸，大幅减少日后故障率。',
    '3D data collection': '3D数据采集后期开发处理技术',
    'Data collection uses the most advanced 3D data collection technology to quickly and effectively solve the problem of remote data collection': '数据采集采用最先进的3D数据采集技术,快速有效地解决了异地数据采集的问题。',
    'Cutting technology': '专车专用施工',
    'The special construction for the special car is based on the version provided by the computer database, the paint mask is cut with a film cutting machine in advance, and then the paint mask is manually pasted': '专车专用施工是根据电脑数据库提供的版型,预先用裁膜机切割漆面膜,然后再进行手工粘贴',
    'Save at least 1-2 meters of material per car, which can be used as interior film': '每车至少节省1-2米料,可作为内饰膜',
    'The construction time of each vehicle is 6-8 hours, which improves the construction efficiency': '每台车施工时间6-8小时,提高施工效率',
    'More than 90% do not need to be demolished, eliminating construction risks': '90%以上不用拆件,杜绝施工风险',
    'Higher accuracy, more beautiful edge. Cutting is accurate and does not require excessive stretching by technicians.': '技师施工便捷,车型精确施工有成就感',
    'Traditional construction': '传统施工',
    'The traditional construction technology is for workers to stick the paint mask to the car first, and then use a utility knife to cut the film manually.': '传统施工为技术工人先把漆面膜粘贴到汽车上,再用美工刀进行手动裁膜',
    'Waste material, cost at least 2 meters of membrane material': '浪费材料,多废至少2米膜料',
    'Waste time, 1-2 days construction time': '浪费时间,1天-2天施工时间',
    'Use a knife to cut the film, high construction risk': '用刀裁膜,施工风险高',
    'Pay attention to the skills of technicians, and the barriers for film construction are high': '讲究技师的技术,贴膜施工门槛高',
    '© 2026 Emax PPF All Rights Reserved.': '© 2026 Emax PPF 版权所有',
  },
  '/contact.html': {
    'Contact Us': '联络我们',
    'Submit': '送出',
  },
  '/products.html': {
    'Paint Protection Film Product': 'Paint Protection Film 产品',
    'Thickness of 7.5mil, the strongest level of super protection, anti-scratch, self-repairing and anti-fouling': '厚度7.5mil , 最强等级超强防护、 抗刮痕、自修复抗污',
    'Effectively improve body brightness by 40%': '有效提升車身亮度 40%',
    'No residual glue, anti-yellowing': '無殘膠、抗黃變',
    '7-year warranty': '7 年保固',
    'Thickness of 6.5mil, super protection, anti-scratch, self-repairing and anti-fouling': '厚度 6.5mil，超級保護，抗刮、可自我修復、防污',
    'Effectively improve body brightness by 30%': '有效提升車身亮度 30%',
    '5-year warranty': '5 年保固',
    '© 2026 Emax PPF All Rights Reserved.': '© 2026 Emax PPF 版权所有',
  },
  '/faqs.html': {
    'One week Notice After Installation': '安装后一周注意事项',
    'Re-visit to our store for follow up review after one week.': '安装完成一周后请回店复查。',
    'Do not drive with high speed within a week after installation completed.': '安装完成后一周内请勿高速行驶。',
    'Do not wash car, caught in rain or in wet condition in the first week after installation completed.     Can use towel to wipe clean oil stains, animal dirt or bird droppings or other corrosive substances on PPF surface but do not wipe the film edge.': '安装完成后一周内请勿洗车、遇雨或湿滑环境。可用毛巾擦拭油污、动物污垢、鸟粪或其他腐蚀性物质，但请勿擦拭膜边。',
    'Edge peel off or small are bubbles is normal, but please send the car to our shop as soon as possible.': '边缘剥离或小气泡属正常，请尽速送回门市检查。',
    'Completion Check Points': '完工检查重点',
    'Please refer to the following criteria to check the completed vehicle': '请参考以下标准检查完工车辆',
    'RFilm and paint surface between no obvious blister, hair, no dirty phase. Grain, one meter away do not show paint dust. Because space electrostatic dust can not be absolutely avoided, so the existence of a small number of very fine particles is normal. The inspection criteria may vary depending on the condition of the vehicle. After painting in the process of tearing film paint risk, please understand.': '贴膜与油漆表面间无明显水泡、毛刺、污染。距离一米不应看到涂装粉尘。因空间静电灰尘无法完全避免，少量极细微颗粒属正常。检查标准会依车况变化，施工中若撕膜造成涂装风险，敬请体谅。',
    'The rounded corners of the film are regular and uniform. The packaging angle depends on the vehicle structure difference and the size of the special computer data.': '膜边圆角规则且均匀。包边角度视车辆结构差异与专用电脑资料尺寸而定。',
    'Early installation of the film surface may have fog, which is viscose moisture produced by the initial visual effects. Normal about ten days (affected by temperature and humidity) , fog disappear, the film surface appears mirror light.': '早期施工时膜面可能有雾状水气，为初期视觉效应所致。约十天左右（受温湿影响）会消失，膜面呈现镜面光泽。',
    'Early installation may produce membrane edge stress shrinkage caused by super-edge, dry evaporation of water bubbles, bubbles, above normal.': '早期施工可能出现膜边应力收缩、干燥水泡、水泡，属正常现象。',
    'Make sure to have a second inspection at the construction store one week after completion (before the first car wash) to ensure that the problem is resolved in a timely manner.': '完工后一周内请务必回施工门市进行第二次检查（第一次洗车前），以确保问题能及时处理。',
    '© 2026 Emax PPF All Rights Reserved.': '© 2026 Emax PPF 版权所有',
  },
  '/dealers.html': {
    'Emax Coating Supplies Enterprise  (PG0497620-A)': 'Emax Coating Supplies Enterprise  (PG0497620-A)',
    'No39, Jalan Limau Manis 4 Taman Limau Manis 14000 Bukit Mertajam Pulau Pinang.': 'No39, Jalan Limau Manis 4 Taman Limau Manis 14000 Bukit Mertajam Pulau Pinang.',
    'Supahado Sdn. Bhd.': 'Supahado Sdn. Bhd.',
    '496-g, jalan ayer itam  11400 Penang': '496-g, jalan ayer itam  11400 Penang',
    '© 2026 Emax PPF All Rights Reserved.': '© 2026 Emax PPF 版权所有',
  },
  '/emax-premium.html': {
    'Scratch resistance': '耐刮性',
    'Repair ability': '修復能力',
    'brightness': '亮度',
    'Antifouling ability': '防污能力',
    'Construction difficulty': '施工難度',
    'Anti-yellowing ability': '抗黃化能力',
    'Basic Structure': '基本結構',
    'Characteristic test': '特性測試',
    '© 2026 Emax PPF All Rights Reserved.': '© 2026 Emax PPF 版权所有',
  },
  '/emax-platinum.html': {
    'Scratch resistance': '耐刮性',
    'Repair ability': '修復能力',
    'brightness': '亮度',
    'Antifouling ability': '防污能力',
    'Construction difficulty': '施工難度',
    'Anti-yellowing ability': '抗黃化能力',
    'Basic Structure': '基本結構',
    'Characteristic test': '特性測試',
    '© 2026 Emax PPF All Rights Reserved.': '© 2026 Emax PPF 版权所有',
  },
  '/emax-white.html': {
    'Scratch resistance': '耐刮性',
    'Repair ability': '修復能力',
    'brightness': '亮度',
    'Antifouling ability': '防污能力',
    'Construction difficulty': '施工難度',
    'Anti-yellowing ability': '抗黃化能力',
    'Basic Structure': '基本結構',
    'Characteristic test': '特性測試',
    '© 2026 Emax PPF All Rights Reserved.': '© 2026 Emax PPF 版权所有',
  },
  '/emax-black.html': {
    'Scratch resistance': '耐刮性',
    'Repair ability': '修復能力',
    'brightness': '亮度',
    'Antifouling ability': '防污能力',
    'Construction difficulty': '施工難度',
    'Anti-yellowing ability': '抗黃化能力',
    'Basic Structure': '基本結構',
    'Characteristic test': '特性測試',
    '© 2026 Emax PPF All Rights Reserved.': '© 2026 Emax PPF 版权所有',
  },
  '/emax-matte.html': {
    'Scratch resistance': '耐刮性',
    'Repair ability': '修復能力',
    'brightness': '亮度',
    'Antifouling ability': '防污能力',
    'Construction difficulty': '施工難度',
    'Anti-yellowing ability': '抗黃化能力',
    'Basic Structure': '基本結構',
    'Characteristic test': '特性測試',
    '© 2026 Emax PPF All Rights Reserved.': '© 2026 Emax PPF 版权所有',
  },
};

function normalizeText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function getLangFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang');
  return SUPPORTED_LANGS.includes(lang) ? lang : null;
}

function getStoredLang() {
  const lang = localStorage.getItem('siteLang');
  return SUPPORTED_LANGS.includes(lang) ? lang : null;
}

function getCurrentLang() {
  return getLangFromUrl() || getStoredLang() || DEFAULT_LANG;
}

function updateUrlLanguage(lang) {
  const url = new URL(window.location.href);
  if (lang === 'zh') {
    url.searchParams.set('lang', 'zh');
  } else {
    url.searchParams.delete('lang');
  }
  window.history.replaceState({}, '', url);
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-list .lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function updateNavigationLabels(lang) {
  document.querySelectorAll('[data-i18n-key]').forEach(el => {
    const key = el.dataset.i18nKey;
    const parts = key.split('.');
    const group = parts[0];
    const item = parts[1];
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][group] && TRANSLATIONS[lang][group][item]) {
      el.textContent = TRANSLATIONS[lang][group][item];
    }
  });
}

function updateLinksForLanguage(lang) {
  document.querySelectorAll('a[href]').forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:') || href.startsWith('http')) {
      return;
    }

    const linkUrl = new URL(href, window.location.origin);
    if (linkUrl.origin !== window.location.origin) {
      return;
    }

    if (lang === 'zh') {
      linkUrl.searchParams.set('lang', 'zh');
    } else {
      linkUrl.searchParams.delete('lang');
    }

    anchor.setAttribute('href', linkUrl.pathname + linkUrl.search + linkUrl.hash);
  });
}

function updatePageTitle(lang) {
  const path = window.location.pathname === '/' ? '/index.html' : window.location.pathname;
  const title = TRANSLATIONS[lang].title[path] || document.title;
  document.title = title;
}

function translatePageText(lang) {
  const path = window.location.pathname === '/' ? '/index.html' : window.location.pathname;
  const mapping = PAGE_TEXT_TRANSLATIONS[path] || {};

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  let node;
  while ((node = walker.nextNode())) {
    const original = node.nodeValue;
    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, original);
    }
    if (lang === 'en') {
      node.nodeValue = originalTextNodes.get(node);
      continue;
    }
    const key = normalizeText(original);
    if (mapping[key]) {
      node.nodeValue = original.replace(original.trim(), mapping[key]);
    }
  }
}

function translatePlaceholders(lang) {
  const placeholders = {
    en: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Type your message here...',
    },
    zh: {
      name: '姓名',
      email: '电子邮件',
      subject: '主题',
      message: '在此输入您的讯息...',
    },
  };
  const set = placeholders[lang] || placeholders.en;
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const subjectInput = document.querySelector('input[name="subject"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  if (nameInput) nameInput.placeholder = set.name;
  if (emailInput) emailInput.placeholder = set.email;
  if (subjectInput) subjectInput.placeholder = set.subject;
  if (messageInput) messageInput.placeholder = set.message;
}

function applyLanguage(lang) {
  localStorage.setItem('siteLang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
  updateLangButtons(lang);
  updateNavigationLabels(lang);
  updateLinksForLanguage(lang);
  updatePageTitle(lang);
  translatePageText(lang);
  translatePlaceholders(lang);
  updateUrlLanguage(lang);
}

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-list .lang-btn').forEach(button => {
    button.addEventListener('click', event => {
      const selectedLang = event.currentTarget.dataset.lang;
      applyLanguage(selectedLang);
    });
  });
}

function initMenuToggle() {
  $('.menu-toggle').click(function() {
    $('.site-nav').toggleClass('site-nav--open');
    $(this).toggleClass('open');
  });
}

fetch('/components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
    initMenuToggle();
    initLanguageSwitcher();
    applyLanguage(getCurrentLang());
  });