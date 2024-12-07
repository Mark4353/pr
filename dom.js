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
const box = document.createElement("article");
const image = document.createElement("img");
const text = document.createElement("p");
const button = document.createElement("button");

text.textContent = "JavaScript – это язык программирования, который добавляет интерактивность на ваш веб-сайт (например: игры, отклик при нажатии кнопок или при вводе данных в формы, динамические стили, анимация). Эта статья поможет вам начать работать с этим захватывающим языком и даст вам представление о том, на что он способен.";
button.textContent= "click";
// button.style.background = "blue";
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3FaRrgt0RBdvk5VawbY--jGxKOzt2kzi-ew&s"

const page = document.querySelector("body");
page.append(box);
box.append(image);
box.append(text);
box.append(button);
button.classList.add("btn");
text.classList.add("text");
box.classList.add("art");


