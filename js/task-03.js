// Напиши скрипт для создания галлереи изображений по массиву данных.

// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galeryListEl = document.querySelector('#gallery');

const galeryItem = images.map(image => {
    // Создаем картинки с атрибутами
    const imgEl = document.createElement('img');
    imgEl.setAttribute("alt", image.alt);
    imgEl.setAttribute("url", image.url);
    // Создаем елементы списка и добавляем изображения:
    const li = document.createElement('li');
    li.append(imgEl)
    return li
});
galeryItem.style.display = 'flex';
galeryItem.style.margin = '20px';

galeryListEl.insertAdjacentHTML('afterbegin', ...galeryItem);
console.log(...galeryItem)

