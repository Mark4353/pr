//* метод addEventListener додає подію на елемент

const btnElement = document.querySelector("button");
console.log(btnElement);


const titleElement = document.querySelector("h1");
// const formelement = document.querySelector("form");
// const inputElement = document.querySelector("input");


// function changeBtnColor(){
// const btnColor = document.querySelector("body");
// btnColor.style.background = "blue";
// };
// btnElement.addEventListener("click", changeBtnColor);



// btnElement.addEventListener("click", ()=>{
//     const btnColor = document.querySelector("body");
//     const redVelue =  (Math.random()* (255 - 0) + 1);
//     const greenVelue = (Math.random()* (255 - 0) + 1);
//     const blueVelue =  (Math.random()* (255 - 0) + 1);
//     const color = `rgba(${redVelue}, ${greenVelue}, ${blueVelue})`;
// btnColor.style.background = color;
// });

// Напишіть скрипт зміни кольору кнопки при натискані на неї.
// Напиши скрипт реалізації додавання класу до заголовка при кліку на кнопку
//  ‘Додати стилі’.
// Написати програму яка буде виводити данні введені в інпут в інтерфейс сторінки.
// Створити форму, після сабміту виводити на екран повідомлення 
// ‘Ви зареєструвалися успішно! Дякую!’

btnElement.addEventListener('click',()=>{
    btnElement.style.background = "blue";
});


btnElement.addEventListener('click',()=>{
    titleElement.style.color = "red";
});

// inputElement.addEventListener("click", ()=>{
//     const texts =  alert("Ви зареєструвалися успішно! Дякую!");
// })






