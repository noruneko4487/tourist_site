const navBtn = document.querySelector('.header-wrapper__menu-btn');
const navOpen = document.querySelector('.nav');
const targetLink = document.querySelectorAll('.nav__list__anchor');
const closeMask = document.querySelector('.mask');

function menuDisp(){
    navOpen.classList.toggle('menu-open');
    const links = [
        '#',
        '#',
        '#',
        '#',
        '#',
    ];

    

    links.forEach(function (pageLink){
        targetLink.forEach(function(targetAdd){
            targetAdd.setAttribute('href', pageLink);
        });
    });

    

    
}

function close(){
    navOpen.classList.remove('menu-open');
    targetLink.forEach(function(targetRm){
        targetRm.removeAttribute('href');
    });
}



let counter = 0;
navBtn.addEventListener('click', () => {


    
    counter++;
    if(counter % 2 !== 0){
        menuDisp();

    }else{
        close();
    }

});


closeMask.addEventListener('click', close);




