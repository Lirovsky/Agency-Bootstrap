window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink
    var navbarShrink = function () {
        const navbarColor = document.body.querySelector('#mainNav');
        if (!navbarColor) {
            return;
        }
        if (window.scrollY === 0) {
            navbarColor.classList.remove('navbar-shrink')
        } else {
            navbarColor.classList.add('navbar-shrink')
        }

    };
    
    navbarShrink();

    document.addEventListener('scroll', navbarShrink);
});