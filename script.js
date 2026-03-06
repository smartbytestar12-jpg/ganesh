// Smooth scrolling for navigation links

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Simple welcome message when page loads
window.onload = function() {
    alert("Welcome to Durgesh Rajbhar's Personal Profile Website!");
};


// Change header color when scrolling
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#005fa3";
    } else {
        header.style.background = "#0077cc";
    }
});
