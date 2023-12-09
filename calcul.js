document.querySelectorAll("table tr input").forEach(timer =>
    timer.addEventListener("input", updateTime)
);

function updateTime(e) {
    console.log("mise à jour du temps");
    console.log(e);
    let tr = e.target.parentNode.parentNode;
    let heureDebut = Number(tr.querySelector(".heureDebut").value);
    let minutesDebut = Number(tr.querySelector(".minutesDebut").value);
    let heureFin = Number(tr.querySelector(".heureFin").value);
    let minutesFin = Number(tr.querySelector(".minutesFin").value);
    let hhmm = tr.querySelector(".hhmm");
    let hh100e = tr.querySelector(".hh100e");

    /*console.log(heureDebut);
    console.log(minutesDebut);
    console.log(heureFin);
    console.log(minutesFin);*/

    // calculer le temps
    debut = new Date(2000, 1, 1);
    fin = new Date(2000, 1, 1);

    debut.setHours(Number(heureDebut));
    debut.setMinutes(Number(minutesDebut));

    fin.setHours(Number(heureFin));
    fin.setMinutes(Number(minutesFin));

    //console.log(debut);
    //console.log(fin)

    dureeMS = fin-debut; // durée en millisecondes
    console.log(dureeMS);

    if(fin >= debut) {
        let minutes = Math.floor((dureeMS / (1000 * 60)) % 60);
        let hours = Math.floor((dureeMS / (1000 * 60 * 60)) % 24);
        let minutes100e = Math.floor(minutes / 60 * 100);
      
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        minutes100e = (minutes100e < 10) ? "0" + minutes100e : minutes100e;

        hhmm.innerText = hours + ":" + minutes;
        hh100e.innerText = hours + "." + minutes100e;   
    } else {
        hhmm.innerText = "-";
        hh100e.innerText = "-";
    }

    updateTotal();
}

function updateTotal() {
    let dureeTotalehhmm = document.getElementById("dureeTotale-hhmm");
    let dureeTotalehh100e = document.getElementById("dureeTotale-hh100e");

    let trs = document.querySelectorAll("tr.timer");
    dureeTotale = 0;
    trs.forEach(tr => {
        let heureDebut = Number(tr.querySelector(".heureDebut").value);
        let minutesDebut = Number(tr.querySelector(".minutesDebut").value);
        let heureFin = Number(tr.querySelector(".heureFin").value);
        let minutesFin = Number(tr.querySelector(".minutesFin").value);

        // calculer le temps
        debut = new Date(2000, 1, 1);
        fin = new Date(2000, 1, 1);

        debut.setHours(Number(heureDebut));
        debut.setMinutes(Number(minutesDebut));

        fin.setHours(Number(heureFin));
        fin.setMinutes(Number(minutesFin));


        dureeMS = fin-debut; // durée en millisecondes
        dureeTotale += dureeMS;
        }); 
    if(dureeTotale >= 0) {
        let minutes = Math.floor((dureeTotale / (1000 * 60)) % 60);
        let hours = Math.floor((dureeTotale / (1000 * 60 * 60)) % 24);
        let minutes100e = Math.floor(minutes / 60 * 100);
      
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        minutes100e = (minutes100e < 10) ? "0" + minutes100e : minutes100e;

        dureeTotalehhmm.innerText = hours + ":" + minutes;
        dureeTotalehh100e.innerText = hours + "." + minutes100e;  
    } else {
        console.log(dureeTotalehhmm);
        console.log(dureeTotalehh100e);
        dureeTotalehhmm.innerText = "0:00";
        dureeTotalehh100e.innerText = "0:00";
    }
}

