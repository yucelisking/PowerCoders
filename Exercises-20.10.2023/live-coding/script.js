// If you define a function within a class or object it becomes a method.
/* DOM  */
const liTags = main.querySelectorAll("ul");
liTags.forEach((li, index) => {
  li.textContent = `${index + 1}. list item`;
});

const main = documnet.querySelector("main");

const img = document.createElement("img");
img.src = "https://picsum.photos/200/300";
main.appendChild(img);
main.insertAdjacentElement("beforeend", img);

const ul = document.querySelector("ul");
ul.remove();
