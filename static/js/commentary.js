/* last update: 2024-11-08 */

const attr = "commentary";
const attrOn = "show";
const attrOff = "hide";

const classOn = "commentary text-success me-2";
const classOff = "commentary text-muted me-2";

const toggleElement = (el, toTurnOff) => {
    if (el === null) return;

    const tag = el.tagName;

    if (!["BLOCKQUOTE", "P", "HR"].includes(tag)) return;

    const displayValue = toTurnOff ? "none" : "";

    if (tag === "BLOCKQUOTE") {
        el.style.display = displayValue;
    } else if (tag === "P") {
        const smalls = Array.from(el.children).filter(e => e.tagName === "SMALL");
        smalls.forEach(s => s.style.display = displayValue);
    }

    toggleElement(el.nextElementSibling, toTurnOff);
}

const commEl = document.querySelectorAll('h3, h4');
commEl.forEach((h) => {
    h.setAttribute(attr, attrOn);

    const icon = document.createElement("span");
    icon.className = classOn;
    icon.innerHTML = "&#9211;"
    icon.addEventListener("click", () => {
        const toTurnOff = h.getAttribute(attr) === attrOn;
        toggleElement(h.nextElementSibling, toTurnOff);
        if (toTurnOff) {
            h.setAttribute(attr, attrOff);
            icon.className = classOff;
        } else {
            h.setAttribute(attr, attrOn);
            icon.className = classOn;
        }
    });
    h.appendChild(icon);
});