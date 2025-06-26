
// function createParagraph() {
//   const para = document.createElement("p");
//   para.textContent = "You clicked the button!";
//   document.body.appendChild(para);
// }
// const buttons = document.querySelectorAll("button");
// for (const button of buttons) {
//   button.addEventListener("click", createParagraph);
// }
const buttons = document.querySelectorAll("button");

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}
// look through all the bottons and add a clickEventlistener to each one
// when any botton is pressed the create paragraph will run

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
// function create a new paragraph and append to the bottom of the html body and under the create paragraph and above the const button use 



