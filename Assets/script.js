var highScoresButton = document.querySelector(".viewHighscoresButton");
var startButton = document.querySelector("#startQuiz");
var questionText = document.querySelector(".question");
var option1Btn = document.querySelector("#option1");
var option2Btn = document.querySelector("#option2");
var option3Btn = document.querySelector("#option3");
var option4Btn = document.querySelector("#option4");
var counterDisplay = document.querySelector("#counterDisplay");
var scoreDisplay = document.querySelector("#score");
var resultMessage = document.querySelector(".resultMessage")

var questions = [
    { q: "Which are the only two places in the world where you can't buy Coca-Cola?", choiceA: "North Korea & Cuba", choiceB:"Mexico & Belize", choiceC: "Saudi Arabia & Iran", choiceD: "China & Myanmar", correct: "North Korea & Cuba"},
    { q: "Which percentage of the entire world's population can fit inside LA?", choiceA: "100%", choiceB:"80%", choiceC: "60%", choiceD:"40%", correct:"100%"},
    { q: "When has the number of twins reached the maximum level in history?", choiceA: "Now", choiceB:"20 years ago", choiceC:"100 years ago", choiceD:"1000 years ago", correct:"Now"},
    { q: "What is the worst that can happen to you by eating the hottest chili?", choiceA: "Kill you", choiceB: "Bad diarrhea", choiceC: "Faint", choiceD: "Nothing", correct: "Kill you"},
    { q: "What is the country with the highest number of tourists?", choiceA: "France", choiceB: "US", choiceC: "China", choiceD: "Australia", correct:"France"},
    { q: "What is the size in number of soccer fields of the world's most densely populated island?", choiceA: "2", choiceB:"10", choiceC: "1", choiceD: "<1", correct:"2"},
    { q: "After what animal, were The Canary Islands named after?", choiceA: "Dog", choiceB:"Bird", choiceC: "Horse", choiceD: "Lion", correct: "Dog"},
    { q: "Which country has the shortest people in the world?", choiceA: "Indonesia", choiceB: "Phillippines", choiceC: "Congo", choiceD: "Bolivia", correct: "Indonesia"},
    { q: "Where is the quietest room in the world?", choiceA: "Microsoft's headquarters", choiceB: "Lamma Temple", choiceC: "Tibet", choiceD: "CDMX", correct:"Microsoft's headquarters"}
  ];

var lastQuestion = questions.length-1;
var count=0;
var timer=0;
var score=0;
var questionTime=10;
var speed = setInterval(counter,1000);
var newHighScore = "";

option1Btn.addEventListener("click", function(){
    answer = option1Btn.textContent;
    checkAnswer(answer);

});

option2Btn.addEventListener("click",function(){
    answer = option2Btn.textContent;
    checkAnswer(answer);

});

option3Btn.addEventListener("click", function(){
    answer = option3Btn.textContent;
    checkAnswer(answer);
});

option4Btn.addEventListener("click",function(){
    answer = option4Btn.textContent;
    checkAnswer(answer);

});

function displayQuestion(){
    var question = questions[count];
    questionText.textContent=question.q;
    option1Btn.textContent=question.choiceA;
    option2Btn.textContent=question.choiceB;
    option3Btn.textContent=question.choiceC;
    option4Btn.textContent=question.choiceD;
}

function counter(){
    if(timer<=questionTime){
        counterDisplay.textContent=timer;
        timer++;
    }
    else{
        timer=0;
        if(count<=lastQuestion){
            count++;
            score--;
            displayQuestion();
        }
        else{
            displayScore();
            saveHighscore();
        }
    }

}

function saveHighscore(){
        var newDiv = document.createElement('div');
        var newBtn = document.createElement('button');
        var newInput= document.createElement('input');
        newDiv.textContent="Please input your name";
        newDiv.appendChild(newInput);
        newDiv.appendChild(newBtn);
        newBtn.textContent="Save";
        document.body.appendChild(newDiv);
        newHighScore = newInput.value;
        addNewHighScore();    
}

function addNewHighScore(){
    var li = document.createElement("li");
    li.textContent = newHighScore;
    document.body.appendChild(li);
}

function displayScore(){
    scoreDisplay.textContent="Score "+score;
}

function checkAnswer(answer){

    if(questions[count].correct==answer){
        score++;
        displayScore();
        resultMessage.textContent="Correct";
    }
    else{
        score--;
        displayScore();
        resultMessage.textContent="Wrong";
    }

    if(count<lastQuestion){
        count++;
        displayQuestion();
    }
    else{
        clearInterval(speed);
        displayScore();
    }
    
}

function askQuestions(){


    displayQuestion();
    counter();
    speed=setInterval(counter,1000);
          
}


startButton.addEventListener("click", askQuestions);

