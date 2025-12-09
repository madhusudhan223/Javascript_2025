

// const addBtn = document.getElementById("add-btn")

// addBtn.addEventListener("click",addTask)

const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-list")

function clearInput(){
    inputBox.value = ""
}
function deleteItem(){
    console.log("delte")
}

function addTask(){

    const inputValue = inputBox.value;

    if(inputValue == ""){
       return  alert("Please enter some task")
    }

    const listItem = document.createElement("li");

    listItem.className = "list-item"

      const listItemContent = `${inputValue}<button class="delete-btn" onclick="deleteItem()">Delete</button>`

    listItem.innerHTML = listItemContent


    todoList.appendChild(listItem)



}