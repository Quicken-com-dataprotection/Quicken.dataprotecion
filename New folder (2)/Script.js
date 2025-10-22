// CURSOR SPOTLIGHT SCRIPT
const spotlight = document.querySelector('.cursor-spotlight');
document.addEventListener('mousemove', (e) => {
    spotlight.style.left = e.clientX + 'px';
    spotlight.style.top = e.clientY + 'px';
});
const interactiveElements = document.querySelectorAll('a, button, .feature-card, .pricing-card, iframe, .testimonial-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => spotlight.classList.add('interactive'));
    el.addEventListener('mouseleave', () => spotlight.classList.remove('interactive'));
});

// 7-SECOND TIMED VIDEO PLAYLIST SCRIPT
const videoElement = document.getElementById('hero-background-video');
if (videoElement) {
    const videoPlaylist = [
        'https://videos.pexels.com/video-files/3192364/3192364-hd_1920_1080_25fps.mp4',
        'https://videos.pexels.com/video-files/7647253/7647253-hd_1920_1080_24fps.mp4',
        'https://videos.pexels.com/video-files/3198163/3198163-hd_1920_1080_25fps.mp4'
    ];
    let currentVideoIndex = 0;
    function playNextVideoSegment() {
        videoElement.src = videoPlaylist[currentVideoIndex];
        videoElement.load();
        videoElement.play().catch(error => console.log("Autoplay was prevented:", error));
        currentVideoIndex = (currentVideoIndex + 1) % videoPlaylist.length;
        setTimeout(playNextVideoSegment, 7000);
    }
    playNextVideoSegment();
}

// MARQUEE SCRIPT (Handles testimonial marquee)
const marqueeTrack = document.querySelector('.testimonial-track');
if (marqueeTrack) {
    const items = Array.from(marqueeTrack.children);
    // Marquee effect ke liye items ko duplicate kar rahe hain
    items.forEach(item => {
        const clone = item.cloneNode(true);
        marqueeTrack.appendChild(clone);
    });
}

// PRICING TOGGLE SCRIPT
const priceToggle = document.getElementById('price-toggle');
if (priceToggle) {
    const priceStarterEl = document.getElementById('price-starter');
    const priceBusinessEl = document.getElementById('price-business');
    const priceEnterpriseEl = document.getElementById('price-enterprise');

    const prices = {
        starter: { original: 898, discount: 449 },
        business: { original: 1298, discount: 649 },
        enterprise: { original: 1698, discount: 849 }
    };

    priceToggle.addEventListener('change', function () {
        if (this.checked) {
            priceStarterEl.textContent = `$${prices.starter.discount}`;
            priceBusinessEl.textContent = `$${prices.business.discount}`;
            priceEnterpriseEl.textContent = `$${prices.enterprise.discount}`;
        } else {
            priceStarterEl.textContent = `$${prices.starter.original}`;
            priceBusinessEl.textContent = `$${prices.business.original}`;
            priceEnterpriseEl.textContent = `$${prices.enterprise.original}`;
        }
    });
}

// FOOTER YEAR SCRIPT
document.getElementById("current-year").textContent = new Date().getFullYear();