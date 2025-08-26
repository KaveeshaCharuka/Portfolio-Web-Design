// Scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
        formMessage.textContent = "Thanks for reaching out, " + name + "! I'll reply soon.";
        formMessage.style.color = "lightgreen";
        this.reset();
    } else {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
    }
});
// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
