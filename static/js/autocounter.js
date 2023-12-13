/* last update: 2023-07-18 */
/* 说明：选择 <main> 中的 <p>，在其后添加段落编号 */

const ps = document.querySelectorAll('main p');

let counter = 0;
ps.forEach(p => {
    counter += 1;
    p.innerHTML += `<q>${counter}</q>`;
});