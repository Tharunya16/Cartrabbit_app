document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");
    let dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", function (event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        dropdownMenu.classList.toggle("show");
    });
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});
