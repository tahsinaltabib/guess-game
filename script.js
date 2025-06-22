let playerone=document.querySelector(".playerone")
let inputone=document.querySelector(".inputone")
let btnone=document.querySelector(".btnone")
let errorone=document.querySelector(".errorone")


btnone.addEventListener("click", function () {
  
  if (!inputone.value) {
    errorone.innerHTML="Please enter something!";
    
  } else if (isNaN(inputone.value)) {
    errorone.innerHTML="Please give a number!";

  } else if (!(inputone.value<=10 && inputone.value>0)) {
    errorone.innerHTML="Please give a number from 1 to 10!";

  } else {
    errorone.innerHTML="Oky";
    
  }
    

})

