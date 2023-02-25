const menu = document.querySelector('.nav-down')
const menuBtn = document.querySelector('.menu-icon')
const closeBtn = document.querySelector('.close')
const section = document.querySelector('section')

const body = document.body

if(menu && menuBtn){
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    });
    closeBtn.addEventListener('click', () => {
        menu.classList.toggle('active')
        body.classList.toggle('lock')
    })
    section.addEventListener('click', () => {
        menu.classList.remove('active')
        body.classList.remove('lock')
    })
}
