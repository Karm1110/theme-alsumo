import salla from '@salla.sa/twilight';
import anime from 'animejs';

// Import SCSS file
import '../styles/app.scss';

// Initialize Salla Twilight
salla.init();

// Alsumo Theme: Animate elements on scroll
if (salla.config.get('theme.settings.enable_animations')) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [30, 0],
                    opacity: [0, 1],
                    duration: 800,
                    easing: 'easeOutExpo'
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.s-block, .feature-item, .product-card').forEach(el => {
        observer.observe(el);
    });
}
