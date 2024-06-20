var listCounter = document.querySelectorAll('.counter')



function counter (el) {
    var Elnumber = el.querySelector('.number')
    var to = parseInt(Elnumber.innerText)
    var count = 0
    var setCount = setInterval(() => {
        count+= to / 800
        if( count >= to) {
            clearInterval(setCount)
            Elnumber.innerText = to
        }
        else {

            Elnumber.innerText = Math.ceil(count)
            
        }
    },1)
}

listCounter.forEach(item => {
    counter(item)
})