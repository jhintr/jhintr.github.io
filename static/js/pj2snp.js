/* last update: 2024-07-14 */
/* 说明：此文件加载在「第一义光」 */
/* 在其标题5 上附加超链接，以转向到经集的相关偈颂 */

const h5El = document.querySelectorAll('h5');
let url = window.location.pathname;
url = url.replace('atthakatha/paramatthajotika', 'khuddaka/suttanipata');
h5El.forEach(h => {
    const id = h.id.split('-')[0];
    const icon = `<small title="查看经集">↗</small>`;
    h.innerHTML = `${h.innerHTML} <a href="${url}#${id}">${icon}</a>`;
});