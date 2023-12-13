/* last update: 2023-10-15 */

const hashEl = document.querySelectorAll('h4, h5');
hashEl.forEach(h => {
    const hashtag = `<span title="标题链接" class="hashtag">&#65283;</span>`;
    h.innerHTML = `<a href="#${h.id}">${h.innerHTML}${hashtag}</a>`;
});