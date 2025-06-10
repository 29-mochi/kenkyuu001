// --- ハンバーガーメニューの開閉制御 ---
const hamburger = document.querySelector('.hamburger');
const fullMenu = document.querySelector('.full-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');   // バツ印に切り替え
  fullMenu.classList.toggle('active');    // メニュー表示・非表示切替

  // アクセシビリティ対応：aria属性の切り替え
  const expanded = hamburger.classList.contains('active');
  fullMenu.setAttribute('aria-hidden', !expanded);
});

// --- トップに戻るボタンの表示切り替え ---
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (!backToTopBtn) return;
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'flex';  // ある程度スクロールしたら表示
  } else {
    backToTopBtn.style.display = 'none';  // それ以外は非表示
  }
});