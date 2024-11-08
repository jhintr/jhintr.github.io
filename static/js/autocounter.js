/* last update: 2024-11-08 */
/* 说明：选择 <main> 中的 <p>，在其后添加段落编号 */

const ps = document.querySelectorAll('article p');

let counter = 0;
ps.forEach(p => {
    counter += 1;
    p.innerHTML += `<q>${counter}</q>`;
});