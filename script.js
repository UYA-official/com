document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const sideMenu = document.querySelector('.side-menu');
  const menuClose = document.querySelector('.menu-close');
  const overlay = document.querySelector('.overlay');
  const sideMenuLinks = sideMenu.querySelectorAll('nav a');
  const header = document.querySelector('.site-header');

  const posts = {
    '1': {
      title: '울산청년연합회 홈페이지 오픈',
      date: '2025-03-29',
      content: '<p>안녕하세요, 울산청년연합회입니다.</p><p>드디어 울산청년연합회의 새로운 시작을 알리는 공식 홈페이지가 문을 열었습니다. 앞으로 이곳에서 울산 청년들을 위한 다양한 소식과 정보를 신속하게 전달해 드릴 예정입니다.</p><p>많은 관심과 참여 부탁드립니다.</p>'
    },
    '2': {
      title: '크루페스티벌 청년 참여 부스 모집 공고',
      date: '2025-08-18',
      content: '<p>2025년 크루페스티벌에 참여할 청년 부스를 모집합니다.</p><p>자세한 내용은 공고문을 확인해주세요!</p>'
    }
  };

  const newsSection = document.getElementById('news');
  const newsDetailSection = document.getElementById('news-detail');
  const postTitle = document.getElementById('post-title');
  const postDate = document.getElementById('post-date');
  const postContent = document.getElementById('post-content');
  const backBtn = document.querySelector('.back-btn');

  function closeMenu(callback) {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    if (callback) {
      setTimeout(callback, 300);
    }
  }

  menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
  });

  menuClose.addEventListener('click', () => closeMenu());
  overlay.addEventListener('click', () => closeMenu());

  sideMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (targetEl && header) {
        const headerOffset = header.offsetHeight;
        const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        closeMenu(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        });
      }
    });
  });

  newsSection.addEventListener('click', (e) => {
    e.preventDefault();
    const link = e.target.closest('a');
    if (link && link.dataset.postId) {
      const postId = link.dataset.postId;
      const post = posts[postId];

      if (post) {
        postTitle.textContent = post.title;
        postDate.textContent = post.date;
        postContent.innerHTML = post.content;
        
        newsSection.style.opacity = '0';
        newsSection.style.pointerEvents = 'none';

        newsDetailSection.classList.add('active');
        
        window.scrollTo({
          top: newsSection.offsetTop - header.offsetHeight,
          behavior: 'smooth'
        });
      }
    }
  });

  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newsDetailSection.classList.remove('active');
    
    newsSection.style.opacity = '1';
    newsSection.style.pointerEvents = 'auto';
    
    window.scrollTo({
      top: newsSection.offsetTop - header.offsetHeight,
      behavior: 'smooth'
    });
  });
});
