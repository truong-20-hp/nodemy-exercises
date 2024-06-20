var play = document.querySelector('.play')
var video = document.querySelector('video')
var container = document.querySelector('.container')
var timer = document.querySelector('.timer')
var progressFill = document.querySelector('.progress-fill')
var seekPrev = document.querySelector('.seek-prev')
var seekNext = document.querySelector('.seek-next')
var volInput = document.querySelector('.volume input')
var volIcon = document.querySelector('.volume i')
var volume = document.querySelector('.volume')
var fullCreen = document.querySelector('.full-creen')
var volCache = 0.5

function playVideo () {
    if(video.paused) {
        video.play()
        play.innerHTML = "<i class='bx bx-pause'></i>"
    }
    else {
        video.pause()
        play.innerHTML = "<i class='bx bx-play'></i>"
    }
}

play.onclick = function () {
    playVideo()
}

video.onclick = function () {
    playVideo()
}

video.onended = function () {
    play.innerHTML = "<i class='bx bx-play'></i>"

}

function updateTime (sec) {
    var m = Math.floor(sec / 60).toString().padStart(2 , '0')
    var s = Math.floor(sec % 60).toString().padStart(2 , '0')
    return `${m}:${s}`
}

video.ontimeupdate = function () {
    timer.innerHTML = updateTime(video.currentTime) + '/' + updateTime(video.duration)
    var percentProgress = this.currentTime / this.duration * 100
    progressFill.style.width = percentProgress + '%'
}

seekPrev.onclick = function () {
    video.currentTime -= 5
}

seekNext.onclick = function () {
    video.currentTime += 5
}

function volMute() {
    volIcon.classList.add('bx-volume-mute')
    volIcon.classList.remove('bx-volume-full')

}

function voiFull () {
    volIcon.classList.remove('bx-volume-mute')
    volIcon.classList.add('bx-volume-full')

}

volInput.oninput = function () {
    video.volume = volInput.value
    volCache = video.volume
    if(volInput.value > 0) {
        voiFull()
    }
    else {
        volMute()
    }

}

volIcon.onclick = function () {
    if(video.volume > 0) {
        video.volume = 0
        volInput.value = 0
        volMute()
    }
    else {
        video.volume = volCache
        volInput.value = volCache
        voiFull()
    
    }

}

fullCreen.onclick = function () {
    container.classList.toggle('full')
}

video.ondblclick = function () {
    container.classList.toggle('full')

}