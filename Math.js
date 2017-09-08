export function mathFields(operator, firstField, secondField) {
    let result;
    let x = +firstField;
    let y = +secondField;
    if (operator === '+')
        result =  x + y;
    else if (operator === '-')
        result = x - y;
    else if (operator == '*')
        result = x * y;
    else result = x / y;

    return result;
}