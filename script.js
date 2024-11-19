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

Book.prototype.goodBook = function () {
  console.log("this is a good book!");
};

myLibrary.push(Hobbit);
myLibrary.push(tacticalBarbell);

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}

console.log(myLibrary);
console.log(myLibrary[0].title);
