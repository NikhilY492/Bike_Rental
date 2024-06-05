document.querySelector('#login').onclick=() =>{
    document.querySelector('.login-form-container').classList.toggle('active')
}
document.querySelector('#close-login-form').onclick=() =>{
    document.querySelector('.login-form-container').classList.remove('active')
}
document.querySelector('#check').onclick=() =>{
    document.querySelector('.checkout').classList.toggle('active')
}
document.querySelector('#close-checkout').onclick = () => {
    document.querySelector('.checkout').classList.remove('active');
}

document.querySelector('#signup').onclick=() =>{
    document.querySelector('.sign-form-container').classList.toggle('active')
}
document.querySelector('#close-sign-form').onclick=() =>{
    document.querySelector('.sign-form-container').classList.remove('active')
    document.querySelector('.login-form-container').classList.remove('active')
}
function login(){
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;

    if (username.trim() !== "" && password.trim() !== "") {
        localStorage.setItem("username", username);
        window.open('../proj/loggedin.html', '_self');
    } else {
        window.alert("username or password is wrong");
    }
    return false; // prevent form submission
}
function success(){
    window.alert("Account Created Successfully")
}
//swiper starts here//

var swiper = new Swiper (".featured-slider",{
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      keyboard: {
        enabled: true,
      },
    breakpoints: {
    0: {
    slidesPerView: 1,
    },
    768: {
    slidesPerView: 2,
    },
    1040:{
        slidesPerView:4,
        spaceBetween: 30,
        freeMode: true,
    },
    
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
    });


var swiper = new Swiper (".vehicles-slider",{
        loop:true,
        grabCursor:true,
        centeredSlides:true,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          keyboard: {
            enabled: true,
          },
        breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1040:{
            slidesPerView:4,
            spaceBetween: 30,
            freeMode: true,
        },
        
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
        });
function hmmm(){
    window.alert("User must be logged in to proceed")
}
// for payment page
