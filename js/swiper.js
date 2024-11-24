console.log("Swiper loading...");
const portfolioSwiper = new Swiper('.portfolio-swiper .swiper', {
    loop: true,
    lazy: {
        loadPrevNext: true,
    },
    
    speed: 800, 
    slidesPerView: 'auto', 
    spaceBetween: 30, 
    centeredSlides: true, 
    breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 50 },
        768: { slidesPerView: 2, spaceBetween: 70 },
        1024: { slidesPerView: 4.5, spaceBetween: 90 },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
console.log("Swiper loaded");
