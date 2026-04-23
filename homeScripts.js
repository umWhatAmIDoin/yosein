// Searched up online (same comment info as one from HTML / CSS) for the table of context button animation.

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("BtnForContext");
    const sidebar = document.getElementById("sidebar");

    btn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
});
