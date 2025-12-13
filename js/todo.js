

// const addBtn = document.getElementById("add-btn")

// addBtn.addEventListener("click",addTask)

const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-list")

function clearInput(){
    inputBox.value = ""
}
function deleteItem(element){
    const parent =  element.parentElement;
    parent.remove()
}
function removeAll(){
  todoList.innerHTML = "";
}

function addTask(){
    const inputValue = inputBox.value;

    if(inputValue == ""){
       return  alert("Please enter some task")
    }

    const listItem = document.createElement("li");

    listItem.className = "list-item"

      const listItemContent = `${inputValue}<button class="delete-btn" onclick="deleteItem(this)">Delete</button>`

    listItem.innerHTML = listItemContent

    todoList.appendChild(listItem)
    inputBox.value = '';




}