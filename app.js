import {viewForm} from './output'
import {mathFields} from './Math'
import {viewResult} from './viewResult'

viewForm();

let buttons = document.forms[0].querySelectorAll('.btn');

buttons.forEach(function(button){
    button.addEventListener('click', function() {
        viewResult(mathFields(this.value, document.querySelector('.firstField').value, document.querySelector('.secondField').value));
    })
})


