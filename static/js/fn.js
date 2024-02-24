/* last update: 2024-02-24 */
/* Add content of `fn:` as a title of `fnref:` */


const idFnref = "fnref:";
const idFn = "fn:";

const fnrefs = document.querySelectorAll(`[id^="${idFnref}"]`);

fnrefs.forEach(fnref => {
    const fnId = fnref.id.replace(idFnref, idFn);
    const fn = document.querySelector(`[id="${fnId}"]`);
    fnref.title = fn.innerText.replace("↩︎", "").trim();
});