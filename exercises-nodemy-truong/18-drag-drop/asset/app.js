var boxs = document.querySelectorAll('.box')
var targets = document.querySelectorAll('.target')

var currentTarget = null

targets.forEach(target => {
    target.ondragstart = function () {
        this.style.border = '6px solid #ccc'
        currentTarget = this
    }
    
    target.ondragend = function () {
        this.style.border = ''
    }
    
})

boxs.forEach(box => {
    box.ondragover = function (e) {
        e.preventDefault()

    }
    
    box.ondrop = function(e) {
        if(!box.querySelector('.target')){
            this.appendChild(currentTarget)

        }
        
    }
})