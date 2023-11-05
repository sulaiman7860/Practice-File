const javaQuiz = [
    {
        question: "Q1: Which keyword is used to declare a variable in JavaScript?",
        a: "var",
        b: "int",
        c: "let",
        d: "const",
        ans: "ans3"
    },
    {
        question: 'Q2: What is the result of the following expression: 5 + "5" in JavaScript?',
        a: "10",
        b: "55",
        c: '"55"',
        d: "Error",
        ans: "ans3"
    },
    {
        question: "Q3: What method is used to add an element to the end of an array in JavaScript?",
        a: "append()",
        b: "push()",
        c: "add()",
        d: "insert()",
        ans: "ans2"
    },
    {
        question: "Q4: How do you comment out a single line of code in JavaScript?",
        a: " // This is a comment",
        b: "/* This is a comment */",
        c: " <!-- This is a comment -->",
        d: "'This is a comment '",
        ans: "ans1"
    },
    {
        question: "Q5: What is the purpose of the JavaScript 'typeof' operator?",
        a: " It converts a value to a specific data type.",
        b: "It checks if a variable is defined.",
        c: "It concatenates two strings.",
        d: "It returns the data type of a value.",
        ans: "ans4"
    },
]


const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const submit = document.getElementById("submitButton");

const answers = document.querySelectorAll(".answer")

const showScore = document.querySelector("#showScore");


let questionCount = 0;
let score = 0;

const questionList = javaQuiz[questionCount];
const loadQuestion = () => {



    question.innerHTML = questionList.question
    option1.innerHTML = questionList.a
    option2.innerHTML = questionList.b
    option3.innerHTML = questionList.c
    option4.innerHTML = questionList.d
}

loadQuestion();


const getCheckAnswer = () => {
    let answer;
    answers.forEach((clickAnswer) => {
        if (clickAnswer.checked) {
            answer = clickAnswer.id;
        }
    })
    return answer
}


document.addEventListener('DOMContentLoaded', function() {
    const submit = document.getElementById('submitButton');

    submit.addEventListener("click", () => {
        const checkAnswer = getCheckAnswer();
        console.log(checkAnswer);
        if (checkAnswer === javaQuiz[questionCount].ans) {
            score++;
        }

        questionCount++;

        if (questionCount < javaQuiz.length) {
            loadQuestion();
        } else {
            showScore.innerHTML = `<h3>You Scored ${score}/${javaQuiz.length} </h3>
            <button class="btn btn-outline-success" onclick="location.reload()">Play Again</button>`;
            showScore.classList.remove("showArea");
        }
    });
});
