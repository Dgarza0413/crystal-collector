//four boxes will use on click functions to contribute their assignmed values
//the four boxes will be generated via for loops

//initial scores
var userScore = 0;
var goalScore = (Math.floor(Math.random() * 120) + 19)

//win loss counters
var winScore = 0;
var loseScore = 0;

//function to reset all values
function gameReset() {
    userScore = 0
    goalScore = (Math.floor(Math.random() * 120) + 19);
    $("#goal-score-display").text(goalScore)
    $("#user-score-display").text(userScore)
    randomNumGen();
}

//if function to check win or lose
function gameEnd() {
    if (userScore === (goalScore)) {
        var audio = new Audio("assets/audio/win.wav")
        console.log("you win")
        $("#win-score-display").text(++winScore)
        $("#msg-display").text("YOU WIN")
        audio.play()
        return gameReset(), randomNumGen()
    } else if ((userScore > goalScore)) {
        var audio = new Audio("assets/audio/loss.wav")
        $("#lose-score-display").text(++loseScore)
        $("#msg-display").text("YOU LOSE")
        audio.play()
        return gameReset(), randomNumGen()
    }
}
// using for each to set a random number on all buttons
// using this routing is better for setting unique img for the buttons
function randomNumGen() {
    $("button").each(function () {
        // console.log(imgsrc);
        var crystalNumber = (Math.floor(Math.random() * 12) + 1);
        //use keyword this to refer to the object of button
        $(this).attr("random-value", crystalNumber)
        $(this).append("img", $(this).attr("src"))
        $(this).text(crystalNumber)
    })
}
$("#goal-score-display").text(goalScore)

//this on click will use the button's number to update the userScore
//click checks if game has won or loss
$("button").on("click", function () {
    var audio = new Audio("assets/audio/RUPEESELECT.WAV")
    var randomvalue = parseInt($(this).attr("random-value"))
    userScore = Number(userScore) + Number(randomvalue)
    //Update score and clear msg
    $("#user-score-display").text(userScore)
    $("#msg-display").text("")
    gameEnd()
    //does it meet the conditions?
    audio.play()
})

randomNumGen();