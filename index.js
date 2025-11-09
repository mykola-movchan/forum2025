const menu = document.querySelector('.menu');
const menuButton = document.querySelector('#menu-toggle');

function handleMenuButton(){
    menu.classList.toggle('hidden');
}

menuButton.addEventListener('click', handleMenuButton);