'use strict';

const SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQJcDlx7JIG5bYwSTTa_p2RdJ3qURSbYxKqHTemmA1r_zgCN81qOk0udWd7KFnPvBcEMuH6KKLYlilS/pub?output=csv';

const MAP_URL = 'https://maps.google.com/maps?hl=tr&gl=tr&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x14d863d6aa5cb5a1:0xee5a86b6f844a737';

const FILTERS = [
  ['all', 'filterAll'],
  ['popular', 'filterPopular'],
  ['chef', 'filterChef'],
  ['new', 'filterNew'],
  ['sharing', 'filterSharing'],
  ['chocolate', 'filterChocolate'],
  ['pistachio', 'filterPistachio'],
  ['cold', 'filterCold'],
  ['light', 'filterLight'],
  ['vegetarian', 'filterVegetarian'],
  ['spicy', 'filterSpicy']
];

const ALLERGENS = {
  gluten: { tr: 'Gluten', en: 'Gluten' },
  dairy: { tr: 'Süt', en: 'Dairy' },
  nuts: { tr: 'Fıstık', en: 'Pistachio' },
  caffeine: { tr: 'Kafein', en: 'Caffeine' }
};

const STR = {
  tr: {
    metaTitle: 'Hançerlioğlu Katmer Künefe – Menü',
    metaDesc: 'Gaziantepli Hançerlioğlu: katmer, künefe, kadayıf, baklava, dondurma ve içecekler.',
    lede: 'Katmerden künefeye, baklavadan kadayıfa. Şehrin seçkin tatlıları, altın dokunuşlarla.',
    hours: 'Her gün 10:00 – 01:00',
    hoursLabel: 'Çalışma saatleri',
    openNow: 'Açık',
    closedNow: 'Kapalı',
    opensAt: '10:00’da açılır',
    featured: 'Şefin vitrini',
    searchLabel: 'Menüde ara',
    searchPh: 'Katmer, fıstık, künefe…',
    clear: 'Temizle',
    close: 'Kapat',
    catsLabel: 'Kategoriler',
    filtersLabel: 'Filtreler',
    langLabel: 'Dil',
    filterAll: 'Tümü',
    filterPopular: 'Popüler',
    filterChef: 'Şef',
    filterNew: 'Yeni',
    filterSharing: 'Paylaşımlık',
    filterChocolate: 'Çikolata',
    filterPistachio: 'Fıstık',
    filterCold: 'Soğuk',
    filterLight: 'Hafif',
    filterVegetarian: 'Vejetaryen',
    filterSpicy: 'Acılı',
    badge_popular: '🔥 Popüler',
    badge_chef: 'Şefin özel',
    badge_new: 'Yeni',
    badge_light: 'Hafif',
    badge_local: 'Yerel',
    badge_sold: 'Tükendi',
    results: '{n} lezzet',
    emptyTitle: 'Bu süzgeçte bir şey yok',
    emptyBody: 'Aramayı veya filtreyi temizleyince menünün tamamı geri gelir.',
    clearAll: 'Menüyü sıfırla',
    ingredients: 'İçinde',
    allergens: 'Alerjenler',
    allergenNote: 'İşaretler mutfak notuna göredir. Bir hassasiyetiniz varsa ekibe sorun.',
    pairs: 'Yanına yakışır',
    back: 'Geri',
    soldBanner: 'Şu an tükendi',
    for2: '2 kişilik',
    for3: '3 kişilik',
    for4: '4 kişilik',
    onUs: 'İkram',
    call: 'Ara',
    whatsapp: 'WhatsApp',
    directions: 'Yol tarifi',
    instagram: 'Instagram',
    contact: 'İletişim',
    address: 'Adres ve konum için haritayı açın',
    payCard: 'Kart',
    payCash: 'Nakit',
    payContactless: 'Temassız',
    takeaway: 'Paket servis',
    map: 'Google Haritalar'
  },
  en: {
    metaTitle: 'Hancerlioglu Katmer Kunefe – Menu',
    metaDesc: 'Gaziantepli Hancerlioglu: katmer, kunefe, kadaif, baklava, ice cream and drinks.',
    lede: 'From katmer to kunefe, from baklava to kadaif. The city’s finest desserts, finished in gold.',
    hours: 'Every day 10:00 – 01:00',
    hoursLabel: 'Opening hours',
    openNow: 'Open',
    closedNow: 'Closed',
    opensAt: 'Opens at 10:00',
    featured: 'From the case',
    searchLabel: 'Search the menu',
    searchPh: 'Katmer, pistachio, kunefe…',
    clear: 'Clear',
    close: 'Close',
    catsLabel: 'Categories',
    filtersLabel: 'Filters',
    langLabel: 'Language',
    filterAll: 'All',
    filterPopular: 'Popular',
    filterChef: 'Chef',
    filterNew: 'New',
    filterSharing: 'To share',
    filterChocolate: 'Chocolate',
    filterPistachio: 'Pistachio',
    filterCold: 'Cold',
    filterLight: 'Lighter',
    filterVegetarian: 'Vegetarian',
    filterSpicy: 'Spicy',
    badge_popular: '🔥 Popular',
    badge_chef: 'Chef’s special',
    badge_new: 'New',
    badge_light: 'Lighter',
    badge_local: 'Local',
    badge_sold: 'Sold out',
    results: '{n} dishes',
    emptyTitle: 'Nothing matches',
    emptyBody: 'Clear the search or filter to bring the full menu back.',
    clearAll: 'Reset menu',
    ingredients: 'What’s in it',
    allergens: 'Allergens',
    allergenNote: 'Marks follow the kitchen notes. Ask the team if you have an allergy.',
    pairs: 'Goes well with',
    back: 'Back',
    soldBanner: 'Sold out right now',
    for2: 'For 2',
    for3: 'For 3',
    for4: 'For 4',
    onUs: 'On the house',
    call: 'Call',
    whatsapp: 'WhatsApp',
    directions: 'Directions',
    instagram: 'Instagram',
    contact: 'Contact',
    address: 'Open the map for the address',
    payCard: 'Card',
    payCash: 'Cash',
    payContactless: 'Contactless',
    takeaway: 'Takeaway',
    map: 'Google Maps'
  }
};

const ROZET = {
  populer: 'popular', 'popüler': 'popular', popular: 'popular',
  sef: 'chef', 'şef': 'chef', chef: 'chef', ozel: 'chef', 'özel': 'chef',
  yeni: 'new', new: 'new',
  hafif: 'light', light: 'light',
  yerel: 'local', local: 'local',
  tukendi: 'sold', 'tükendi': 'sold', sold: 'sold', soldout: 'sold'
};

const YES = new Set(['evet', 'yes', '1', 'true', 'var', 'tukendi', 'tükendi', 'sold', 'soldout']);
const NO = new Set(['hayir', 'hayır', 'no', '0', 'false', 'yok']);

const state = {
  lang: 'tr',
  query: '',
  filter: 'all',
  prices: new Map(),
  pricesReady: false,
  soldOverrides: new Map(),
  badgeOverrides: new Map(),
  activeCat: 'katmer',
  sheetId: null,
  portion: 0,
  returnTo: null,
  opener: null,
  sheetHist: false,
  hideToken: 0,
  spyLock: false,
  count: 0
};

const $ = (sel) => document.querySelector(sel);
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const t = (key) => STR[state.lang][key] ?? STR.tr[key] ?? key;

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (ch) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

function fold(value) {
  return String(value ?? '')
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i')
    .replace(/i̇/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/\s+/g, ' ')
    .trim();
}

function textPair(obj) {
  if (!obj) return '';
  return state.lang === 'en' ? (obj.en || obj.tr || '') : (obj.tr || obj.en || '');
}

function findItem(id) {
  return MENU.items.find((item) => item.id === id) || null;
}

function findByKey(key) {
  for (const item of MENU.items) {
    if (item.id === key) return { item, portion: null, index: 0 };
    if (item.portions) {
      const index = item.portions.findIndex((portion) => portion.id === key);
      if (index >= 0) return { item, portion: item.portions[index], index };
    }
  }
  return null;
}

function itemName(item) {
  return state.lang === 'en' ? (item.en || item.tr) : item.tr;
}

function catName(cat) {
  return state.lang === 'en' ? cat.en : cat.tr;
}

function itemKeys(item) {
  return item.portions ? item.portions.map((portion) => portion.id) : [item.id];
}

function keySold(key) {
  if (state.soldOverrides.has(key)) return !!state.soldOverrides.get(key);
  const hit = findByKey(key);
  if (!hit) return false;
  if (hit.portion) return !!hit.portion.soldOut;
  return !!hit.item.soldOut;
}

function isSoldOut(item) {
  return itemKeys(item).every(keySold);
}

function effectiveBadge(item) {
  if (isSoldOut(item)) return 'sold';
  for (const key of itemKeys(item)) {
    const override = state.badgeOverrides.get(key);
    if (override) return override;
  }
  return item.badge || '';
}

function collectTags(item) {
  const tags = new Set(item.tags || []);
  (item.portions || []).forEach((portion) => (portion.tags || []).forEach((tag) => tags.add(tag)));
  const badge = effectiveBadge(item);
  if (badge && badge !== 'sold') tags.add(badge);
  return tags;
}

function matches(item, filter) {
  if (!filter || filter === 'all') return true;
  const tags = collectTags(item);
  if (filter === 'popular') return effectiveBadge(item) === 'popular' || tags.has('popular');
  if (filter === 'chef') return effectiveBadge(item) === 'chef' || tags.has('chef');
  if (filter === 'new') return effectiveBadge(item) === 'new' || tags.has('new');
  if (filter === 'light') return effectiveBadge(item) === 'light' || tags.has('light');
  return tags.has(filter);
}

function haystack(item) {
  const cat = MENU.categories.find((entry) => entry.id === item.cat);
  const bits = [
    item.tr, item.en, item.desc?.tr, item.desc?.en, item.note?.tr, item.note?.en,
    item.ingredients?.tr, item.ingredients?.en, item.warn?.tr, item.warn?.en,
    cat?.tr, cat?.en
  ];
  (item.tags || []).forEach((tag) => bits.push(STR.tr['filter' + cap(tag)], STR.en['filter' + cap(tag)], tag));
  (item.portions || []).forEach((portion) => {
    bits.push(portion.tr, portion.en, portion.desc?.tr, portion.desc?.en);
    (portion.tags || []).forEach((tag) => bits.push(tag));
  });
  if (item.badge) bits.push(STR.tr['badge_' + item.badge], STR.en['badge_' + item.badge]);
  return bits.filter(Boolean).join(' ');
}

function cap(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function matchesQuery(item) {
  if (!state.query) return true;
  return fold(haystack(item)).includes(fold(state.query));
}

function isFiltered() {
  return !!(state.query || state.filter !== 'all');
}

function stickyH() {
  return document.querySelector('.sticky-stack').offsetHeight;
}

function measureSticky() {
  document.documentElement.style.setProperty('--sticky-h', stickyH() + 'px');
}

function icon(name) {
  const paths = {
    gluten: '<path d="M12 21V4"/><path d="M12 8c2.2 0 3.4-1.2 4.2-2.4C15 7.6 13.6 8.6 12 8.6"/><path d="M12 8c-2.2 0-3.4-1.2-4.2-2.4C9 7.6 10.4 8.6 12 8.6"/><path d="M12 13c2.2 0 3.4-1.2 4.2-2.4C15 12.6 13.6 13.6 12 13.6"/><path d="M12 13c-2.2 0-3.4-1.2-4.2-2.4C9 12.6 10.4 13.6 12 13.6"/><path d="M12 18c2.2 0 3.4-1.2 4.2-2.4C15 17.6 13.6 18.6 12 18.6"/><path d="M12 18c-2.2 0-3.4-1.2-4.2-2.4C9 17.6 10.4 18.6 12 18.6"/>',
    dairy: '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
    nuts: '<ellipse cx="12" cy="13" rx="5" ry="6.2"/><path d="M12 7c.6-1.6 1.6-2.6 2.4-3.6"/>',
    caffeine: '<path d="M5 9h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9z"/><path d="M16 11h2.2a2.2 2.2 0 0 1 0 4.4H16"/><path d="M8 5c.2 1 .8 1.2.8 2M11 5c.2 1 .8 1.2.8 2"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16.5L20 20.5"/>',
    close: '<path d="M7 7l10 10M17 7L7 17"/>',
    phone: '<path d="M8 4h3l1.2 3-1.8 1.1a12 12 0 0 0 5.5 5.5L17 12l3 1.2v3A2 2 0 0 1 18 18 14 14 0 0 1 6 6a2 2 0 0 1 2-2z"/>',
    pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/>',
    back: '<path d="M15 6l-6 6 6 6"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || ''}</svg>`;
}

function isCompValue(value) {
  const sample = String(value || '').trim().toLocaleLowerCase('tr-TR');
  return sample === '-' || sample === 'ikram' || sample === 'ücretsiz' || sample === 'free';
}

function priceText(key, item) {
  const comp = !!(item && item.complimentary) || key === 'cay';
  if (!state.pricesReady) return comp ? t('onUs') : null;
  const raw = (state.prices.get(key) || '').trim();
  if (!raw) return comp ? t('onUs') : '—';
  if (isCompValue(raw)) return t('onUs');
  return raw;
}

function ladderParts(key) {
  const raw = (state.prices.get(key) || '').trim();
  if (!raw || isCompValue(raw)) return null;
  const parts = raw.split('/').map((part) => part.trim()).filter(Boolean);
  return parts.length >= 2 ? parts : null;
}

function priceHTML(item) {
  if (item.portions) {
    return `<span class="price price-duo">${item.portions.map((portion) => {
      const value = priceText(portion.id, item);
      const label = textPair(portion.short) || (state.lang === 'en' ? portion.en : portion.tr);
      if (value == null) return '<span class="skel-price"></span>';
      return `<span><small>${esc(label)}</small>${esc(value)}</span>`;
    }).join('')}</span>`;
  }
  if (item.priceMode === 'ladder') {
    const parts = ladderParts(item.id);
    if (parts) return `<span class="price">${esc(parts[0])} – ${esc(parts[parts.length - 1])}</span>`;
  }
  const value = priceText(item.id, item);
  if (value == null) return '<span class="skel-price"></span>';
  return `<span class="price">${esc(value)}</span>`;
}

function badgeSpan(item) {
  const badge = effectiveBadge(item);
  if (!badge) return '<span class="badge" data-badge hidden></span>';
  return `<span class="badge" data-badge data-kind="${esc(badge)}">${esc(t('badge_' + badge))}</span>`;
}

function allergenSR(item) {
  const ids = item.allergens || [];
  if (!ids.length) return '';
  const label = ids.map((id) => (ALLERGENS[id] ? (state.lang === 'en' ? ALLERGENS[id].en : ALLERGENS[id].tr) : id)).join(', ');
  return `<span class="sr-only">${esc(label)}</span>`;
}

function mediaHTML(src, letter, opts = {}) {
  const badge = opts.badge || '';
  const ph = `<span class="ph" aria-hidden="true">${esc(letter)}</span>`;
  if (!src) return `<div class="media is-ready is-ph">${badge}${ph}</div>`;
  const loading = opts.eager ? 'eager' : 'lazy';
  const priority = opts.eager ? ' fetchpriority="high"' : '';
  return `<div class="media">${badge}${ph}<img src="${esc(src)}" alt="" decoding="async" loading="${loading}"${priority}></div>`;
}

function cardImage(item) {
  return item.image || item.portions?.[0]?.image || '';
}

function cardHTML(item, opts = {}) {
  const name = itemName(item);
  const note = textPair(item.note);
  const letter = Array.from(name)[0] || 'H';
  const cls = opts.feature ? 'feature-card' : 'card';
  return `<button type="button" class="${cls}${isSoldOut(item) ? ' is-sold' : ''}" data-open="${esc(item.id)}">
    ${mediaHTML(cardImage(item), letter, { eager: !!opts.eager, badge: badgeSpan(item) })}
    <span class="card-body">
      <h3 class="card-title">${esc(name)}</h3>
      ${note ? `<span class="note">${esc(note)}</span>` : ''}
      <span class="card-foot">
        ${allergenSR(item)}
        <span data-price-for="${esc(item.id)}"></span>
      </span>
    </span>
  </button>`;
}

function hydrate(root) {
  root.querySelectorAll('.media img').forEach((img) => {
    const media = img.parentElement;
    const ready = () => media.classList.add('is-ready');
    const fail = () => {
      img.remove();
      media.classList.add('is-ready', 'is-ph');
    };
    if (img.complete && img.naturalWidth > 0) ready();
    else {
      img.addEventListener('load', ready, { once: true });
      img.addEventListener('error', fail, { once: true });
    }
  });
}

function fillPrices() {
  document.querySelectorAll('[data-price-for]').forEach((slot) => {
    if (slot.dataset.sheet) return;
    const item = findItem(slot.dataset.priceFor);
    if (!item) return;
    slot.innerHTML = priceHTML(item);
  });
  document.querySelectorAll('[data-open]').forEach((card) => {
    const item = findItem(card.dataset.open);
    if (!item) return;
    card.classList.toggle('is-sold', isSoldOut(item));
    const badge = card.querySelector('.badge');
    if (!badge) return;
    const kind = effectiveBadge(item);
    if (!kind) {
      badge.hidden = true;
      return;
    }
    badge.hidden = false;
    badge.dataset.kind = kind;
    badge.textContent = t('badge_' + kind);
  });
}

function visibleGroups() {
  return MENU.categories
    .map((cat) => ({
      cat,
      items: MENU.items.filter((item) => item.cat === cat.id && matches(item, state.filter) && matchesQuery(item))
    }))
    .filter((group) => group.items.length);
}

function resultLabel(count) {
  return t('results').replace('{n}', String(count));
}

function emptyHTML() {
  return `<div class="empty">
    <strong>${esc(t('emptyTitle'))}</strong>
    <p>${esc(t('emptyBody'))}</p>
    <button type="button" class="text-btn" id="reset-filters">${esc(t('clearAll'))}</button>
  </div>`;
}

function renderMenu() {
  const root = document.getElementById('menu');
  const groups = visibleGroups();
  state.count = groups.reduce((sum, group) => sum + group.items.length, 0);
  root.classList.add('is-dim');
  if (!groups.length) {
    root.innerHTML = emptyHTML();
  } else {
    const head = isFiltered()
      ? `<div class="results-line"><span>${esc(resultLabel(state.count))}</span><button type="button" class="text-btn" id="reset-filters">${esc(t('clearAll'))}</button></div>`
      : '';
    root.innerHTML = head + groups.map((group) => `
      <section class="cat-section" id="${group.cat.id}">
        <div class="section-head">
          <h2>${esc(catName(group.cat))}</h2>
          <span class="rule"></span>
          <span class="count">${group.items.length}</span>
        </div>
        <div class="grid">${group.items.map((item) => cardHTML(item)).join('')}</div>
      </section>`).join('');
  }
  const featured = document.getElementById('featured');
  featured.hidden = isFiltered();
  hydrate(root);
  fillPrices();
  bindSpy();
  const live = document.getElementById('live');
  live.textContent = isFiltered() ? resultLabel(state.count) : '';
  requestAnimationFrame(() => root.classList.remove('is-dim'));
}

function renderFeatured() {
  const row = document.getElementById('feature-row');
  row.innerHTML = MENU.featured.map((id, index) => {
    const item = findItem(id);
    return item ? cardHTML(item, { feature: true, eager: index === 0 }) : '';
  }).join('');
  hydrate(row);
  fillPrices();
}

function renderFilters() {
  const host = document.getElementById('filters');
  const buttons = FILTERS.filter(([id]) => id === 'all' || MENU.items.some((item) => matches(item, id)));
  host.innerHTML = buttons.map(([id, key]) => {
    const on = state.filter === id;
    return `<button type="button" class="pill${on ? ' is-on' : ''}" data-filter="${id}" aria-pressed="${on ? 'true' : 'false'}">${esc(t(key))}</button>`;
  }).join('');
}

function renderCats() {
  const nav = document.getElementById('cats');
  nav.innerHTML = MENU.categories.map((cat) => {
    const on = cat.id === state.activeCat;
    return `<button type="button" class="pill${on ? ' is-on' : ''}" data-cat="${cat.id}"${on ? ' aria-current="true"' : ''}>${esc(catName(cat))}</button>`;
  }).join('');
}

function applyI18n() {
  document.documentElement.lang = state.lang;
  document.title = t('metaTitle');
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', t('metaDesc'));
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => { el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder)); });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const on = btn.dataset.lang === state.lang;
    btn.classList.toggle('is-on', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

function setLang(lang) {
  state.lang = lang === 'en' ? 'en' : 'tr';
  try { localStorage.setItem('lang', state.lang); } catch (err) { /* private mode */ }
  applyI18n();
  updateOpen();
  renderFilters();
  renderCats();
  renderFeatured();
  renderMenu();
  if (state.sheetId) renderSheetBody();
}

function updateOpen() {
  const open = isOpenNow();
  const dot = document.getElementById('status-dot');
  dot.classList.toggle('is-open', open);
  dot.classList.toggle('is-closed', !open);
  const label = open ? `${t('openNow')} · ${t('hours')}` : `${t('closedNow')} · ${t('opensAt')}`;
  document.getElementById('open-text').textContent = label;
  dot.title = label;
}

function isOpenNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Istanbul',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(new Date());
  const hour = Number(parts.find((part) => part.type === 'hour').value);
  const minute = Number(parts.find((part) => part.type === 'minute').value);
  const mins = hour * 60 + minute;
  return mins >= 10 * 60 || mins < 60;
}

function setActiveCat(id) {
  if (!id || state.activeCat === id && document.querySelector(`[data-cat="${id}"]`)?.classList.contains('is-on')) {
    state.activeCat = id || state.activeCat;
  }
  const previous = state.activeCat;
  state.activeCat = id;
  const nav = document.getElementById('cats');
  let current = null;
  nav.querySelectorAll('[data-cat]').forEach((btn) => {
    const on = btn.dataset.cat === id;
    btn.classList.toggle('is-on', on);
    if (on) {
      btn.setAttribute('aria-current', 'true');
      current = btn;
    } else btn.removeAttribute('aria-current');
  });
  if (current && previous !== id) {
    const navRect = nav.getBoundingClientRect();
    const btnRect = current.getBoundingClientRect();
    const delta = btnRect.left - navRect.left - (nav.clientWidth - btnRect.width) / 2;
    nav.scrollBy({ left: delta, behavior: reducedMotion() ? 'auto' : 'smooth' });
  }
}

function updateActive() {
  if (state.spyLock) return;
  const line = stickyH() + 72;
  let current = null;
  document.querySelectorAll('.cat-section').forEach((section) => {
    if (section.getBoundingClientRect().top <= line) current = section.id;
  });
  if (!current) current = document.querySelector('.cat-section')?.id || MENU.categories[0].id;
  if (current) setActiveCat(current);
}

let spy;
function bindSpy() {
  spy?.disconnect();
  const top = stickyH() + 8;
  const bottom = Math.max(140, Math.round(window.innerHeight * 0.45));
  spy = new IntersectionObserver(() => updateActive(), {
    root: null,
    rootMargin: `-${top}px 0px -${bottom}px 0px`,
    threshold: [0, 0.15, 0.4, 0.75, 1]
  });
  document.querySelectorAll('.cat-section').forEach((section) => spy.observe(section));
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  state.spyLock = true;
  const top = el.getBoundingClientRect().top + window.scrollY - stickyH() - 6;
  const behavior = reducedMotion() ? 'auto' : 'smooth';
  window.scrollTo({ top: Math.max(0, top), behavior });
  const release = () => {
    if (!state.spyLock) return;
    state.spyLock = false;
    updateActive();
  };
  if (behavior === 'auto') {
    release();
    return;
  }
  const timer = window.setTimeout(release, 1200);
  window.addEventListener('scrollend', () => {
    window.clearTimeout(timer);
    release();
  }, { once: true });
}

function clearQuery() {
  state.query = '';
  const input = document.getElementById('q');
  input.value = '';
  document.getElementById('q-clear').hidden = true;
}

function setFilter(id) {
  state.filter = id;
  renderFilters();
  renderMenu();
  if (document.getElementById('menu').getBoundingClientRect().top < stickyH()) scrollToId('menu');
}

function goToCat(id) {
  const dirty = isFiltered();
  state.filter = 'all';
  clearQuery();
  document.getElementById('q').blur();
  renderFilters();
  if (dirty) renderMenu();
  setActiveCat(id);
  scrollToId(id);
}

function activePortion(item) {
  if (!item.portions) return null;
  return item.portions[state.portion] || item.portions[0];
}

function activeImage(item) {
  return activePortion(item)?.image || cardImage(item);
}

function activeDesc(item) {
  return textPair(activePortion(item)?.desc) || textPair(item.desc);
}

function activeIngredients(item) {
  return textPair(activePortion(item)?.ingredients) || textPair(item.ingredients);
}

function sheetPriceHTML(item) {
  const portion = activePortion(item);
  if (portion) {
    const value = priceText(portion.id, item);
    if (value == null) return '<span class="skel-price"></span>';
    return `<p class="sheet-price">${esc(value)}</p>`;
  }
  if (item.priceMode === 'ladder') {
    const parts = ladderParts(item.id);
    if (parts && parts.length === 3) {
      const labels = [t('for2'), t('for3'), t('for4')];
      return `<div class="ladder">${parts.map((part, index) => `<div class="ladder-row"><span>${esc(labels[index] || '')}</span><strong>${esc(part)}</strong></div>`).join('')}</div>`;
    }
  }
  const value = priceText(item.id, item);
  if (value == null) return '<span class="skel-price"></span>';
  return `<p class="sheet-price">${esc(value)}</p>`;
}

function pairList(item) {
  const ids = item.pairings || MENU.pairs[item.cat] || [];
  const unique = [];
  ids.forEach((id) => {
    if (id !== item.id && !unique.includes(id) && findItem(id)) unique.push(id);
  });
  return unique.slice(0, 3).map(findItem);
}

function renderSheetBody() {
  const item = findItem(state.sheetId);
  const body = document.getElementById('sheet-body');
  if (!item) return;
  const portion = activePortion(item);
  const name = itemName(item);
  const letter = Array.from(name)[0] || 'H';
  const desc = activeDesc(item);
  const ingredients = activeIngredients(item);
  const warn = textPair(portion?.warn) || textPair(item.warn);
  const note = item.portions ? '' : textPair(item.note);
  const sold = portion ? keySold(portion.id) : isSoldOut(item);
  const allergens = item.allergens || [];
  const pairs = pairList(item);
  const back = state.returnTo
    ? `<button type="button" class="back-btn" id="sheet-back">${icon('back')} ${esc(t('back'))}</button>`
    : '';
  const segments = item.portions ? `<div class="seg-row" role="tablist">${item.portions.map((entry, index) => {
    const on = index === state.portion;
    const portionSold = keySold(entry.id);
    return `<button type="button" class="seg${on ? ' is-on' : ''}${portionSold ? ' is-sold' : ''}" role="tab" aria-selected="${on ? 'true' : 'false'}" data-portion-pick="${index}">${esc(state.lang === 'en' ? entry.en : entry.tr)}${portionSold ? ' · ' + esc(t('badge_sold')) : ''}</button>`;
  }).join('')}</div>` : '';
  const allergenBlock = allergens.length ? `
    <h3 class="subh">${esc(t('allergens'))}</h3>
    <div class="sheet-chips">${allergens.map((id) => {
      const label = ALLERGENS[id] ? (state.lang === 'en' ? ALLERGENS[id].en : ALLERGENS[id].tr) : id;
      return `<span class="chip">${icon(id)} ${esc(label)}</span>`;
    }).join('')}</div>
    <p class="fine">${esc(t('allergenNote'))}</p>` : '';
  const pairBlock = pairs.length ? `
    <h3 class="subh">${esc(t('pairs'))}</h3>
    <div class="pair-row">${pairs.map((pair) => {
      const pairLetter = Array.from(itemName(pair))[0] || 'H';
      return `<button type="button" class="pair${isSoldOut(pair) ? ' is-sold' : ''}" data-open="${esc(pair.id)}" data-from-pair="1">
        ${mediaHTML(cardImage(pair), pairLetter)}
        <span><span class="pair-name">${esc(itemName(pair))}</span><span data-price-for="${esc(pair.id)}"></span></span>
      </button>`;
    }).join('')}</div>` : '';

  body.innerHTML = `
    ${mediaHTML(activeImage(item), letter, { eager: true }).replace('class="media"', 'class="media sheet-hero"')}
    <div class="sheet-copy">
      ${back}
      <div class="sheet-kicker">${badgeSpan(item)}</div>
      <h2 class="sheet-title" id="sheet-title">${esc(name)}</h2>
      ${sheetPriceHTML(item)}
      ${sold ? `<p class="sold-banner">${esc(t('soldBanner'))}</p>` : ''}
      ${segments}
      ${note ? `<p class="note">${esc(note)}</p>` : ''}
      ${warn ? `<p class="warn">${esc(warn)}</p>` : ''}
      ${desc ? `<p class="desc">${esc(desc)}</p>` : ''}
      ${ingredients ? `<h3 class="subh">${esc(t('ingredients'))}</h3><p>${esc(ingredients)}</p>` : ''}
      ${allergenBlock}
      ${pairBlock}
    </div>`;
  hydrate(body);
  fillPrices();
  const dialog = document.getElementById('sheet');
  dialog.setAttribute('aria-labelledby', 'sheet-title');
}

function lockScroll() {
  if (document.body.classList.contains('lock')) return;
  state.lockedY = window.scrollY;
  document.body.style.top = `-${state.lockedY}px`;
  document.body.classList.add('lock');
}

function unlockScroll() {
  if (!document.body.classList.contains('lock')) return;
  document.body.classList.remove('lock');
  document.body.style.top = '';
  window.scrollTo(0, state.lockedY || 0);
}

function openSheet(id, portion = 0, opts = {}) {
  const item = findItem(id);
  if (!item) return;
  if (opts.returning) state.returnTo = null;
  else if (opts.returnTo) state.returnTo = opts.returnTo;
  else if (!opts.keepReturn) state.returnTo = null;
  state.hideToken += 1;
  state.sheetId = id;
  state.portion = item.portions ? Math.min(portion, item.portions.length - 1) : 0;
  renderSheetBody();
  const sheet = document.getElementById('sheet');
  const backdrop = document.getElementById('backdrop');
  const wasOpen = sheet.classList.contains('open');
  backdrop.hidden = false;
  sheet.hidden = false;
  lockScroll();
  requestAnimationFrame(() => {
    backdrop.classList.add('on');
    sheet.classList.add('open');
  });
  if (!state.sheetHist) {
    try {
      history.pushState({ sheet: 1 }, '');
      state.sheetHist = true;
    } catch (err) { /* ignore */ }
  }
  if (!wasOpen) document.getElementById('sheet-close').focus();
}

function hideSheet(fromPop) {
  const sheet = document.getElementById('sheet');
  const backdrop = document.getElementById('backdrop');
  if (!sheet.classList.contains('open')) return;
  const token = ++state.hideToken;
  sheet.classList.remove('open', 'dragging');
  backdrop.classList.remove('on');
  sheet.style.setProperty('--drag', '0px');
  unlockScroll();
  window.setTimeout(() => {
    if (token !== state.hideToken) return;
    if (sheet.classList.contains('open')) return;
    sheet.hidden = true;
    backdrop.hidden = true;
    state.sheetId = null;
    state.returnTo = null;
  }, reducedMotion() ? 0 : 400);
  if (state.opener && typeof state.opener.focus === 'function') {
    state.opener.focus({ preventScroll: true });
  }
  const shouldBack = !fromPop && state.sheetHist;
  state.sheetHist = false;
  if (shouldBack) history.back();
}

function defaultPortion(item) {
  if (!item?.portions) return 0;
  if (state.filter === 'sharing') {
    const index = item.portions.findIndex((portion) => (portion.tags || []).includes('sharing'));
    if (index >= 0) return index;
  }
  return 0;
}

function bindDrag() {
  const handle = document.getElementById('handle');
  const sheet = document.getElementById('sheet');
  const scroller = document.getElementById('sheet-body');
  let pointer = null;

  const endDrag = () => {
    if (!pointer) return;
    pointer = null;
    const dy = parseFloat(sheet.style.getPropertyValue('--drag')) || 0;
    sheet.classList.remove('dragging');
    sheet.style.setProperty('--drag', '0px');
    if (dy > 96) hideSheet(false);
  };

  handle.addEventListener('pointerdown', (event) => {
    pointer = { id: event.pointerId, y: event.clientY };
    handle.setPointerCapture(event.pointerId);
    sheet.classList.add('dragging');
  });
  handle.addEventListener('pointermove', (event) => {
    if (!pointer || event.pointerId !== pointer.id) return;
    sheet.style.setProperty('--drag', Math.max(0, event.clientY - pointer.y) + 'px');
  });
  handle.addEventListener('pointerup', endDrag);
  handle.addEventListener('pointercancel', endDrag);

  let touchY = 0;
  let touchOn = false;
  scroller.addEventListener('touchstart', (event) => {
    touchY = event.touches[0].clientY;
    touchOn = scroller.scrollTop <= 0;
  }, { passive: true });
  scroller.addEventListener('touchmove', (event) => {
    if (!touchOn) return;
    const dy = event.touches[0].clientY - touchY;
    if (dy <= 0 || scroller.scrollTop > 0) {
      touchOn = false;
      sheet.classList.remove('dragging');
      sheet.style.setProperty('--drag', '0px');
      return;
    }
    sheet.classList.add('dragging');
    sheet.style.setProperty('--drag', dy + 'px');
  }, { passive: true });
  scroller.addEventListener('touchend', () => {
    if (!sheet.classList.contains('dragging') || pointer) return;
    const dy = parseFloat(sheet.style.getPropertyValue('--drag')) || 0;
    sheet.classList.remove('dragging');
    sheet.style.setProperty('--drag', '0px');
    touchOn = false;
    if (dy > 96) hideSheet(false);
  });
}

function slugifyTR(value) {
  return fold(value);
}

function splitCSV(line) {
  const out = [];
  let cur = '';
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === '"') {
      if (quoted && line[i + 1] === '"') { cur += '"'; i += 1; }
      else quoted = !quoted;
    } else if (ch === ',' && !quoted) {
      out.push(cur);
      cur = '';
    } else cur += ch;
  }
  out.push(cur);
  return out.map((cell) => cell.trim());
}

function parseCSV(text) {
  const rows = text.replace(/\r/g, '').split('\n').filter((row) => row.trim().length);
  const head = splitCSV(rows.shift() || '');
  return rows.map((row) => {
    const cols = splitCSV(row);
    const record = {};
    head.forEach((key, index) => { record[key] = cols[index] || ''; });
    return record;
  });
}

async function syncPrices() {
  try {
    const res = await fetch(SHEET_CSV, { cache: 'no-store' });
    if (!res.ok) throw new Error(String(res.status));
    const items = parseCSV(await res.text());
    const prices = new Map();
    const sold = new Map();
    const badges = new Map();
    items.forEach((row) => {
      const key = (row.Anahtar || '').trim() || slugifyTR(row['Ürün'] || row.Urun || '');
      if (!key) return;
      const price = (row.Fiyat || '').trim();
      if (price) prices.set(key, price);
      const flag = (row['Tükendi'] || row.Tukendi || row.SoldOut || '').trim().toLocaleLowerCase('tr-TR');
      if (YES.has(flag)) sold.set(key, true);
      else if (NO.has(flag)) sold.set(key, false);
      const badgeRaw = (row.Rozet || row.Badge || '').trim().toLocaleLowerCase('tr-TR');
      const badge = ROZET[badgeRaw];
      if (badge === 'sold') sold.set(key, true);
      else if (badge) badges.set(key, badge);
    });
    state.prices = prices;
    state.soldOverrides = sold;
    state.badgeOverrides = badges;
  } catch (err) {
    console.error('Fiyatlar güncellenemedi:', err);
  } finally {
    state.pricesReady = true;
    fillPrices();
    if (state.badgeOverrides.size || state.soldOverrides.size) renderMenu();
    if (state.sheetId) renderSheetBody();
  }
}

function trapTab(event) {
  const sheet = document.getElementById('sheet');
  if (event.key !== 'Tab' || sheet.hidden) return;
  const nodes = [...sheet.querySelectorAll('button, a, input, [tabindex]:not([tabindex="-1"])')]
    .filter((node) => !node.hidden && node.getAttribute('aria-hidden') !== 'true');
  if (!nodes.length) return;
  const first = nodes[0];
  const last = nodes[nodes.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function bindEvents() {
  let queryTimer = 0;
  const input = document.getElementById('q');
  input.addEventListener('input', () => {
    document.getElementById('q-clear').hidden = !input.value;
    window.clearTimeout(queryTimer);
    queryTimer = window.setTimeout(() => {
      state.query = input.value.trim();
      renderFilters();
      renderMenu();
      if (state.query && document.getElementById('menu').getBoundingClientRect().top < stickyH()) scrollToId('menu');
    }, 180);
  });
  document.getElementById('q-clear').addEventListener('click', () => {
    clearQuery();
    input.focus();
    renderFilters();
    renderMenu();
  });
  document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    input.blur();
  });

  document.body.addEventListener('click', (event) => {
    if (event.target.closest('#sheet-close') || event.target.closest('#backdrop')) {
      hideSheet(false);
      return;
    }
    if (event.target.closest('#sheet-back') && state.returnTo) {
      const previous = state.returnTo;
      openSheet(previous.id, previous.portion, { returning: true });
      return;
    }
    const portionBtn = event.target.closest('[data-portion-pick]');
    if (portionBtn) {
      state.portion = Number(portionBtn.dataset.portionPick);
      renderSheetBody();
      return;
    }
    if (event.target.closest('#reset-filters')) {
      state.filter = 'all';
      clearQuery();
      renderFilters();
      renderMenu();
      scrollToId('menu');
      return;
    }
    const langBtn = event.target.closest('[data-lang]');
    if (langBtn) {
      setLang(langBtn.dataset.lang);
      return;
    }
    const filterBtn = event.target.closest('[data-filter]');
    if (filterBtn) {
      setFilter(filterBtn.dataset.filter);
      return;
    }
    const catBtn = event.target.closest('[data-cat]');
    if (catBtn) {
      goToCat(catBtn.dataset.cat);
      return;
    }
    const opener = event.target.closest('[data-open]');
    if (!opener) return;
    const item = findItem(opener.dataset.open);
    if (!item) return;
    const fromPair = opener.dataset.fromPair === '1' && state.sheetId;
    if (!opener.closest('#sheet')) state.opener = opener;
    openSheet(item.id, defaultPortion(item), fromPair ? { returnTo: { id: state.sheetId, portion: state.portion } } : {});
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.getElementById('sheet').classList.contains('open')) hideSheet(false);
    trapTab(event);
  });
  window.addEventListener('popstate', () => hideSheet(true));

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      updateActive();
    });
  }, { passive: true });
  window.addEventListener('resize', () => {
    measureSticky();
    bindSpy();
  });
}

function init() {
  measureSticky();
  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(() => {
      measureSticky();
      bindSpy();
    });
    observer.observe(document.querySelector('.sticky-stack'));
  }
  bindEvents();
  bindDrag();
  const saved = (() => { try { return localStorage.getItem('lang'); } catch (err) { return 'tr'; } })();
  setLang(saved || 'tr');
  syncPrices();
  updateOpen();
  window.setInterval(updateOpen, 60000);
  document.getElementById('year').textContent = String(new Date().getFullYear());
  const hash = decodeURIComponent((location.hash || '').replace('#', ''));
  if (hash && hash !== 'top') {
    requestAnimationFrame(() => scrollToId(hash));
  }
}

init();
