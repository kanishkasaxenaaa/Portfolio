// Navigation scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('navigation');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    // Handle scroll for navigation styling
    let scrolled = false;
    function handleScroll() {
        const currentScroll = window.scrollY;
        if (currentScroll > 50 && !scrolled) {
            nav.classList.add('scrolled');
            scrolled = true;
        } else if (currentScroll <= 50 && scrolled) {
            nav.classList.remove('scrolled');
            scrolled = false;
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle (basic implementation)
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const navDesktop = document.querySelector('.nav-desktop');
            if (navDesktop) {
                navDesktop.style.display = navDesktop.style.display === 'flex' ? 'none' : 'flex';
                navDesktop.style.position = 'absolute';
                navDesktop.style.top = '100%';
                navDesktop.style.left = '0';
                navDesktop.style.right = '0';
                navDesktop.style.background = 'var(--surface-1)';
                navDesktop.style.flexDirection = 'column';
                navDesktop.style.padding = '1rem';
                navDesktop.style.borderTop = '1px solid var(--border-color)';
            }
        });
    }
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe project cards for stagger animation
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Add visible class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Log page loaded
    console.log('Portfolio loaded successfully');
});
