var products = document.querySelector('.products')

var urlApi = 'https://fakestoreapi.com/products'
var listProduct = []

getData()
async function getData () {
    var getApi = await fetch(urlApi)
    var resultApi = await getApi.json() 

    products.innerHTML = ''
    resultApi.forEach (item => {
        var product = document.createElement('div')
        product.classList.add('product')
        product.innerHTML = `
            <img src="${item.image}" alt="">
            <div class="info">
                <div class="name">${item.title}</div>
                <div class="price">${item.price}</div>
            </div>
        `
        products.appendChild(product)
        listProduct.push(product)
    })

    
}

function filter (inputValue) {
   listProduct.forEach(item => {
    if(item.innerText.toLowerCase().includes(inputValue.toLowerCase())) {
        item.classList.remove('hide')
    }
    else {
        item.classList.add('hide')
    }
   })
}

var input = document.querySelector('.search input')
input.oninput = function(e) {
    filter(e.target.value.trim())
}