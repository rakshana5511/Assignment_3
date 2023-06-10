// JavaScript code for interactivity goes here

// Dynamic Content: Toggle additional information
const toggleButton = document.querySelector("#toggleButton");
const additionalInfo = document.querySelector("#additionalInfo");

toggleButton.addEventListener("click", function () {
  additionalInfo.classList.toggle("hidden");
});

// Image Slider
let slideIndex = 0;
const images = document.getElementsByClassName("slider-image");

function showSlides() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > images.length) {
    slideIndex = 1;
  }

  images[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

showSlides();

// Form Validation
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Perform form validation
  // ...

  // Submit the form if validation passes
  this.submit();
});

// Smooth Scrolling
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
