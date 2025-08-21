document.addEventListener('DOMContentLoaded', () => {
  // ---------------- 햄버거 메뉴 ----------------
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');
  const menuClose = document.querySelector('.menu-close');
  const overlay = document.querySelector('.overlay');

  if (menuToggle && sideMenu && menuClose && overlay) {
    const sideMenuLinks = sideMenu.querySelectorAll('nav a');

    // 메뉴 열기
    menuToggle.addEventListener('click', () => {
      sideMenu.classList.add('active');
      overlay.classList.add('active');
    });

    // 메뉴 닫기
    const closeMenu = () => {
      sideMenu.classList.remove('active');
      overlay.classList.remove('active');
    };

    menuClose.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // 사이드 메뉴 링크 클릭: 부드럽게 스크롤 + 메뉴 닫기
    if (sideMenuLinks.length > 0) {
      sideMenuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          if (!targetId || targetId === '#') return;

          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            const headerOffset = document.querySelector('.site-header').offsetHeight;
            const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }

          // 메뉴 닫기
          closeMenu();
        });
      });
    }
  }

  // ---------------- (선택) 회원/참여 폼 임시 저장 ----------------
  const joinForm = document.getElementById('joinForm');
  if (joinForm) {
    joinForm.addEventListener('submit', function(e){
      e.preventDefault();
      const fd = new FormData(e.target);
      const data = Object.fromEntries(fd.entries());
      const key = 'ulsanyouth_join_submissions';
      const list = JSON.parse(localStorage.getItem(key) || '[]');
      list.push({ ...data, ts: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(list));

      const status = document.getElementById('formStatus');
      if (status) {
        status.textContent = '신청이 저장되었습니다 (임시 저장: 브라우저 로컬)';
        e.target.reset();
        setTimeout(() => { status.textContent = ''; }, 4000);
      }
    });
  }
});
