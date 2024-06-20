var inputImg = document.querySelector('#input-img')
var preview = document.querySelector('.preview')

inputImg.onchange = function() {

    let file = inputImg.files[0]

    // console.log(file)
    if(!file) return

    if(file.type !== 'image/jpeg') {
        alert('Định dạng không phải JPG')
        return
    }

    if (file.size / (1024 * 1024) > 5) {
        alert('File quá nặng không thể tải lên')
        return 
    }


    // sử dụng base64:
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    console.log(fileReader)
    fileReader.onloadend = function (e) {
        img.src = this.result
    }
    
    let img = document.createElement('img')
    preview.appendChild(img)
    

    
    // sử dụng Blob:
//     console.log(URL.createObjectURL(file))
//     img.src = (URL.createObjectURL(file))
}