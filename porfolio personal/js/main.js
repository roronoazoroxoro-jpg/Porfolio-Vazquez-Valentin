// Smooth scrolling and active nav link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Elegant black and green animated background
function createAnimatedBackground() {
    const canvas = document.createElement('canvas');
    document.body.insertBefore(canvas, document.body.firstChild);
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    
    const ctx = canvas.getContext('2d', { alpha: true });
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Grid parameters
    const gridSize = 60;
    let offsetX = 0;
    let offsetY = 0;
    let time = 0;
    
    function draw() {
        // Clear with black background
        ctx.fillStyle = '#0a0e27';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw elegant grid lines
        ctx.strokeStyle = 'rgba(0, 255, 65, 0.08)';
        ctx.lineWidth = 1;
        
        // Vertical lines
        for (let x = offsetX; x < canvas.width + gridSize; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        
        // Horizontal lines
        for (let y = offsetY; y < canvas.height + gridSize; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
        
        // Draw subtle moving accent lines
        ctx.strokeStyle = 'rgba(0, 255, 65, 0.15)';
        ctx.lineWidth = 2;
        
        // Diagonal lines that move
        const diagonalOffset = (time * 0.5) % (gridSize * 2);
        for (let i = -10; i < 20; i++) {
            const x1 = i * gridSize * 2 + diagonalOffset;
            ctx.beginPath();
            ctx.moveTo(x1, 0);
            ctx.lineTo(x1 + canvas.height, canvas.height);
            ctx.stroke();
        }
        
        // Horizontal scan line effect (very subtle)
        ctx.strokeStyle = 'rgba(0, 255, 65, 0.03)';
        ctx.lineWidth = 1;
        const scanOffset = (time * 2) % canvas.height;
        ctx.beginPath();
        ctx.moveTo(0, scanOffset);
        ctx.lineTo(canvas.width, scanOffset);
        ctx.stroke();
        
        // Add corner accents (green glowing points)
        ctx.fillStyle = 'rgba(0, 255, 65, 0.2)';
        for (let x = 0; x < canvas.width; x += gridSize * 2) {
            for (let y = 0; y < canvas.height; y += gridSize * 2) {
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Add subtle glow at edges
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(0, 255, 65, 0.05)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 65, 0)');
        gradient.addColorStop(1, 'rgba(0, 255, 65, 0.05)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        time++;
        offsetX = (offsetX - 0.3) % gridSize;
        offsetY = (offsetY - 0.2) % gridSize;
        
        requestAnimationFrame(draw);
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    draw();
}

// Contact form -> WhatsApp
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        if (!nombre || !email || !asunto || !mensaje) {
            alert('Por favor completa todos los campos.');
            return;
        }
        const text = encodeURIComponent(
            `Hola Valentin, soy ${nombre} (${email}).\nAsunto: ${asunto}\n\n${mensaje}`
        );
        window.open(`https://wa.me/543765026029?text=${text}`, '_blank');
        this.reset();
    });
}

// Typing animation for hero section
function typeText(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Handle navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 0 30px rgba(0, 255, 65, 0.3)';
    } else {
        navbar.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.2)';
    }
});

// Responsive hamburger menu
function setupResponsiveMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => menu.classList.remove('open'));
    });
}

// Initialize on document load
document.addEventListener('DOMContentLoaded', () => {
    createAnimatedBackground();
    setupResponsiveMenu();
    
    // Add glow effect to sections on hover
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Scroll to top button functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    const scrollTopBtn = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) {
        if (scrollTopBtn) scrollTopBtn.style.display = 'block';
    } else {
        if (scrollTopBtn) scrollTopBtn.style.display = 'none';
    }
});

// Parallax effect (optional)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${window.pageYOffset * 0.5}px`;
    }
});
