console.log("Who's the fairest of them all?")

let outputTarget1 = document.getElementById("boxOne");
let outputTarget2 = document.getElementById("boxTwo");

document.getElementById("message").addEventListener("keyup", function (event) {
    outputTarget1.textContent = event.target.value
    outputTarget2.textContent = event.target.value
})


