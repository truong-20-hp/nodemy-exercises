 var span = document.querySelector('.wrapper span')
 var originText = span.innerText

var index = 0
var isForward = true

setInterval(() => {
    if(isForward) {
        span.innerText = originText.substring(0, index)
        span.style.animation = 'blink 1s ease infinite'
        index++

        if(index > originText.length) {
            isForward = false
        }
    }
},200)

setInterval(() => {
    if(!isForward) {
        span.innerText = originText.substring(0, index)
        index--
        
        if(index <= 0) {
            isForward = true
        }
    }
},30)