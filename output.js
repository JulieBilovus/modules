
export function viewForm() {
    let parentElement = document.getElementById("output");
    let operators = ['+', '-', '*', '/'];

    let firstField = document.createElement('input');
    firstField.className = 'firstField';
    parentElement.appendChild (firstField);

    let secondField = document.createElement('input');
    secondField.className = 'secondField';
    parentElement.appendChild (secondField);

    operators.forEach(function(operator) {
        let btn = document.createElement('input');
        btn.type = 'button';
        btn.value = operator;
        btn.className = 'btn';
        parentElement.appendChild(btn);
    })
}