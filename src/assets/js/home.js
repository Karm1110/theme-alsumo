import salla from '@salla.sa/twilight';

salla.event.on('salla-slider-ready', (response, slider) => {
    // You can listen to the slider events here
});

// Alsumo Theme: Video Banner
document.addEventListener('DOMContentLoaded', () => {
    const videoBanner = document.querySelector('.enhanced-slider-video');
    if (videoBanner) {
        const videoUrl = videoBanner.dataset.videoUrl;
        if (videoUrl.includes('youtube.com')) {
            const videoId = new URL(videoUrl).searchParams.get('v');
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0`;
            iframe.frameBorder = '0';
            iframe.allow = 'autoplay; encrypted-media';
            iframe.allowFullscreen = true;
            videoBanner.appendChild(iframe);
        }
    }
});
