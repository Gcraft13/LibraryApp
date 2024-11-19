const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

const Hobbit = new Book("The Hobbit", "J.R.R. Tolkein", 295, "read");

const tacticalBarbell = new Book("Tactical Barbell", "K Black", "150", "read");

function addBooktoLibrary(book) {
  myLibrary.push(book);
}

addBooktoLibrary(Hobbit);
console.log(myLibrary);
