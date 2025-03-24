const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
        let taskItem = document.createElement("li");
        taskItem.textContent = taskInput.value;
        
        // Click to remove task
        taskItem.addEventListener("click", () => taskItem.remove());
        
        taskList.appendChild(taskItem);
        taskInput.value = ""; // Clear input field
    }
});
