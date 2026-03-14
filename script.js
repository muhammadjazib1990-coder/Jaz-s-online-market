function changeText() {
    document.getElementById("title").innerHTML = "You clicked the button!";
}

function add() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a + b);
}

function subtract() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a - b);
}

function multiply() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a * b);
}

function divide() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    document.getElementById("result").innerHTML = "Result: " + (a / b);
}

function square() {
    let a = Number(document.getElementById("num1").value);

    document.getElementById("result").innerHTML = "Result: " + (a * a);
}

function sqrt() {
    let a = Number(document.getElementById("num1").value);

    document.getElementById("result").innerHTML = "Result: " + Math.sqrt(a);
}

function percent() {
    let a = Number(document.getElementById("num1").value);

    document.getElementById("result").innerHTML = "Result: " + (a / 100) * 100;
}

function Backspace() {
    let display = document.getElementById("display");
}
display.value = display.value.slice(0, -1);

function togleDarkMode() {
    Document.body.classlist.togle("dark")
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