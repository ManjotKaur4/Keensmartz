

// new nav 
document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navBar = document.getElementById('navbar');

    // Toggle mobile menu
    mobileNavToggle.addEventListener('click', function () {
        navBar.classList.toggle('navbar-mobile');
    });

    // Dropdown functionality in mobile nav
    document.querySelectorAll('.navbar .dropdown > a').forEach(dropdownToggle => {
        dropdownToggle.addEventListener('click', function (e) {
            // Prevent default if we're in mobile view
            if (navBar.classList.contains('navbar-mobile')) {
                e.preventDefault();
                let nextElement = this.nextElementSibling;
                if (nextElement && nextElement.tagName === 'UL') {
                    nextElement.classList.toggle('dropdown-active'); // Ensure this matches your CSS class for displaying dropdowns
                }
            }
        });
    });
});




