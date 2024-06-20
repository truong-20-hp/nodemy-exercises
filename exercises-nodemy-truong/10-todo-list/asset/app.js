var input = document.querySelector('input')
var form = document.querySelector('form')
var todoList = document.querySelector('.list')


// lắng nghe sự kiện submit form :
form.onsubmit = function (e) {
    e.preventDefault()


    var val = input.value
    if(val !== '') {
        todoHandle({
            text: val
        })
        saveItem()
    }

    input.value = ''


}


// hàm xử lí khi thêm, xóa, đánh dấu các item :
function todoHandle (todo) {
    var li = document.createElement('li')
    li.classList.add('item')
    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fa-regular fa-trash-can"></i>
    `
    if(todo.staus === 'item completed') {
        li.classList.add('completed')
    }
    todoList.appendChild(li)


    // đánh dấu các item :
    li.onclick = function () {
        li.classList.toggle('completed')
        saveItem()

    }

    // xóa các item:
    var clearIcon = li.querySelector('i')
    clearIcon.onclick = function () {
        li.remove()
        saveItem()

    }
}

// hàm lưu dữ liệu vào localStorage : 
function saveItem () {
    var listItem = document.querySelectorAll('li')
    
    var arrayItem = []
    listItem.forEach(item => {
        var text = item.querySelector('span').innerText
        var staus = item.getAttribute('class')
        arrayItem.push({
            text,
            staus
        })
    })


    localStorage.setItem('listItem' , JSON.stringify(arrayItem))
}

// hàm in data từ local ra trinh duyệt: 
function outData () {
    var data = JSON.parse(localStorage.getItem('listItem'))
    data.forEach(item => {
        todoHandle(item)
    })
}

outData()
