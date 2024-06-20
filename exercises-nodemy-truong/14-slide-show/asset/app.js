var avatar = document.querySelector('.avatar')
var listImg = document.querySelectorAll('.item-img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')

var currentIndex = 0
showImg(0)
listImg.forEach((img,index) => {
    img.onclick = function () {

        avatar.style.opacity = '0'
        setTimeout(() => {
            avatar.style.opacity = '1'
            showImg (index)
        }, 100)

    }
})

function showImg (index) {
    currentIndex = index
    avatar.src = listImg[currentIndex].src
    listImg.forEach(item => {
        if(item.parentElement.classList.contains('active')) {
            item.parentElement.classList.remove('active')
        }
    })
    listImg[currentIndex].parentElement.classList.add('active')
}

next.onclick = function () {
    if(currentIndex == listImg.length - 1) {
        currentIndex = 0
    }else {
        currentIndex++

    }
    avatar.style.animation = ''

    setTimeout(() => {
        showImg(currentIndex)
        avatar.style.animation = 'slideRight 0.4s linear'

    }, 100)

}

prev.onclick = function () {
    if(currentIndex == 0) {
        currentIndex = listImg.length -1
    }else {
        currentIndex--

    }
    avatar.style.animation = ''

    setTimeout(() => {
        showImg(currentIndex)
        avatar.style.animation = 'slideLeft 0.4s linear'

    }, 100)

}