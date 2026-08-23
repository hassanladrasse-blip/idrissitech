// =====================================================
// IDRISSITECH - SCRIPT.JS
// =====================================================


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


// ================= CLOSE MENU AFTER CLICK =================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Merci pour votre message ! " +
            "Nous vous contacterons bientôt."
        );

        contactForm.reset();

    });

}


// ================= SCROLL ANIMATION =================

const animatedElements = document.querySelectorAll(
    ".service-card, .project-card, .shop-card, .about-text, .about-visual, .contact-info, .contact-form"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(element => {

    element.classList.add("animate");

    observer.observe(element);

});


// ================= CURRENT YEAR =================

const copyright = document.querySelector(".copyright");

if (copyright) {

    const currentYear = new Date().getFullYear();

    copyright.innerHTML =
        `© ${currentYear} IdrissiTech — Tous droits réservés.`;

}


// ================= WHATSAPP =================

const whatsapp = document.querySelector(".whatsapp");

if (whatsapp) {

    whatsapp.addEventListener("click", () => {

        console.log(
            "Ouverture de WhatsApp pour IdrissiTech"
        );

    });

}
