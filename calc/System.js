disp    = "0";
disp2    = "0";
flag    = 0;
var ongaku = new Array();

function push(val) {
    if(val >= 0 && val <= 9) {            //　電卓に表示する数列を作成
        if(flag == 0) {
            disp    = val;
            disp2    = "0";
            flag    = 1;
        }
        else {
            disp    = disp + val;
            disp    = parseFloat(disp);
        }
        ongaku.push(val);           //422の順にボタン押すとどんぐりころころ流れる
        if (ongaku.length == 3) {
            if (ongaku[0] == 4) {
                if (ongaku[1] == 2) {
                    if (ongaku[2] == 2) {  
                        setTimeout('adplay(100)', 1000); //1000ms(一秒後に)
                    }
                }
            }
            ongaku = [];         
        }

    }
    else if(val == "Ｃ") {                //　クリア
        disp    = "0";
        disp2    = "0";
        flag    = 0;
        ongaku = [];
    }
    else {
        if(disp) {
            switch(flag) {            //　計算
            case 1:disp2 = parseFloat(disp2) + parseFloat(disp); break;
            case 2:disp2 = parseFloat(disp2) - parseFloat(disp); break;
            case 3:disp2 = parseFloat(disp2) * parseFloat(disp); break;
            case 4:disp2 = parseFloat(disp2) / parseFloat(disp); break;
            }
        }
        if(val == "＝") {            //　計算方法を記憶
            flag    = 0;
            disp    = disp2;
            if (disp == 777) {
                var audio = new Audio("./sound/777.mp3");
                audio.play();
            }
        }
        else if(val == "＋") {
            flag    = 1;
            disp    = "";
        }
        else if(val == "－") {
            flag    = 2;
            disp    = "";
        }
        else if(val == "×") {
            flag    = 3;
            disp    = "";
        }
        else if(val == "÷") {
            flag    = 4;
            disp    = "";
        }
    }
    document.form1.disp.value = disp        //　電卓に表示
}

function adplay(a){ //音楽を流す
    if (a == 1) {
        var audio = new Audio("./sound/pdo.wav");
    } else if (a == 2) {
        var audio = new Audio("./sound/pre.wav");
    } else if (a == 3) {
        var audio = new Audio("./sound/pmi.wav");
    } else if (a == 4) {
        var audio = new Audio("./sound/pfa.wav");
    } else if (a == 5) {
        var audio = new Audio("./sound/pso.wav");
    } else if (a == 6) {
        var audio = new Audio("./sound/pra.wav");
    } else if (a == 7) {
        var audio = new Audio("./sound/psi.wav");
    } else if (a == 8) {
        var audio = new Audio("./sound/pianoC.wav");
    } else if (a == 9) {
        var audio = new Audio("./sound/pianoF.wav");
    } else if (a == 10) {
        var audio = new Audio("./sound/pianoG.wav");
    } else if (a == 11) {
        var audio = new Audio("./sound/pianoAM.wav");
    } else if (a == 100) {
        var audio = new Audio("./sound/donguri.mp3");
    }

    audio.play();
    setTimeout(function adstop() {      //5秒後に停止
        audio.pause();
        audio.currentTime = 0;
    }, 5000);
}

