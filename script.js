let count = 0;
let reduceBtn = document.getElementById("reduceButton");
let increaseBtn = document.getElementById("increaseButton");
let resetBtn = document.getElementById("resetButton");

reduceBtn.addEventListener("click", () =>{
    count -= 1;
    document.getElementById("countText").innerHTML = count;
});

increaseBtn.addEventListener("click", () =>{
    count += 1;
    document.getElementById("countText").innerHTML = count;
});

resetBtn.addEventListener("click", () =>{
    count = 0;
    document.getElementById("countText").innerHTML = count;
});