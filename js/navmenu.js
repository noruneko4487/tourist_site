const navBtn = document.querySelector('.header-wrapper__menu-btn');
const navOpen = document.querySelector('.nav');
const closeMask = document.querySelector('.mask');

function menuDisp(){
    navOpen.classList.toggle('menu-open');
}

function close(){
    navOpen.classList.remove('menu-open')
}

navBtn.addEventListener('click', menuDisp);
closeMask.addEventListener('click', close);




