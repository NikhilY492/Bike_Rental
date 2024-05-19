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

