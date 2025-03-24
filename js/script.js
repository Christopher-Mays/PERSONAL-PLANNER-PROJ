document.querySelector("#btnShowCalendar").addEventListener("click", () => showSection("calendarSection"));
document.querySelector("#btnShowTasks").addEventListener("click", () => showSection("taskSection"));
document.querySelector("#btnShowNotes").addEventListener("click", () => showSection("notesSection"));

function showSection(strSectionId) {
    document.querySelector("#calendarSection").classList.add("hidden");
    document.querySelector("#taskSection").classList.add("hidden");
    document.querySelector("#notesSection").classList.add("hidden");
    
    document.querySelector(`#${strSectionId}`).classList.remove("hidden");
}
