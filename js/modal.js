const modal = document.querySelector('.campain-modal');
const closeMark = document.querySelector('.fa-xmark');

setTimeout(() => {
    modal.style.display = 'block';
}, 1000);

function modalHide(){
    modal.style.display = 'none';
}

closeMark.onclick = modalHide;






