const wrapper document.querySelector(".wrapper");

const question document.querySelector(".question");

const gif document.querySelector(".gif");

const yesBtn document.querySelector(".yes-btn");

const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () {

question, innerHTML = "Aaaaa, I like you too";

gif.src =

"https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"; });

noBtn.addEventListener("mouseover", () {

const noßtnRect noBtn.getBoundingClientRect();

const maxX = window.innerWidth noBtnRect.width;

const maxy window.innerHeight noBtnRect.height;

const randomX = Math.floor(Math.random() maxx);

const randomY = Math.floor(Math.random() maxY);

nobtn.style.left = randomX + "px";

noßtn.style.top = randomy + "px";

});