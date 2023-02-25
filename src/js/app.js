const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const menu = document.getElementById('menu')
const menuToggle = () => {
    menu.classList.toggle('open')
}
openMenu.addEventListener('click', menuToggle)
closeMenu.addEventListener('click', menuToggle)