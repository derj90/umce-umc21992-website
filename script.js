// JavaScript para el sitio web UMCE Virtual

document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    // Navbar background on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            navbar.style.boxShadow = 'none';
        }
        
        // Hide navbar on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active link
                updateActiveLink(targetId);
            }
        });
    });
    
    // Update active link based on scroll position
    function updateActiveLink(targetId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });
    }
    
    // Intersection Observer for sections
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
        rootMargin: '-80px 0px -50% 0px',
        threshold: 0
    };
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateActiveLink(`#${entry.target.id}`);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Counter animation for statistics
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number, .metric-value');
        
        counters.forEach(counter => {
            if (counter.classList.contains('animated')) return; // Ya fue animado
            
            const originalText = counter.textContent.trim();
            
            // Extraer solo los dígitos y puntos decimales
            const numberMatch = originalText.match(/[\d.]+/);
            if (!numberMatch) return;
            
            const numberStr = numberMatch[0];
            const targetValue = parseFloat(numberStr);
            
            if (isNaN(targetValue)) return;
            
            // Obtener el sufijo (%, etc.)
            const suffix = originalText.replace(numberStr, '');
            
            // Determinar si tiene decimales en el valor original
            const hasDecimal = numberStr.includes('.') && numberStr.split('.')[1].length > 0;
            const decimalPlaces = hasDecimal ? numberStr.split('.')[1].length : 0;
            
            let current = 0;
            const steps = 50;
            const increment = targetValue / steps;
            const duration = 1500; // 1.5 segundos
            const stepTime = duration / steps;
            
            counter.classList.add('animated');
            
            const timer = setInterval(() => {
                current += increment;
                
                if (current >= targetValue) {
                    // Mostrar valor final exacto
                    if (hasDecimal) {
                        counter.textContent = targetValue.toFixed(decimalPlaces) + suffix;
                    } else {
                        counter.textContent = Math.round(targetValue) + suffix;
                    }
                    clearInterval(timer);
                } else {
                    // Mostrar valor actual
                    if (hasDecimal) {
                        counter.textContent = current.toFixed(decimalPlaces) + suffix;
                    } else {
                        counter.textContent = Math.floor(current) + suffix;
                    }
                }
            }, stepTime);
        });
    }
    
    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const heroStats = document.querySelector('.hero-stats');
    const resultsSection = document.querySelector('.results-dashboard');
    
    if (heroStats) statsObserver.observe(heroStats);
    if (resultsSection) statsObserver.observe(resultsSection);
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Animate floating cards in hero
    function animateFloatingCards() {
        const cards = document.querySelectorAll('.floating-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 2}s`;
        });
    }
    
    animateFloatingCards();
    
    // Button click effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Handle button actions
            if (this.textContent.includes('Conocer el Proyecto')) {
                document.querySelector('#proyecto').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else if (this.textContent.includes('Ver Resultados')) {
                document.querySelector('#logros').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add ripple effect styles
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .no-scroll {
            overflow: hidden;
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.feature-item, .objective-card, .metric-card, .innovation-item, .pillar, .roadmap-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const initAnimateElements = () => {
        const elements = document.querySelectorAll('.feature-item, .objective-card, .metric-card, .innovation-item, .pillar, .roadmap-item');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
    };
    
    initAnimateElements();
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Contact form handling (if added later)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            console.log('Form submitted');
        });
    }
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Theme detection (for future dark mode support)
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-theme');
    }
    
    // Performance optimization - Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Apply throttling to scroll events
    window.addEventListener('scroll', throttle(function() {
        // Scroll-based animations here
    }, 16)); // ~60fps
    
    // Interactive Timeline
    function initializeTimeline() {
        const timelineTabs = document.querySelectorAll('.timeline-tab');
        const timelinePanels = document.querySelectorAll('.timeline-panel');
        
        timelineTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const year = this.getAttribute('data-year');
                
                // Remove active class from all tabs and panels
                timelineTabs.forEach(t => t.classList.remove('active'));
                timelinePanels.forEach(p => p.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding panel
                this.classList.add('active');
                document.getElementById(`timeline-${year}`).classList.add('active');
            });
        });
    }
    
    initializeTimeline();
    
    // Interactive Objectives
    function initializeObjectives() {
        const objectiveCards = document.querySelectorAll('.objective-card');
        const objectiveTabs = document.querySelectorAll('.objective-tab');
        const tabContents = document.querySelectorAll('.tab-content');
        
        // Expand/collapse cards
        objectiveCards.forEach(card => {
            const header = card.querySelector('.objective-header');
            header.addEventListener('click', function() {
                const wasExpanded = card.classList.contains('expanded');
                
                // Close all cards
                objectiveCards.forEach(c => c.classList.remove('expanded'));
                
                // Open clicked card if it wasn't expanded
                if (!wasExpanded) {
                    card.classList.add('expanded');
                }
            });
        });
        
        // Tab navigation within cards
        objectiveTabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent card collapse
                
                const targetTab = this.getAttribute('data-tab');
                const parentCard = this.closest('.objective-card');
                
                // Remove active from all tabs in this card
                parentCard.querySelectorAll('.objective-tab').forEach(t => {
                    t.classList.remove('active');
                });
                
                // Remove active from all tab contents in this card
                parentCard.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Add active to clicked tab
                this.classList.add('active');
                
                // Show corresponding content
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
    
    initializeObjectives();
    
    // Interactive Testimonials
    function initializeTestimonials() {
        const testimonialCategories = document.querySelectorAll('.testimonial-category');
        const testimonialPanels = document.querySelectorAll('.testimonial-panel');
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        
        // Category navigation
        testimonialCategories.forEach(category => {
            category.addEventListener('click', function() {
                const targetTestimonial = this.getAttribute('data-testimonial');
                
                // Remove active from all categories and panels
                testimonialCategories.forEach(c => c.classList.remove('active'));
                testimonialPanels.forEach(p => p.classList.remove('active'));
                
                // Add active to clicked category and corresponding panel
                this.classList.add('active');
                document.getElementById(`testimonial-${targetTestimonial}`).classList.add('active');
            });
        });
        
        // Card expansion
        testimonialCards.forEach(card => {
            card.addEventListener('click', function() {
                const wasExpanded = this.classList.contains('expanded');
                
                // Close all expanded cards
                testimonialCards.forEach(c => c.classList.remove('expanded'));
                
                // Open clicked card if it wasn't expanded
                if (!wasExpanded) {
                    this.classList.add('expanded');
                }
            });
        });
    }
    
    // Results tabs functionality (add to existing results)
    function initializeResults() {
        const resultsTabs = document.querySelectorAll('.results-tab');
        const resultsPanels = document.querySelectorAll('.results-panel');
        
        resultsTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetResults = this.getAttribute('data-results');
                
                // Remove active from all tabs and panels
                resultsTabs.forEach(t => t.classList.remove('active'));
                resultsPanels.forEach(p => p.classList.remove('active'));
                
                // Add active to clicked tab and corresponding panel
                this.classList.add('active');
                document.getElementById(`results-${targetResults}`).classList.add('active');
            });
        });
    }
    
    initializeTestimonials();
    initializeResults();
    
    // Participants list toggle functionality
    function initializeParticipantsList() {
        const toggleButton = document.getElementById('toggle-participants');
        const participantsList = document.getElementById('participants-list');
        
        if (toggleButton && participantsList) {
            toggleButton.addEventListener('click', function() {
                const isVisible = participantsList.style.display !== 'none';
                const iconSpan = this.querySelector('.toggle-icon');
                const textSpan = this.querySelector('.toggle-text');
                
                if (isVisible) {
                    participantsList.style.display = 'none';
                    participantsList.classList.remove('expanded');
                    iconSpan.textContent = '👥';
                    textSpan.textContent = 'Ver listado completo de 61 participantes';
                } else {
                    participantsList.style.display = 'block';
                    participantsList.classList.add('expanded');
                    iconSpan.textContent = '📁';
                    textSpan.textContent = 'Ocultar listado de participantes';
                }
            });
        }
    }
    
    initializeParticipantsList();
    
    // Enhanced Stats Animations
    function initializeStatsAnimations() {
        const statsContainer = document.querySelector('.hero-stats');
        if (!statsContainer) return;
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stats = entry.target.querySelectorAll('.stat');
                    stats.forEach((stat, index) => {
                        setTimeout(() => {
                            stat.style.opacity = '1';
                            stat.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(statsContainer);
    }
    
    // Simple Fullscreen Mode
    window.enterPresentationMode = function() {
        // Request fullscreen
        const docEl = document.documentElement;
        
        if (docEl.requestFullscreen) {
            docEl.requestFullscreen();
        } else if (docEl.webkitRequestFullscreen) {
            docEl.webkitRequestFullscreen();
        } else if (docEl.mozRequestFullScreen) {
            docEl.mozRequestFullScreen();
        } else if (docEl.msRequestFullscreen) {
            docEl.msRequestFullscreen();
        }
        
        // Add a simple exit button
        const exitBtn = document.createElement('button');
        exitBtn.className = 'simple-fullscreen-exit';
        exitBtn.innerHTML = '✕ Salir Pantalla Completa';
        exitBtn.onclick = exitPresentationMode;
        document.body.appendChild(exitBtn);
    };
    
    window.exitPresentationMode = function() {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        
        // Remove exit button
        const exitBtn = document.querySelector('.simple-fullscreen-exit');
        if (exitBtn) {
            exitBtn.remove();
        }
    };
    
    // Simple keyboard shortcut
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.fullscreenElement) {
            exitPresentationMode();
        }
        if (e.key === 'F11') {
            e.preventDefault();
            if (document.fullscreenElement) {
                exitPresentationMode();
            } else {
                enterPresentationMode();
            }
        }
    });
    
    // Modern hover effects for stats
    function initializeModernEffects() {
        const stats = document.querySelectorAll('.stat');
        stats.forEach(stat => {
            stat.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-12px) scale(1.02)';
            });
            
            stat.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    initializeStatsAnimations();
    initializeModernEffects();
    
    // Impact Stats Animations
    function initializeImpactAnimations() {
        const impactContainer = document.querySelector('.impact-stats');
        if (!impactContainer) return;
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const impacts = entry.target.querySelectorAll('.impact-number');
                    impacts.forEach((impact, index) => {
                        setTimeout(() => {
                            impact.style.opacity = '1';
                            impact.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(impactContainer);
    }
    
    // Enhanced modern effects for all metric sections
    function initializeAllMetricEffects() {
        const allMetrics = document.querySelectorAll('.impact-number, .metric-card');
        allMetrics.forEach(metric => {
            metric.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-12px) scale(1.02)';
            });
            
            metric.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    initializeImpactAnimations();
    initializeAllMetricEffects();
    
    
    
    console.log('🎓 UMCE UMC21992 site loaded successfully!');
});

// Utility functions
function fadeIn(element, duration = 300) {
    element.style.opacity = 0;
    element.style.display = 'block';
    
    let start = null;
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        
        element.style.opacity = Math.min(progress / duration, 1);
        
        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}

function fadeOut(element, duration = 300) {
    let start = null;
    function animate(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        
        element.style.opacity = Math.max(1 - (progress / duration), 0);
        
        if (progress < duration) {
            requestAnimationFrame(animate);
        } else {
            element.style.display = 'none';
        }
    }
    
    requestAnimationFrame(animate);
}

// Export functions for potential use in other scripts
window.UMCEUtils = {
    fadeIn,
    fadeOut
};