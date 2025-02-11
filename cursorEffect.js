document.addEventListener('mousemove', (e) => {
  let cursor = document.querySelector('.glowing-cursor');
  if (!cursor) {
    cursor = document.createElement('div');
    cursor.className = 'glowing-cursor';
    document.body.appendChild(cursor);
  }
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
