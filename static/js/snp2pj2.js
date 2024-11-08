/* last update: 2024-11-08 */
/* 说明：此文件加载在「经集」  */
/* 在其标题4 上附加超链接，以转向到「第一义光」的相关偈颂 */

const h4El_pj = document.querySelectorAll('h4');
let url = window.location.pathname;
url = url.replace('khuddaka/suttanipata', 'atthakatha/paramatthajotika');

h4El_pj.forEach(h => {
    const id = h.id;
    const icon = `<small title="查看义注">↗</small>`;
    h.innerHTML = `${h.innerHTML} <a href="${url}#${id}">${icon}</a>`;
});