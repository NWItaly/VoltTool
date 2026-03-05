/* ═══════════════════════════════════════════════════════════════
   VoltTool — nav.js
   Dipende da: i18n.js (usa `t`)
   Inietta la <nav> all'inizio del <body> e gestisce hamburger + active link.

   Uso: aggiungere <script src="nav.js"></script> DOPO i18n.js
   ═══════════════════════════════════════════════════════════════ */

(function () {
  /* ── 1. Mappa delle pagine ──────────────────────────────────── */
  const PAGES = [
    { key: 'navAnnualCost', href: 'index.html', match: /index\.html$|^\/$|^$/ },
    { key: 'navBreakeven', href: 'breakeven.html', match: /breakeven\.html$/ },
    { key: 'navCharging', href: 'charging.html', match: /charging\.html$/ },
    { key: 'navPrivacy', href: 'privacy.html', match: /privacy\.html$/ },
  ];

  /* ── 2. Rileva pagina corrente ──────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  /* ── 3. Costruisce i link ───────────────────────────────────── */
  function buildLinks(wrapperClass) {
    return PAGES.map(p => {
      const isActive = p.match.test(currentPath) ? ' active' : '';
      return `<a href="${p.href}" class="${isActive.trim()}">${t[p.key] ?? p.key}</a>`;
    }).join('');
  }

  /* ── 4. Inserisce l'HTML della nav ─────────────────────────── */
  const navHTML = `
<nav class="site-nav" role="navigation" aria-label="Main navigation">
  <a class="nav-logo" href="index.html">Volt<span>Tool</span></a>

  <div class="nav-links" id="nav-links-desktop">
    ${buildLinks('nav-links')}
  </div>

  <button class="nav-hamburger" id="nav-hamburger" aria-label="Menu" aria-expanded="false" aria-controls="nav-drawer">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="nav-drawer" id="nav-drawer" role="menu">
  ${buildLinks('nav-drawer')}
</div>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  /* ── 5. Hamburger toggle ────────────────────────────────────── */
  const btn = document.getElementById('nav-hamburger');
  const drawer = document.getElementById('nav-drawer');

  btn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  /* ── 6. Chiudi drawer cliccando fuori o su un link ─────────── */
  document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !btn.contains(e.target)) {
      drawer.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  /* chiudi anche navigando (per SPA future o stessa pagina) */
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      drawer.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
