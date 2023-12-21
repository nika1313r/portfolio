document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector(".main-button");
    let wrapper = document.querySelector(".wrapper");

    button.onclick = function() {
        wrapper.classList.toggle("active");
    }
});