const getBook = document.getElementById("getBook");
const clearB = document.getElementById("clearBook");
const tableEl = document.querySelector("table");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook() {
  let bookTitle = document.getElementById("bookTitle").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let bookPages = document.getElementById("bookPages").value;
  let bookRead = document.querySelector(
    'input[name = "book-read"]:checked'
  ).value;
  const tbodyEl = document.querySelector("tbody");

  const theBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);

  document.getElementById(
    "demo"
  ).innerHTML = `${theBook.title} ${theBook.author} ${theBook.pages} ${theBook.read}`;

  tbodyEl.innerHTML += `
      <tr>
        <td> ${theBook.title} </td>
        <td> ${theBook.author} </td>
        <td> ${theBook.pages} </td>
        <td id='readOrNot'> ${theBook.read} </td>
        <td><button class="deleteBtn">Delete</button></td>
      </tr>
    `;
}

function deleteBook(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }
  const btn = e.target;
  btn.closest("tr").remove();
}

function clearBook() {
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("bookPages").value = "";
}

getBook.addEventListener("click", addBook);
clearB.addEventListener("click", clearBook);
tableEl.addEventListener("click", deleteBook);
