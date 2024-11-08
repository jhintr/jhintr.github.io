/* last update: 2024-11-08 */

let toc = {};

const tocEl = document.querySelectorAll('h2,h3');
tocEl.forEach(h => {
    let inner = h.innerHTML;

    // if has <a> tag, extract it
    var aElement = h.querySelector("a");
    inner = aElement ? aElement.innerHTML : inner;

    // remove anything following <br> <small> <sup> etc
    inner = inner.replace(/<br>.*$/g, "")
        .replace(/<small>.*$/g, "")
        .replace(/<sup>.*$/g, "")
        .trim();

    const id = h.id;
    toc[id] = [inner, h.tagName];
});

const ul = document.createElement("ul");
ul.className = "list-inline";
for (const [id, val] of Object.entries(toc)) {
    const li = document.createElement("li");
    li.className = "list-inline-item";
    if (val[1] === "H2") {
        li.innerHTML = `<a href="#${id}"><strong>${val[0]}</strong></a>`;
    } else {
        li.innerHTML = `<a href="#${id}">${val[0]}</a>`;
    }
    ul.appendChild(li);
}

if (Object.keys(toc).length > 0) {
    const hr = document.querySelector('hr');
    hr.insertAdjacentElement("afterend", ul);
    ul.insertAdjacentElement("afterend", document.createElement("hr"));
}