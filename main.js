const getBook = document.getElementById("getBook");
const tableEl = document.querySelector("table");
const newBook = document.getElementById("newBook");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function clearBook() {
  document.getElementById("bookTitle").value = "";
  document.getElementById("bookAuthor").value = "";
  document.getElementById("bookPages").value = "";
  document.getElementById("yesRead").checked = "";
  document.getElementById("noRead").checked = "";
}

function addBook() {
  let bookTitle = document.getElementById("bookTitle").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let bookPages = document.getElementById("bookPages").value;
  let bookRead = document.querySelector(
    'input[name = "bookRead"]:checked'
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

  clearBook();
  document.getElementById("bookForm").style.display = "none";
}

function deleteBook(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }
  const btn = e.target;
  btn.closest("tr").remove();
}

function displayBook() {
  document.getElementById("bookForm").style.display = "block";
}

getBook.addEventListener("click", addBook);
tableEl.addEventListener("click", deleteBook);
newBook.addEventListener("click", displayBook);
