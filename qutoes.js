const quotes = [
  {
    quote: "니 자신을 알라",
    autor: "김영빈",
  },
  {
    quote: "나는 병신이다",
    autor: "옥주용",
  },
  {
    quote: "나는 대머리 이다",
    autor: "유찬혁",
  },
];

const quote = document.querySelector("#quote span:first-child");
const autor = document.querySelector("#quote span:last-child");

const array = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = array.quote;
autor.innerText = array.autor;
