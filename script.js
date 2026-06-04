/* ==========================================================================
   JAVASCRIPT INTERACTIONS - KAYAPA KOLORADO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Current Year Auto-Update
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 3. Scroll Header Class
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Active Nav Link on Scroll (Scroll Spy)
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 150; // offset for nav header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 5. Interactive Lightbox Gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    let currentIndex = 0;
    const images = [];

    // Collect all image sources and alt texts
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('img');
        if (img) {
            images.push({
                src: img.getAttribute('src'),
                alt: img.getAttribute('alt') || 'Imagen de Galería'
            });
            
            // Add click listener
            item.addEventListener('click', () => {
                currentIndex = index;
                openLightbox();
            });
        }
    });

    function openLightbox() {
        if (!lightbox || !lightboxImg) return;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock body scroll
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Unlock scroll
    }

    function updateLightboxImage() {
        if (!lightboxImg) return;
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.src = images[currentIndex].src;
            lightboxImg.alt = images[currentIndex].alt;
            lightboxImg.style.opacity = '1';
        }, 150);
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightboxImage();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightboxImage();
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            showPrev();
        });
    }

    if (lightboxNext) {
        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            showNext();
        });
    }

    if (lightbox) {
        // Close if clicking outside the image container
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                showNext();
            } else if (e.key === 'ArrowLeft') {
                showPrev();
            }
        }
    });

});
