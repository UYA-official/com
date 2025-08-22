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

  menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
  });

  menuClose.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  sideMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if(targetEl){
        closeMenu(); // 메뉴 닫기
        setTimeout(() => {
          const headerOffset = document.querySelector('.site-header').offsetHeight;
          const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 300); // 메뉴 닫힘 애니메이션 후 스크롤
      }
    });
  });
});
