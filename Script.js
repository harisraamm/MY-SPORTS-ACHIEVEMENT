// ================================
// Welcome Message
// ================================

function welcome() {
    alert("🏆 Welcome to My Sports Achievement Portfolio!");
}

// ================================
// Contact Form Validation
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        // Email Validation
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (phone === "") {
            alert("Please enter your phone number.");
            return;
        }

        // Phone Validation (10 digits)
        let phonePattern = /^[0-9]{10}$/;

        if (!phone.match(phonePattern)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        alert("✅ Thank you! Your message has been submitted successfully.");

        contactForm.reset();

    });

}

// ================================
// Achievement Card Animation
// ================================

const cards = document.querySelectorAll(".achievement-card");

cards.forEach((card) => {

    card.addEventListener("mouseover", function () {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseout", function () {
        card.style.transform = "scale(1)";
    });

});

// ================================
// Gallery Image Click
// ================================

const galleryImages = document.querySelectorAll(".gallery-images img");

galleryImages.forEach((img) => {

    img.addEventListener("click", function () {

        window.open(img.src, "_blank");

    });

});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ================================
// Current Year in Footer
// ================================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        "© " + new Date().getFullYear() +
        " Haris Raam | Sports Portfolio";

}

// ================================
// Loading Message
// ================================

window.onload = function () {

    console.log("Sports Achievement Website Loaded Successfully.");

};
function goToGallery() {

    window.location.href = "achievements.html#gallery";

}

// ================================
// Highlight Navigation
// ================================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});