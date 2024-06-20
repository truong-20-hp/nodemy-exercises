var input = document.querySelector('input')
var eye = document.querySelector('.form-input i')
var lowerCase = document.querySelector('.lowerCase')
var upperCase = document.querySelector('.upperCase')
var number = document.querySelector('.number')
var symbol = document.querySelector('.symbol')
var charactor = document.querySelector('.charactor')


eye.onclick = function () {
    if(input.type == 'text') {
        input.type = 'password'
        eye.classList.add('fa-eye-slash')
        eye.classList.remove('fa-eye')
    }
    else {
        input.type = 'text'
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye')
    }
}

input.oninput = function () {
    var val = input.value;

    /[a-z]/.test(val) ? lowerCase.classList.add('valid') : lowerCase.classList.remove('valid');
    /[A-Z]/.test(val) ? upperCase.classList.add('valid') : upperCase.classList.remove('valid');
    /[0-9]/.test(val) ? number.classList.add('valid') : number.classList.remove('valid');
    /[\W]/.test(val) ? symbol.classList.add('valid') : symbol.classList.remove('valid');
    val.length >=8 ? charactor.classList.add('valid') : charactor.classList.remove('valid');
}