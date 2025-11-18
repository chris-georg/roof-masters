// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnToggle = mobileToggle.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Close all
        document.querySelectorAll('.faq-question').forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('active');
        });
        
        // Open clicked if not already active
        if (!isActive) {
            question.classList.add('active');
            answer.classList.add('active');
        }
    });
});

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial');
let current = 0;

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.classList.remove('active');
        if (i === index) {
            t.classList.add('active');
        }
    });
}

setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
}, 5000);

// Form Submission with Success Message
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    // Optional: Add loading state
    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
                                
    // After successful submission (Formspree handles redirect or JSON response)
    // We'll show success locally
    setTimeout(() => {
        successMsg.style.display = 'block';
        form.reset();
        submitBtn.textContent = 'Send Message – We\'ll Call in 5 Mins';
        submitBtn.disabled = false;
    }, 800);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            document.querySelector('nav').classList.remove('active');
            // <-- Update the URL hash manually
            history.pushState(null, null, this.getAttribute('href'));
        }
    });
});

const backToTopButton = document.getElementById("backToTop");

// Show button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Smooth scroll to top when button clicked
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
