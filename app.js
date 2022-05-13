let btnPlay = document.querySelector('.play-song')

let btnPause = document.querySelector('.pause-song')

let btnVolUp = document.querySelector('.volume-up')

let btnVolDown = document.querySelector('.volume-down')

let contenedor = document.querySelector('.all-cont')

let volPro = document.querySelector('progress')

const audio = document.createElement('audio')


audio.className = 'audio'

contenedor.appendChild(audio)

let numero =  0

btnPlay.addEventListener('click', () =>{
    let valueA = document.querySelector('.link-song').value
    audio.setAttribute('src', valueA)
    audio.play()
    btnPause.addEventListener('click', () =>{
        audio.pause()
    })
    btnVolUp.addEventListener('click', () =>{
        numero = numero + 0.1
        volPro.setAttribute('value', numero)
        audio.volume += 0.1
        
        
    })
    btnVolDown.addEventListener('click', () =>{
        numero = numero - 0.1
        volPro.setAttribute('value', numero)
        audio.volume -= .1
        
    })

})





