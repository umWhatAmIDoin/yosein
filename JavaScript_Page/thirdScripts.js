// Same as home/scripts.js comment

document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("BtnForContext");
    const sidebar = document.getElementById("sidebar");

    btn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });
});
