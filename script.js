document.addEventListener('DOMContentLoaded', function () {
    // Responsive navigation menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Additional JavaScript can be added here for more interactivity
    // For example, form validation, animations, etc.
});
