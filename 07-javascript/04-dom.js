// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
// fetch JavaScript objects representing specific elements in the DOM
const copyBtn = document.getElementById("copy");

// add an event listener on the target element
const handleClick = () => {
    document.getElementsByClassName("output")[0].innerHTML = document.getElementById("userInput1").value
}

// callback function to handle event
copyBtn.addEventListener("click", handleClick);

// Exercise #2:
// when the user enters input text, copy the user input to the output area
const userInput2 = document.getElementById("userInput2")
// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element
// callback function to handle event
const handleInput = () => {
    document.getElementsByClassName("output")[1].innerHTML = document.getElementById("userInput2").value
}
userInput2.addEventListener("keyup", handleInput)
