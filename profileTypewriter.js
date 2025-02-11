document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.section__text__p1, .title, .section__text__p2');
  targets.forEach(target => {
    const fullText = target.textContent;
    target.textContent = '';
    let index = 0;
    const interval = setInterval(() => {
      target.textContent += fullText.charAt(index);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50);
  });
});
