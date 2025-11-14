document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.5,
                    random: true,
                    animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    animation: { enable: true, speed: 2, minimumValue: 0.3, sync: false }
                },
                lineLinked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    outModes: { default: 'out' },
                    attract: { enable: false }
                }
            },
            interactivity: {
                detectsOn: 'canvas',
                events: {
                    onHover: { enable: true, mode: 'repulse' },
                    onClick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    // Animate text on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.letters');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.animation = 'slideUp 0.8s forwards';
            }
        });
    };

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial check in case elements are already in view
    animateOnScroll();

    // Add hover effect to text
    const textElement = document.querySelector('.creative-text');
    if (textElement) {
        textElement.addEventListener('mouseenter', () => {
            textElement.style.animation = 'none';
            textElement.style.background = 'linear-gradient(90deg, #1e90ff, #e52e71, #ff8a00)';
            textElement.style.backgroundSize = '200% auto';
            textElement.style.backgroundClip = 'text';
            textElement.style.webkitBackgroundClip = 'text';
            textElement.style.webkitTextFillColor = 'transparent';
            textElement.style.animation = 'gradient 3s ease infinite';
        });

        textElement.addEventListener('mouseleave', () => {
            textElement.style.animation = 'none';
            textElement.style.background = 'linear-gradient(90deg, #ff8a00, #e52e71, #1e90ff)';
            textElement.style.backgroundSize = '200% auto';
            textElement.style.backgroundClip = 'text';
            textElement.style.webkitBackgroundClip = 'text';
            textElement.style.webkitTextFillColor = 'transparent';
            textElement.style.animation = 'gradient 5s ease infinite, float 6s ease-in-out infinite';
        });
    }
});
