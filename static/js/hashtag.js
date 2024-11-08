/* last update: 2024-11-08 */

const hashEl = document.querySelectorAll('h3, h4');
hashEl.forEach(h => {
    const hashtag = `<span title="标题链接" class="hashtag">&#65283;</span>`;
    h.innerHTML = `<a href="#${h.id}">${h.innerHTML}${hashtag}</a>`;
});