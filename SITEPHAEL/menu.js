let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-celular')
let overlay = document.getElementById('overlay-men')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})