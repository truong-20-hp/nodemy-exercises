var listBtn = document.querySelectorAll('.control button')
var toasts = document.querySelector('#toasts')

listBtn.forEach(btn => {
    btn.onclick = function (e) {
        showToast (e.target.getAttribute('class'))
    }
})

var myToast = {
    success : {
        icon : '<i class="fa-regular fa-circle-check"></i>',
        type :'Success'
    },
    error : {
        icon : '<i class="fa-solid fa-circle-exclamation"></i>',
        type :'Error'
    },
    warning : {
        icon : '<i class="fa-solid fa-triangle-exclamation"></i>',
        type :'Warning'
    }
}


function showToast (status) {
    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(`${status}`)
    toast.innerHTML = `
        ${myToast[status].icon}
        <div class="toast__body">
            <div class="title">${myToast[status].type} !</div>
            <span>This is a ${myToast[status].type} message</span>
        </div>
        <i class="toast_icon fa-solid fa-xmark"></i>
        <div class="coutdown"></div>
    `
    toasts.appendChild(toast)

    setTimeout(() => {
        toast.style.animation = 'hide_toast .8s ease forwards'
    }, 10000)
    setTimeout(() => {
        toast.remove()
    }, 10000)


    var closeToast = document.querySelectorAll('.toast_icon')
    closeToast.forEach(close => {
        close.onclick = function () {
            this.parentElement.remove()
        }
    })
}

