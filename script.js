const button = document.getElementById("welcomeBtn");

button.addEventListener("click", () => {
    alert("Welcome To My Portfolio Website 🚀");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior: "smooth"
        });
    });
});
