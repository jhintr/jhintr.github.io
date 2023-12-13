/* last update: 2023-02-28 */


const attrSub = "subtitle";
const empSub = "（原缺）";
const attr = "anno";
const attrOn = "showanno";
const attrOff = "original";

const classOriginal = "anno_original";

const annoEl = document.querySelectorAll('span.anno');
annoEl.forEach((an) => {
    an.setAttribute(attr, attrOn);

    an.addEventListener("click", () => {
        const showAnno = an.getAttribute(attr) === attrOn;

        if (showAnno) {
            an.setAttribute(attr, attrOff);
            an.classList.add(classOriginal);
        } else {
            an.setAttribute(attr, attrOn);
            an.classList.remove(classOriginal);
        }

        const text = an.innerHTML;
        let sub = an.getAttribute(attrSub);
        if (sub === "") sub = empSub;

        an.innerHTML = sub;
        an.setAttribute(attrSub, text);
    });
});