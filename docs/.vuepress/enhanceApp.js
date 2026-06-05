export default ({ Vue, router }) => {
  if (typeof window === 'undefined') return

  // Apply saved theme before first paint
  const saved = localStorage.getItem('mn-theme')
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
  }

  // Fire on every component mount — the ensure* helpers are idempotent so they
  // only do work the first time their target is in the DOM.
  Vue.mixin({
    mounted () {
      ensureToggle()
      ensureFab()
    }
  })

  // Also re-check after each SPA navigation in case a button got removed.
  router.afterEach(() => {
    Vue.nextTick(() => {
      ensureToggle()
      ensureFab()
    })
  })
}

// ─── Theme logic ────────────────────────────────────────────────────────────

function isLight () {
  return document.documentElement.getAttribute('data-theme') === 'light'
}

function applyTheme (toLight) {
  if (toLight) {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('mn-theme', 'light')
  } else {
    document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('mn-theme', 'dark')
  }
  syncIcon()
}

function toggleTheme () {
  applyTheme(!isLight())
}

// Desktop toggle — lives inside the navbar links (hidden on mobile via CSS).
function ensureToggle () {
  if (document.querySelector('.mn-theme-toggle')) return

  const links = document.querySelector('.navbar .links')
  if (!links) return

  const btn = document.createElement('button')
  btn.className = 'mn-theme-toggle'
  btn.setAttribute('aria-label', 'Toggle color theme')

  btn.addEventListener('click', toggleTheme)
  links.appendChild(btn)
  syncIcon()
}

// Mobile FAB — appended to <body> (NOT the navbar). The navbar has a
// backdrop-filter, which would make it the containing block for any fixed
// descendant; anchoring to <body> lets the FAB pin to the viewport instead.
// Shown only on mobile via CSS.
function ensureFab () {
  if (document.querySelector('.mn-theme-fab')) return
  if (!document.body) return

  const btn = document.createElement('button')
  btn.className = 'mn-theme-fab'
  btn.setAttribute('aria-label', 'Toggle color theme')

  btn.addEventListener('click', toggleTheme)
  document.body.appendChild(btn)
  syncIcon()
}

function syncIcon () {
  document.querySelectorAll('.mn-theme-toggle, .mn-theme-fab').forEach((btn) => {
    btn.innerHTML = isLight() ? moonSvg() : sunSvg()
  })
}

// ─── Icons ──────────────────────────────────────────────────────────────────

function sunSvg () {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
}

function moonSvg () {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
}
