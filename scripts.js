document.addEventListener('DOMContentLoaded', function() {
    anime({
        targets: 'section',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: anime.stagger(100, {start: 300})
    });
});

