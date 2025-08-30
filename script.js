document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');
  const menuClose = document.querySelector('.menu-close');
  const overlay = document.querySelector('.overlay');
  const sideMenuLinks = sideMenu.querySelectorAll('nav a');
  const header = document.querySelector('.site-header');

  /**
   * 사이드 메뉴를 닫는 함수
   * @param {function} callback - 메뉴가 닫힌 후 실행할 콜백 함수
   */
  function closeMenu(callback) {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    // CSS 트랜지션이 끝난 후 콜백 함수 실행
    if (callback) {
      setTimeout(callback, 300);
    }
  }

  // 메뉴 열기 버튼 클릭 이벤트
  menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
  });

  // 메뉴 닫기 버튼 또는 오버레이 클릭 이벤트
  menuClose.addEventListener('click', () => closeMenu());
  overlay.addEventListener('click', () => closeMenu());

  // 사이드 메뉴 링크 클릭 이벤트 (부드러운 스크롤)
  sideMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // 기본 링크 이동 방지
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      // 타겟 요소와 헤더가 모두 존재하는 경우에만 스크롤 로직 실행
      if (targetEl && header) {
        // 헤더의 높이를 고려한 스크롤 위치 계산
        const headerOffset = header.offsetHeight;
        const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        // 메뉴를 닫은 후 스크롤 이동
        closeMenu(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        });
      }
    });
  });
});
