

function drum(a) {
    if (a == 0) {
        var audio = new Audio("./sound/bassdrum.wav");
    } else if (a == 1) {
        var audio = new Audio("./sound/cymbal.wav");
    } else if (a == 2) {
        var audio = new Audio("./sound/hat.wav");
    } else if (a == 3) {
        var audio = new Audio("./sound/snare.wav");
    } else if (a == 4) {
        var audio = new Audio("./sound/tom.wav");
    }

    audio.play();
}