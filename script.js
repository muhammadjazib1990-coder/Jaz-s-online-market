function changeText() {
    document.getElementById("title").innerHTML = "You clicked the button!";
}

let firstNumber = null;
let operator = null;

function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
    firstNumber = null;
    operator = null;
}

function setOperator(op) {

    firstNumber = Number(document.getElementById("display").value);
    operator = op;

    document.getElementById("display").value = "";
}

function calculate() {

    let secondNumber = Number(document.getElementById("display").value);

    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    }

    if (operator === "-") {
        result = firstNumber - secondNumber;
    }

    if (operator === "*") {
        result = firstNumber * secondNumber;
    }

    if (operator === "/") {
        result = firstNumber / secondNumber;
    }

    document.getElementById("display").value = result;

}


function addProduct() {

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let imageInput = document.getElementById("image");

    let file = imageInput.files[0];

    if (!name || !price || !file) {
        alert("Please fill everything");
        return;
    }

    let reader = new FileReader();

    reader.onload = function(e) {

        let productHTML = `
<div class="product">
<img src="${e.target.result}">
<h3>${name}</h3>
<p>$${price}</p>
</div>
`;

        document.getElementById("productList").innerHTML += productHTML;

    }

    reader.readAsDataURL(file);



}