function cardTested(s) {
  return `<article class="card">
    <div class="card-top"><h3>${s.name}</h3><span class="tag tested">TESTED ${s.date}</span></div>
    <div class="cat">${s.cat}</div>
    <p>${s.detail}</p>
    <div class="fact">${s.fact}</div>
  </article>`;
}
function cardResearched(s) {
  return `<article class="card" data-tag="${s.tag}">
    <div class="card-top"><h3>${s.name}</h3><span class="tag ${s.level === 'Warning' ? 'warn' : 'research'}">${s.level.toUpperCase()}</span></div>
    <p>${s.detail}</p>
    <div class="fact">💳 Card: ${s.card}</div>
  </article>`;
}
function cardExcluded(s) {
  return `<article class="card excluded">
    <div class="card-top"><h3>${s.name}</h3><span class="tag excl">EXCLUDED</span></div>
    <p>${s.reason}</p>
  </article>`;
}
document.getElementById('grid-tested').innerHTML = TESTED.map(cardTested).join('');
document.getElementById('grid-researched').innerHTML = RESEARCHED.map(cardResearched).join('');
document.getElementById('grid-excluded').innerHTML = EXCLUDED.map(cardExcluded).join('');
document.getElementById('stat-tested').textContent = TESTED.length;
document.getElementById('stat-researched').textContent = RESEARCHED.length + EXCLUDED.length;

document.querySelectorAll('.chip').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('#grid-researched .card').forEach(c => {
      c.style.display = (f === 'all' || c.dataset.tag === f) ? '' : 'none';
    });
  });
});
