
const increaseBtn = document.getElementById("inc-btn");
const decreaseBtn = document.getElementById("dec-btn")
const resetBtn = document.getElementById("res-btn")
const countEle = document.getElementById("count");
let count = 0


const handleIncrease = () => {
    // count = count + 1
    count += 1
    countEle.innerText = count
}

const handleDecrease = () => {
    // count = count - 1
        count -= 1
        countEle.innerText = count
   
}

const handleReset = () => {
    count = 0
    countEle.innerText = 0

}

increaseBtn.addEventListener("click", handleIncrease);
decreaseBtn.addEventListener("click", handleDecrease)
resetBtn.addEventListener("click", handleReset)

// console.log(increaseBtn, decreaseBtn, resetBtn)