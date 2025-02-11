document.addEventListener('click', (e) => {
  const count = 20; // number of particles per firework
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'firework-particle';
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 80 + 20;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    particle.style.setProperty('--dx', dx);
    particle.style.setProperty('--dy', dy);
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 800);
  }
});
