document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const container = document.querySelector(".container-fluid");
    
    themeToggle.addEventListener("click", function () {
        if (container.classList.contains("light-theme")) {
            container.classList.remove("light-theme");
            container.classList.add("dark-theme");
        } else {
            container.classList.remove("dark-theme");
            container.classList.add("light-theme");
        }
        // Change the button's image based on the current theme
        const button = document.querySelector("button");
        button.style.backgroundImage = container.classList.contains("dark-theme") 
            ? "url('../Assets/sun.svg')" // Dark theme button image
            : "url('../Assets/moon.svg')"; // Light theme button image
    });
});


