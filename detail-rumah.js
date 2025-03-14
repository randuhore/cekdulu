// Detail Rumah JS Functions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Detail Page Swipers
    initDetailSwipers();
    
    // Initialize share buttons
    initShareButtons();
    
    // Initialize inquiry form
    initInquiryForm();
});

// Initialize Detail Swipers
function initDetailSwipers() {
    // Initialize thumbnail swiper
    const thumbSwiper = new Swiper('.detailThumbSwiper', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
    });
    
    // Initialize main swiper with thumb control
    const mainSwiper = new Swiper('.detailMainSwiper', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.detailMainSwiper .swiper-button-next',
            prevEl: '.detailMainSwiper .swiper-button-prev',
        },
        thumbs: {
            swiper: thumbSwiper,
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
    });
    
    // Initialize related properties swipers
    const relatedSwipers = document.querySelectorAll('.relatedSwiper');
    relatedSwipers.forEach((swiperElement) => {
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
            }
        });
    });
}

// Initialize Share Buttons
function initShareButtons() {
    const facebookBtn = document.querySelector('.share-btn.facebook-btn');
    const twitterBtn = document.querySelector('.share-btn.twitter-btn');
    const whatsappBtn = document.querySelector('.share-btn.whatsapp-btn');
    const telegramBtn = document.querySelector('.share-btn.telegram-btn');
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    
    // Get current URL and title
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    
    // Set share URLs
    if (facebookBtn) {
        facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    }
    
    if (twitterBtn) {
        twitterBtn.href = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
    }
    
    if (whatsappBtn) {
        whatsappBtn.href = `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`;
    }
    
    if (telegramBtn) {
        telegramBtn.href = `https://telegram.me/share/url?url=${pageUrl}&text=${pageTitle}`;
    }
    
    // Copy link functionality
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', function() {
            // Create a temporary input
            const tempInput = document.createElement('input');
            tempInput.value = window.location.href;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            
            // Show a temporary tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Link disalin!';
            tooltip.style.position = 'absolute';
            tooltip.style.backgroundColor = '#292357';
            tooltip.style.color = 'white';
            tooltip.style.padding = '5px 10px';
            tooltip.style.borderRadius = '5px';
            tooltip.style.fontSize = '12px';
            tooltip.style.top = (this.offsetTop - 30) + 'px';
            tooltip.style.left = (this.offsetLeft + this.offsetWidth/2 - 40) + 'px';
            tooltip.style.zIndex = '1000';
            tooltip.style.transition = 'opacity 0.3s';
            document.body.appendChild(tooltip);
            
            // Remove tooltip after 2 seconds
            setTimeout(function() {
                tooltip.style.opacity = '0';
                setTimeout(function() {
                    document.body.removeChild(tooltip);
                }, 300);
            }, 2000);
        });
    }
}

// Initialize Inquiry Form
function initInquiryForm() {
    const inquiryForm = document.getElementById('inquiryForm');
    
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('inquiryName').value.trim();
            const phone = document.getElementById('inquiryPhone').value.trim();
            const email = document.getElementById('inquiryEmail').value.trim();
            const message = document.getElementById('inquiryMessage').value.trim();
            
            // Validate form
            if (!name || !phone || !email || !message) {
                alert('Silakan lengkapi semua data');
                return;
            }
            
            // Prepare WhatsApp message
            const propertyTitle = document.querySelector('.property-title').textContent;
            const encodedMessage = encodeURIComponent(
                `*Inquiry untuk ${propertyTitle}*\n\n` +
                `Nama: ${name}\n` +
                `Telepon: ${phone}\n` +
                `Email: ${email}\n\n` +
                `Pesan: ${message}`
            );
            
            // Send to WhatsApp
            const phoneNumber = '6285601081492'; // Ganti dengan nomor WhatsApp tujuan
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, '_blank');
            
            // Reset form
            inquiryForm.reset();
        });
    }
}

// Update Button Links in House Cards
function updateHouseCardLinks() {
    // Find all house detail buttons
    const houseDetailBtns = document.querySelectorAll('.house-detail-btn');
    
    // Set correct links based on house types
    houseDetailBtns.forEach(btn => {
        const houseCard = btn.closest('.house-type-card');
        const houseName = houseCard.querySelector('.house-name').textContent;
        
        // Set appropriate link based on house type
        if (houseName.includes('36/60')) {
            btn.href = 'detail-rumah.html';
        } else if (houseName.includes('40/65')) {
            btn.href = 'detail-rumah-40-65.html';
        } else if (houseName.includes('54/60')) {
            btn.href = 'detail-rumah-54-60.html';
        } else if (houseName.includes('65/72')) {
            btn.href = 'detail-rumah-65-72.html';
        }
    });
}

// Call updateHouseCardLinks when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateHouseCardLinks();
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