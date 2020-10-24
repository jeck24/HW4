var highScoresButton = document.querySelector(".viewHighscoresButton");
var startButton = document.querySelector("#startQuiz");
var questionText = document.querySelector(".question");
var option1Btn = document.querySelector("#option1");
var option2Btn = document.querySelector("#option2");
var option3Btn = document.querySelector("#option3");
var option4Btn = document.querySelector("#option4");
var counterDisplay = document.querySelector(".counter");
var scoreDisplay = document.querySelector(".score");


var count=0;
var timer=0;
var score=0;
var questionTime=59;

var questions = [
    { q: "Which are the only two places in the world where you can't buy Coca-Cola?", choiceA: "North Korea & Cuba", choiceB:"Mexico & Belize", choiceC: "Saudi Arabia & Iran", choiceD: "China & Myanmar", correct: "A"},
    { q: "Which percentage of the entire world's population can fit inside LA?", choiceA: "100%", choiceB:"80%", choiceC: "60%", choiceD:"40%", correct:"A"},
    { q: "When has the number of twins reached the maximum level in history?", choiceA: "Now", choiceB:"20 years ago", choiceC:"100 years ago", choiceD:"1000 years ago", correct:"A"},
    { q: "What is the worst that can happen to you by eating the hottest chili?", choiceA: "Kill you", choiceB: "Bad diarrhea", choiceC: "Faint", choiceD: "Nothing"},
    { q: "What is the country with the highest number of tourists?", choiceA: "France", choiceB: "US", choiceC: "China", choiceD: "Australia", correct:"A"},
    { q: "What is the size in number of soccer fields of the world's most densely populated island?", choiceA: "2", choiceB:"10", choiceC: "1", choiceD: "<1", correct:"A"},
    { q: "After what animal, were The Canary Islands named after?", choiceA: "Dog", choiceB:"Bird", choiceC: "Horse", choiceD: "Lion", correct: "A"},
    { q: "Which country has the shortest people in the world?", choiceA: "Indonesia", choiceB: "Phillippines", choiceC: "Congo", choiceD: "Bolivia", correct: "A"},
    { q: "Where is the quietest room in the world?", choiceA: "Microsoft's headquarters", choiceB: "Lamma Temple", choiceC: "Tibet", choiceD: "CDMX", correct:"A"}
  ];

var lastQuestion = questions.length-1;

function displayQuestion(){
    var question = questions[count];
    questionText.textContent=question.q;
    option1Btn.textContent=question.choiceA;
    option2Btn.textContent=question.choiceB;
    option3Btn.textContent=question.choiceC;
    option4Btn.textContent=question.choiceD;
    console.log(questionText.textContent);
    count++;
}

function counter(){
    if(timer<=questionTime){
        counterDisplay.textContent=timer;
        timer++;
    }
    else{
        timer=0;
        if(count<lastQuestion){
            count++;
            displayQuestion();
        }
        else{
            displayScore();
        }
    }

}

function displayScore(){
    scoreDisplay.textContent="Score "+score;
}

function checkAnswer(answer){

    if(questions[count].correct==answer){
        score++;
    }
    else{
        score--;
    }

    if(count<lastQuestion){
        count++;
        displayQuestion();
    }
    else{
        clearInterval(timer);
        alert("Your score is: "+score);
    }


    option1Btn.addEventListener("click", function(){
        answer = option1Btn.textContent;
        if (answer === questions[count].correct){
            score ++;
        }

    });

    option2Btn.addEventListener("click",function(){
        answer = option2Btn.textContent;
        if (answer === questions[count].correct){
            score ++;
            count++;
        }

    });

    option3Btn.addEventListener("click", function(){
        answer = option3Btn.textContent;
        if (answer === questions[count].correct){
            score ++;
            count++;
        }

    });

    option4Btn.addEventListener("click",function(){
        answer = option4Btn.textContent;
        if (answer === questions[count].correct){
            score ++;
            count++;
        }

    });
}

function askQuestions(){


    counter();
    timer=setInterval(counter,1000);
    displayQuestion();
    checkAnswer();
          
    
    console.log(score);
}

startButton.addEventListener("click", askQuestions);

