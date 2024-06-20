function weatherUI(weather) {
    console.log(weather)
    let city =document.querySelector('.city')
    let country =document.querySelector('.country')
    let time =document.querySelector('.time')
    let value =document.querySelector('.value')
    let shortDecs =document.querySelector('.short-decs')
    let visibility =document.querySelector('.visibility span')
    let wind =document.querySelector('.wind span')
    let humidity =document.querySelector('.humidity span')
    


    city.innerText = weather.name
    country.innerText = weather.sys.country
    time.innerText = new Date().toLocaleString()
    value.innerText = Math.round(weather.main.temp - 273.15)
    shortDecs.innerText = weather.weather[0].main
    visibility.innerText = (weather.visibility) / 1000 + 'km'
    wind.innerText = weather.wind.speed+ 'm/s'
    humidity.innerText = weather.main.humidity+ '%'


}


let getSearch = document.querySelector('.weather__input')
getSearch.onkeydown = function(e) {
    if(e.which === 13) {
        getWeather(getSearch.value)
    }
}

async function getWeather (input) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d2264798fdd828beadccb6ad3f19e1dd`
    let res = await fetch(apiURL)
    let weather = await res.json()
   weatherUI(weather)
}   

getWeather('haiphong')