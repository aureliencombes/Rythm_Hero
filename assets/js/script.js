////////////////////////////////////////////////////
//                   Variables                    //
////////////////////////////////////////////////////

const container = document.querySelector('.container')
const canvas = document.querySelector('.canvas')
const context = canvas.getContext('2d')


canvas.width = window.innerWidth / 2
canvas.height = window.innerHeight


let currentSong = 0
const song1 = document.querySelector('.song1')
const SelectionSong1 = document.querySelector('.s1')
const gameMenu = document.querySelector('.gameMenu')

const count = () =>{
    if(timeBeforeStart > 0){
        context.beginPath()
        context.font = '256px Montserrat'
        context.fillStyle ='#ce6060'
        context.fillText(timeBeforeStart, canvas.width / 2.5, canvas.height / 2+5)
        context.fillStyle ='#ff7675'
        context.fillText(timeBeforeStart, canvas.width / 2.5, canvas.height / 2)
    }
}


const finalScorePopup = document.querySelector('.finalScore')

const finalScore = () =>{
    finalScorePopup.style.display = 'inherit'
    finalScorePopup.innerHTML = '<h1>You scored ' + score + ' points !</h1><a href="#"> Cool !</a>'
}

let timeBeforeStart = 9

const clock = () =>{
    if(timeBeforeStart < 1){
        window.clearInterval(timer)
    }
    timeBeforeStart --
}


SelectionSong1.addEventListener('click', () =>
{
    currentSong = song1
    gameMenu.style.display = 'none'
    gameLoop()
    const timer = setInterval(clock,1000)
    setTimeout(finalScore,65000)
    currentSong.play()
})



// text buttons
const aBtn='A'
const zBtn='Z'
const eBtn='E'
const rBtn='R'



// grid position
const line1 = canvas.width / 5*1
const line2 = canvas.width / 5*2
const line3 = canvas.width / 5*3
const line4 = canvas.width / 5*4





////////////////////////////////////////////////////
//                    RESIZE                      //
////////////////////////////////////////////////////

// window resize

window.addEventListener('resize', () =>
{
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})





////////////////////////////////////////////////////
//                   Draw game                    //
////////////////////////////////////////////////////

context.font = '15px Montserrat'
context.fillStyle ='#ff7675'
context.fillText(aBtn, line1-5, canvas.height / 10 * 9.3)
context.fillText(zBtn, line2-5, canvas.height / 10 * 9.3)
context.fillText(eBtn, line3-5, canvas.height / 10 * 9.3)
context.fillText(rBtn, line4-5, canvas.height / 10 * 9.3)

// circles

context.beginPath()

context.lineWidth = 3
context.strokeStyle ='#ff7675'


context.arc(line1, canvas.height / 10 * 9.25, 25, 0, Math.PI *2, false)
context.stroke()
context.beginPath()
context.arc(canvas.width / 5*2, canvas.height / 10 * 9.25, 25, 0, Math.PI *2, false)
context.stroke()
context.beginPath()
context.arc(line3, canvas.height / 10 * 9.25, 25, 0, Math.PI *2, false)
context.stroke()
context.beginPath()
context.arc(line4, canvas.height / 10 * 9.25, 25, 0, Math.PI *2, false)
context.stroke()
context.beginPath()



const background = () => 
{

// Draw the vertical lines
context.beginPath()
context.lineWidth = 4
context.strokeStyle = '#fab1a0'

context.moveTo(line1 ,0)
context.lineTo(line1 , canvas.height/10*8.7)

context.moveTo(canvas.width / 5*2 ,0)
context.lineTo(canvas.width / 5*2 , canvas.height/10*8.7)

context.moveTo(line3 ,0)
context.lineTo(line3 , canvas.height/10*8.7)

context.moveTo(line4 ,0)
context.lineTo(line4 , canvas.height/10*8.7)


context.stroke()


context.beginPath()
context.strokeStyle = '#ff7675'
context.lineWidth = 5
context.moveTo(0 , canvas.height / 10 * 8)
context.lineTo(canvas.width  , canvas.height / 10 * 8)
context.stroke()
}


////////////////////////////////////////////////////
//                    Controls                    //
////////////////////////////////////////////////////

const A = {
    key: 65,
    posX: line1
    }

const Z = {
    key: 90,
    posX: line2
    }

const E = {
    key: 69,
    posX: line3
    }
const R = {
    key: 82,
    posX: line4
    }

pressedKey = 0

const buttonControl = () => {

    document.addEventListener('keydown', (event) => {
        

        if (event.keyCode == A.key){
            
            context.beginPath()
            context.fillStyle ='#ff7675'
            context.arc(line1, canvas.height / 10 * 9.25, 25, 0, Math.PI *2, false)
            context.fill()

            context.beginPath()
            context.fillStyle ='#FFFFFF'
            context.fillText(aBtn, line1-5, canvas.height / 10 * 9.3)

            pressedKey = line1
        }
        if (event.keyCode == Z.key){

            context.beginPath()
            context.fillStyle ='#ff7675'
            context.arc(line2, canvas.height / 10 * 9.25, 25, 0, Math.PI *2, false)
            context.fill()

            context.beginPath()
            context.fillStyle ='#FFFFFF'
            context.fillText(zBtn, line2-5, canvas.height / 10 * 9.3)

            pressedKey = line2
        }
        if (event.keyCode == E.key){

            context.beginPath()
            context.fillStyle ='#ff7675'
            context.arc(line3, canvas.height / 10 * 9.25, 25, 0, Math.PI *2, false)
            context.fill()

            context.beginPath()
            context.fillStyle ='#FFFFFF'
            context.fillText(eBtn, line3-5, canvas.height / 10 * 9.3)

            pressedKey = line3
        }
        if (event.keyCode == R.key){
            context.beginPath()
            context.fillStyle ='#ff7675'
            context.arc(line4, canvas.height / 10 * 9.25, 25, 0, Math.PI *2, false)
            context.fill()

            context.beginPath()
            context.fillStyle ='#FFFFFF'
            context.fillText(rBtn, line4-5, canvas.height / 10 * 9.3)

            pressedKey = line4
        }
    })
    
    document.addEventListener('keyup', (event) => {
            
            pressedKey = 0

            context.clearRect(0 , canvas.height/10*8.7, canvas.width, canvas.height);

            context.fillStyle ='#ff7675'
            context.lineWidth = 3
            
            
            context.beginPath()
            context.fillText(aBtn, line1-5, canvas.height / 10 * 9.3)
            context.arc(line1, canvas.height / 10 * 9.25, 25, 0, Math.PI *2, false)
            context.stroke()

            context.beginPath()
            context.fillText(zBtn, line2-5, canvas.height / 10 * 9.3)
            context.arc(line2, canvas.height / 10 * 9.25, 25, 0, Math.PI *2, false)
            context.stroke()

            context.beginPath()
            context.fillText(eBtn, line3-5, canvas.height / 10 * 9.3)
            context.arc(line3, canvas.height / 10 * 9.25, 25, 0, Math.PI *2, false)
            context.stroke()

            context.beginPath()
            context.fillText(rBtn, line4-5, canvas.height / 10 * 9.3)
            context.arc(line4, canvas.height / 10 * 9.25, 25, 0, Math.PI *2, false)
            context.stroke()

    })

}

////////////////////////////////////////////////////
//                     Score                      //
//////////////////////////////////////////////////// 

let score = 0

const displayScore = () => 
{
    context.font = '16px Montserrat'
    context.fillStyle ='#ff7675'   
    context.fillText(score, canvas.width / 15, canvas.height / 15)
}





////////////////////////////////////////////////////
//                  game mechanic                 //
////////////////////////////////////////////////////

let currentTime = 0

const readSheet = () =>
{
    for(i = 0; i < musicSheet.length; i++)
    {
        if( musicSheet[i].posY < canvas.height/ 10 * 8.2 && currentTime >= musicSheet[i].displayTime)
        {
            context.fillStyle ='#ff7675'   
            context.fillRect( musicSheet[i].posX-15, musicSheet[i].posY,30, 30)

            musicSheet[i].posY += canvas.height / 100
            
            if((musicSheet[i].posY > canvas.height / 10 * 8 - 30) && (musicSheet[i].posY < canvas.height / 10 * 8 + 30)){
                if( musicSheet[i].posX == pressedKey){
                    score += 10
                    song1.volume = 1
                }else{
                    score -= 1
                    // if(song1.volume > 0.1)
                    // {
                    //     song1.volume -= 0.1
                    // }
                }
            } 
            if(((musicSheet[i].posY < canvas.height / 10 * 8 - 30) || (musicSheet[i].posY > canvas.height / 10 * 8 + 30)) && pressedKey != 0 ){
                score -=1
                // if(song1.volume > 0.1)
                // {
                //     song1.volume -= 0.1
                // }
            }
        }
    }
    currentTime += 1
}





////////////////////////////////////////////////////
//                   Game Loop                    //
////////////////////////////////////////////////////

const gameLoop = () =>
{
    context.clearRect(0, 0, canvas.width , canvas.height/10*8.7);
    background()
    displayScore()
    buttonControl()
    readSheet()
    count()
    window.requestAnimationFrame(gameLoop)
}