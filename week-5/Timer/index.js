const span1= document.querySelector('.hours')
const span2= document.querySelector('.minutes')
const span3= document.querySelector('.seconds')
const btn1= document.querySelector('.start-timer')
const btn2= document.querySelector('.stop-timer')
const btn3= document.querySelector('.reset-timer')
let hours= 0
let minutes= 0
let seconds= 0
let intervalid= null
function myTimer(){
    intervalid= setInterval(
        () =>{
            if(seconds===60){
                seconds= 0
                minutes++
                span2.textContent= minutes<10 ?'0'+ minutes : minutes
            }
            else if(minutes===60){
                minutes= 0
                hours++
                span1.textContent= hours<10 ?'0'+ hours : hours
            }
            span3.textContent= seconds<10 ?'0'+ seconds : seconds
            seconds++
        }, 1000
    )
}
btn1.addEventListener('click',() =>{
    myTimer()
})
const stopTimer=()=>{
    clearInterval(intervalid)
        intervalid= null
}
btn2.addEventListener('click',() =>{
    stopTimer()
})