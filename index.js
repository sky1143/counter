let count =0;

const counterDisplay =document.getElementById("counter-display");


const increaseButton = document.getElementById("increase-button");

const decreaseButton = document.getElementById("decrease-button");

const resetButton = document.getElementById("reset-button");



function updateCounter(){
counterDisplay.textContent= ` you clicked ${count} times`


}

increaseButton.addEventListener("click",function(){
  count++;
  updateCounter()
})

decreaseButton.addEventListener("click",function(){
    count--;
    updateCounter()
})

resetButton.addEventListener("click",function(){
    count=0;
    updateCounter()
})







