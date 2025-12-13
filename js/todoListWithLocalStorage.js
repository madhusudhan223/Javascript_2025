
    const inputBox = document.getElementById("input-box");
    const todoList = document.getElementById("todo-list");

    window.onload = renderList;

    function addTask() {
     const task = inputBox.value.trim();
    if (task === "") return alert("Please enter a task.");

    const tasks = getTasks();

    console.log(tasks)


    tasks.push(task);

    console.log(tasks);
    saveTasks(tasks);

    inputBox.value = "";
    renderList();
    }


    // console.log( null || []);

    // // []

    // console.log( true && 'hello')

// localStorage.getItem("tasks")  // null 

// "split"
// splice --> (0, 1)



    function deleteTask(index) {
        const tasks = getTasks();
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderList();
    }

    function removeAll() {
        localStorage.removeItem("tasks");
        renderList();
    }


    function getTasks() {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    }

    function saveTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

function renderList() {
        const tasks = getTasks();
    todoList.innerHTML = "";

        tasks.forEach((task, index) => {
            const li = document.createElement("li");
    li.innerHTML = `
    ${task}
    <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
    `;
    todoList.appendChild(li);
        });
}
