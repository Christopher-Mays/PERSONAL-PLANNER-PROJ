const notesArea = document.getElementById("notesArea");

notesArea.addEventListener("input", () => {
    console.log("Note updated:", notesArea.value);
});
