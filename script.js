//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let textField = document.querySelector(".textField")


button1.addEventListener("click", () => {
    let colorIndex = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[colorIndex]
})

const hexColor = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
button2.onclick = () => {
    let hex = "#"
    for (let i = 0; i < 6; i++) {
        hex = hex + hexColor[Math.floor(Math.random() * hexColor.length)]
    }

    document.body.style.backgroundColor = hex
    textField.innerHTML = hex
} 
