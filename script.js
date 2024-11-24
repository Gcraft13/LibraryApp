const mainPage = document.querySelector(".main-content");
const deleteBtns = document.querySelectorAll(".delete");
const addBtn = document.querySelector(".add");
const card = document.querySelector(".card-one");
const allTheCards = document.querySelectorAll(".card-one");
const deleteBtnSection = document.querySelector(".delete-button");
const dialog = document.querySelector("dialog");
const removeBtn = document.getElementById("close");
const cardsSpace = document.querySelector(".cards");

//delete book
function deleteBook() {
  if (allTheCards) {
    for (var i = 0; i < allTheCards.length; i++) {
      allTheCards[i].addEventListener("click", function () {
        allTheCards.remove();
      });
    }

    localStorage.setItem("card", "true");
  }
}
window.addEventListener("load", () => {
  if (localStorage.getItem("allTheCards") == "true") {
    deleteBook();
  }
});

//deletebutton function

for (var i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", function (e) {
    let parentCard = e.target.parentElement.parentElement;
    parentCard.remove();
  });
}

//Add the form
addBtn.addEventListener("click", () => {
  // OpenPopUp.style.display = "block";

  dialog.showModal();
});

//Remove the form
removeBtn.addEventListener("click", () => {
  dialog.close();
});

//prevent modal from appearing on page reload
if (sessionStorage.getItem("modalClosed") !== "true") {
  document.querySelector("dialog").close();
}
document.getElementById("closeModal").addEventListener("click", function () {
  document.querySelector("dialog").close();
  sessionStorage.setItem("modalClosed", "true");
});

//The library functions
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

function addBooktoLibrary(book) {
  myLibrary.push(book);
}

function generateCard() {
  const newDiv = document.createElement("div");
  const newDiv2 = document.createElement("div");

  //setting delete function for buttons

  //Creating a new book card
  newDiv.classList.add("card-one");
  // //adding new Delete Button Div and Delete Button
  newDiv2.classList.add("delete-button");
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  deleteButton.classList.add("delete");

  newDiv2.appendChild(deleteButton);
  newDiv.appendChild(newDiv2);
  //adding delete functionatlity to newly generated deletebuttons
  deleteButton.addEventListener("click", function () {
    newDiv.remove();
  });
  //Adding new Card Info div
  const newCardInfo = document.createElement("div");
  newCardInfo.classList.add("card-info");
  newDiv.appendChild(newCardInfo);
  //adding new Image
  const newImg = document.createElement("img");
  newCardInfo.appendChild(newImg);
  newImg.src = "./Images/book.png";

  // //add new paragraph content elements

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  p1.innerHTML = "Title:";
  p2.innerHTML = "Author: ";
  p3.innerHTML = "Pages: ";
  p4.innerHTML = "Read: ";
  newCardInfo.appendChild(p1);
  newCardInfo.appendChild(p2);
  newCardInfo.appendChild(p3);
  newCardInfo.appendChild(p4);
  cardsSpace.appendChild(newDiv);
  //adding read button
  const readButton = document.createElement("button");
  readButton.innerHTML = "Change Status to ";
  readButton.classList.add("read-button");
  newCardInfo.appendChild(readButton);
}
