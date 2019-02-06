var triviaQuestions = [
  {
    question: "What is the modern currency in Fallout?",
    answerList: ["caps", "rupees", "yen", "US dollars"],
    answer: 0,
    image:
      "https://media1.giphy.com/media/uq1QEVIXxMh4k/giphy.gif?cid=3640f6095c352879625a6a524161b56f"
  },
  {
    question: "What tribe lives in Red Rock Canyon?",
    answerList: [
      "Great Khans",
      "The Legion",
      "The Boomers",
      "Brotherhood of Steel"
    ],
    answer: 0,
    image:
      "https://media1.giphy.com/media/xUOxfg0ESyhKOv4Vva/giphy.gif?cid=3640f6095c352a7d6647684d67ca4e96"
  },
  {
    question: "What was the apex predator of the wasteland?",
    answerList: ["Mole rat", "Rad scorpion", "Ferral Goul", "Death claw"],
    answer: 3,
    image:
      "https://media2.giphy.com/media/7TpP7agtIdKeI/giphy.gif?cid=3640f6095c352bde366271494199f2f6"
  },
  {
    question: "What company created Fallout?",
    answerList: ["Bethseda", "Microsoft", "Piranha", "Sony"],
    answer: 0,
    image: ""
  },
  {
    question: "Where are the Boomers located?",
    answerList: [
      "Nellis Air Force Base",
      "New Vegas",
      "The Bunker",
      "Mojave Desert"
    ],
    answer: 0,
    image:
      "https://media2.giphy.com/media/Uwlo4AoNXWTyE/giphy.gif?cid=3640f6095c352b865579655551177468"
  },
  {
    question: "What is the name of the man that shot you?",
    answerList: ["Benny", "Diggs", "Marco", "Timmothy"],
    answer: 0,
    image:
      "https://media0.giphy.com/media/8H6pPdoDJjCaA/giphy.gif?cid=3640f6095c352b134755523151b873da"
  },
  {
    question: "Where are the Boomers originally from?",
    answerList: ["Vault 112", "Vault 76", "Vault 121", "Vault 34"],
    answer: 3,
    image:
      "https://media2.giphy.com/media/YqMF4AHYlGEWk/giphy.gif?cid=3640f6095c352a7d6647684d67ca4e96"
  },
  {
    question: "What society is cannabalistic?",
    answerList: [
      "White Glove Society",
      "The Legion",
      "Great Khans",
      "Super Mutants"
    ],
    answer: 0,
    image:
      "https://media1.giphy.com/media/5a0p33TG691ok/giphy.gif?cid=3640f6095c352aae6f42694651d4a439"
  },
  {
    question: "What kind of gun do you start out with in the game?",
    answerList: [
      "9mm pistol",
      "Don't start game witha gun.",
      "10mm pistol",
      "bb gun"
    ],
    answer: 0,
    image:
      "https://media0.giphy.com/media/KwssUHTlJ69aM/giphy.gif?cid=3640f6095c352b09336e676e4106d5c1"
  },
  {
    question: "what faction is the ncr's rival?",
    answerList: [
      "The Boomers",
      "Caesar's legion",
      "Brotherhood of Steel",
      "Great Khans"
    ],
    answer: 1,
    image:
      "https://media1.giphy.com/media/DWMldl9tdGYH6/giphy.gif?cid=3640f6095c352b5b544f686e4d59bcf0"
  },
  {
    question: "what's the name of the robot that dug you up??",
    answerList: ["Billy", "Sammy", "Victor", "R2v6"],
    answer: 2,
    image:
      "https://media1.giphy.com/media/9cNKwFnZL2Ks/giphy.gif?cid=3640f6095c352b2b7a41424777f78115"
  },
  {
    question: "where is the bison and steve hotel located?",
    answerList: ["Nipton", "New Vegas", "Quarry Junction", "Primm"],
    answer: 3,
    image:
      "https://media1.giphy.com/media/sdahGnRlRbx5K/giphy.gif?cid=3640f6095c352c4d586255646f01f9c6"
  },
  {
    question: "Who is in charge of new vegas?",
    answerList: ["White Glove Society", "Raiders", "Mr. House", "Great Khans"],
    answer: 2,
    image:
      "https://media2.giphy.com/media/oa46e9xFCSlTa/giphy.gif?cid=3640f6095c352be24462493967f8c9ff"
  },
  {
    question: "What town do you wake up in?",
    answerList: ["goodsprings", "Nipton", "New Vegas", "Primm"],
    answer: 0,
    image:
      "https://media3.giphy.com/media/JP5jY2MK0XyJG/giphy.gif?cid=3640f6095c352c035272696951bfd141"
  },
];
var wrongGif = "https://media.giphy.com/media/146BUR1IHbM6zu/giphy.gif";
var finalWinnerGif =
  "https://media1.giphy.com/media/2gtoSIzdrSMFO/giphy.gif?cid=3640f6095c353341704b556e4598fa80";
var finalLoserGif =
  "https://media3.giphy.com/media/oe33xf3B50fsc/giphy.gif?cid=3640f6095c352cc53946386d4dede05d";
var time;
var game = {
  score: 0,
  seconds: 15,
  questionNum: 0,
  countDown: function() {
    //reorganized function to only worry about countdown. Singularily focused goal.
    game.seconds--;
    console.log(game.seconds);
    var timeLeft = $("#timeLeft"); //try out with a p tag and a div.---->
    $("#timeLeft").html("<h3>Time Remaining: " + game.seconds + "</h3>");
    if (game.seconds < 1) {
      clearInterval(time);
      var message = $("<p>");
      message.text("Time's up!");
      $("#game-board").appendTo(message);
    }
  },
  scoreRound: function() {
    this.questionNum++;
    var selectedAnswer = $("input:checked").attr("choice");
    $("#game-board").empty();
    clearInterval(time);
    var message = $("<p>");
    console.log(selectedAnswer);
    console.log(
      triviaQuestions[this.currentIndex].answerList[
        triviaQuestions[this.currentIndex].answer
      ]
    );
    if (
      selectedAnswer ===
      triviaQuestions[this.currentIndex].answerList[
        triviaQuestions[this.currentIndex].answer
      ]
    ) {
      game.score++;
      message.text("That's correct!");
      $("#game-board").append(message);
      $("#game-board").append(
        "<img src=" + triviaQuestions[this.currentIndex].image + ">"
      );

      clearInterval(time);
    } else {
      message.text("Sorry, that's incorrect.");
      $("#game-board").append(message);
      $("#game-board").append("<img src=" + wrongGif + ">");

      clearInterval(time);
    }
    if (selectedAnswer == triviaQuestions.length - 1) {
    } else {
    }
    this.currentIndex++;
    var that = this;
    setTimeout(that.renderNextQuestion.bind(that), 4000);
  },
  currentIndex: 0,
  //define first key
  handleStart: function() {
    var that = this;
    this.questionNum = 0;
    $("#start-button").on("click", function() {
      $(this).hide(); //hides start
      that.renderNextQuestion();
    });
  },
  renderNextQuestion: function() {
    time = setInterval(game.countDown, 1000);
    //renders next question and empties the gameboard after answer is selected
    $("#game-board").empty();
    this.renderQuestion(triviaQuestions[this.currentIndex]);
    if (triviaQuestions[this.currentIndex] === 13) {
      if (game.score === 14) {
        message.text("Winner");
        $("#game-board").append(message);
        $("#game-board").append("<img src=" + finalWinnerGif + ">");
      } else {
        message.text("Better luck next time...");
        $("#game-board").append(message);
        $("#game-board").append("<img src=" + finalLoserGif + ">");
      }
    }
  },
  renderQuestion: function(currentQuestion) {
    console.log(currentQuestion)
    if (this.questionNum < triviaQuestions.length) {
      var questionBox = $("<div>");
      var scoreButton = $("<button>");
      var that = this;
      scoreButton.text("Next question.");
      scoreButton.on("click", function() {
        that.scoreRound();
      });
      var questionStem = $("<p>");
      questionStem.addClass("question");
      questionStem.text(currentQuestion.question);
      var answerBox = $("<div>");
      answerBox.addClass("answer");
      for (var j = 0; j < currentQuestion.answerList.length; j++) {
        var radioBtn = $(
          '<input type="radio">' + currentQuestion.answerList[j] + "</input>"
        );
        radioBtn.attr("name", j);
        radioBtn.attr("choice", currentQuestion.answerList[j]);
        radioBtn.appendTo(answerBox);
      }
      clearInterval(time);
      game.seconds = 15;
      time = setInterval(game.countDown, 1000);
      questionBox.append(questionStem);
      questionBox.append(answerBox);
      $("#game-board").append(questionBox);
      $("#game-board").append(scoreButton);
      showAnswer();
    } else {
      alert('Game over!!');
    }
  },
  scoreGame: function() {}
};
game.handleStart();

function showAnswer() {}
