var inputt = document.querySelectorAll(".input-field");
var check = document.querySelector(".btn");
var showMessage = document.querySelector(".area-opt");

function clickHandler() {
    var base = Number(inputt[0].value);
    var height = Number(inputt[1].value);

    if (base > 0 && height > 0) {
        var area = (0.5 * base * height);
        area = area.toFixed(2);
        showMessage.innerHTML = "Area Of Triangle = " + area;

    } else {
        showMessage.innerHTML = "Please, enter some values in the fields.";
    }
}

check.addEventListener('click', clickHandler);