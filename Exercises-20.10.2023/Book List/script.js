const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    image:
      "https://images.thalia.media/00/-/7af606161751431f8396dc12160932eb/design-of-everyday-things-taschenbuch-don-norman-englisch.jpeg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    image:
      "https://images.thalia.media/00/-/27a9a66bf7c745bd87f603cf0c6e1609/the-most-human-human-what-artificial-intelligence-teaches-us-about-being-alive-taschenbuch-brian-christian-englisch.jpeg",
  },
];

const bookList = document.querySelector("ul");
books.forEach((li) => {
  let liBook = document.createElement("li");
  liBook.innerHTML = `
      <span>${li.title}</span>
      <span>${li.author}</span>
      <span>${li.alreadyRead}</span>
      <img src=${li.image}/>
      `;
  bookList.appendChild(liBook);

  liBook.style.position = "relative";

  if (li.alreadyRead) {
    liBook.style.textDecoration = "line-through";
    liBook.style.backgroundColor = "#c9f8ff";
  }
});
