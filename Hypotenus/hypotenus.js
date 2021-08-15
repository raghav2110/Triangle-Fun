var inputt = document.querySelectorAll(".input-field");
var check = document.querySelector(".btn");
var showMessage = document.querySelector(".hypo-opt");

function clickHandler() {
    var base = Number(inputt[0].value);
    var height = Number(inputt[1].value);

    if (base > 0 && height > 0) {
        var hyp = Math.sqrt((base * base) + (height * height));
        hyp = hyp.toFixed(2);
        showMessage.innerHTML = "Hypotenuse Of Triangle = " + hyp;

    } else {
        showMessage.innerHTML = "Please, enter some values in the fields.";
    }
}

check.addEventListener('click', clickHandler);