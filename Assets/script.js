var startButton = document.querySelector(".button");


function askQuestions(){
    var questions = [
        { q: "Which are the only places in the world where you can't buy Coca-Cola?", a: "North Korea & Cuba" },
        { q: "Which percentage of the entire world's population can fit inside LA?", a: "100%" },
        { q: "When has the number of twins reached the maximum level in history?", a: "Now" },
        { q: "What is the worst that can happen to you by eating the hottest chili?", a: "It can kill you" },
        { q: "What is the country with the highest number of tourists?", a: "France" },
        { q: "What is the size in number of soccer fields of the world's most densely populated island?", a: "2" },
        { q: "After what animal, were The Canary Islands named after?", a: "Dog" },
        { q: "Which country has the shortest people in the world?", a: "Indonesia" },
        { q: "Where is the quietest room in the world?", a: "Microsoft's headquarters" }
      ];
    
      var score=0;

      for (let i = 0; i < questions.length; i++) {
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

