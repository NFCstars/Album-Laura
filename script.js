const $ = id => document.getElementById(id);
const textFields = ['eyebrow','title','intro','letterTitle','letterText','dedicationEyebrow','dedicationTitle','dedicationText','dedicationSignature','galleryEyebrow','galleryTitle','noteTitle','noteText','finalTitle','finalText','footerText'];
textFields.forEach(key => { if ($(key)) $(key).textContent = album[key] || ''; });
const gallery = $('gallery');
const memories = album.memories || [];
memories.forEach((memory, i) => {
  const card = document.createElement('button');
  card.className = `photo-card card-${(i % 7) + 1}`;
  card.type = 'button';
  card.setAttribute('aria-label', `${memory.title}. Ver foto ampliada`);
  const image = document.createElement('img');
  image.src = `images/${memory.image}`;
  image.alt = memory.title || `Recuerdo ${i + 1}`;
  image.loading = i < 4 ? 'eager' : 'lazy';
  const caption = document.createElement('span');
  caption.className = 'photo-caption';
  const title = document.createElement('strong');
  title.textContent = memory.title || `Recuerdo ${i + 1}`;
  const description = document.createElement('small');
  description.textContent = memory.caption || '';
  caption.append(title, description);
  card.append(image, caption);
  card.addEventListener('click', () => openBox(i));
  gallery.appendChild(card);
});
let current = 0;
const box = $('lightbox'), img = $('lightboxImage'), counter = $('counter');
function openBox(i) {
  current = i;
  const memory = memories[current];
  img.src = `images/${memory.image}`;
  img.alt = memory.title || `Recuerdo ${current + 1}`;
  $('lightboxTitle').textContent = memory.title || '';
  counter.textContent = `${current + 1} / ${memories.length}`;
  box.classList.add('open');
  box.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}
function closeBox() {
  box.classList.remove('open');
  box.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}
function move(n) { current = (current + n + memories.length) % memories.length; openBox(current); }
box.addEventListener('click', e => { if (e.target === box) closeBox(); });
document.querySelector('.close').addEventListener('click', closeBox);
document.querySelector('.prev').addEventListener('click', () => move(-1));
document.querySelector('.next').addEventListener('click', () => move(1));
document.addEventListener('keydown', e => {
  if (!box.classList.contains('open')) return;
  if (e.key === 'Escape') closeBox();
  if (e.key === 'ArrowLeft') move(-1);
  if (e.key === 'ArrowRight') move(1);
});
