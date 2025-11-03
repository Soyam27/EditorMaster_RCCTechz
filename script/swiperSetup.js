
const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    allowTouchMove: true,
    simulateTouch: true,
    touchEventsTarget: "wrapper",
    noSwipingClass: "text-element",
    noSwipingSelector: ".text-element, .image-element, .resize-handle",
});