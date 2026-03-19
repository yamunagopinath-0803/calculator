function calculate(op) {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(n1) || isNaN(n2)) {
        result = "Enter valid numbers";
    } else {
        if (op === '+') result = n1 + n2;
        else if (op === '-') result = n1 - n2;
        else if (op === '*') result = n1 * n2;
        else if (op === '/') {
            if (n2 === 0) result = "Cannot divide by 0";
            else result = n1 / n2;
        }
    }

    let resultBox = document.getElementById("result");
    resultBox.innerText = "Result: " + result;

    // 🔥 Restart animation
    resultBox.style.animation = "none";
    resultBox.offsetHeight; 
    resultBox.style.animation = "pop 0.3s ease";

    // History
    let history = document.getElementById("history");
    let li = document.createElement("li");
    li.innerText = n1 + " " + op + " " + n2 + " = " + result;
    history.appendChild(li);
}