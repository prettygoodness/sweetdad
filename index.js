function checkAge() {
    let age = parseInt(document.getElementById("ageInput").value)
    let showOutput = document.getElementById("output")

    if ( age < 18) {
      showOutput.textContent = "sorry, you're not up to age."
    } else if (age > 70) {
        showOutput.textContent = "Hey! you're too old"
    } else {
        showOutput.textContent = "Welcome to your first therapy session!"
    }

 }
let initialCounter = 0;

function increment(){
//initialCounter++
initialCounter +=2
updateCounter()
}

function decrement(){
//initialCounter--
initialCounter -= 5
updateCounter()
}

function updateCounter() {
    document.getElementById('counter').innerHTML = initialCounter
}