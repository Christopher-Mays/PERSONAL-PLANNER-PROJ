document.addEventListener("DOMContentLoaded", (e) => {
    // Event listener for Calendar button
    document.querySelector("#btnShowCalendar").addEventListener("click", (e) => {
        // Hide all sections first
        document.querySelector("#divTasks").style.display = "none";
        document.querySelector("#divNotes").style.display = "none";
        // Show the calendar section
        document.querySelector("#divCalendar").style.display = "grid";
    });

    // Event listener for Tasks button
    document.querySelector("#btnShowTasks").addEventListener("click", (e) => {
        // Hide all sections first
        document.querySelector("#divCalendar").style.display = "none";
        document.querySelector("#divNotes").style.display = "none";
        // Show the task section
        document.querySelector("#divTasks").style.display = "block";
    });

    // Event listener for Notes button
    document.querySelector("#btnShowNotes").addEventListener("click", (e) => {
        // Hide all sections first
        document.querySelector("#divCalendar").style.display = "none";
        document.querySelector("#divTasks").style.display = "none";
        // Show the notes section
        document.querySelector("#divNotes").style.display = "block";
    });

    // jQuery handler for btnSwapLogin (Vanilla JS conversion example)
    document.querySelector("#btnSwapLogin").addEventListener("click", (e) => {
        document.querySelector('#frmLogin').style.display = "none";
        document.querySelector('#frmRegister').style.display = "block";
    });
});
