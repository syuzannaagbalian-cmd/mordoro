export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const layout = el.closest('.site-layout--mobile, .site-layout--desktop');
  if (layout instanceof HTMLElement && window.getComputedStyle(layout).display === 'none') {
    return;
  }

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
