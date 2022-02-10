//Elements
const hourElement = document.querySelector('.hour ')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')

//Buttons
const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const circleButton = document.querySelector('.circle')
const resultButton = document.querySelector('.result')

//Listener
startButton.addEventListener('click', () => {
   clearInterval(interval)
   interval = setInterval(startTimer, 10)
   pauseButton.classList.remove('disablet')
   stopButton.classList.remove('disablet')
   circleButton.classList.remove('disablet')
   resultButton.classList.remove('disablet')
})
pauseButton.addEventListener('click', () => clearInterval(interval))
stopButton.addEventListener('click', () => {
   clearInterval(interval)
   clearFields()
   disableBtn()
})
circleButton.addEventListener('click', () => {
   clearInterval(interval)
   counter++
   const redults = document.querySelector('.results')
   const block = document.createElement('div')
   block.classList.add('results__info')
   block.innerText = `${counter}- ${conclusionTime()}`
   redults.append(block)
   clearFields()
   clearInterval(interval)
   interval = setInterval(startTimer, 10)
})
resultButton.addEventListener('click', () => {
   counter2++
   const redults2 = document.querySelector('.results2')
   const block = document.createElement('div')
   block.classList.add('results__info')
   block.innerText = `${counter2}- ${conclusionTime()}`
   redults2.append(block)
})

//Variables
let hour = 00,
   minute = 00,
   second = 00,
   millisecond = 00,
   interval,
   counter = 0,
   counter2 = 0,
   disablet = true

function startTimer() {
   //Millisecond
   millisecond++
   if (millisecond < 9) {
      millisecondElement.innerText = '0' + millisecond
   }
   if (millisecond > 9) {
      millisecondElement.innerText = millisecond
   }
   if (millisecond > 99) {
      second++
      secondElement.innerText = '0' + second
      millisecond = 0
      millisecondElement.innerText = '0' + millisecond
   }
   //Second
   if (second < 9) {
      secondElement.innerText = '0' + second
   }
   if (second > 9) {
      secondElement.innerText = second
   }
   if (second > 59) {
      minute++
      minuteElement.innerText = '0' + minute
      second = 0
      secondElement.innerText = '0' + second
   }
   //Minute
   if (minute < 9) {
      minuteElement.innerText = '0' + minute
   }
   if (minute > 9) {
      minuteElement.innerText = minute
   }
   if (minute > 59) {
      hour++
      hourElement.innerText = '0' + hour
      minute = 0
      minuteElement.innerText = '0' + minute
   }
   //Hour
   if (hour < 9) {
      hourElement.innerText = '0' + hour
   }
   if (hour > 9) {
      hourElement.innerText = hour
   }
   if (hour > 99) {
      clearFields()
   }
}

function clearFields() {
   hour = 00
   minute = 00
   second = 00
   millisecond = 00
   hourElement.innerText = '00'
   minuteElement.innerText = '00'
   secondElement.innerText = '00'
   millisecondElement.innerText = '00'
}



function conclusionTime() {
   let conclusionmillisecond,
      conclusionsecond,
      conclusionminute,
      conclusionhour
   //Millisecond
   if (millisecond < 9) {
      conclusionmillisecond = '0' + millisecond
   }
   if (millisecond > 9) {
      conclusionmillisecond = millisecond
   }
   //Second
   if (second < 9) {
      conclusionsecond = '0' + second
   }
   if (second > 9) {
      conclusionsecond = second
   }
   //Minute
   if (minute < 9) {
      conclusionminute = '0' + minute
   }
   if (minute > 9) {
      conclusionminute = minute
   }
   //Hour
   if (hour < 9) {
      conclusionhour = '0' + hour
   }
   if (hour > 9) {
      conclusionhour = hour
   }

   return `${conclusionhour}:${conclusionminute}:${conclusionsecond}:${conclusionmillisecond}`
}















