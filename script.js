document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');
  const menuClose = document.querySelector('.menu-close');
  const overlay = document.querySelector('.overlay');
  const sideMenuLinks = sideMenu.querySelectorAll('nav a');

  function closeMenu() {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
  }

  // 메뉴 열기
  menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
  });

  // 메뉴 닫기
  menuClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // 사이드 메뉴 링크 클릭: 메뉴 닫고 스크롤 이동
  sideMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // 기본 이동 막기
      const targetId = link.getAttribute('href'); 
      const targetEl = document.querySelector(targetId);

      if(targetEl){
        const headerOffset = document.querySelector('.site-header').offsetHeight;
        const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        closeMenu(); // 메뉴 먼저 닫기
        setTimeout(() => {
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 300); // 메뉴 닫힘 애니메이션 끝난 뒤 스크롤
      }
    });
  });
});
