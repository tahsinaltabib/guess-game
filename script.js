let playerone=document.querySelector(".playerone")
let inputone=document.querySelector(".inputone")
let btnone=document.querySelector(".btnone")
let errorone = document.querySelector(".errorone")


let playertwo = document.querySelector(".playertwo")
let chance = document.querySelector(".chance")
let inputtwo=document.querySelector(".inputtwo")
let btntwo=document.querySelector(".btntwo")
let errortwo = document.querySelector(".errortwo")
let count=3


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
    chance.innerHTML = `Chance:${count}`
    
     
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
    
  }else if (!(inputtwo.value<=10 && inputtwo.value>0)) {
    errortwo.innerHTML = "Please give a number from 1 to 10!";
    
  } else {


    if (count > 1) {
      count--
      chance.innerHTML = `Chance:${count}`
        if (inputone.value==inputtwo.value) {
             playertwo.innerHTML="Player two winner!";
             btntwo.style.display = "none"   
             inputtwo.value=""
       }
    } else {
      count = 0
      chance.innerHTML=`Chance: ${count}`
            playertwo.innerHTML="Player one winner!";
            btntwo.style.display = "none"
            inputtwo.value=""
    }
  }
})
