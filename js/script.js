document.getElementById("showCalendar").addEventListener("click", () => showSection("calendarSection"));
document.getElementById("showTasks").addEventListener("click", () => showSection("taskSection"));
document.getElementById("showNotes").addEventListener("click", () => showSection("notesSection"));

function showSection(sectionId) {
    document.getElementById("calendarSection").classList.add("hidden");
    document.getElementById("taskSection").classList.add("hidden");
    document.getElementById("notesSection").classList.add("hidden");
    
    document.getElementById(sectionId).classList.remove("hidden");
}
