// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає
// кнопку Створити, після чого рендериться колекція.Натисненням
// на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один
// параметр - число.Функція створює стільки < div >, скільки
// вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим
// від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у
// форматі HEX.Використовуй готову функцію getRandomHexColor
// для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

const divBoxes = document.getElementById('boxes');
const input = document.querySelector('input');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');

create.addEventListener('click', () => {
  createBoxes(input.value);
});

destroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const number = amount;
  const boxes = [];

  for (let i = 0; i < number; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  divBoxes.append(...boxes);
}

function destroyBoxes() {
  divBoxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
