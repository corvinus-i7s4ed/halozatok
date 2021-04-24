
var összesKérdés = 10;
var kérdésSzám = 1;
var katt;
var jovalasz;


function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}


function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText;
    document.getElementById("válasz1").innerText = kérdés.answer1;
    document.getElementById("válasz3").innerText = kérdés.answer3;
    document.getElementById("válasz2").innerText = kérdés.answer2;
    válasz1.classList.remove("jó", "rossz");
    válasz2.classList.remove("jó", "rossz");
    válasz3.classList.remove("jó", "rossz");
    jovalasz = kérdés.correctAnswer;
    if (!kérdés.image == "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
        document.getElementById("kép1").style.display = 'flex';

    }
    else {
        document.getElementById("kép1").style.display = 'none';
    }

}




window.onload = function () {
    kérdésBetöltés(kérdésSzám);


    document.getElementById("vissza").onclick = function visszaLépés() {

        kérdésSzám--;
        if (kérdésSzám == -1) {
            kérdésSzám = összesKérdés;
        }
        kérdésBetöltés(kérdésSzám);
    }

    document.getElementById("előre").onclick = function előreLépés() {
        kérdésSzám++;
        if (kérdésSzám == összesKérdés) {
            kérdésSzám = 1;
        }
        kérdésBetöltés(kérdésSzám);
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
        
        if (katt == jovalasz) {
            document.getElementById("válasz" + katt).classList.add("jó")
        }
        else {
            document.getElementById("válasz" + katt).classList.add("rossz")
            document.getElementById("válasz" + jovalasz).classList.add("jó")
        }
    }
    }





