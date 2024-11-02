document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navBrand = document.querySelector('.navbar-brand');
    
    // Dapatkan URL path halaman saat ini
    const currentPath = window.location.pathname.toLowerCase();

    // Reset semua link terlebih dahulu
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    navBrand.classList.remove('active');

    // Jika berada di landing page
    if (currentPath === "/" || currentPath === "") {
        navBrand.classList.add('active');
    } else {
        // Untuk halaman lain
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').toLowerCase();
            if (currentPath.includes(linkPath)) {
                link.classList.add('active');
            }
        });
    }
});