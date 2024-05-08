document.querySelector('#login').onclick=() =>{
    document.querySelector('.login-form-container').classList.toggle('active')
}
document.querySelector('#close-login-form').onclick=() =>{
    document.querySelector('.login-form-container').classList.remove('active')
}

var swiper = new Swiper (".featured-slider",{
slidesPerView: 1,
spaceBetween: 20,
loop:true,
grabCursor:true,
centeredSlides:true,
autoplay: {
delay: 9500,
disableOnInteraction: false,
},
pagination: {
el: ".swiper-pagination",
clickable: true,
},
breakpoints: {
0: {
slidesPerView: 1,
},
768: {
slidesPerView: 2,
},
1040:{
    slidesPerView:3,
},
},
});
