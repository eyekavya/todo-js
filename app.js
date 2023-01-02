// Selectors
const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", compDlt);
filterOption.addEventListener("click", filterTodo);
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

  // Save Input value to local Storage
  saveTodos(todoInput.value);

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

function compDlt(e) {
  // Can be li, i or i
  console.log(e.target);
  const itemClicked = e.target;
  console.log(itemClicked.classList);
  // Delete TODO
  if (itemClicked.classList[0] === "dlt-btn") {
    // parent element of dlt btn will always be the todo li
    const todo = itemClicked.parentElement;
    //Animation
    // For a fall transition before removing it
    todo.classList.add("fall");
    // todo.remove();
    // List is removed at the end of the transition
    todo.addEventListener("transitionend", () => todo.remove());
  }

  //Completed TODO
  if (itemClicked.classList[0] === "completed-btn") {
    const todo = itemClicked.parentElement;
    todo.classList.add("completed");
  }
}

function filterTodo(i) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach((e) => {
    switch (i.target.value) {
      case "completed":
        if (e.classList.contains("completed")) {
          e.style.display = "flex";
        } else {
          e.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!e.classList.contains("completed")) {
          e.style.display = "flex";
        } else {
          e.style.display = "none";
        }
        break;
      case "all":
        e.style.display = "flex";
        break;
    }
  });
}
function saveTodos(e) {
  // Check if there is already a todo data
  let todoData;
  if (localStorage.getItem("todoData") === null) {
    todoData = [];
  } else {
    todoData = JSON.parse(localStorage.getItem("todoData"));
  }
  todoData.push(e);
  localStorage.setItem("todoData", JSON.stringify(todoData));
}
