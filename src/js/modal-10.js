(() => {

  const refs = {

    openModalBtn: document.querySelector('[data-modal-open-01]'),
   
    closeModalBtn: document.querySelector('[data-modal-close-01]'),
  
    modal: document.querySelector('[data-modal-01]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {

    refs.modal.classList.toggle('is-open');
  }

  
})();