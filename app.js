function populate () {
    if ( quiz.isEnded()) {
        showScores();
    }
    else {
        // Triva questions
        var element =document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.lenght; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML =choices[i];
            guess ("btn" + i, choices [i]);

        }

          showProgress();
    }
};

function guess(id,guess){


   var button = document.getElementById(id);
   button.onclick = function() {
       quiz.guess(guess);
       populate();
   }

};

function showProgress() {
    var currentQuestionNUmber = quiz.quesstionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNUmber +" of " + quiz.questions.lenght;

}

function showScores() {
    var quizFinishedHtml = "<h1>Result</h1>";
     quizFinishedHtml += "<h2 id='score'> your scores: " + quiz.score + "</h2>";
     var element = document.getElementById("quiz");
     element.innerHTML =quizFinishedHtml;

}
 
Var questions = [
    new Question( "Which is not a object oriented programming language?", ["Java", "C"," C++","C#"], "C"),
    new Question( "Inside which HTML element do we put the Javascript?", ["<scripting>", "<js>"," <script>","<javascript>"], "<script>"),
    new Question( "Which of the following is a disadvangtage of using JavaScript?", ["Client-side JavaScript does not allow the reading or writing of files.", "Can not be used for network"," has no multithreading or multiprocess capabilities","All of the above"], "C"),
    new Question( "How can you get the total number of arguments passed to a function?", ["Using args.length property", "Using arguments.length property"," Both of the above","None of the above"], "Using arguments.length property "),
    new Question( "Which of the following function of numbers objects return the number's value?", ["toString", "valueOf","toLocalString","toPrecision()"], "valueOf"),
    new Question( "What is the correct syntax for referring to an external script call "Worker.js"?", ["<script src="Worker.js">", "<script href="Worker.js">"," <script ref="Worker.js">","<script name="Worker.js">"], "<script src="Worker.js">"),
    new Question( "The external JavaScript file must contain <script> tag ?", ["Yes", "No"," some times","most of the time"], "yes"),
    new Question( "Which of th following is not a reserved word in JavaScript?", ["interface", "throws"," program","short"], "program"),
    new Question( "Which function of an Array object calls a function for each element in the array?", ["forEach()", "every()"," forEvery()","each()"], "forEach()"),
    new Question( "JavaScript is ______ language?", ["a complied", "a new"," a developming ","an interpreted"], "an interpreted"),
]
