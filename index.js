var readline = require('readline-sync');
var chalk=require("chalk");
var score=0;
console.log(chalk.bgBlue("WELCOME"));
askname="What is your name? ";
var name=readline.question(askname);
console.log("Hello "+ name);

console.log("Do you know about "+chalk.bold.cyan("SCAM 1992 SERIES ")+"?");
console.log("Take this quiz to see how much you remember.....");

console.log("GAME RULES :")
console.log(chalk.bold.red("\t 1. This quiz has 3 levels and each level contains 5 questions.\n\t 2. Right answer gets 5 points.\n\t 3. If it is wrong, current score gets deduced by -3.\n\t 4. Score will not be in a negetive format. Minimum score = 0.\n\t 5. Each level is an elimination level.\n\t 6. Mimimum score eligible for next levels be 15 for level-1,32 for level-2."));
var verify=readline.question("Are you ready to take QUIZ (yes or no) : ");
if(verify==="yes"){
    var questions=[{
    question: "\n 1. What was Harshad Mehta's full name? \n\t a. Harshad Jayantilal Mehta \n\t b. Harshad Shantilal Mehta \n\t c. Harshad Maykelal Mehta \n\t d. Harshad Sitaram Mehta \n",
    answer:"b"
  },{
    question: "\n 2. Harshad Mehta met Bhushan Bhatt for the first time when both of them were: \n\t a. Brokers \n\t b. Insurance agents \n\t c. Jobbers \n\t d. Investors \n",
    answer:"c"

  },{
    question: "\n 3. Who tipped Sucheta Dala about the fraud in SBI? \n\t a. Sharad Gedi \n\t b. Bellary M \n\t c. Sharad Bellary \n\t d. None of these \n",
    answer:"c"
  },{
    question: "\n 4. What was the area of the penthouse where Harshad Mehta and family lived in Mumbai? \n\t a. 19,000 sq ft \n\t b. 1,500 sq ft \n\t c. 15,000 sq ft \n\t d. 50,000 sq ft \n",
    answer:"c"
  },{
    question: "\n 5. What was the name of Harshad Mehta's consultancy firm? \n\t a. GrowAsset \n\t b. GrowShare \n\t c. GrowMore \n\t d. LearnMore \n",
    answer:"c"
  },{
    question: "\n 6. Which was Harshad Mehta's favourite in his fleet of imported luxury cars? \n\t a. Toyota Corolla \n\t b. Lexus Starlet \n\t c. Toyota Sera \n\t d. None of these \n",
    answer:"b"
  },{
    question: "\n 7. What was the name of the committee formed by RBI to investigate Harshad Mehta's scam? \n\t a. Sitharaman Committee \n\t b. Vasudevan Committee \n\t c. Janakiraman Committee \n\t d. Sachdeva Committee \n",
    answer:"c"
  },{
    question: "\n 8. How many days did Harshad Mehta spend in jail before recieving bail? \n\t a. 99 \n\t b. 113 \n\t c. 111 \n\t d. 90 \n",
    answer:"c"
  },{
    question: "\n 9. Which new sport did Harshad Mehta learn in Scam 1992? \n\t a. Polo \n\t b. Badminton \n\t c. Golf \n\t d. Football \n",
    answer:"c"
  },{
    question: "\n 10. Which document was missing with the SBI when the fraud was initially exposed? \n\t a. Cheques \n\t b. Demand Drafts \n\t c. Bank Receipts \n\t d. None of these \n",
    answer:"c"
  },{
    question: "\n 11. What was the name of the CBI officer initially appointed to interrogate Harshad? \n\t a. R Madhavan \n\t b. R Krishnamurthy \n\t c. K Madhavan \n\t d. None of these \n",
    answer:"c"
  },{
    question: "\n 12. What did Harshad Mehta do after returning from jail? \n\t a. He started trading again. \n\t b. He started offering investment tips through articles. \n\t c. He entered politics. \n\t d. None of these. \n",
    answer:"b"
  },{
    question: "\n 13. Pherwani was the Chairman of which bank? \n\t a. Citi Bank \n\t b. Metropolitan Co-operative Bank \n\t c. National Housing Bank \n\t d. Punjab National Bank \n",
    answer:"c"
  },{
    question: "\n 14. What did the suitcase that Harshad Mehta showed to the media contain? \n\t a. BRs \n\t b. ₹1 crore cash \n\t c. ₹500 crore cash \n\t d. ₹ 20 crore cash \n",
    answer:"b"
  },{
    question: "\n 15. Who was the famous lawyer who fought for Harshad, initially? \n\t a. Gopal Subramaniam \n\t b. Ram Jethmalani \n\t c. Mukuk Rohtagi \n\t d. Harish Salve \n",
    answer:"b"
  }
  ]
  
  var highScores = [
    {
      name: "sameer khan",
      score: 65,
    },

    {
      name: "Varun",
      score: 60,
    }
  ]

  function quiz(question, answer) {
    var userAns = readline.question(question);

    if (userAns.toLowerCase() === answer.toLowerCase()) { // branching
      console.log(chalk.bold.green("you are right!"));
      score = score + 5;
      
    } else {
      console.log(chalk.bold.red("no, its wrong!"));
      if(score != 0){
        score = score-3;
      }
    
    }

    console.log("your current score: ", chalk.bold.green(score));
    console.log("--------------------------------------")
  }
  var i=0;
  for(i=0;i<questions.length;i++){
    var q=questions[i];
    quiz(q.question,q.answer);
    if(score>=15 && i===4){
      console.log("Welcome to Level - 2 ");
      
    }
    else if(score>=32 && i===9){
      console.log("Welcome to Level - 3 ");
    }else if((score<15 && i===4) || (score<32 && i===9)){
      console.log("you are not eligible for next level....");
      break;
    }
  }
  console.log("--------------------------------------------");
  console.log(chalk.bgCyan("Total Score : "+ score));
  if(score>55){
    console.log(chalk.bold.green("Wow it is a great score!!"))
  }
  console.log("High Scores: ");
  for(i=0;i<highScores.length;i++){
    
    console.log("    Name : "+highScores[i].name);
    console.log("    Score : "+highScores[i].score);
    console.log("\n");
  }
  console.log(chalk.bgCyan("If you got an highscore feel free to take a screen shot and send it to me....I will definetly mention it in the above high scores..."));
  console.log(chalk.bold.green("Thank You!"));
}