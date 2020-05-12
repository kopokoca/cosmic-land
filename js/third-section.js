let modalWindow = document.querySelector('.modal');
let modalBlock = document.querySelector('.modal__block');
let closeModal = document.querySelector('.modal__close');
let img1 = document.getElementById('photos1');
let img2 = document.getElementById('photos2');

function openThisModal(isFirst) {
  modalWindow.style.display = 'flex';
  if(!isFirst) {
    modalBlock.classList.add('modal__block_photo2');
  } else {
    modalBlock.classList.add('modal__block_photo1');
  }
}

function closeThisModal() {
  modalWindow.style.display = 'none';
  modalBlock.classList.remove('modal__block_photo1');
  modalBlock.classList.remove('modal__block_photo2');
}

closeModal.addEventListener('click', closeThisModal);
img1.addEventListener('click', openThisModal.bind(null, true));
img2.addEventListener('click', openThisModal.bind(null, false));