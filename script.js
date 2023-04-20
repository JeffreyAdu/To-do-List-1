//Create Variables for use in the rest of code
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var todoList = document.getElementById("todo-list");


function inputLength() {
	return input.value.length;
}

//Create new list element for a new todo list activity.
function createListElement() {
	var li = document.createElement("li");
	const newItemSpan = document.createElement("span");
    
    // Create new button element to delete the to-do item
	const deleteItemButton = document.createElement("button");
	deleteItemButton.textContent = "delete";
	deleteItemButton.classList.add("deleteItem");

	// Add event listener for clicking the delete button
	deleteItemButton.addEventListener("click", (event) => {
		const clickedItem = event.target;
		clickedItem.parentNode.remove();
	})


	newItemSpan.appendChild(document.createTextNode(input.value));
	li.appendChild(newItemSpan);
	li.appendChild(deleteItemButton);
	/*li.appendChild(document.createTextNode(input.value));*/
	ul.appendChild(li);
	input.value = "";
}

//If you click the button with conditions met, create list element and add the activity 
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//If you press enter with conditions met, create list element and add the activity 
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


//Cross out the activity when completed
todoList.addEventListener("click", (event) => {

	const clickedItem = event.target;

	if (clickedItem.tagName === "SPAN") {
		clickedItem.parentNode.classList.toggle("done");
	}
})

//Click the button by the input form to add activity
button.addEventListener("click", addListAfterClick);

//press enter to add the todo list activity
input.addEventListener("keypress", addListAfterKeypress);