//* метод addEventListener додає подію на елемент

// const btnElement = document.querySelector("button");
// console.log(btnElement);

// const titleElement = document.querySelector("h1");
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

// btnElement.addEventListener('click',()=>{
//     btnElement.style.background = "blue";
// });

// btnElement.addEventListener('click',()=>{
//     titleElement.style.color = "red";
// });

// inputElement.addEventListener("click", ()=>{
//     const texts =  alert("Ви зареєструвалися успішно! Дякую!");
// })

//* подія input  відслідковуе введені символи в инпуті да образу їх демонтрує

// const inputElement = document.querySelector("input");

// inputElement.addEventListener("input", (event)=>{
// console.log(event.target.value)
// });

// //* подія chenge відає всі введені символи в інпуті після того як ми з нього вишли

// const bookElement = document.getElementById("book");

// bookElement.addEventListener("change", (event)=>{
//     console.log(event.target.value)
//     });

// подія keydown|keyup прослуховуваються на документ чи на window

// window.addEventListener("keyup", (event)=>{
//     console.log(event.key)
//     });

// Перемістити елемент з id="box" наліво, якщо користувач натискає стрілку вліво, та направо,
//  якщо користувач натискає стрілку вправо, під час події keydown.
// const box = document.querySelector("#box");
// let startPos = 0;
// let startVeiPos = 0;

// window.addEventListener("keydown", (event) => {
//   if (event.code === "ArrowLeft") {
//     startPos -= 10;
//     box.style.left = `${startPos}px`;
//   } else if (event.code === "ArrowRight") {
//     startPos += 10;
//     box.style.left = `${startPos}px`;
//   } else if (event.code === "ArrowUp") {
//     startVeiPos -= 10;
//     box.style.top = `${startVeiPos}px`;
//   }else if (event.code === "ArrowDown") {
//     startVeiPos += 10;
//     box.style.top = `${startVeiPos}px`;
//   }
// });

// подія mouseover дозволяє виконати певну інструкцію коли наводиться курсор на елемент. mouseout дозволяє виконати певну інструкцію коли відводять курсор від елеменета

// const box = document.querySelector(".box");
// box.style.background= "yellow";

// box.addEventListener("mouseover", (event)=>{
// event.target.style.background = "blue"
// });

// box.addEventListener("mouseout", (event)=>{
//     event.target.style.background = "yellow"
//     });

// подія mousemove дозволя відстежити кординату знаходження курсора

// box.addEventListener("mousemove", (event)=>{
//     console.log(event)
//     });

// Написати скрипт в якому користувач друкує на клавіатурі текст який відображається на
//  сторінці. При натисканні на кнопку “Очистити” очищувати надрукований текст.
//   Використати можна наступну розмітку
// const text = querySelector(".js-output");
// const cleanText = querySelector(".js-clear");

// window.addEventListener("keydown", (event) => {
//     if(event.code === "Space"){
// text.textContent +=" ";
//     } else {
//         text.textContent += event.key;
//     }
// });

// cleanText.addEventListener("click", ()=>{
//     text.innerHTML ="";
// })

// Змінити фон елементу з id="box" на жовтий, якщо користувач натискає клавішу y,
// та на зелений, якщо користувач натискає клавішу g, під час події keydown.

const box = document.getElementById("box");

document.addEventListener("keydown", (event) => {
  if (event.key === "y") {
    box.style.background = "yellow";
  } else if (event.key === "g") {
    box.style.background = "green";
  }else if(event.key === "b"){
    box.style.background = "blue";
  }else if(event.key === "r"){
    box.style.background = "red";
  }else if(event.key === "o"){
    box.style.background= "orange";
  }
});
