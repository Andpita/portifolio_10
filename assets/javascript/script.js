
const qtdSlide = document.querySelectorAll('.doc').length;
const slides = document.querySelector('.doc');

let currentSlide = 0;

function prev() {
  currentSlide--;
  if (currentSlide < 0) currentSlide = qtdSlide - 1;
  if (currentSlide > 5) currentSlide = 4;

  updateMargin();
}

function goNext() {
  currentSlide++;
  if (currentSlide > (qtdSlide - 3)) currentSlide = 0;
  updateMargin(0);
}

function updateMargin(num) {
  let sliderItemWidth = document.querySelector('.doc').clientWidth;
  let n = 61;

  if (currentSlide == 1) {
    n = 39
  } else if (currentSlide == 2) {
    n = 44
  } else if (currentSlide == 3) {
    n = 48
  } else if (currentSlide == 4) {
    n = 54
  }


  let newMargin = (sliderItemWidth + n) * currentSlide;

  document.querySelector('.doc').style.marginLeft = `-${newMargin}px`;

  if (currentSlide === 0) document.querySelector('.doc').style.marginLeft = `20px`;

}

setInterval(goNext, 6000);

const controlerLeft = document.querySelector('.left');
const controlerRight = document.querySelector('.right');

controlerLeft.addEventListener('click', () => prev())
controlerRight.addEventListener('click', () => goNext())


//Color

const darkMode = document.querySelector('.darkMode');



darkMode.addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  const aLink = document.querySelectorAll('a');
  const body = document.querySelector('body');
})

//

function openLink(end) {
  window.open(end, '_blank');
}

function fazPost(url, body) {
  console.log("Body=", body)
  let request = new XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(body))

  request.onload = function () {
    console.log(this.responseText)
  }

  return request.responseText
}

function postContact() {
  event.preventDefault();
  let url = "https://ec-api.andpita.shop/ticket";
  let userId = 1;
  let userName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let textmessage = document.getElementById("textmessage").value;


  body = {
    userId,
    userName,
    userEmail,
    textmessage,
  }

  fazPost(url, body)
}