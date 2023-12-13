/* last update: 2023-04-06 */
/* 说明：此文件加载在「义释」及「第一义光」 */
/* 在其标题5 上附加超链接，以转向到经集的相关偈颂 */

const h5El = document.querySelectorAll('h5');
let url = window.location.pathname;
if (url.includes('atthakatha/paramatthajotika')) {
    url = url.replace('atthakatha/paramatthajotika', 'khuddaka/suttanipata');
} else if (url.includes('/1')) { // 返回经集·八颂品
    url = url.replace('niddesa/1', 'suttanipata/4');
} else if (url.includes('/223')) { // 返回经集·犀牛角经
    url = url.replace('niddesa/223', 'suttanipata/103');
} else { // 返回经集·彼岸道品
    // to-do
}
h5El.forEach(h => {
    const id = h.id.split('-')[0];
    const icon = `<span title="查看经集">&RightArrowLeftArrow;</span>`;
    h.innerHTML = `<a href="${url}#${id}">${h.innerHTML} ${icon}</a>`;
});