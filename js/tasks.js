const txtTaskInput = document.querySelector("#txtTaskInput");
const btnAddTask = document.querySelector("#btnAddTask");
const ulTaskList = document.querySelector("#taskList");

btnAddTask.addEventListener("click", () => {
    let strTaskValue = txtTaskInput.value.trim();
    if (strTaskValue !== "") {
        let liTaskItem = document.createElement("li");
        liTaskItem.textContent = strTaskValue;
        liTaskItem.setAttribute("role", "button");
        liTaskItem.setAttribute("aria-label", `Task: ${strTaskValue}. Click to remove.`);
        
        // Click to remove task
        liTaskItem.addEventListener("click", () => liTaskItem.remove());
        
        ulTaskList.appendChild(liTaskItem);
        txtTaskInput.value = ""; // Clear input field
    }
});
