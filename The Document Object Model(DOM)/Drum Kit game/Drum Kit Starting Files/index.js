var number_of_drum = document.querySelectorAll(".drum").length;
for ( var i = 0; i < number_of_drum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonTnnerHTML = this.innerHTML;
        make_sound(buttonTnnerHTML);
        button_animation(buttonTnnerHTML);
    });
}

document.addEventListener("keypress", function(event){
    make_sound(event.key);
    button_animation(event.key);
});

function make_sound(key){
    switch (key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            
    }
}

function button_animation(currentkey){
    var active_button = document.querySelector("." + currentkey);
    active_button.classList.add("pressed");

    setInterval(function(){
        active_button.classList.remove("pressed");
    }, 100)

}