// Scroll to top button
const scrollTopBtn = document.querySelector("#scrollToTop-btn");

window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("active", window.scrollY > 200);
});

scrollTopBtn.addEventListener("click", () => {
    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Enables smooth scrolling
    });
});
