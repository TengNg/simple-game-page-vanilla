const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')
const navbarLogo = document.querySelector('.navbar-logo')
const navbarMenuLinks = document.querySelectorAll('.navbar-link')

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    navbarMenuLinks.forEach(item => {
        item.addEventListener('click', () => {
            setTimeout(() => {
                menuLinks.classList.remove('active'), 1000
                menu.classList.remove('is-active')
            })
        })
    })
})

navbarLogo.addEventListener('click', () => {
    const menuEl = document.querySelector('.is-active')
    if (window.innerWidth < 1037 && menuEl) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
})

navbarLogo.addEventListener('mouseover', () => {
    navbarLogo.childNodes[1].classList = "far fa-grin-alt"
})
navbarLogo.addEventListener('mouseout', () => {
    navbarLogo.childNodes[1].classList = "far fa-meh-blank"
})

