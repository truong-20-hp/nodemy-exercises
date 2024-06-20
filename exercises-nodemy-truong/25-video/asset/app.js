var video = document.querySelector('video')
var playBtn = document.querySelector('.play-pause')
var timer = document.querySelector('.timer')
var progressFill = document.querySelector('.progress-fill')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var volume = document.querySelector('.volume ')
var volInput = document.querySelector('.volume input')
var volIcon = document.querySelector('.volume i')
var volCache = 0.5
function playVideo() {
    if(video.paused) {
        video.play()
        playBtn.innerHTML = "<i class='bx bx-pause' ></i>"
    }
    else {
        video.pause()
        playBtn.innerHTML = "<i class='bx bx-play' ></i>"
    
    }

}

playBtn.onclick = function () {
    playVideo()
}

video.onclick = function () {
    playVideo()
}

function updateTime (secon) {
    var min = Math.floor(secon / 60).toString().padStart(2,'0')
    var sec = Math.floor(secon % 60).toString().padStart(2,'0')
    return `${min}:${sec}`
}

video.ontimeupdate = function () {
    timer.innerHTML = updateTime(video.currentTime) + '/' + updateTime(video.duration)
    var percentProgress = (video.currentTime / video.duration) * 100
    progressFill.style.width = `${percentProgress}%`

}

function skip (skiptime) {
    video.currentTime += skiptime
}

prev.onclick = function () {
    skip(-5)
}

next.onclick = function () {
    skip(5)
}

function changeVolIcon () {
    if(video.volume == 0) {
        volIcon.classList.remove('bx-volume-full')
        volIcon.classList.add('bx-volume-mute')

    }else {
        volIcon.classList.remove('bx-volume-mute')
        volIcon.classList.add('bx-volume-full')
    }
}

volInput.oninput = function () {
    video.volume = volInput.value
    volCache = video.volume
    changeVolIcon()
    
}

volIcon.onclick = function () {
    if(video.volume > 0) {
        video.volume = 0
        changeVolIcon()
        volInput.value = 0
       
    }else {
        video.volume = volCache
        changeVolIcon()
        volInput.value = volCache
    }
}