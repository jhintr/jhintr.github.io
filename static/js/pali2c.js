/* last update: 2026-05-06 */

const h4Els = document.querySelectorAll('h4');
let url = window.location.pathname;

const mappings = [
    ['visuddhimagga', 'atthakatha/visuddhimagga'],
    ['digha', 'atthakatha/sumangalavilasini'],
    ['khuddaka/suttanipata', 'atthakatha/paramatthajotika'],
    ['khuddaka/netti', 'atthakatha/netti'],
];

// 优先匹配更长的路径
for (const [a, b] of mappings) {

    if (url.includes(b)) {
        url = url.replace(b, a);
        break;
    }

    if (url.includes(a)) {
        url = url.replace(a, b);
        break;
    }
}

h4Els.forEach(h => {
    const icon = `<small>↗</small>`;
    h.innerHTML += ` <a href="${url}#${h.id}">${icon}</a>`;
});
