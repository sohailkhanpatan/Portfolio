// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================

// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // SMOOTH SCROLLING
    // ===============================

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {

                event.preventDefault();

                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            }
        });

    });


    // ===============================
    // CURRENT YEAR
    // ===============================

    const footer = document.querySelector("footer p");

    if (footer) {

        const currentYear = new Date().getFullYear();

        footer.innerHTML =
            "© " + currentYear +
            " Sohail Khan. All Rights Reserved.";

    }


    // ===============================
    // PROFILE IMAGE ERROR
    // ===============================

    const profileImage = document.querySelector(".home-image img");

    if (profileImage) {

        profileImage.addEventListener("error", function () {

            this.style.display = "none";

        });

    }

});