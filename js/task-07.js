// // Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');
textEl.style.fontSize = `${inputEl.value}px`;
inputEl.addEventListener('input', () => {
    // console.log(inputEl.value);
    textEl.style.fontSize = `${inputEl.value}px`
    
}
  )