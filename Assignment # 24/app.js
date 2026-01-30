
  const quizData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d"
    },
    {
      question: "What does HTML stand for?",
      a: "Hyper Trainer Marking Language",
      b: "Hyper Text Markup Language",
      c: "High Text Markup Language",
      d: "Hyper Text Marketing Language",
      correct: "b"
    },
    {
      question: "What does CSS stand for?",
      a: "Creative Style System",
      b: "Colorful Style Sheets",
      c: "Cascading Style Sheets",
      d: "Computer Style Sheets",
      correct: "c"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      a: "//",
      b: "<!-- -->",
      c: "#",
      d: "**",
      correct: "a"
    },
    {
      question: "Which company developed JavaScript?",
      a: "Google",
      b: "Microsoft",
      c: "Netscape",
      d: "Apple",
      correct: "c"
    },
    {
      question: "Inside which HTML element do we put JavaScript?",
      a: "<js>",
      b: "<script>",
      c: "<javascript>",
      d: "<code>",
      correct: "b"
    },
    {
      question: "Which keyword is used to declare a variable in JavaScript?",
      a: "var",
      b: "int",
      c: "string",
      d: "float",
      correct: "a"
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      a: "msg('Hello World')",
      b: "alert('Hello World')",
      c: "alertBox('Hello World')",
      d: "message('Hello World')",
      correct: "b"
    },
    {
      question: "Which operator is used to assign a value?",
      a: "==",
      b: "===",
      c: "=",
      d: "!=",
      correct: "c"
    },
    {
      question: "Which HTML tag is used to create a button?",
      a: "<input>",
      b: "<btn>",
      c: "<button>",
      d: "<click>",
      correct: "c"
    }
  ];


  const questionEl = document.getElementById("question");
  const answerEls = document.querySelectorAll("input[name='answer']");
  const aText = document.getElementById("a_text");
  const bText = document.getElementById("b_text");
  const cText = document.getElementById("c_text");
  const dText = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");

  let currentQuiz = 0;
  let score = 0;

  loadQuiz();

  function loadQuiz() {
    deselectAnswers();
    const currentData = quizData[currentQuiz];

    questionEl.innerText = currentData.question;
    aText.innerText = currentData.a;
    bText.innerText = currentData.b;
    cText.innerText = currentData.c;
    dText.innerText = currentData.d;
  }

  function deselectAnswers() {
    answerEls.forEach(answer => answer.checked = false);
  }

  function getSelected() {
    let selectedAnswer = null;
    answerEls.forEach(answer => {
      if (answer.checked) {
        selectedAnswer = answer.id;
      }
    });
    return selectedAnswer;
  }

  submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (!answer) {
      alert("Please select an answer");
      return;
    }

    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      document.querySelector(".quiz-container").innerHTML = `
        <div class="result">
          <h2>You scored ${score} / ${quizData.length}</h2>
          <button onclick="location.reload()">Restart Quiz</button>
        </div>
      `;
    }
  });