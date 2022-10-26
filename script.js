//create vars with dom elements
var questions = document.querySelector('.questions')
var timeLeft = document.querySelector('.timeRemaining')
var startBtn = document.querySelector('.start')
var a = document.querySelector('#a')
var b = document.querySelector('#b')
var c = document.querySelector('#c')
var d = document.querySelector('#d')
var aA = document.querySelector('.aA')
var bB = document.querySelector('.bB')
var cC = document.querySelector('.cC')
var dD = document.querySelector('.dD')
//timer
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};
//questions
var quizQuestions = [
    {
        question: "What can you do in JavaScript?",
        a: 'Make a website interactable',
        b: 'Bake a cake',
        c: 'Eat a sandwich',
        d: 'Run a hotdog stand',
        correct: a,
    },
    {
      question: "How do you do string interpolation?",
      a: 'With backticks',
      b: 'With parentheses',
      c: 'With Commas',
      d: 'With periods',
      correct: a,
  },
  {
    question: "What does JSON stand for",
    a: 'Java Soft Odd Number',
    b: 'Just Stop Ordering Naan',
    c: 'Jo So On No',
    d: 'JavaScript Object Notation',
    correct: d,
}
]


function getquiz() {
    questions.innerText = quizQuestions[0].question;
  aA.innerText = quizQuestions[0].a;
  bB.innerText = quizQuestions[0].b;
  cC.innerText = quizQuestions[0].c;
  dD.innerText = quizQuestions[0].d;
}

getquiz();
