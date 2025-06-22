let playerone=document.querySelector(".playerone")
let inputone=document.querySelector(".inputone")
let btnone=document.querySelector(".btnone")
let errorone = document.querySelector(".errorone")


let playertwo=document.querySelector(".playertwo")
let inputtwo=document.querySelector(".inputtwo")
let btntwo=document.querySelector(".btntwo")
let errortwo=document.querySelector(".errortwo")


btnone.addEventListener("click", function () {
  
  if (!inputone.value) {
    errorone.innerHTML="Please enter something!";
    
  } else if (isNaN(inputone.value)) {
    errorone.innerHTML="Please give a number!";

  } else if (!(inputone.value<=10 && inputone.value>0)) {
    errorone.innerHTML="Please give a number from 1 to 10!";

  } else {
    
    playertwo.style.display="block"
    inputtwo.style.display="inline-block"
    btntwo.style.display="inline-block"
    errortwo.style.display = "block"
     
    playerone.style.display="none"
    inputone.style.display="none"
    btnone.style.display="none"
    errorone.style.display="none"
  }
    
})

btntwo.addEventListener("click", function () {
  if (!inputtwo.value) {
    errortwo.innerHTML = "Please enter something!";
    
  }else if (isNaN(inputtwo.value)) {
    errortwo.innerHTML = "Please give a number!";
    
  }else if (!(inputtwo.value<=10 && inputtwo.value>1)) {
    errortwo.innerHTML = "Please give a number from 1 to 10!";
    
  } else {
    console.log("Game start from here!");
    
  }
})
