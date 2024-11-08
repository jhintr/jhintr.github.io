/* last update: 2024-11-08 */
/* 说明：此文件加载在「第一义光」 */
/* 在其标题4 上附加超链接，以转向到经集的相关偈颂 */

const h4El = document.querySelectorAll('h4');
let url = window.location.pathname;
url = url.replace('atthakatha/paramatthajotika', 'khuddaka/suttanipata');
h4El.forEach(h => {
    const id = h.id.split('-')[0];
    const icon = `<small title="查看经集">↗</small>`;
    h.innerHTML = `${h.innerHTML} <a href="${url}#${id}">${icon}</a>`;
});