let counter = 0

const increment = document.getElementById("add")
const decrement = document.getElementById("sub")
const showText = document.getElementById("text")
const resetBtn = document.getElementById("reset")
showText.addEventListener("click", () => {
    counter++
    showText.innerHTML = "counter"
})
showText.addEventListener("click", () => {
    counter--
    showText.innerHTML = "counter"
})
resetBtn.addEventListener("click", resetFunction)
function resetFunction() {
    counter = 0
    showText.innerHTML = "counter"


}