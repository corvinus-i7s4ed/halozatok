var kérdések;
var kérdésSzám = 0;
var katt;


function letöltés() {
    fetch('/questions.json')
    .then(response => response.json())
    .then(data => letöltésBefejeződött(data));
}



function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(kérdésSzám);
}

function kérdésMegjelenítés(kérdés) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdésSzám].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdésSzám].answer1;
    document.getElementById("válasz3").innerHTML = kérdések[kérdésSzám].answer3;
    document.getElementById("válasz2").innerHTML = kérdések[kérdésSzám].answer2;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzám].image;
    válasz1.classList.remove("jó", "rossz");
    válasz2.classList.remove("jó", "rossz");
    válasz3.classList.remove("jó", "rossz");
}

window.onload = function () {
    letöltés();

    document.getElementById("vissza").onclick = function visszaLépés() {
        
        kérdésSzám--;
        if (kérdésSzám == -1) {
            kérdésSzám = kérdések.length-1;
        }
        kérdésMegjelenítés(kérdésSzám);
    }

    document.getElementById("előre").onclick = function előreLépés() {
        kérdésSzám++;
        if (kérdésSzám==kérdések.length) {
            kérdésSzám = 0;
        }
        kérdésMegjelenítés(kérdésSzám);
    }

    document.getElementById("válasz1").onclick = function () {
        katt = 1;
        ellenőrzés();
    }

    document.getElementById("válasz2").onclick = function () {
        katt = 2;
        ellenőrzés();
    }

    document.getElementById("válasz3").onclick = function () {
        katt = 3;
        ellenőrzés();
    }


    function ellenőrzés() {
        let jovalasz = kérdések[kérdésSzám].correctAnswer;
        if (katt == jovalasz) {
            document.getElementById("válasz" + katt).classList.add("jó")
        }
        else {
            document.getElementById("válasz" + katt).classList.add("rossz")
            document.getElementById("válasz" + jovalasz).classList.add("jó")
        }
    }
    
}



