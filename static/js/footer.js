/* last update: 2023-12-19 */

const year = new Date().getFullYear();

const copy = document.createElement("span");
copy.innerHTML = `&copy;${year} CC-BY-SA-4.0`;

const mail = document.createElement("span");
mail.innerHTML = `<a class="ms-2 text-secondary" href="mailto:sadhu@ehipassa.org">Email↗</a>`;

const p = document.getElementById("footer");
p.classList.add("text-secondary");
p.style.fontSize = "0.75rem";
p.style.fontVariant = "small-caps";
p.appendChild(copy);
p.appendChild(mail);

// float to the top of page
const floatTop = () => {
    document.documentElement.scrollTop = 0;
}