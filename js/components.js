// Component loading system
class ComponentLoader {
    constructor() {
        this.loadComponents();
        this.lastScrollTop = 0;
        this.navbar = null;
    }

    async loadComponent(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load ${url}`);
            }
            return await response.text();
        } catch (error) {
            console.error('Error loading component:', error);
            return '';
        }
    }

    async loadComponents() {
        // Load header
        const headerElement = document.getElementById('header-placeholder');
        if (headerElement) {
            const headerHtml = await this.loadComponent('components/header.html');
            headerElement.innerHTML = headerHtml;
        }

        // Load footer
        const footerElement = document.getElementById('footer-placeholder');
        if (footerElement) {
            const footerHtml = await this.loadComponent('components/footer.html');
            footerElement.innerHTML = footerHtml;
        }

        // Initialize functionality after components are loaded
        this.initializeNavigation();
        this.highlightCurrentPage();
        this.initializeScrollBehavior();
    }

    initializeNavigation() {
        // Mobile menu functionality
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Close mobile menu when clicking on a link
        const mobileNavLinks = document.querySelectorAll('.mobile-menu .nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    highlightCurrentPage() {
        const currentPage = this.getCurrentPageName();
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // Remove any existing active styles
            link.classList.remove('text-church-primary', 'font-semibold', 'border-b-2', 'border-church-secondary');
            
            // Check if this link matches the current page
            if ((currentPage === 'index.html' || currentPage === '') && href === 'index.html') {
                link.classList.add('text-church-primary', 'font-semibold');
                // Add underline for desktop navigation
                if (!link.closest('.mobile-menu')) {
                    link.classList.add('border-b-2', 'border-church-secondary');
                }
            } else if (currentPage !== 'index.html' && href === currentPage) {
                link.classList.add('text-church-primary', 'font-semibold');
                // Add underline for desktop navigation
                if (!link.closest('.mobile-menu')) {
                    link.classList.add('border-b-2', 'border-church-secondary');
                }
            }
        });
    }

    initializeScrollBehavior() {
        this.navbar = document.querySelector('nav');
        if (!this.navbar) return;

        let lastScrollTop = 0;
        let ticking = false;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 80) {
                // Scrolling down & past 80px
                this.navbar.classList.add('-translate-y-full');
                this.navbar.classList.remove('shadow-lg');
                this.navbar.classList.add('shadow-none');
            } else {
                // Scrolling up
                this.navbar.classList.remove('-translate-y-full');
                if (scrollTop > 10) {
                    this.navbar.classList.add('shadow-lg');
                    this.navbar.classList.remove('shadow-none');
                } else {
                    this.navbar.classList.remove('shadow-lg');
                    this.navbar.classList.add('shadow-none');
                }
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                window.requestAnimationFrame(handleScroll);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
    }

    getCurrentPageName() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        return filename || 'index.html';
    }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ComponentLoader();
});

// Smooth scrolling functionality for internal links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Animation observer for scroll-triggered animations
const observeAnimations = () => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// Initialize animations after components are loaded
setTimeout(observeAnimations, 100); 