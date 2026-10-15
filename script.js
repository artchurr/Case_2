function getNumbers() {
    let a = document.getElementById("num1").value.trim().replace(",", ".");
    let b = document.getElementById("num2").value.trim().replace(",", ".");

    if (a === "" || b === "" || !isFinite(a) || !isFinite(b)) {
        document.getElementById("result").textContent = "Ошибка! Введите два числа.";
        return null;
    }

    return [Number(a), Number(b)];
}

function sum() {
    let numbers = getNumbers();
    if (numbers === null) return;

    document.getElementById("result").textContent = numbers[0] + numbers[1];
}

function subtract() {
    let numbers = getNumbers();
    if (numbers === null) return;

    document.getElementById("result").textContent = numbers[0] - numbers[1];
}

function multiply() {
    let numbers = getNumbers();
    if (numbers === null) return;

    document.getElementById("result").textContent = numbers[0] * numbers[1];
}

function divide() {
    let numbers = getNumbers();
    if (numbers === null) return;

    if (numbers[1] === 0) {
        document.getElementById("result").textContent = "На ноль делить нельзя!";
        return;
    }

    document.getElementById("result").textContent = numbers[0] / numbers[1];
}
