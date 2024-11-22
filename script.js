const mainPage = document.querySelector(".main-content");
const deleteBtns = document.querySelectorAll(".delete");
const addBtn = document.querySelector(".add");
const card = document.querySelector(".card-one");
const deleteBtnSection = document.querySelector(".delete-button");
const dialog = document.querySelector("dialog");
const removeBtn = document.getElementById("close");
const cardsSpace = document.querySelector(".cards");

//Generating a new book card

//delete book
function deleteBook() {
  if (card) {
    card.remove();
    localStorage.setItem("card", "true");
  }
}
window.addEventListener("load", () => {
  if (localStorage.getItem("card") == "true") {
    deleteBook();
  }
});

//deleting function applied to all buttons

for (var i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", function (e) {
    let parentCard = e.target.parentElement.parentElement;
    parentCard.remove();
  });
}

// for (var i = 0; i < deleteBtns.length; i++) {
//   deleteBtns[i].addEventListener("click", function (e) {
//     window.addEventListener("load", () => {
//       let parentCard = e.target.parentElement.parentElement;
//       if (localStorage.getItem("card") == "true") {
//         parentCard.remove();
//       }
//     });
//   });
// }

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

const tacticalBarbell = new Book("Tactical Barbell", "K Black", "150", "read");

function addBooktoLibrary(book) {
  myLibrary.push(book);
}

addBooktoLibrary(Hobbit);

function generateCard() {
  const newDiv = document.createElement("div");
  const newDiv2 = document.createElement("div");
  const newSpan = document.createElement("span");

  //Creating a new book card
  newDiv.classList.add("card-one");
  cardsSpace.appendChild(newDiv);

  // //adding new Delete Button Div and Delete Button
  newDiv2.classList.add("delete-button");
  // const newDeleteButton = document.createElement("button");
  // newDeleteButton.innerHTML = "X";
  // newDeleteButton.classList.add(".delete");
  newSpan.innerHTML = "<button class=delete onclick=deleteBook()>X</button>";
  newDiv2.appendChild(newSpan);
  newDiv.appendChild(newDiv2);

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
  p1.innerHTML = "Title:";
  p2.innerHTML = "Author: ";
  newCardInfo.appendChild(p1);
  newCardInfo.appendChild(p2);
}
