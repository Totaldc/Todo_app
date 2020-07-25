//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(event) {
	//prevent form submitting
	event.preventDefault();
	//ToDo div
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	//create li
	const newTodo = document.createElement("li");
	newTodo.textContent = todoInput.value;
	newTodo.classList.add("todo-item");
	todoDiv.append(newTodo);
	//Check mark button
	const completedButton = document.createElement("button");
	completedButton.innerHTML = '<i class="fas fa-check"> </i>';
	completedButton.classList.add("complete-btn");
	todoDiv.append(completedButton);
	//Trash button
	const trashButton = document.createElement("button");
	trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
	trashButton.classList.add("trash-btn");
	todoDiv.append(trashButton);
	//APPEND TO LIST
	todoList.append(todoDiv);
	//CLEAR TODO INPUT VALUE
	todoInput.value = "";
}

function deleteCheck(event) {
	// event.preventDefault();
	const item = event.target;
	//DELETE
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		//ANIMATION
		todo.classList.add("fall");
		todo.addEventListener("transitionend", function () {
			todo.remove();
		});
	}

	//CHECK MARK
	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
		return todo;
	}
	
}

function filterTodo(e, todo) {
	const todos = todoList.childNodes;
	console.log(todos)
	todos.forEach(function(todo) {
		switch (e.target.value) {
			case "all":
				todo.style.display = "flex";
				break;
			case "completed":
				if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                   
				} else {
                    todo.style.display = "none";
                  
				}break;
				case "uncompleted":
					if (!todo.classList.contains("completed")){
						todo.style.display = "flex";
                   
					} else {
						todo.style.display = "none";
					  
					}break;
		}
	});
}

// function saveLocalTodos(todo)
