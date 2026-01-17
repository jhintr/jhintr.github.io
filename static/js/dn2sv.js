/* last update: 2026-01-17 */

const h4Els = document.querySelectorAll('h4');
let url = window.location.pathname;

if (url.includes('digha')) {
    url = url.replace('digha', 'atthakatha/sumangalavilasini');
} else {
    url = url.replace('atthakatha/sumangalavilasini', 'digha');
}

h4Els.forEach(h => {
    const id = h.id;
    const icon = `<small>↗</small>`;
    h.innerHTML = `${h.innerHTML} <a href="${url}#${id}">${icon}</a>`;
});