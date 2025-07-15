// const love=document.getElementById("money")
// function monitor(n2){
//     const result=n2*n2
//      love.textContent=result
//      return result
// }
// const walk=monitor(10)
// const paragraphs=document.getElementsByClassName("leading")
const paragraph1=document.querySelector(".leading")
const paragraph2=document.getElementById("lead")
const paragraphs=document.querySelectorAll("p")
console.log("PARAGRAPHS", paragraphs);
// console.log(paragraphs.length)
const myArray=[1,2,3,4]
const myData=myArray.length
// alert(paragraphs.length)
 myArray.forEach(
    function(ele){
        ele**2
    }
)
// console.log(myArray)
function monitor(n2){
const result=n2*n2
for(para of paragraphs){
    para.innerText=result
}
}
monitor(5)






