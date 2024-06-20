let images = document.querySelectorAll('.image img')
let modal = document.querySelector('.modal')
let modalImg = document.querySelector('.modal__inner img')
let modalClose = document.querySelector('.modal__close')
let prevBtn = document.querySelector('.modal__prev')
let nextBtn = document.querySelector('.modal__next')
let prevIcon = document.querySelector('.modal__prev i')
let nextIcon = document.querySelector('.modal__next i')



let currentIndex = 0

function showModal () {
    currentIndex == 0 ? prevBtn.classList.add('hide') : prevBtn.classList.remove('hide')
    currentIndex === images.length - 1 ? nextBtn.classList.add('hide') : nextBtn.classList.remove('hide')

    modalImg.src = images[currentIndex].src
    modal.classList.add('show')

    console.log([modalImg])
}

images.forEach((image, index) => {
    image.addEventListener('click', function() {
        currentIndex = index
        showModal()
    })
})

modalClose.addEventListener('click', function() {
    modal.classList.remove('show')
})

nextBtn.addEventListener('click', function() {
   
    currentIndex++
    showModal()
})

prevBtn.addEventListener('click', function() {
    currentIndex > 0 ? currentIndex-- : undefined
    showModal()
})



document.onkeydown = function(e) {
    if(e.which == 27) {
        modal.classList.remove('show')

    }
    
}
    
