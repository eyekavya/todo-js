// Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoBtn.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  console.log("hi");
  // To prevent form from submitting
  event.preventDefault();
}
