const mainPage = document.querySelector(".main-content");
const deleteBtns = document.querySelectorAll(".delete");
const addBtn = document.querySelector(".add");
const card = document.querySelector(".card-one");
const deleteBtnSection = document.querySelector(".delete-button");
const dialog = document.querySelector("dialog");
const removeBtn = document.getElementById("close");
const cardsSpace = document.querySelector(".cards");

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

//Generating a new book card

function generateCard() {
  const newDiv = document.createElement("div");
  const newImg = document.createElement("img");
  const newButton = document.createElement("button");
  const newDeleteBtnSpace = document.createElement("div");

  cardsSpace.appendChild(newDiv);
  newDiv.classList.add("card-one");

  //add new card content elements
  newDiv.appendChild(newImg);
  newDiv.appendChild(newDeleteBtnSpace);
  newDiv.appendChild(newButton);
  newImg.src = "./Images/book.png";
  newDeleteBtnSpace.classList.add(".delete-button");
  newButton.classList.add(".delete");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p1.innerHTML = "Title:";
  p2.innerHTML = "Author: ";
  newDiv.appendChild(p1);
  newDiv.appendChild(p2);
}
