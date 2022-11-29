
let c = 0;
let limit =70;
let number = document.getElementById("num");

setInterval(()=>{
    if(c==limit)
    {
        clearInterval();
    }
    else {
        c += 1;
        number.innerHTML = c + "%";
    }
},2000 / limit)

let number2 = document.getElementById("num2");
let c2 = 0;
let limit2 =90;
setInterval(()=>{
    if(c2==limit2)
    {
        clearInterval();
    }
    else {
        c2 += 1;
        number2.innerHTML = c2 + "%";
    }
},2000 / limit2)
        

