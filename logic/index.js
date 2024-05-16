

document.addEventListener('DOMContentLoaded', () => {
    registerNavbarEvents()
})


const registerNavbarEvents = () => { 
    const navbar = document.querySelector('.header nav')
    const hamburguerMenuButton = navbar.querySelector('.hamburger-menu-btn')
    const mobileMenu = navbar.querySelector('.mobile-menu')
    const closeMobileMenuButton = mobileMenu.querySelector('.close-mobile-menu-btn')

    hamburguerMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('mobile-menu_open')
    })

    closeMobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile-menu_open')
    })
}
