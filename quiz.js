const quizDb = [{
    question: "Q1 : Who is the Prime minster of the india. ",
    a: "Arvinder kejriwal",
    b: " Shri Narender modi",
    c: "yogi aditya nath ji",
    d: "Jawal lal nehru",
    ans:"ans2"
},{
    question:"Q2 : what is the value of 2+2-5",
    a: "-4",
    b: "1",
    c: "2",
    d: "-1",
    ans:"ans4"
},
{
    question:"Q3 : Who is you singer of tum hi ho ",
    a: " Arjit singh",
    b: "Sonu Nigam",
    c: "Rahul Vaidya",
    d: "jass Manak",
    ans:"ans1"
}]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let question_Count = 0;
let score = 0;

const loadQuestion=() => {
     question.innerHTML = quizDb[question_Count].question;

     option1.innerText = quizDb[question_Count].a;
     option2.innerText = quizDb[question_Count].b;
     option3.innerText = quizDb[question_Count].c;
     option4.innerText = quizDb[question_Count].d;
}

loadQuestion();
const getCheckanswer = () =>{
    let answer;

    answers.forEach((curAnsEle)=>{
            if(curAnsEle.checked){
                answer =curAnsEle.id;
            }  
    })
    return answer;
}

const DeSelect = () =>{
    answers.forEach((curAnsEle)=> curAnsEle.checked = false);
}
submit.addEventListener('click', ()=>{
    const check_answer = getCheckanswer();
    console.log(check_answer);

    if( check_answer === quizDb[question_Count].ans){
        score++;

    }
    question_Count++;

    if(question_Count < quizDb.length){
        loadQuestion();
    }
    else{
        showscore.innerHTML = `
            <h2>You  scored ${score}/${quizDb.length}  </h2>
            <button class = "btn" onclick="location.reload()"> Play Again </button> `;
        showscore.classList.remove('scorearea');
    }
})

