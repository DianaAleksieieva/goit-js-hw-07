// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.

const inputEl = document.getElementById('validation-input');
inputEl.classList.add('validation-input');
inputEl.addEventListener('blur', () => {
    if (inputEl.value.length===6) {
        inputEl.classList.add('valid')
        console.log('=6')
    }
    else {
        inputEl.classList.add('invalid')
        console.log('!=6')
    }
   
});
