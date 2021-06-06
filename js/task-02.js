const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.

const elements = ingredients.map(ingredient => {
  const li = document.createElement('li')
    li.textContent = ingredient;
    // console.log(li);
    return li;
});
const ul = document.querySelector('#ingredients');
ul.append(...elements);
console.log(ul);
// ul.append(li);
