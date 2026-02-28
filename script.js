// ==========================================
// ROYAL STITCH - COMPLETE JAVASCRIPT FILE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Royal Stitch JS Loaded Successfully 👑");

    // ======================================
    // 1️⃣ SMOOTH SCROLL NAVIGATION
    // ======================================

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");

            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });


    // ======================================
    // 2️⃣ HERO "EXPLORE COLLECTION" BUTTON
    // ======================================

    const exploreBtn = document.querySelector(".hero button");

    if (exploreBtn) {
        exploreBtn.addEventListener("click", function () {
            const featured = document.querySelector("#featured");

            if (featured) {
                featured.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }


    // ======================================
    // 3️⃣ PRODUCT HOVER ANIMATION
    // ======================================

    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s ease";
            this.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });


    // ======================================
    // 4️⃣ SCROLL REVEAL ANIMATION
    // ======================================

    const sections = document.querySelectorAll("section");

    function revealOnScroll() {
        const triggerPoint = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerPoint) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "all 0.6s ease";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    // ======================================
    // 5️⃣ CONTACT FORM VALIDATION
    // ======================================

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const inputs = form.querySelectorAll("input, textarea");
            let isValid = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    input.style.border = "2px solid red";
                    isValid = false;
                } else {
                    input.style.border = "1px solid #ccc";
                }
            });

            if (isValid) {
                alert("Thank you for contacting Royal Stitch 👑");
                form.reset();
            }
        });
    }


    // ======================================
    // 6️⃣ DARK MODE TOGGLE (Optional)
    // ======================================

    const darkToggle = document.getElementById("darkModeBtn");

    if (darkToggle) {
        darkToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                darkToggle.textContent = "Light Mode";
            } else {
                darkToggle.textContent = "Dark Mode";
            }
        });
    }


    // ======================================
    // 7️⃣ SIMPLE SLIDESHOW (Optional)
    // ======================================

    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = "none";
        });

        if (slides.length > 0) {
            slides[index].style.display = "block";
        }
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    if (slides.length > 0) {
        showSlide(slideIndex);
        setInterval(nextSlide, 4000);
    }

});