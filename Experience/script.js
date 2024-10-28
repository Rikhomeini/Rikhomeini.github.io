document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Dapatkan URL path halaman saat ini
    const currentPath = window.location.pathname.toLowerCase(); 
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').toLowerCase();

        // Cek apakah path dari link sesuai dengan halaman saat ini
        if (currentPath.includes(linkPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
