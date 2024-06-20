let openModal = document.querySelector('.modal__open__btn')
let modal = document.querySelector('.modal')
let modalInner = document.querySelector('.modal__inner')
let modalIcon = document.querySelector('.modal__header i')
let modalClose = document.querySelector('.modal__close')

function toggleModal () {
    modal.classList.toggle('open')
}
openModal.onclick = toggleModal
modal.onclick = toggleModal
modalIcon.onclick = toggleModal
modalClose.onclick = toggleModal

modalInner.onclick = function(e) {
    e.stopPropagation()
}
