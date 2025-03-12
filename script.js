document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector("button");
    const body = document.body;

    // Checar se há tema salvo no localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.setAttribute("data-theme", "dark");
    }

    themeToggle.addEventListener("click", function () {
        const currentTheme = body.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";

        body.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const text = "Olá, eu sou Gabriel Serafim";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.innerHTML = text.substring(0, index + 1) + '<span class="typing"></span>';
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect(); 
});

