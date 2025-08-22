const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');
const menuClose = document.querySelector('.menu-close');
const overlay = document.querySelector('.overlay');
const sideMenuLinks = sideMenu.querySelectorAll('nav a');

// 메뉴 열기
menuToggle.addEventListener('click', () => {
  sideMenu.classList.add('active');
  overlay.classList.add('active');
});

// 메뉴 닫기
function closeMenu() {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
}
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// 사이드 메뉴 링크 클릭: 부드럽게 스크롤 + 메뉴 닫기
sideMenuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if(targetEl) {
      const headerOffset = document.querySelector('.site-header').offsetHeight;
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setTimeout(closeMenu, 300);
  });
});
