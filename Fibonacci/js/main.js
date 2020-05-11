let arrayFibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
//let arrayFibonacci = [1, 1, 2, 3, 5];
let arrayIndex = 0;

// Anonymous function
let increaseFibonacci = function(){
    // Grab img and fibonacci number
    let imgRabbit = document.getElementById("rabbit");


    if (arrayIndex != arrayFibonacci.length -1 ){
        arrayIndex += 1;

        let numberFibonacci = arrayFibonacci[arrayIndex];
        document.getElementById("step").innerHTML =  "Step " + arrayIndex;
        document.getElementById("number").innerHTML =  "Rabbits: " + numberFibonacci;
    
    
        let maxHeight = 180/Math.sqrt(numberFibonacci);
        for (let i = 0; i< numberFibonacci-arrayFibonacci[arrayIndex-1]; i++){
            let img = document.createElement("img");
            img.src = "img/black_rabbit.png"; 
            img.classList.add("added-rabbit")
            img.style.height=""+maxHeight+"px";
            let src = document.getElementById("rabbit");
            src.appendChild(img);
            }
        
    } else {
        arrayIndex = 0;
        document.getElementById("step").innerHTML =  "Step " + arrayIndex;
        document.getElementById("number").innerHTML =  "Rabbits: 1";
        let arrayImgRabbit = document.querySelectorAll('.added-rabbit');
        for (let i = 0; i < arrayImgRabbit.length; i++) {
            let element = arrayImgRabbit[i];
            element.parentNode.removeChild(element);
        }

    }


    //let maxHeight = 500/numberFibonacci;
    //let maxWidth = 1000/numberFibonacci;
    //document.getElementById("rabbit").img.style.height=""+maxHeight+"px";
    //document.getElementById("rabbit").img.style.width=""+maxWidth+"px";
        //imgRabbit.src = "img/rabbit" + arrayFibonacci[arrayIndex] + '.png';



}