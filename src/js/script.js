function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');

    const menuIcon = document.getElementsByClassName('fa-bars');
    menuIcon[0].classList.toggle('fa-xmark');
}