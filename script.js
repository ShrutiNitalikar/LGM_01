let taskId = 1;

function updateTaskCounters() {
    const totalTasks = document.getElementById("totalTasks");
    const completedTasks = document.getElementById("completedTasks");
    
    const totalTaskItems = document.querySelectorAll("#taskList li").length;
    const completedTaskItems = document.querySelectorAll("#taskList li.completed").length;

    totalTasks.textContent = totalTaskItems;
    completedTasks.textContent = completedTaskItems;
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span class="task-text">${taskInput.value}</span>
            <input type="checkbox" class="checkbox" onchange="toggleTaskCompletion(${taskId})">
            <button class="delete-btn" onclick="deleteTask(${taskId})">Delete</button>
        `;
        taskItem.id = `task${taskId}`;
        taskId++;

        taskList.appendChild(taskItem);
        taskInput.value = "";

        updateTaskCounters(); // Update counters after adding a task
    }
}

function deleteTask(id) {
    const taskItem = document.getElementById(`task${id}`);
    taskItem.remove();

    updateTaskCounters(); // Update counters after deleting a task
}

function toggleTaskCompletion(id) {
    const taskItem = document.getElementById(`task${id}`);
    const checkbox = taskItem.querySelector(".checkbox");
    const taskText = taskItem.querySelector(".task-text");

    if (checkbox.checked) {
        taskItem.classList.add("completed");
        taskText.style.textDecoration = "line-through";
    } else {
        taskItem.classList.remove("completed");
        taskText.style.textDecoration = "none";
    }

    updateTaskCounters(); // Update counters after toggling completion
}
