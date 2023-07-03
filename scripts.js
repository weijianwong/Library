let myLibrary = [];

const Book = {
  init: function (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.index = 0;
    return this;
  },
};
function addBookToLibrary() {
  let form = document.getElementById("bookForm");
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let book = Object.create(Book).init(title, author, pages);
  myLibrary.push(book);
  book.index = myLibrary.indexOf(book, 0);
  let bookList = document.getElementById("books");
  let bookItem = document.createElement("div");
  let readButton = createReadButton();
  let removeButton = createRemoveButton();
  bookItem.classList.add("book");
  bookItem.innerHTML =
    "<h2>" +
    title +
    "</h2><p>Author: " +
    author +
    "<br>Pages: " +
    pages +
    "</p>";
  bookItem.appendChild(readButton);
  bookItem.appendChild(removeButton);
  bookList.appendChild(bookItem);
  form.reset();
}
function showForm() {
  let formContainer = document.getElementById("form-container");
  if (formContainer.style.display === "none") {
    formContainer.style.display = "flex";
    formContainer.style.flexDirection = "column";
    formContainer.style.justifyContent = "center";
    formContainer.style.alignItems = "center";
    formContainer.style.padding = "20px";
  } else formContainer.style.display = "none";
}

function showBooks(myLibrary) {
  for (let book in myLibrary) {
    let bookList = document.getElementById("books");
    let bookItem = document.createElement("div");
    let readButton = createReadButton();
    let removeButton = createRemoveButton(book);
    bookItem.classList.add("book");
    bookItem.innerHTML =
      "<h2>" +
      book.title +
      "</h2><p>Author: " +
      book.author +
      "<br>Pages: " +
      book.pages +
      "</p>";
    bookItem.appendChild(readButton);
    bookItem.appendChild(removeButton);
    bookList.appendChild(bookItem);
  }
}

function createReadButton() {
  const readButton = document.createElement("button");
  readButton.classList.add("read-status");
  readButton.textContent = "Mark as Read";
  readButton.addEventListener("click", function () {
    readButton.classList.toggle("read");
  });
  return readButton;
}

function createRemoveButton(book) {
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-button");
  removeButton.addEventListener("click", function () {
    myLibrary.pop(book);
  });
  return removeButton;
}
