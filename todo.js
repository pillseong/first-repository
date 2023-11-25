const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
function Delete(event) {
  const li = event.target.parentElement;
  li.remove();
}
let toDos = [];
function savetodo() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}
function paint(newtodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newtodo;
  const button = document.createElement("button");
  button.innerText = "삭제";
  button.addEventListener("click", Delete);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}
function sayHello(item) {
  console.log("hello", item);
}

function nevent(event) {
  event.preventDefault();
  const newtodo = todoInput.value;
  todoInput.value = "";
  toDos.push(newtodo);
  paint(newtodo);
  savetodo();
}
todoForm.addEventListener("submit", nevent);
const savedToDos = localStorage.getItem("toDos");

if (savedToDos) {
  const parsedTodos = JSON.parse(savedToDos);
  toDos = parsedTodos;
  parsedTodos.forEach(paint);
}
