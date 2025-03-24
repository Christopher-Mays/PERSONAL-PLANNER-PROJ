const txtNotesArea = document.querySelector("#txtNotesArea");

txtNotesArea.addEventListener("input", () => {
    console.log("Note updated:", txtNotesArea.value);
});
