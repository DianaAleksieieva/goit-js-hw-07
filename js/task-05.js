// // Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');


    inputEl.addEventListener('keydown', a => {
        outputEl.textContent = inputEl.value;
       if (inputEl.value === "") {
        outputEl.textContent ='незнакомец';
        };
        });
        if (inputEl.value.keyCode == 8 ) {
            console.log('dell')};