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
    { key: 'navRange', href: 'range.html', match: /range\.html$/ },
    { key: 'navBattery', href: 'battery.html', match: /battery.html$/ },
    { key: 'navTrip', href: 'trip.html', match: /trip.html$/ },
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

  <button class="nav-share" id="nav-share" aria-label="${t.navShare ?? 'Condividi'}">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
    <span class="nav-share-toast" id="nav-share-toast"></span>
  </button>

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

  /* ── 7. Share button ────────────────────────────────────────── */
  const shareBtn = document.getElementById('nav-share');
  const toast = document.getElementById('nav-share-toast');
  let toastTimer = null;

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 2000);
  }

  shareBtn.addEventListener('click', async () => {
    const url = window.location.href;
    const title = document.title || 'VoltTool';

    // Web Share API — mobile / Safari desktop
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return; // il sistema mostra il proprio feedback
      } catch (e) {
        if (e.name === 'AbortError') return; // utente ha annullato
      }
    }

    // Fallback: Clipboard API
    try {
      await navigator.clipboard.writeText(url);
      showToast(t.navShareCopied ?? 'Link copiato!');
    } catch (e) {
      // Fallback estremo (non-HTTPS, browser molto vecchi)
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(t.navShareCopied ?? 'Link copiato!');
    }
  });
})();