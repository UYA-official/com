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