'use strict';
const closeBtn = document.querySelector('.close-modal');
const openBtns = document.querySelectorAll('.show-modal');
const overlayDiv = document.querySelector('.overlay');
const modalDiv = document.querySelector('.modal');


const closeModal = function() {
    overlayDiv.classList.toggle('hidden');
    modalDiv.classList.toggle('hidden');
};
for (let i = 0; i < openBtns.length; i++) {
    openBtns[i].addEventListener('click', closeModal);
};

closeBtn.addEventListener('click', closeModal);
overlayDiv.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
})