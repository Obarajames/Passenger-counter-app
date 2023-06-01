// identify the elements to chenge
let myNumber = document.getElementById("number");
let saveItem = document.getElementById("paragraph");
let count = 0;

function increase(){
    count = count + 1;
    myNumber.innerText = count;
}
increase();

//save function
function save() {
    let countStr = count + " - ";
    saveItem.textContent += countStr;
    countItem.textContent = 0;
    count = 0;
    
    console.log(count)
}