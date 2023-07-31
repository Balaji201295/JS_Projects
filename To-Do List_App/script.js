const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addTask = () => {
  const inputValue = inputBox.value.trim();
  if (inputValue === "") {
    alert("You must write something!");
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = inputValue;
  listContainer.appendChild(listItem);

  const span = document.createElement("span");
  span.textContent = "\u00d7";
  listItem.appendChild(span);
  inputBox.value = "";
  saveData();
};

const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    addTask();
  }
};

inputBox.addEventListener("keypress", handleKeyPress);

listContainer.addEventListener("click", (e) => {
  const targetTagName = e.target.tagName;
  if (targetTagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (targetTagName === "SPAN") {
    e.target.parentElement.remove();
  }
  saveData();
});

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showList = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showList();
