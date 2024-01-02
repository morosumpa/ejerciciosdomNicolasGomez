let ageTable = document.getElementById('age-table');
console.log(ageTable);

let lableAgeTable = ageTable.querySelectorAll('label');
console.log(lableAgeTable);

let tdTabla = ageTable.querySelectorAll('td');
let tdAge;
for (let i = 0; i < tdTabla.length; i++) {
    if (tdTabla[i].textContent.trim() === 'Age:') {
        tdAge = tdTabla[i];
        break;
    }
}
console.log(tdAge);

let Form = document.forms['search'];
console.log(Form);

let primerHuecoForm = Form.querySelector('input');
console.log(primerHuecoForm);

let huecosFormulario = Form.querySelectorAll('input');
let ultimoHuecoFormulario = huecosFormulario[huecosFormulario.length - 1];
console.log(ultimoHuecoFormulario);
