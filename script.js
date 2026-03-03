// ==========================================
// ROYAL STITCH - COMPLETE JAVASCRIPT FILE
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Royal Stitch JS Connected 👑");

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
    // 2️⃣ BUTTON CLICK EFFECT
    // ======================================

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.style.transform = "scale(0.95)";
            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);
        });
    });


    // ======================================
    // 3️⃣ FORM VALIDATION
    // ======================================

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let isValid = true;

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const messageError = document.getElementById("messageError");

            // Clear previous errors
            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";

            // Name validation
            if (name.value.trim() === "") {
                nameError.textContent = "Name is required.";
                isValid = false;
            }

            // Email validation
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

            if (email.value.trim() === "") {
                emailError.textContent = "Email is required.";
                isValid = false;
            } else if (!email.value.match(emailPattern)) {
                emailError.textContent = "Enter a valid email address.";
                isValid = false;
            }

            // Message validation
            if (message.value.trim() === "") {
                messageError.textContent = "Message cannot be empty.";
                isValid = false;
            }

            if (isValid) {
                alert("Thank you for contacting Royal Stitch 👑");
                form.reset();
            }
        });

    }


    // ======================================
    // 4️⃣ SLIDESHOW FUNCTIONALITY
    // ======================================

    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");

        if (slides.length > 0) {
            slides[index].style.display = "block";
        }
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    // Make functions global for button onclick
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    if (slides.length > 0) {
        showSlide(slideIndex);
        setInterval(nextSlide, 4000); // Auto slide every 4 seconds
    }


    // ======================================
    // 5️⃣ DOM MANIPULATION - ADD MEMBER
    // ======================================

    window.addMember = function () {

        const container = document.getElementById("memberContainer");

        if (container) {
            const memberDiv = document.createElement("div");
            memberDiv.classList.add("member");

            memberDiv.innerHTML = `
                <img src="https://via.placeholder.com/250x200" alt="Member">
                <h3>New Member</h3>
                <p>Fashion Designer at Royal Stitch</p>
            `;

            container.appendChild(memberDiv);
        }
    };


    // ======================================
    // 6️⃣ SIMPLE SCROLL REVEAL ANIMATION
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

});