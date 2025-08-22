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

  // 사이드 메뉴 링크 클릭 시 부드럽게 스크롤 + 메뉴 닫기
  sideMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if(targetEl){
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        const topPos = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;

        // 메뉴 닫고 350ms 후 스크롤 (애니메이션과 동기화)
        closeMenu();
        setTimeout(() => {
          window.scrollTo({ top: topPos, behavior:'smooth' });
        }, 350);
      }
    });
  });
});

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
      }, 300); // 애니메이션 시간과 맞춤
    }
  });
});
