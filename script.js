document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const overlay = document.querySelector(".menu-overlay");
  const closeBtn = document.querySelector(".menu-close");
  const navLinks = overlay.querySelectorAll("a");

  // 열기 버튼
  toggleBtn.addEventListener("click", () => {
    overlay.classList.add("active");
  });

  // 닫기 버튼
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
  });

  // 메뉴 클릭하면 닫기
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
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
