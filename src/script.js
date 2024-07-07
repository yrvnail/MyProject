import "./style.css";

let inputs = [].slice.call(document.querySelectorAll("input"));


inputs.forEach(function(input) {
    if (input.getAttribute("type") !== "submit") { // НЕ РАВНО
        input.addEventListener("focusin", focusInInputHandler, false);
        input.addEventListener("focusout", focusOutInputHandler, false);
        console.log(input);
    }

    function focusInInputHandler() {
        console.log(this.id + " focus in");
    }

    function focusOutInputHandler() {
        console.log(this.id + " focus out");
    }
});
