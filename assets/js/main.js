// ----------------------------
// Load modular components
// ----------------------------
function loadComponent(selector, path) {
    const container = document.querySelector(selector);
    if(container){
        fetch(path)
            .then(response => response.text())
            .then(data => container.innerHTML = data)
            .catch(err => console.error(`Error loading ${path}:`, err));
    }
}

// Load header, nav, footer, hero section
loadComponent('#header-placeholder', 'assets/components/header.html');
loadComponent('#nav-placeholder', 'assets/components/nav.html');
loadComponent('#hero-placeholder', 'assets/components/hero-section.html');
loadComponent('#footer-placeholder', 'assets/components/footer.html');


// ----------------------------
// Active Link Highlighting
// ----------------------------
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if(linkPath === currentPath){
            link.classList.add('active');
        }
    });
});


// ----------------------------
// Smooth Scroll for anchor links
// ----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// ----------------------------
// Optional: Add terminal or console-style effects
// ----------------------------
function hackerEffect(selector, text, speed = 50){
    const container = document.querySelector(selector);
    if(!container) return;

    let i = 0;
    function typeWriter(){
        if(i < text.length){
            container.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}

// Example usage:
// hackerEffect('.hero-container h1', 'Welcome to Cybersquad', 50);
