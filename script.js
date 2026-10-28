// Variable Declarations

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const typingElement = document.getElementById("typing");

const roles = [
    "Web Developer",
    "Engineering Student",
    "Programmer"
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;


// Mobile Navigation

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close Menu When Link Is Clicked

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// Typing Animation

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (isDeleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }

    typingElement.textContent = currentRole.substring(
        0,
        characterIndex
    );


    let typingSpeed = isDeleting ? 50 : 100;


    if (!isDeleting && characterIndex === currentRole.length) {

        typingSpeed = 1500;
        isDeleting = true;

    }

    else if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        roleIndex++;

        if (roleIndex === roles.length) {

            roleIndex = 0;

        }

        typingSpeed = 500;

    }


    setTimeout(typeEffect, typingSpeed);

}


// Start Animation

typeEffect();


// Current Year

const currentYear = new Date().getFullYear();

console.log("Portfolio loaded successfully in " + currentYear);
