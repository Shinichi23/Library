const getBook = document.getElementById("getBook");

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

  const theBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);

  document.getElementById("demo").innerHTML =
    theBook.title +
    " " +
    theBook.author +
    " " +
    theBook.pages +
    " " +
    theBook.read;
}

getBook.addEventListener("click", addBook);
