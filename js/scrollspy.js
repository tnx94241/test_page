document.addEventListener('DOMContentLoaded', () => {
  const allLinks = Array.from(document.querySelectorAll('nav a'));
  const currentPath = window.location.pathname;

  // 同じページ内の #アンカー付きリンクだけを対象にする
  const links = allLinks.filter(link => {
    const href = link.getAttribute('href') || '';
    const [path, hash] = href.split('#');

    // hrefが空 or ハッシュなしは無視
    if (!hash) return false;

    // 現在のページとリンク先パスが一致しているか？
    return path === '' || path === '.' || path === currentPath;
  });

  const sections = links
    .map(link => {
      const hash = link.getAttribute('href').split('#')[1];
      return document.getElementById(hash);
    })
    .filter(Boolean);

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    let currentIndex = sections.findIndex((section, i) => {
      const nextTop = sections[i + 1]?.offsetTop ?? Infinity;
      return scrollPos >= section.offsetTop && scrollPos < nextTop;
    });

    links.forEach((link, i) => {
      link.classList.toggle('active', i === currentIndex);
    });
  });
});

