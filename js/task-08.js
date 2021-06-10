// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const amount = document.querySelector('input');
const renderButton = document.querySelector('[data-action="render"]');
const destroyButton = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes');
// Додати прослухування при натискані кнопки
// const createBoxes = function(amount) {
// };
// const createBoxes = function() {
//     amount = 0;
// };
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let size = 30;
renderButton.addEventListener('click', () => {
    for (let i=0; i<amount.value; i+=1) {    
        const divEl = document.createElement('div');
        divEl.classList.backgroundcolor = boxes.append(divEl);
        divEl.style.backgroundColor = 'rgb(' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ', ' + getRandomInt(0, 255) + ')';
        size += 10;
        divEl.style.width = `${size}px`;
        divEl.style.height = `${size}px`;
        console.log(size)
  };
    });
destroyButton.addEventListener('click', () => {
    boxes.innerHTML = '';
});