/* last update: 2023-12-13 */

const copy = document.createElement("span");
copy.classList.add("text-muted");
copy.style.fontSize = "0.75rem";
const year = new Date().getFullYear();
copy.innerHTML = `&copy; 2015-${year}`;

const p = document.getElementById("footer");
p.appendChild(copy);

// float to the top of page
const floatTop = () => {
    document.documentElement.scrollTop = 0;
}