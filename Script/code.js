function addValues() {
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    let numb1 = parseFloat(firstNumber);
    let numb2 = parseFloat(secondNumber);
    if (!isNaN(numb1) && !isNaN(numb2)) {
        let sum = numb1 + numb2;
        document.getElementById('result').innerText = "Result" + sum;
    } else {
        document.getElementById("result").innerText = "Please enter real numbers"
    }
}