/* last update: 2023-12-20 */

let toc = {};

const tocEl = document.querySelectorAll('h3,h4');
tocEl.forEach(h => {
    let inner = h.innerHTML;

    // if has <a> tag, extract it
    var aElement = h.querySelector("a");
    inner = aElement ? aElement.textContent : inner;

    // remove anything following <br> <small> etc
    inner = inner.replace(/<br>.*$/g, "")
        .replace(/<small>.*$/g, "")
        .replace("↗", "")
        .trim();

    const id = h.id;
    toc[id] = [inner, h.tagName];
    // add hashtag
    // const hashtag = `<span title="标题链接" class="hashtag">&#65283;</span>`;
    // h.innerHTML = `<a href="#${h.id}">${h.innerHTML}${hashtag}</a>`;
});

const ul = document.createElement("ul");
ul.className = "list-inline";
for (const [id, val] of Object.entries(toc)) {
    const li = document.createElement("li");
    li.className = "list-inline-item";
    if (val[1] === "H3") {
        li.innerHTML = `<a href="#${id}"><strong>${val[0]}</strong></a>`;
    } else {
        li.innerHTML = `<a href="#${id}">${val[0]}</a>`;
    }
    ul.appendChild(li);
}

const hr = document.querySelector('hr');
hr.insertAdjacentElement("afterend", ul);
ul.insertAdjacentElement("afterend", document.createElement("hr"));