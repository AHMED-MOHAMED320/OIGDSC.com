
let counter = 0;
let limit =70;
let number = document.getElementById("num");

setInterval(()=>{
    if(counter==limit)
    {
        clearInterval();
    }
    else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
},2000 / limit)

let number2 = document.getElementById("num2");
let counter2 = 0;
let limit2 =90;
setInterval(()=>{
    if(counter2==limit2)
    {
        clearInterval();
    }
    else {
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
},2000 / limit2)
        

    