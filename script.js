// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const backToTopButton = document.getElementById('backToTop');

// Function to handle navbar scroll effect
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Function to toggle mobile menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Inisialisasi Swiper Hero
function initHeroSwiper() {
    const heroSwiper = new Swiper('.heroSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.heroSwiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.heroSwiper .swiper-button-next',
            prevEl: '.heroSwiper .swiper-button-prev',
        }
    });
}

// Inisialisasi Swiper untuk House Image
function initHouseSwipers() {
    const houseSwipers = document.querySelectorAll('.houseSwiper');
    
    houseSwipers.forEach((swiperElement, index) => {
        new Swiper(swiperElement, {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: swiperElement.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: swiperElement.querySelector('.swiper-button-next'),
                prevEl: swiperElement.querySelector('.swiper-button-prev'),
            },
            effect: 'slide',
            speed: 500,
        });
    });
}

// Inisialisasi Swiper Galeri
function initGallerySwiper() {
    const gallerySwiper = new Swiper('.gallerySwiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: false,
        pagination: {
            el: '.gallerySwiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.gallerySwiper .swiper-button-next',
            prevEl: '.gallerySwiper .swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
}

// Hubungi Kami Section JavaScript
function initContactSection() {
    // Animate elements on scroll
    const profileContainer = document.querySelector('.profile-container');
    const contactInfoContainer = document.querySelector('.contact-info-container');
    const contactItems = document.querySelectorAll('.contact-item');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to add animation when elements come into view
    function checkVisibility() {
        if (profileContainer && isInViewport(profileContainer)) {
            profileContainer.classList.add('animate-in');
        }
        
        if (contactInfoContainer && isInViewport(contactInfoContainer)) {
            contactInfoContainer.classList.add('animate-in');
            
            // Animate contact items with delay
            contactItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('animate-in');
                }, 150 * index);
            });
        }
    }
    
    // Add initial styles for animations
    if (profileContainer) {
        profileContainer.style.opacity = '0';
        profileContainer.style.transform = 'translateY(30px)';
        profileContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }
    
    if (contactInfoContainer) {
        contactInfoContainer.style.opacity = '0';
        contactInfoContainer.style.transform = 'translateY(30px)';
        contactInfoContainer.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }
    
    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Add CSS for the animate-in class
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translate(0, 0) !important;
        }
    `;
    document.head.appendChild(styleElement);
    
    // Check visibility on scroll and initial load
    window.addEventListener('scroll', checkVisibility);
    setTimeout(checkVisibility, 300); // Initial check with slight delay
}

// Footer JavaScript Functionality
function initFooter() {
    // Back to Top Button functionality
    if (backToTopButton) {
        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Smooth scroll to top when button is clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Footer animation on scroll
    const footer = document.querySelector('.footer-section');
    const footerItems = document.querySelectorAll('.ft-links, .ft-contact, .ft-newsletter');
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Add animation when elements come into view
    function checkFooterVisibility() {
        if (footer && isInViewport(footer)) {
            // Animate footer items with delay
            footerItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('fade-in');
                }, 150 * index);
            });
            
            // Remove scroll listener once animated
            window.removeEventListener('scroll', checkFooterVisibility);
        }
    }
    
    // Add initial styles for animations
    if (footerItems.length > 0) {
        footerItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Add CSS for the fade-in class
        const fadeInStyle = document.createElement('style');
        fadeInStyle.textContent = `
            .fade-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(fadeInStyle);
        
        // Listen for scroll to trigger animations
        window.addEventListener('scroll', checkFooterVisibility);
        
        // Initial check for visibility
        setTimeout(checkFooterVisibility, 300);
    }
}

// Fungsi untuk mengirim pesan ke WhatsApp
function sendToWhatsapp(event) {
    // Mencegah form melakukan submit default
    event.preventDefault();
    
    // Ambil nilai dari input
    const fullName = document.getElementById('fullName').value.trim();
    const whatsappNumber = document.getElementById('whatsappNumber').value.trim();
    const userMessage = document.getElementById('userMessage').value.trim();
    
    // Pastikan ada pesan yang dimasukkan
    if (userMessage === '') {
        alert('Silakan masukkan pertanyaan Anda terlebih dahulu.');
        return;
    }
    
    // Nomor WhatsApp yang dituju
    const phoneNumber = '6285601081492';
    
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(`Nama: ${fullName}\nNomor WhatsApp: ${whatsappNumber}\nPesan: ${userMessage}`);
    
    // Buat URL WhatsApp dengan pesan
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Buka WhatsApp di tab baru
    window.open(whatsappURL, '_blank');
    
    // Reset form setelah dikirim
    document.getElementById('fullName').value = '';
    document.getElementById('whatsappNumber').value = '';
    document.getElementById('userMessage').value = '';
}

// Fungsi untuk mengirim pesan produk ke WhatsApp
function sendProductToWhatsapp(productName) {
    // Nomor WhatsApp yang dituju
    const phoneNumber = '6285601081492';
    
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(`Halo, saya tertarik dengan properti "${productName}". Mohon informasi lebih lanjut. Terima kasih.`);
    
    // Buat URL WhatsApp dengan pesan
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Buka WhatsApp di tab baru
    window.open(whatsappURL, '_blank');
}

// Fungsi untuk menambahkan gambar ke card rumah
function addHouseImage(cardIndex, imageUrl, caption) {
    const swipers = document.querySelectorAll('.houseSwiper');
    if (cardIndex >= swipers.length) {
        console.error('Card index tidak valid');
        return;
    }
    
    const swiper = swipers[cardIndex].swiper;
    const fancyboxGroup = `house${cardIndex + 1}`;
    
    // Buat slide baru
    const newSlide = document.createElement('div');
    newSlide.className = 'swiper-slide';
    
    // Buat link dengan fancybox
    const newLink = document.createElement('a');
    newLink.href = imageUrl;
    newLink.setAttribute('data-fancybox', fancyboxGroup);
    if (caption) {
        newLink.setAttribute('data-caption', caption);
    }
    
    // Buat gambar
    const newImg = document.createElement('img');
    newImg.src = imageUrl;
    newImg.alt = caption || `Gambar Rumah ${cardIndex + 1}`;
    newImg.className = 'house-image';
    
    // Susun elemen
    newLink.appendChild(newImg);
    newSlide.appendChild(newLink);
    
    // Tambahkan slide ke swiper
    swiper.appendSlide(newSlide);
    
    // Update swiper
    swiper.update();
}

// Tambahkan event listener saat dokumen sudah dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi komponen navbar
    window.addEventListener('scroll', handleNavbarScroll);
    hamburger.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
    
    // Initialize navbar state
    handleNavbarScroll();
    
    // Initialize all Swiper components
    initHeroSwiper();
    initHouseSwipers();
    initGallerySwiper();
    
    // Initialize other sections
    initContactSection();
    initFooter();
    
    // Initialize Fancybox
    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind('[data-fancybox]', {
            Carousel: {
                infinite: true,
            },
            Thumbs: {
                autoStart: true,
            }
        });
    }
    
    // Pastikan form WhatsApp ada di halaman
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', sendToWhatsapp);
    }
    
    // Setup whatsapp buttons on house cards
    document.querySelectorAll('.house-whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.dataset.product;
            sendProductToWhatsapp(productName);
        });
    });
    
    // Form Newsletter
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Cegah form submit biasa
        
        // Ambil nilai semua field
        const nameInput = document.getElementById('nameNewsletter');
        const whatsappInput = document.getElementById('whatsappNewsletter');
        const emailInput = document.getElementById('emailNewsletter');
        
        const name = nameInput.value.trim();
        const whatsapp = whatsappInput.value.trim();
        const email = emailInput.value.trim();
        
        if (!name || !whatsapp || !email) {
            alert('Silakan lengkapi semua data');
            return;
        }
        
        // Proses berlangganan - bisa diganti dengan ajax call atau endpoint yang sesuai
        alert('Terima kasih! Data Anda berhasil didaftarkan.');
        nameInput.value = '';
        whatsappInput.value = '';
        emailInput.value = '';
    });
}
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Fungsi untuk menangani klik pada tombol "Lihat Semua"
function handleViewAllClick() {
    // Tambahkan event listener untuk semua tombol "Lihat Semua"
    const viewAllButtons = document.querySelectorAll('.view-all-button');
    
    viewAllButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Tentukan target berdasarkan teks tombol
            let targetPage = '';
            if (this.textContent.includes('Rumah')) {
                targetPage = 'rumah-dijual.html'; // Ganti dengan halaman tujuan yang sesuai
            } else if (this.textContent.includes('Galeri')) {
                targetPage = 'galeri.html'; // Ganti dengan halaman tujuan yang sesuai
            }
            
            // Navigasi ke halaman yang dituju
            if (targetPage) {
                window.location.href = targetPage;
            }
        });
    });
}

// Tambahkan ke dalam DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // Kode yang sudah ada...
    
    // Tambahkan fungsi untuk tombol Lihat Semua
    handleViewAllClick();
});

// Inisialisasi section proyek perumahan
function initProjectsSection() {
    const projectCard = document.querySelector('.project-card');
    
    if (projectCard) {
        // Animasi saat scroll
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }
        
        function checkVisibility() {
            if (isInViewport(projectCard)) {
                projectCard.classList.add('fade-in');
            }
        }
        
        // Tambahkan style untuk animasi
        projectCard.style.opacity = '0';
        projectCard.style.transform = 'translateY(30px)';
        projectCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Tambahkan CSS untuk kelas fade-in
        if (!document.querySelector('style#project-animations')) {
            const styleElement = document.createElement('style');
            styleElement.id = 'project-animations';
            styleElement.textContent = `
                .fade-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `;
            document.head.appendChild(styleElement);
        }
        
        // Event listener untuk scroll
        window.addEventListener('scroll', checkVisibility);
        setTimeout(checkVisibility, 300);
    }
}

// Tambahkan ke dalam event DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Kode yang sudah ada...
    
    // Inisialisasi section proyek perumahan
    initProjectsSection();
});

// JavaScript untuk Chat Pop-up
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const chatPopup = document.getElementById('whatsappPopup');
    const showPopupBtn = document.getElementById('showChatPopup');
    const closePopupBtn = document.getElementById('closeChat');
    const sendBtn = document.getElementById('sendWhatsApp');
    const messageInput = document.getElementById('popupMessage');
    const chatMessages = document.querySelector('.chat-messages');
    
    // Show chat popup
    showPopupBtn.addEventListener('click', function() {
        chatPopup.classList.add('show');
    });
    
    // Close chat popup
    closePopupBtn.addEventListener('click', function() {
        chatPopup.classList.remove('show');
    });
    
    // Auto show popup after 10 seconds (optional - uncomment if needed)
    /*
    setTimeout(function() {
        if (!sessionStorage.getItem('chatPopupShown')) {
            chatPopup.classList.add('show');
            sessionStorage.setItem('chatPopupShown', true);
        }
    }, 10000);
    */
    
    // Add message to chat
    function addMessage(text, isSent = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isSent ? 'sent' : 'received'}`;
        
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}`;
        
        const contentHtml = `
            ${!isSent ? '<div class="message-avatar"><img src="img/foto-profil.jpg" alt="Customer Support"></div>' : ''}
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${timeString}</span>
            </div>
        `;
        
        messageDiv.innerHTML = contentHtml;
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Send message function
    function sendMessage() {
        const message = messageInput.value.trim();
        if (!message) return;
        
        // Add message to chat
        addMessage(message);
        
        // Clear input
        messageInput.value = '';
        
        // Send to WhatsApp after a small delay to show the message
        setTimeout(() => {
            // Nomor WhatsApp yang dituju
            const phoneNumber = '6285601081492';
            
            // Encode pesan untuk URL
            const encodedMessage = encodeURIComponent(message);
            
            // Buat URL WhatsApp dengan pesan
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Buka WhatsApp di tab baru
            window.open(whatsappURL, '_blank');
            
            // Close the popup
            chatPopup.classList.remove('show');
        }, 1000);
    }
    
    // Send message on button click
    sendBtn.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });
});