var img = document.querySelector('.image')
var h2 = document.querySelector('h2')
var p = document.querySelector('p')
var btn = document.querySelector('button')
var loading = document.querySelectorAll('.loading')

setTimeout(() => {
    img.innerHTML = '<img src = "https://vcdn1-dulich.vnecdn.net/2021/07/16/3-1-1626444927.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=KU8IkmrM5HbtYIyyS5k1qQ" >'
    h2.innerText = 'Nodemy'
    p.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore adipisci amet iste? Quam animi dolores quae. Eligendi quia corrupti omnis'
    btn.innerText = 'Read More'

    loading.forEach(item => {
        item.classList.remove('loading')
    })
},3000)