var listImg = document.querySelectorAll('.image')
var result = document.querySelector('.result')

listImg.forEach(item => {
    item.onmousemove = function(e) {

        result.classList.remove('hide')

        var img = item.querySelector('img')
        result.style.left = `${e.clientX}px`
        result.style.top = `${e.clientY}px`

        let percenX =( e.offsetX / this.offsetWidth) * 100
        let percenY = (e.offsetY / this.offsetHeight) * 100

        result.style.backgroundImage = `url(${img.src})`
        result.style.backgroundPosition = `${percenX}% ${percenY}%`
    }
})

function addHide () {
    listImg.forEach(item => {
        item.onmouseleave = function () {
            result.classList.add('hide')
            console.log('lll')
        }
    })
}
addHide()