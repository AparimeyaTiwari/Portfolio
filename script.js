// Enhanced Portfolio JavaScript

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll progress indicator
    createScrollProgress();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize intersection observers
    initializeObservers();
    
    // Initialize navbar scroll effect
    initializeNavbarScroll();
    
    // Initialize particle effect
    createParticleEffect();
});

// Create scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, #0ff, #ff00ff);
        transform-origin: 0 50%;
        transform: scaleX(0);
        z-index: 1001;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.transform = `scaleX(${scrolled / 100})`;
    });
}

// Initialize animations
function initializeAnimations() {
    // Add typing effect to hero name
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        heroName.style.opacity = '0';
        setTimeout(() => {
            heroName.style.opacity = '1';
            heroName.style.animation = 'slideInLeft 1s ease-out, neonGlow 2s ease-in-out infinite alternate 1s';
        }, 500);
    }

    // Stagger animation for hero buttons
    const heroButtons = document.querySelectorAll('.hero-buttons a');
    heroButtons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        setTimeout(() => {
            button.style.transition = 'all 0.6s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 800 + index * 200);
    });

    // Add hover effects to buttons
    addButtonHoverEffects();
}

// Add button hover effects
function addButtonHoverEffects() {
    const buttons = document.querySelectorAll('.primary-btn, .secondary-btn, .project-link, .platform-btn, .watch-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize intersection observers
function initializeObservers() {
    // Section visibility observer
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger specific animations for different sections
                if (entry.target.id === 'skills') {
                    animateSkillTags();
                } else if (entry.target.id === 'projects') {
                    animateProjectCards();
                } else if (entry.target.id === 'podcast') {
                    animateEpisodeCards();
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Navigation active link observer
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                updateActiveNavLink(id);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-80px 0px -80px 0px'
    });

    // Observe sections for navigation
    document.querySelectorAll('.section').forEach(section => {
        navObserver.observe(section);
    });
}

// Update active navigation link
function updateActiveNavLink(activeId) {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
        }
    });
}

// Initialize navbar scroll effect
function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(13, 15, 26, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(13, 15, 26, 0.95)';
            navbar.style.boxShadow = 'none';
        }

        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Animate skill tags
function animateSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0) scale(1)';
        }, index * 100);
    });
}

// Animate project cards
function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Animate episode cards
function animateEpisodeCards() {
    const episodeCards = document.querySelectorAll('.episode-card');
    episodeCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, index * 150);
    });
}

// Create particle effect
function createParticleEffect() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.6;
    `;
    document.body.appendChild(canvas);

    let particles = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            life: Math.random() * 100 + 50,
            maxLife: 150,
            color: Math.random() > 0.5 ? 'rgba(0, 255, 255, ' : 'rgba(255, 0, 255, '
        };
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push(createParticle());
        }
    }

    function updateParticles() {
        particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life--;

            // Wrap around screen
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;

            // Remove dead particles
            if (particle.life <= 0) {
                particles[index] = createParticle();
            }
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            const opacity = particle.life / particle.maxLife;
            ctx.fillStyle = particle.color + opacity + ')';
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw connections
        particles.forEach((particle1, i) => {
            particles.slice(i + 1).forEach(particle2 => {
                const distance = Math.sqrt(
                    Math.pow(particle1.x - particle2.x, 2) + 
                    Math.pow(particle1.y - particle2.y, 2)
                );
                
                if (distance < 100) {
                    const opacity = (100 - distance) / 100 * 0.1;
                    ctx.strokeStyle = `rgba(0, 255, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particle1.x, particle1.y);
                    ctx.lineTo(particle2.x, particle2.y);
                    ctx.stroke();
                }
            });
        });
    }

    function animate() {
        updateParticles();
        drawParticles();
        animationId = requestAnimationFrame(animate);
    }

    // Initialize
    resizeCanvas();
    initParticles();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });

    // Pause animation when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });
}

// Add interactive hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    // Project cards tilt effect
    const projectCards = document.querySelectorAll('.project');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Episode cards hover effect
    const episodeCards = document.querySelectorAll('.episode-card');
    episodeCards.forEach(card => {
        const overlay = card.querySelector('.episode-overlay');
        
        card.addEventListener('mouseenter', () => {
            if (overlay) {
                overlay.style.opacity = '1';
                overlay.style.transform = 'scale(1)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (overlay) {
                overlay.style.opacity = '0';
                overlay.style.transform = 'scale(0.8)';
            }
        });
    });
});

// Add typing effect for section titles
function addTypingEffect(element, text, speed = 100) {
    element.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    typeWriter();
}

// Initialize section title animations when they come into view
const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('typed')) {
            const text = entry.target.textContent;
            entry.target.classList.add('typed');
            addTypingEffect(entry.target, text, 80);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section-title').forEach(title => {
        titleObserver.observe(title);
    });
});

// Add smooth reveal animations for list items
function animateListItems(container) {
    const items = container.querySelectorAll('li, .skill-tag, .episode-card');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Enhanced scroll animations
const scrollAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateListItems(entry.target);
        }
    });
}, { threshold: 0.2 });

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.skills-container, .episodes-grid, .projects-grid').forEach(container => {
        scrollAnimationObserver.observe(container);
    });
});

// Add floating animation to profile image
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        let floatDirection = 1;
        
        setInterval(() => {
            floatDirection *= -1;
            profileImage.style.transform = `translateY(${floatDirection * 10}px)`;
        }, 3000);
    }
});

// Add glitch effect to name on hover
document.addEventListener('DOMContentLoaded', function() {
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const originalText = heroName.textContent;
        
        heroName.addEventListener('mouseenter', () => {
            let glitchCount = 0;
            const glitchInterval = setInterval(() => {
                const glitchChars = '!@#$%^&*()_+{}|:"<>?[];,./`~';
                let glitchedText = '';
                
                for (let i = 0; i < originalText.length; i++) {
                    if (Math.random() < 0.1) {
                        glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    } else {
                        glitchedText += originalText[i];
                    }
                }
                
                heroName.innerHTML = glitchedText;
                glitchCount++;
                
                if (glitchCount > 3) {
                    clearInterval(glitchInterval);
                    heroName.innerHTML = originalText.replace('Tiwari', '<span class="highlight">Tiwari</span>');
                }
            }, 100);
        });
    }
});

// Performance optimization - reduce animations on mobile
function optimizeForMobile() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Disable resource-intensive animations on mobile
        document.body.style.setProperty('--animation-duration', '0.3s');
        
        // Simplify particle effect
        const canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.style.display = 'none';
        }
    }
}

window.addEventListener('resize', optimizeForMobile);
document.addEventListener('DOMContentLoaded', optimizeForMobile);
