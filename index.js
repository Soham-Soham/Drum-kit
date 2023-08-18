const drumKitLength = document.querySelectorAll(".drum").length;

const playSound =(key)=>{
   switch(key){
    case "w":
          const a1 = new Audio('sounds/crash.mp3');
          a1.play();
          break;
    case "a":
          const a2 = new Audio('sounds/snare.mp3');
          a2.play();
          break;
    case "s":
          const a3 = new Audio('sounds/tom-4.mp3');
          a3.play();
          break;
    case "d":
          const a4 = new Audio('sounds/tom-1.mp3');
          a4.play();
          break;
    case "j":
          const a5 = new Audio('sounds/tom-2.mp3');
          a5.play();
          break;
    case "k":
          const a6 = new Audio('sounds/tom-3.mp3');
          a6.play();
          break;
    case "l":
          const a7 = new Audio('sounds/tom-4.mp3');
          a7.play();
          break;
   }
}
for(let i=0; i<drumKitLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',()=>{
        let abc=document.querySelectorAll(".drum")[i].innerHTML;
        playSound(abc);
        
    });
}

document.addEventListener('keypress',(e)=>{
   let keey = e.key;
   playSound(keey);
});