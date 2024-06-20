
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('confirmpassword')
const form = document.querySelector('form')

const listInput = [
    username,
    email,
    password,
    password2
]

function error  (input, message) {
    const formControl = input.parentElement
    const span = formControl.querySelector('span')
    formControl.classList.add('error')
    span.innerText = message
}

function success  (input) {
    const formControl = input.parentElement
    const span = formControl.querySelector('span')
    formControl.classList.remove('error')
    span.innerText = ''
}

function checkRequired (listInput) {
    let isRequired = true
    listInput.forEach(input => {
        input.onblur = function() {
            if(input.value.trim() === '') {
                error(input, 'Vui lòng nhập trường này')
                isRequired = false
            }
            else {
                success(input)
            }
        }
    })
    return isRequired
}

function checkEmail (input) {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    input.onblur = function () {
        if(regex.test(input.value)) {
            success(input)
        } else {
            error(input , 'Vui long nhap Email')
        }

    }
}


function checkLength (input , min) {
    input.onblur = function () {
        if(input.value > min) {
            success(input)
        }else {
            error(input, ` vui long nhap toi thieu ${min} ki tu`)
        }

    }
}

function checkPasswordMatch (input1, input2) {
    input2.onblur = function () {
        if(input2.value === input1.value) {
            success(input2)
        }
        else {
            error(input2, 'Mat khau khong trung khop')
        }
    }
}



    checkRequired(listInput)
    checkEmail(email)
    checkLength(password, 6)
    checkPasswordMatch(password, password2)

form.onsubmit = function (e) {
    e.preventDefault()

}
