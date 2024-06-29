/* last update: 2024-06-29 */
/* 说明：此文件加载在「义注·清净道论」 */
/* 在其标题5 上附加超链接，转向到叶均的译本 */

const h5El = document.querySelectorAll('h5');
let url = window.location.pathname;
url = url.replace('atthakatha/', '');
h5El.forEach(h => {
    const icon = `<small title="查看汉译">↗</small>`;
    h.innerHTML = `${h.innerHTML} <a href="${url}#${h.id}">${icon}</a>`;
});