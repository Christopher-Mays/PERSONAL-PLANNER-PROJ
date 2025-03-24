const divCalendar = document.querySelector("#calendar");

function generateCalendar() {
    divCalendar.innerHTML = ""; // Clear previous calendar
    for (let intDay = 1; intDay <= 30; intDay++) {
        let divDayElement = document.createElement("div");
        divDayElement.textContent = intDay;
        divDayElement.setAttribute("role", "button");
        divDayElement.setAttribute("aria-label", `Select day ${intDay}`);
        divDayElement.addEventListener("click", () => alert(`Selected: ${intDay}`));
        divCalendar.appendChild(divDayElement);
    }
}

generateCalendar();
