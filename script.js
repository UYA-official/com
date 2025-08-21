document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const sideMenu = document.querySelector(".side-menu");
  const closeBtn = document.querySelector(".menu-close");
  const overlay = document.querySelector(".overlay");
  const navLinks = sideMenu.querySelectorAll("a");

  // 메뉴 열기
  toggleBtn.addEventListener("click", () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
  });

  // 메뉴 닫기
  const closeMenu = () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  };

  closeBtn.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  // 메뉴 클릭하면 닫기
  navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".container.nav nav");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
document.getElementById('joinForm').addEventListener('submit', function(e){
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  // For demo: store into localStorage
  const key = 'ulsanyouth_join_submissions';
  const list = JSON.parse(localStorage.getItem(key) || '[]');
  list.push({ ...data, ts: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(list));
  const status = document.getElementById('formStatus');
  status.textContent = '신청이 저장되었습니다 (임시 저장: 브라우저 로컬)';
  e.target.reset();
  setTimeout(()=> status.textContent = '', 4000);
});
