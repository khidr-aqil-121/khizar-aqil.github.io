export function scrollToSection(href) {
  if (!href.startsWith('#')) return;
  const id = href.slice(1);
  const section = document.getElementById(id);
  if (section) {
    const content = section.querySelector('.section-inner') || section;
    const elementTop = content.getBoundingClientRect().top + window.scrollY;
    const elementCenter = elementTop + content.offsetHeight / 2;
    const viewportCenter = window.innerHeight / 2;
    const sectionTopPadding = 96;
    const bottomPadding = (id === 'projects' || id === 'about') ? sectionTopPadding : 64;
    let scrollTarget = elementCenter - viewportCenter;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const contentFitsInViewport = content.offsetHeight + bottomPadding <= window.innerHeight;
    if (!contentFitsInViewport) {
      const maxToShowBottom = elementTop + content.offsetHeight - window.innerHeight + bottomPadding;
      scrollTarget = Math.min(scrollTarget, maxToShowBottom);
    }
    const safeScrollTarget = Math.max(0, Math.min(scrollTarget, maxScroll));
    window.scrollTo({ top: safeScrollTarget, behavior: 'smooth' });
    window.history.pushState(null, '', href);
  }
}
