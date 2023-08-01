const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".notes-btn");
let notes = document.querySelectorAll(".input-box");

const showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes");
};
showNotes();

const updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  let img = document.createElement("img");
  img.src = "./images/trash-bin.png";
  img.className = "delete-icon";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = () => {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
