/* last update: 2024-07-10 */
/* 说明：此文件加载在「清净道论」巴利及汉译 */
/* 在其标题5 上附加超链接，转向到汉译或巴利 */

const h5El = document.querySelectorAll('h5');
let url = window.location.pathname;
if (url.includes('atthakatha/')) {
    url = url.replace('atthakatha/', '');
} else {
    url = url.replace('visuddhimagga/', 'atthakatha/visuddhimagga/')
}
h5El.forEach(h => {
    const icon = `<small>↗</small>`;
    h.innerHTML = `${h.innerHTML} <a href="${url}#${h.id}">${icon}</a>`;
});