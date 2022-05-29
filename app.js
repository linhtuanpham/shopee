// Show form register when click
const registerBtn = document.querySelector('.js-register')
const loginBtn = document.querySelector('.js-login')

const modalRegister = document.querySelector('.modal-register')
const modalLogin = document.querySelector('.modal-login')

const modalBodyLogin = document.querySelector('.modal__body-login') 
const modalBodyRegister = document.querySelector('.modal__body-register') 

const backLoginBtn = document.querySelector('.btn-back-login')
const backRegisterBtn = document.querySelector('.btn-back-register')

const switchLogin = document.querySelector('.js-switch-login') 
const switchRegister = document.querySelector('.js-switch-register') 

function showModalRegister () {
    modalRegister.classList.add('modal-show')
}

function hideModalRegister () {
    modalRegister.classList.remove('modal-show')
}

function showModalLogin () {
    modalLogin.classList.add('modal-show')
}

function hideModalLogin () {
    modalLogin.classList.remove('modal-show')
}

function switchModalLogin () {
    modalRegister.classList.remove('modal-show')
    modalLogin.classList.add('modal-show')
}

function switchModalRegister () {
    modalLogin.classList.remove('modal-show')
    modalRegister.classList.add('modal-show')
}

registerBtn.addEventListener('click', showModalRegister)
loginBtn.addEventListener('click', showModalLogin)

switchLogin.addEventListener('click', switchModalLogin)
switchRegister.addEventListener('click', switchModalRegister)

backLoginBtn.addEventListener('click', hideModalLogin)
backRegisterBtn.addEventListener('click', hideModalRegister)

modalLogin.addEventListener('click', hideModalLogin)
modalRegister.addEventListener('click', hideModalRegister)


modalBodyLogin.addEventListener('click', function(event) {
    event.stopPropagation()
})
modalBodyRegister.addEventListener('click', function(event) {
    event.stopPropagation()
})