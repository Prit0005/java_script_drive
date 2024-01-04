let buttons = document.querySelectorAll("button");
let button1 = document.querySelector("#one");
let button2 = document.querySelector("#two");
let input = document.querySelector("#input");
let prassed=0;
buttons.forEach(button => {
    button.addEventListener("click", () => {
       if(prassed===1){
        prassed=0;
       }
       input.value+=button.value;
    });
});
