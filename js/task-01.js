// // // // Посчитает и выведет в консоль количество категорий в ul#categories, 
// // // то есть элементов li.item.Получится 'В списке 3 категории.'.

// // // // Для каждого элемента li.item в списке ul#categories, 
// // найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

const newArray = [];
const categoriesList = document.querySelectorAll('#categories');
const categoriesItem = document.querySelectorAll('.item');
console.log(`В списке ${categoriesItem.length} категории.`)
categoriesItem.forEach(element => {console.log('Категория: ', element.querySelector('h2').textContent)
    console.log('Количество элементов: ', element.querySelectorAll('li').length);
}); 
 
    

