const img = ["0.jpeg", "1.jpeg", "2.jpeg"];

const choseimg = img[Math.floor(Math.random() * 3)];

const bgimg = document.createElement("img");
bgimg.src = `img/${choseimg}`;
document.body.appendChild(bgimg);
