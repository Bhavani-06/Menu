function handleChoice() {
    const choice = document.getElementById('choice').value;
    if (choice === '1') {
        acceptNumbersAndAdd();
    } else if (choice === '2') {
        acceptNumbersAndMultiply();
    } else {
        alert("Invalid choice. Please try again.");
    }
}

function acceptNumbersAndAdd() {
    const firstNum = parseFloat(prompt("Enter the first number:"));
    const secondNum = parseFloat(prompt("Enter the second number:"));
    const sum = firstNum + secondNum;
    alert(`The sum is: ${sum}`);
}

function acceptNumbersAndMultiply() {
    const firstNum = parseFloat(prompt("Enter the first number:"));
    const secondNum = parseFloat(prompt("Enter the second number:"));
    const product = firstNum * secondNum;
    alert(`The product is: ${product}`);
}
