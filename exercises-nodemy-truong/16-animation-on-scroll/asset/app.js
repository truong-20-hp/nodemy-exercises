var contain = document.querySelector('.home__contain')
var listElAnimatin = document.querySelectorAll('.addAnimation')

function showAnimation (elememt) {
    let windowHeight = window.innerHeight
    let locaElement = elememt.getClientRects()[0]
    

    if(!(locaElement.bottom < 0 || locaElement.top > windowHeight)) {
        elememt.classList.add('start')
    }
    else {
        elememt.classList.remove('start')

    }
    // console.log(locaElement)
}



window.onscroll = function () {
    listElAnimatin.forEach((element ) => {
        showAnimation(element)
    })
}