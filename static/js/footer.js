/* last update: 2024-01-06 */

const year = new Date().getFullYear();

const copy = document.createElement("span");
copy.innerHTML = `&copy; ${year} <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" target="_blank">Cc-By-Sa-4.0↗</a>`;

const mail = document.createElement("span");
mail.innerHTML = `<a class="ms-2" href="mailto:sadhu@ehipassa.org">Contact me↗</a>`;

const p = document.getElementById("footer");
p.appendChild(copy);
p.appendChild(mail);

// float to the top of page
const floatTop = () => {
    document.documentElement.scrollTop = 0;
}