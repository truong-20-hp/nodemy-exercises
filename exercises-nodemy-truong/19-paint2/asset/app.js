let color = document.querySelector('.color')
let pen = document.querySelector('.pen')
let eraser = document.querySelector('.eraser')
let sub = document.querySelector('.sub')
let size = document.querySelector('.size')
let sum = document.querySelector('.sum')
let save = document.querySelector('.save')
let clear = document.querySelector('.clear')
let canvas = document.querySelector('canvas')

var ctx = canvas.getContext('2d')

var pos1 = {
    x: 0,
    y: 0
}

var pos2 = {
    x: 0,
    y: 0
}
var pos3 = {
    x: 0,
    y: 0
}


var isPaint = false
var colorPaint = '#000'
var sizeWidth = 5
size.innerText = sizeWidth

document.onmousedown = function (e) {

    pos1 = {
        x: e.offsetX,
        y: e.offsetY
    }
    isPaint = true
}

document.onmouseup = function (e) {
    isPaint = false
    pos3 = {
        x: e.offsetX,
        y: e.offsetY
    }
}

canvas.onmousemove = function (e) {
    if(isPaint) {
        pos2 = {
            x: e.offsetX,
            y: e.offsetY
        }
    

        ctx.beginPath()
        ctx.strokeStyle = colorPaint
        ctx.strokeRect(pos1.x , pos1.y , pos3.x, pos3.y)

        // ctx.beginPath()
        // ctx.moveTo(pos1.x, pos1.y)
        // ctx.lineTo(pos2.x, pos2.y)
        // ctx.strokeStyle = colorPaint
        // ctx.lineWidth = sizeWidth - 3
        // ctx.lineCap = 'round'
        // ctx.stroke()
    
        // pos1.x = pos2.x
        // pos1.y = pos2.y
    }
}
color.onchange = function(e) {
    colorPaint = e.target.value
}

pen.onclick = function () {
    colorPaint = color.value
    
}

eraser.onclick = function () {
    colorPaint = '#fff'

}

sub.onclick = function () {
    if(sizeWidth <=5) {
        sizeWidth = 5
    }
    else{
        sizeWidth -= 5
    }

    size.innerText = sizeWidth
    console.log(sizeWidth)
}

sum.onclick = function () {
   sizeWidth >= 30 ? sizeWidth = 30 : sizeWidth +=5
   size.innerText = sizeWidth
   console.log(sizeWidth)
}

clear.onclick = function () {
    ctx.clearRect(0,0,canvas.width, canvas.height)
}

save.onclick = function () {
    var paintImg = canvas.toDataURL()
    save.setAttribute('href' , paintImg)
}

// var square = document.querySelector('.square')
// square.onfocus = function () {
//     console.log(pos1 , pos2)


//     // ctx.fillStyle = colorPaint
    // ctx.strokeRect(pos1.x, pos1.y, , 100)
// }