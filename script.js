const thumbSrc = (path) => 'Assets/' + path.replace('/', '/nahlady/');
const fullSrc = (path) => 'Assets/' + path;

// Vykreslenie štvorcov z PROJECTS (projects.js) – v štvorci je hlavný (prvý) obrázok projektu
function renderGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    PROJECTS.forEach((project, index) => {
        const square = document.createElement('div');
        square.className = 'square';
        square.dataset.category = project.category;
        square.onclick = () => openModal(index);

        // Hlavná grafika navrchu, pri viacerých grafikách 2 ďalšie vykúkajú spoza nej
        const layers = project.images.slice(0, 3).map((image, i) => [image, i ? 'stack-' + i : '']).reverse();
        layers.forEach(([[path], cls]) => {
            const img = document.createElement('img');
            img.src = thumbSrc(path);
            img.alt = cls ? '' : project.title;
            img.loading = 'lazy';
            if (cls) img.className = cls;
            square.appendChild(img);
        });

        gallery.appendChild(square);
    });

    sortByYear();
}

// Najnovší rok projektu, napr. "2024, 2023, 2022" → 2024
const latestYear = (year) => Math.max(0, ...(String(year).match(/\d{4}/g) || []).map(Number));

// V kategórii "Všetko" sa projekty radia od najnovšieho roku (pri rovnakom roku podľa poradia v projects.js),
// v ostatných kategóriách ostáva poradie z projects.js
function sortByYear(on = true) {
    const ranked = PROJECTS.map((p, i) => [i, latestYear(p.year)]).sort((a, b) => b[1] - a[1] || a[0] - b[0]);
    const squares = document.querySelectorAll('.square');
    ranked.forEach(([i], rank) => squares[i].style.order = on ? rank : '');
}

// Funkcie pre modálne okno
let currentProject = null;
let currentImage = 0;

function openModal(index) {
    currentProject = PROJECTS[index];
    const p = currentProject;

    document.getElementById('modal-client').innerText = p.client;
    document.getElementById('modal-title').innerText = p.title;
    document.getElementById('modal-year').innerText = p.year;
    document.getElementById('modal-programs').innerText = "Nástroje: " + p.tools.join(', ');
    document.getElementById('modal-desc').innerText = p.desc;

    // Náhľady a šípky len ak má projekt viac obrázkov
    const many = p.images.length > 1;
    const thumbs = document.getElementById('modal-thumbs');
    thumbs.innerHTML = '';
    thumbs.style.display = many ? '' : 'none';
    document.querySelectorAll('.modal-arrow, .modal-counter').forEach(el => el.style.display = many ? '' : 'none');

    p.images.forEach(([path], i) => {
        const t = document.createElement('img');
        t.src = thumbSrc(path);
        t.alt = '';
        t.loading = 'lazy';
        t.onclick = () => showImage(i);
        thumbs.appendChild(t);
    });

    showImage(0);
    document.getElementById('modal').style.display = "flex";
    document.body.style.overflow = "hidden";
}

function showImage(i) {
    const images = currentProject.images;
    currentImage = i;

    const img = document.getElementById('modal-img');
    img.classList.add('loading');
    img.onload = () => img.classList.remove('loading');
    img.src = fullSrc(images[i][0]);
    img.alt = currentProject.title;

    document.getElementById('modal-counter').innerText = `${i + 1} / ${images.length}`;
    document.querySelectorAll('.modal-thumbs img').forEach((t, j) => t.classList.toggle('active', j === i));
    const active = document.querySelector('.modal-thumbs img.active');
    if (active) active.scrollIntoView({ block: 'nearest', inline: 'nearest' });
}

function stepImage(step) {
    const count = currentProject.images.length;
    showImage((currentImage + step + count) % count);
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
    document.body.style.overflow = "auto";
    currentProject = null;
}

// Klávesnica: Esc zatvára, šípky listujú
document.addEventListener('keydown', (e) => {
    if (!currentProject) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowRight') stepImage(1);
    else if (e.key === 'ArrowLeft') stepImage(-1);
});

// Prepínanie tém
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        btn.innerText = "☀️ Svetlý režim";
    } else {
        btn.innerText = "🌙 Tmavý režim";
    }
}

// Filtrovanie kategórií
function filterGallery(event, category) {
    // 1. Zmení vzhľad tlačidiel (aby svietilo to, na ktoré si klikla)
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // 2. Prejde všetky štvorce a skryje/zobrazí ich
    document.querySelectorAll('.square').forEach(square => {
        square.classList.toggle('hide', category !== 'all' && square.dataset.category !== category);
    });

    // 3. Vo "Všetko" zoradí podľa roku
    sortByYear(category === 'all');
}

renderGallery();
