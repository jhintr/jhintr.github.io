/* last update: 2024-01-15 */
/* 说明：此文件加载在「经集」  */
/* 在其标题5 上附加超链接，以转向到「第一义光」的相关偈颂 */

const h5El_pj = document.querySelectorAll('h5');
let url = window.location.pathname;
url = url.replace('khuddaka/suttanipata', 'atthakatha/paramatthajotika');

h5El_pj.forEach(h => {
    const id = h.id;
    const icon = `<span title="查看义注">↘</span>`;
    h.innerHTML = `${h.innerHTML} <a href="${url}#${id}">${icon}</a>`;
});