let content = document.querySelector('.content')
let input = document.querySelector('.content__input')




let tags = ['ReactJs', 'PHP']


// nếu không gán content.innerHTML ='' thì khi dùng toán tử +=
// thì chỉ thêm phần tử vào cuối khối content mà không ghi đè input
function render() {
    content.innerHTML = ''
    tags.forEach((tag, index) => {
        content.innerHTML += `
            <div class="content__tags">${tag}
                <i onclick = removeTags(${index}) class='content__icon bx bx-x'></i>
            </div>
        `
    })

    // khi get input ở trên thì DOM đã lấy ra phần tử input và lưu vào bộ nhớ
    // khi bị ghi đè thì có thể gọi lại
    content.appendChild(input)
    input.focus()

}
render()

// hàm xử lí sự kiện khi nhấn ENTER để thêm tags và render ra màn hình:
document.addEventListener('keydown', function (e) {
   if(e.which === 13) {
    var valueTrim = input.value.trim()
    if(valueTrim !== ''){
        tags.push(valueTrim)
        input.value = ''
        render()
    }
   }
})

// hàm xử lí khi ấn vào X thì xóa tag:
function removeTags (index) {
    tags.splice(index,1)
    render()
}


// hàm xử lí khi ấn remove all :
let removeAll = document.querySelector('.remove-all')
removeAll.addEventListener('click',function () {
    tags = []
    input.value= ''
    render()


})

