
var container = document.querySelector('.container')

for (let i = 0 ; i < 300 ; i++) {
    
    var square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)

    square.onmouseenter = function (e) {
        var color = randomColor()
        e.currentTarget.style.backgroundColor = color
        e.currentTarget.style.boxShadow = `0 0 10px ${color} , 0 0 100px ${color}`
    }
    square.onmouseleave = function (e) {
        e.target.style.backgroundColor = '#1d1d1d'
        e.target.style.boxShadow = ''
    }
}


function randomColor () {
    var chartColor = '123456789abcdef'
    var color = '#'

    for ( let i = 0 ; i < 6 ; i++) {
        color += chartColor[Math.floor(Math.random() * chartColor.length)]
    }
    return color
}
console.log(randomColor())