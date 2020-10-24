var highScoresButton = document.querySelector(".viewHighscoresButton");
var startButton = document.querySelector("#startQuiz");
var option1Btn = document.querySelector("#option1");
var option2Btn = document.querySelector("#option2");
var option3Btn = document.querySelector("#option3");
var option4Btn = document.querySelector("#option4");

console.log(option1Btn.textContent);


function askQuestions(){
    var questions = [
        { q: "Which are the only two places in the world where you can't buy Coca-Cola?", choices: {a: "North Korea & Cuba", w:["Mexico & Belize", "Saudi Arabia & Iran", "China & Myanmar"]} },
        { q: "Which percentage of the entire world's population can fit inside LA?", choices: {a: "100%", w:["80%", "60%", "40%"] }},
        { q: "When has the number of twins reached the maximum level in history?", choices: {a: "Now", w: ["20 years ago", "100 years ago", "1000 years ago"] }},
        { q: "What is the worst that can happen to you by eating the hottest chili?", choices: {a: "Kill you", w: ["Bad diarrhea", "Faint", "Nothing"]}},
        { q: "What is the country with the highest number of tourists?", choices: {a: "France", w: ["US", "China", "Australia"]}},
        { q: "What is the size in number of soccer fields of the world's most densely populated island?", choices: {a: "2", w: ["10", "1", "<1"]}},
        { q: "After what animal, were The Canary Islands named after?", choices: {a: "Dog", w: ["Bird", "Horse", "Lion"]}},
        { q: "Which country has the shortest people in the world?", choices: {a: "Indonesia", w: ["Phillippines", "Congo", "Bolivia"] }},
        { q: "Where is the quietest room in the world?", choices: {a: "Microsoft's headquarters", w: ["Lamma Temple", "Tibet", "CDMX"] }}
      ];

    
      var score=0;

      for (let i = 0; i < questions.length; i++) {
          
        option1Btn.textContent=questions[i].choices.a;
        option2Btn.textContent=questions[i].choices.w[0];
        option3Btn.textContent=questions[i].choices.w[1];
        option4Btn.textContent=questions[i].choices.w[2];

          var answer=prompt(questions[i].q);

          if (answer === questions[i].a){
              score ++;
              alert("Correct!");
          }

          else{
              alert("Wrong!");
          }
      }
      alert("You got " + score + "/" + questions.length);
}

startButton.addEventListener("click", askQuestions);

