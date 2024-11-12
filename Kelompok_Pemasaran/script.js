document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-icon');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        navbarCollapse.classList.toggle('show');
    });

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('open');
            navbarCollapse.classList.remove('show');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbarCollapse.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navbarCollapse.classList.contains('show')) {
            hamburger.classList.remove('open');
            navbarCollapse.classList.remove('show');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});             