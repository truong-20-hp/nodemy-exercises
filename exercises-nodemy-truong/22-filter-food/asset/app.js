var menuBtn = document.querySelectorAll('.menu-btn')
var listFoodsImg = document.querySelectorAll('.food img')
var container = document.querySelector('.container')
var foods = document.querySelector('.foods')


var arr = []

listFoodsImg.forEach(food => {
    arr.push({
        src: food.src,
        type: food.getAttribute('type')
    })
})

console.log(arr)

function activeBtn (btnTarget) {
    menuBtn.forEach(btn => {
        btn.classList.remove('active')
    })

    btnTarget.classList.add('active')
}

menuBtn.forEach(btn => {
    
    btn.onclick = function(e) {
        activeBtn(e.target)

        
        var typeMenu = e.target.getAttribute('type')
        if(typeMenu === 'all') {
            render(arr)
            return

        }
        var listFood = arr.filter((food) => {
            return food.type === typeMenu
        })
        console.log(listFood)
        render(listFood)
    }
})

function render (element) {
    foods.innerHTML = ''
    element.forEach(item => {
        console.log(item)
        var img = document.createElement('img')
        img.setAttribute('type', item.type)
        img.src = item.src

        var food = document.createElement('div')
        food.classList.add('food')

        food.appendChild(img)
        foods.appendChild(food)
    })

 
    
   

    
}