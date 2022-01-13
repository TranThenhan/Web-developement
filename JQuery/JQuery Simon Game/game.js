var button_colours =["red", "blue", "green", "yellow"];

var game_pattern = [];

var user_clicked_pattern = [];

var started = false;
var level = 0;




$(".btn").click(function(){
    if(started){
        var user_chosen_colour = $(this).attr("id");
        user_clicked_pattern.push(user_chosen_colour);
        playSound(user_chosen_colour);
        animatePress(user_chosen_colour);
        checkAnswer(user_clicked_pattern.length-1);
    }
    
});


// $(document).keypress(function(){   
//     if (!started) {
//         $("#level-title").text("Level " + level);
//         nextSequence();
//         started = true;
//       }
// });  

$(".start_game").click(function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
});


function checkAnswer(current_level){
    if (game_pattern[current_level] === user_clicked_pattern[current_level]) {
        if (user_clicked_pattern.length === game_pattern.length){

            setTimeout(function () {
                if (user_clicked_pattern.length === game_pattern.length){
                    nextSequence();
                }},1000);              
        }
       } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("#level-title").text("Game Over, Click Restart game to Restart");
            $("body").removeClass("game-over");
            startOver();
          },200);

      }
}

function nextSequence(){
    
    level++;
    $("#level-title").text("Level " + level);
    var random_number = Math.floor(Math.random()*4);

    var random_chosen_colour = button_colours[random_number] ;

    game_pattern.push(random_chosen_colour);

    $("#"+random_chosen_colour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(random_chosen_colour);
    user_clicked_pattern = [];
    $(".start_game").hide();
    $(".rule").hide();
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(current_color){
    $("#"+current_color).addClass("pressed");
    setTimeout(function(){
        $("#"+current_color).removeClass("pressed");
    }, 100);
    
}

function startOver(){
    level = 0;
    game_pattern =[];
    started = false;
    $(".start_game").show();
    $(".start_game").text("Restart game");
}
