const burger = (menuSelector, burgerSelector) => {
    const menu = document.querySelector(menuSelector),
        overlay = document.querySelector('.side-menu__overlay'),
        hamburger = document.querySelector(burgerSelector);

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
    overlay.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

export default burger;