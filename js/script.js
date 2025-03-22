// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  disable: "mobile",
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const offset = 80;
    const element = document.querySelector(this.getAttribute("href"));
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  });
});

// Close mobile menu on link click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });
});

var typed = new Typed("#typed-text", {
  strings: [
    "Java Full Stack Developer",
    "Building Scalable Web Applications",
    "Solving DSA on LeetCode & GFG",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

// for email js
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Change button state while sending
    var submitBtn = this.querySelector('button[type="submit"]');
    var originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    submitBtn.disabled = true;

    // Replace with your actual service ID and template ID from EmailJS
    emailjs
      .sendForm("service_2adzz4n", "template_fq7b00i", this)
      .then(
        function () {
          // Success message
          document.getElementById("contact-form").reset();
          var successMessage = document.createElement("div");
          successMessage.className = "alert alert-success mt-3";
          successMessage.innerHTML =
            '<i class="fas fa-check-circle me-2"></i>Thank you! Your message has been sent successfully.';
          document.getElementById("contact-form").appendChild(successMessage);

          // Remove message after 5 seconds
          setTimeout(function () {
            successMessage.remove();
          }, 5000);
        },
        function (error) {
          // Error message
          console.log("Error:", error);
          var errorMessage = document.createElement("div");
          errorMessage.className = "alert alert-danger mt-3";
          errorMessage.innerHTML =
            '<i class="fas fa-exclamation-circle me-2"></i>Something went wrong. Please try again.';
          document.getElementById("contact-form").appendChild(errorMessage);

          setTimeout(function () {
            errorMessage.remove();
          }, 5000);
        }
      )
      .finally(function () {
        // Reset button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      });
  });
