/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   CURRENT YEAR
========================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =========================
   TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

const typingTexts = [
    "BCA Student",
    "Aspiring Software Developer",
    "Web Development Learner",
    "Python Learner",
    "Data Science Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = typingTexts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex =
                (textIndex + 1) % typingTexts.length;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

if (typingElement) {
    typeEffect();
}


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   COPY EMAIL
========================= */

const copyEmail =
    document.getElementById("copyEmail");

if (copyEmail) {

    copyEmail.addEventListener(
        "click",
        function () {

            navigator.clipboard.writeText(
                "sohailkhanpatan93@gmail.com"
            );

            copyEmail.textContent =
                "Email Copied ✓";

            setTimeout(function () {

                copyEmail.textContent =
                    "Copy Email";

            }, 2000);

        }
    );

}