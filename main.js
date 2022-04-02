const getBook = document.getElementById("getBook");
const tableEl = document.querySelector("table");
const newBook = document.getElementById("newBook");
const cancelBook = document.getElementById("cancelBook");
const welcomePage = document.getElementById("welcomePage");
const textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

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

function clearForm() {
  document.getElementById("bookForm").style.display = "none";
  document.getElementById("welcomePage").style.display = "block";
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

  tbodyEl.innerHTML += `
      <tr class="table-light">
        <td> ${theBook.title} </td>
        <td> ${theBook.author} </td>
        <td> ${theBook.pages} </td>
        <td id='readOrNot'> ${theBook.read} </td>
        <td><button class="deleteBtn btn-close"></button></td>
      </tr>
    `;

  clearBook();
  clearForm();
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
  document.getElementById("welcomePage").style.display = "none";
}

getBook.addEventListener("click", addBook);
tableEl.addEventListener("click", deleteBook);
newBook.addEventListener("click", displayBook);
cancelBook.addEventListener("click", clearForm);

// Welcome title animation

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
