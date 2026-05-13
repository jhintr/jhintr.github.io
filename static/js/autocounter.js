/* last update: 2026-05-13 */
/* 说明：选择 <main> 中的 <p>，在其后添加段落编号和ID */

const ps = document.querySelectorAll('article p');

let counter = 1;
ps.forEach(p => {
    p.innerHTML += `<q>${counter}</q>`;
    p.id = counter.toString();
    counter += 1;
});
