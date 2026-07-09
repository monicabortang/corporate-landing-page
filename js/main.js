const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

});
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    
    // Menambah shadow saat scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.classList.add('shadow-md', 'py-2');
            nav.classList.remove('py-4');
        } else {
            nav.classList.remove('shadow-md', 'py-2');
            nav.classList.add('py-4');
        }
    }, { passive: true });

    console.log("Performance scripts initialized...");
});

// Lazy loading tambahan untuk legacy browser (opsional)
if ('loading' in HTMLImageElement.prototype) {
    console.log('Browser mendukung native lazy loading');
} else {
    // Dinamis import library lazyload jika tidak didukung native
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}