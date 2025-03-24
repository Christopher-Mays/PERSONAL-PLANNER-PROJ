const calendar = document.getElementById("calendar");

function generateCalendar() {
    calendar.innerHTML = ""; // Clear previous calendar
    for (let day = 1; day <= 30; day++) {
        let dayElement = document.createElement("div");
        dayElement.textContent = day;
        dayElement.addEventListener("click", () => alert(`Selected: ${day}`));
        calendar.appendChild(dayElement);
    }
}

generateCalendar();
