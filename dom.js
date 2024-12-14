//*document.createElement(); цей метод допомагає створити елемент але не додає його на сторінку
// const box = document.createElement("div");
// const image =  document.createElement("img");
// const text = document.createElement("p");
// const title = document.createElement("h2");
// const mainTitle = document.createElement("h1");
// const link = document.createElement("a");

//* метод append додає елементи в середину елементу box
// box.appendChild(image);
// box.appendChild(text);
// console.log(box);

// box.append(image,text);
// console.log(box);

//* метод prepemd додає елементи в перед елементу box
// box.prepend(image, text);
// box.prepend(title);
// console.log(box);

//* вставляемо box на сторінку
// const page = document.querySelector("body");
// page.prepend(box);
// box.before(mainTitle);
// console.log(page);
// box.after(link);

//! створити статтю яка буде складатися з зображення инфомації та кнопки або лінка и наповнити її відповідним контентом
// const box = document.createElement("article");
// const image = document.createElement("img");
// const text = document.createElement("p");
// const button = document.createElement("button");

// text.textContent = "JavaScript – это язык программирования, который добавляет интерактивность на ваш веб-сайт (например: игры, отклик при нажатии кнопок или при вводе данных в формы, динамические стили, анимация). Эта статья поможет вам начать работать с этим захватывающим языком и даст вам представление о том, на что он способен.";
// button.textContent= "click";
// button.style.background = "blue";
// image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3FaRrgt0RBdvk5VawbY--jGxKOzt2kzi-ew&s"

// const page = document.querySelector("body");
// page.append(box);
// box.append(image);
// box.append(text);
// box.append(button);
// button.classList.add("btn");
// text.classList.add("text");
// box.classList.add("art");

// const box = `<article>
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3FaRrgt0RBdvk5VawbY--jGxKOzt2kzi-ew&s" alt="js">
//         <p>JavaScript – это язык программирования,</p>
//         <button style="background-color: aqua;">click</button>
//     </article>
// <h1>test</h1>
// <article>`;
// console.log(box);
// const page = document.querySelector("body");

// page.innerHTML = box;
// console.log(page)

// document.querySelector("body").innerHTML = `<article>
//          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3FaRrgt0RBdvk5VawbY--jGxKOzt2kzi-ew&s" alt="js">
//          <p>JavaScript – это язык программирования,</p>
//          <button style="background-color: aqua;">click</button>
//      </article>
//  <h1>test</h1>
//  <article>`;

//* Властивість innerHTML дозволяе глянути інформацію яка лежить між відкриваючим та закриваючим тегом. а таком можна замінитии  інформацію

// const title = document.querySelector("h1");

// console.log(title.innerHTML);
// const box = document.querySelector("article");
// console.log(box.innerHTML);

// box.innerHTML = `<img src="" alt="">`;
// console.log(box.innerHTML);
// console.log(box);

//* метод insertAdjacentHTML дозволяє додати кусок розмітки у вигляді рядка до певного елемента

// const boxElement = document.querySelector(".box");
// boxElement.insertAdjacentHTML("afterbegin", `<img src="" alt="">`);
// console.log(boxElement);

// boxElement.insertAdjacentHTML("beforeend", `<p>text</p>`);
// console.log(boxElement);

// boxElement.insertAdjacentHTML("beforebegin", `<h3>Lorem ipsum dolor sit amet.</h3>`);
// console.log(boxElement);

//* Методи для роботи з атребутами

// const linkElement = document.createElement("a");

// linkElement.href = "https://edu.goiteens.com/"; ////*цей метод додае атребут до елемента
// linkElement.setAttribute("href", "https://goiteens.com/"); //*цей метод додає атребут до елемента

// //* метод getAttribute дивиться яке значеня лежить у атребуті

// linkElement.getAttribute("href");
// console.log(linkElement);

// //* метод hasAttribute перевіряє чи є атребут у елеманті. повертае true чи false

// const isHref = linkElement.hasAttribute("href");

// console.log(isHref);

// const obj = linkElement.attributes;
// console.log(obj);

// const obj2 = linkElement.removeAttribute("href");
// console.log(obj2);

// //* дата атребутами позначають елемент що на ньому є js

// const openBtn = document.querySelector("[data-open]");
// openBtn.dataset.open;
// console.log(openBtn.dataset.open);
// const saveBtn = document.querySelector("[data-save]");

// Створити та додати колекцію кнопок з динамічними даними з масиву об’єктів.
//  використати метод createElement


// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// const boxElement = document.createElement(".color-picker");
// colorPickerOptions.forEach((label, color) => {
//   const btnElement = document.createElement("button");
//   boxElement.prepend(btnElement);
//   btnElement.style.color = color;
//   btnElement.style.textContext = label;
// });


// Переписати задачу 1 за допомогою методу innerHTML або insertAdjacentHTML


