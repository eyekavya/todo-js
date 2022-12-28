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

  // Creating a div for todo inside the function and not in html bcz the todo needs to be added inside ul only when user clicks on the todo add button.

  // Also the div contains a completed button as well as a delete todo button

  // <div class="todo">
  //   <li class="todo-items"></li>
  //   <button>Completed</button>
  //   <button>Delete</button>
  // </div>

  // Create a TODO DIV
  const todoDiv = document.createElement("div");
  // Adding a class to it
  todoDiv.classList.add("todo");

  // Create a Li for Todo Item
  const newTodo = document.createElement("li");
  // Adding a class to it
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  // Append to div
  todoDiv.appendChild(newTodo);

  // Create Completed Button
  const completedBtn = document.createElement("button");
  // Adding a class to it
  completedBtn.classList.add("completed-btn");
  // Adding text to it
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  // Append to div
  todoDiv.appendChild(completedBtn);

  // Create Delete Button
  const dltBtn = document.createElement("button");
  // Adding a class to it
  dltBtn.classList.add("dlt-btn");
  // Adding text to it
  dltBtn.innerHTML = '<i class="fas fa-trash"></i>';
  // // Append to div
  todoDiv.appendChild(dltBtn);

  // // Append div to ul
  todoList.appendChild(todoDiv);

  // Clear TO DO Input value
  todoInput.value = "";
}
