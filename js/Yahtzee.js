//
maxSpalten = 6;
serviert = 0;
selektiertesFeld = null;
Gesamt = [];
GesamtUnten = [];
Total = [];
bonusWert = [];
spieleNummer = 0;
spielerAuswahlId = "";
spielerName = [];
bereitsBearbeiteteNamen = [];
alleSpieler = [];
insgesamtGewuerfelt = [];
wuerfeAlleSpieler = [];

// Event Listener für Seiten Background --> verhindert default Reaktionen des Browsers
window.addEventListener("mousedown", mouseDownOnBackground);
window.addEventListener("touchstart", mouseDownOnBackground);
window.addEventListener("mouseup", mouseUpOnBackground);
window.addEventListener("touchend", mouseUpOnBackground);

// Event Listener für Namensfelder
namensFelder = document.querySelectorAll(".namensFeld");
for(i=0;i < namensFelder.length; i++)
{
    namensFelder[i].addEventListener("mousedown", mouseDownOnNamensFeld);
    namensFelder[i].addEventListener("mousedup", mouseUpOnNamensFeld);
    namensFelder[i].addEventListener("touchstart", mouseDownOnNamensFeld);
    namensFelder[i].addEventListener("touchend", mouseUpOnNamensFeld);
}

// Event Listener Click auf Spielerauswahlliste
document.getElementById("spielerAuswahlListe").addEventListener("mousedown", mouseDownOnSpielerAuswahlListe);
document.getElementById("spielerAuswahlListe").addEventListener("touchstart", mouseDownOnSpielerAuswahlListe);
document.getElementById("spielerAuswahlListe").addEventListener("mouseup", mouseUpOnSpielerAuswahlListe);
document.getElementById("spielerAuswahlListe").addEventListener("touchend", mouseUpOnSpielerAuswahlListe);

// Event Listener für Zifferntasten hinzufügen
for(i=0; i<10;i++)
{
    id = "ziffer" + i;
    document.getElementById(id).addEventListener("mousedown", mouseDownOnZifferntaste);
    document.getElementById(id).addEventListener("touchstart", mouseDownOnZifferntaste);
    document.getElementById(id).addEventListener("mouseup", mouseUpOnZifferntaste);
    document.getElementById(id).addEventListener("touchend", mouseUpOnZifferntaste);
}

// Event Listener für Funktionstasten
document.getElementById("fertig").addEventListener("mousedown", mouseDownOnFertig);
document.getElementById("fertig").addEventListener("mouseup", mouseUpOnFertig);
document.getElementById("fertig").addEventListener("touchstart", mouseDownOnFertig);
document.getElementById("fertig").addEventListener("touchend", mouseUpOnFertig);
document.getElementById("loeschen").addEventListener("mousedown", mouseDownOnLoeschen);
document.getElementById("loeschen").addEventListener("mouseup", mouseUpOnLoeschen);
document.getElementById("loeschen").addEventListener("touchstart", mouseDownOnLoeschen);
document.getElementById("loeschen").addEventListener("touchend", mouseUpOnLoeschen);
document.getElementById("neuesspiel").addEventListener("mousedown", mouseDownOnNeuesSpiel);
document.getElementById("neuesspiel").addEventListener("mouseup", mouseUpOnNeuesSpiel);
document.getElementById("neuesspiel").addEventListener("touchstart", mouseDownOnNeuesSpiel);
document.getElementById("neuesspiel").addEventListener("touchend", mouseUpOnNeuesSpiel);
document.getElementById("serviert").addEventListener("mousedown", mouseDownOnServiert);
document.getElementById("serviert").addEventListener("mouseup", mouseUpOnServiert);
document.getElementById("serviert").addEventListener("touchstart", mouseDownOnServiert);
document.getElementById("serviert").addEventListener("touchend", mouseUpOnServiert);
document.getElementById("streichen").addEventListener("mousedown", mouseDownOnStreichen);
document.getElementById("streichen").addEventListener("mouseup", mouseUpOnStreichen);
document.getElementById("streichen").addEventListener("touchstart", mouseDownOnStreichen);
document.getElementById("streichen").addEventListener("touchend", mouseUpOnStreichen);
document.getElementById("allesloeschen").addEventListener("mousedown", mouseDownOnAllesLoeschen);
document.getElementById("allesloeschen").addEventListener("mouseup", mouseUpOnAllesLoeschen);
document.getElementById("allesloeschen").addEventListener("touchstart", mouseDownOnAllesLoeschen);
document.getElementById("allesloeschen").addEventListener("touchend", mouseUpOnAllesLoeschen);

// Event Listener für Zahlenfelder
zahlenFelder = document.querySelectorAll(".zahlenFeld");
for(i=0;i < zahlenFelder.length; i++)
{
    zahlenFelder[i].style.borderColor = "darkgray";    // darkgray-> Feld nicht selektiert, rot -> Feld selektiert
    zahlenFelder[i].addEventListener("mousedown", mouseDownOnZahlenFeld);
    zahlenFelder[i].addEventListener("mouseup", mouseUpOnZahlenFeld);
    zahlenFelder[i].addEventListener("touchstart", mouseDownOnZahlenFeld);
    zahlenFelder[i].addEventListener("touchend", mouseUpOnZahlenFeld);
}

// Gleiche Event Listener für fixZahlFelder
zahlenFelder = document.querySelectorAll(".fixZahlFeld");
for(i=0;i < zahlenFelder.length; i++)
{
    zahlenFelder[i].style.borderColor = "darkgray";    // darkgray-> Feld nicht selektiert, rot -> Feld selektiert
    zahlenFelder[i].addEventListener("mousedown", mouseDownOnZahlenFeld);
    zahlenFelder[i].addEventListener("mousedup", mouseUpOnZahlenFeld);
    zahlenFelder[i].addEventListener("touchstart", mouseDownOnZahlenFeld);
    zahlenFelder[i].addEventListener("touchend", mouseUpOnZahlenFeld);
}

//
// Event Listener
//

// Event Listener für Namensfelder
function mouseDownOnNamensFeld(ev){
    ev.preventDefault();
    // bereits vorhandene Markierungen zurücksetzen
    knotenSpielerauswahl = document.querySelectorAll(".namensFeld");
    for(i = 0; i < knotenSpielerauswahl.length; i++)
    {
        knotenSpielerauswahl[i].style.borderColor = "darkgray";
        knotenSpielerauswahl[i].style.backgroundColor = "white";
        spielerAuswahlId = "";
    }
    ev.target.style.borderColor = "red";
    ev.target.style.backgroundColor = "lightgray";
    auswahlListe = document.getElementById("spielerAuswahlListe");
    auswahlListe.style.display = "block";
    spielerAuswahlId = ev.target.id;
}

function mouseUpOnNamensFeld(ev){
    ev.preventDefault();
}

// Event Listener Click auf Spielerauswahlliste
function mouseDownOnSpielerAuswahlListe(ev){
    ev.preventDefault();
    text = ev.target.textContent;
    if(text == "kein Spieler") text = "";
    document.getElementById(spielerAuswahlId).textContent = text;
    document.getElementById(spielerAuswahlId).style.borderColor = "darkgray";
    document.getElementById(spielerAuswahlId).style.backgroundColor = "white";
    spielerAuswahlId = "";
    document.getElementById("spielerAuswahlListe").style.display = "none";
}

function mouseUpOnSpielerAuswahlListe(ev){
    ev.preventDefault();
}

// Event Listener für Seiten Background --> verhindert default Reaktionen des Browsers
function mouseDownOnBackground(ev){
    ev.preventDefault();
}

function mouseUpOnBackground(ev){
    ev.preventDefault();
}

function mouseDownOnZifferntaste(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "red";
    ev.target.style.backgroundColor = "lightgray";
    if(selektiertesFeld != null && selektiertesFeld.classList[1] == "zahlenFeld" && spieleNummer != 0)
    {
        // zahlenfeld editieren
        typ = selektiertesFeld.classList[0];
        switch (typ)
        {
            case "Einser":
                if(Number(ev.target.textContent) > 0 && Number(ev.target.textContent) <= 5) selektiertesFeld.textContent = ev.target.textContent;
                break;
            case "Zweier":
                if(Number(ev.target.textContent) > 0 && Number(ev.target.textContent) <= 5) selektiertesFeld.textContent = 2 * Number(ev.target.textContent);
                break;
            case "Dreier":
                if(Number(ev.target.textContent) > 0 && Number(ev.target.textContent) <= 5) selektiertesFeld.textContent = 3 * Number(ev.target.textContent);
                break;
            case "Vierer":
                if(Number(ev.target.textContent) > 0 && Number(ev.target.textContent) <= 5) selektiertesFeld.textContent = 4 * Number(ev.target.textContent);
                break;
            case "Fuenfer":
                if(Number(ev.target.textContent) > 0 && Number(ev.target.textContent) <= 5) selektiertesFeld.textContent = 5 * Number(ev.target.textContent);
                break;
            case "Sechser":
                if(Number(ev.target.textContent) > 0 && Number(ev.target.textContent) <= 5) selektiertesFeld.textContent = 6 * Number(ev.target.textContent);
                break;
            default:
                string = selektiertesFeld.textContent;
                string = string + ev.target.textContent;
                selektiertesFeld.textContent = string;
                break;
        }
    }
}

function mouseUpOnZifferntaste(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "black";
    ev.target.style.backgroundColor = "white";
}

function mouseDownOnFertig(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "red";
    ev.target.style.backgroundColor = "lightgray";

    // selektiertes Feld desektieren
    if(selektiertesFeld != null)
    {
        selektiertesFeld.style.borderColor = "darkgray";
        if( selektiertesFeld.classList[0] == "Einser" ||
            selektiertesFeld.classList[0] == "Dreier" ||
            selektiertesFeld.classList[0] == "Fuenfer" ||
            selektiertesFeld.classList[0] == "Paare" ||
            selektiertesFeld.classList[0] == "Gleiche4" ||
            selektiertesFeld.classList[0] == "kStrasse" ||
            selektiertesFeld.classList[0] == "chance")
                selektiertesFeld.style.backgroundColor = "oldlace";
                else selektiertesFeld.style.backgroundColor = "white";
    }
    rechneSummen();
}

function mouseUpOnFertig(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "black";
    ev.target.style.backgroundColor = "white";
}

function mouseDownOnLoeschen(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "red";
    ev.target.style.backgroundColor = "lightgray";
    if(selektiertesFeld != null)
    {
        selektiertesFeld.textContent = "";
    }
    rechneSummen();
}

function mouseUpOnLoeschen(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "black";
    ev.target.style.backgroundColor = "white";
}

function mouseDownOnNeuesSpiel(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "red";
    ev.target.style.backgroundColor = "lightgray";
    if(spieleNummer == 0 || spielFertig())
        // neues Spiel nur, falls voriges Spiel fertig war oder bei Neubeginn
        if(spieleNummer <= 5)
        {
            // maximale Speileanzahl == 5, wegen Ergebnisliste
            gesamtErgebnisUpdate();
            alleFelderLoeschen();
            spieleNummer++;
            document.getElementById("spielnummer").textContent = spieleNummer;
        }
    rechneSummen();
}

function mouseUpOnNeuesSpiel(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "black";
    ev.target.style.backgroundColor = "white";
}

function mouseDownOnZahlenFeld(ev){
    ev.preventDefault();

    // Aktiv nur bei Spalten mit Namen
    spaltenNummer = ev.target.classList[2].slice(-1);
    if(document.getElementById("nameSpalte" + spaltenNummer + "scoreSheet").textContent == "") return;
    // vorheriges selektiertes Feld desektieren
    if(selektiertesFeld != null)
    {
        selektiertesFeld.style.borderColor = "darkgray";
        if( selektiertesFeld.classList[0] == "Einser" ||
            selektiertesFeld.classList[0] == "Dreier" ||
            selektiertesFeld.classList[0] == "Fuenfer" ||
            selektiertesFeld.classList[0] == "Paare" ||
            selektiertesFeld.classList[0] == "Gleiche4" ||
            selektiertesFeld.classList[0] == "kStrasse" ||
            selektiertesFeld.classList[0] == "chance")
                selektiertesFeld.style.backgroundColor = "oldlace";
                else selektiertesFeld.style.backgroundColor = "white";
    }

    if(ev.target.style.borderColor == "darkgray")
    {
        // Feld wird selektiert
        ev.target.style.borderColor = "red";
        ev.target.style.backgroundColor = "lightgray";
        selektiertesFeld = ev.target;
        // Eintragen nur, falls bereits das Spiel eröffnet wurde (zumindest 1x "neues Spiel"
        if (spieleNummer != 0) {
            if (streichen == 1) {
                ev.target.innerHTML = "<b>/</b>";
                streichen = 0;
                document.getElementById("streichen").style.backgroundColor = "white";
            }
            else {
                // Bearbeitung abhängig von Feldtyp
                typ = ev.target.classList[0];
                switch (typ) {
                    case "Einser":
                    case "Zweier":
                    case "Dreier":
                    case "Vierer":
                    case "Fuenfer":
                    case "Sechser":
                    case "Paar":
                    case "Paare":
                    case "Gleiche3":
                    case "Gleiche4":
                    case "chance":
                        document.getElementById("serviert").style.backgroundColor = "white";
                        serviert = 0;
                        break;
                    case "fullHouse":
                        if (serviert == 1) {
                            ev.target.textContent = "50";
                            document.getElementById("serviert").style.backgroundColor = "white";
                            serviert = 0;
                        }
                        else ev.target.textContent = "25";
                        break;
                    case "kStrasse":
                        if (serviert == 1) {
                            ev.target.textContent = "60";
                            document.getElementById("serviert").style.backgroundColor = "white";
                            serviert = 0;
                        }
                        else ev.target.textContent = "30";
                        break;
                    case "gStrasse":
                        if (serviert == 1) {
                            ev.target.textContent = "80";
                            document.getElementById("serviert").style.backgroundColor = "white";
                            serviert = 0;
                        }
                        else ev.target.textContent = "40";
                        break;
                    case "yahtzee":
                        if (serviert == 1) {
                            ev.target.textContent = "100";
                            document.getElementById("serviert").style.backgroundColor = "white";
                            serviert = 0;
                        }
                        else ev.target.textContent = "50";
                        break;
                }
                ev.target.style.fontWeight = "bold"
            }
            rechneSummen();
        }
    }
}

function mouseDownOnServiert(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "red";
    if(serviert == 0) {
        serviert = 1;
        ev.target.style.backgroundColor = "lightgray";
    }
    else {
        serviert = 0;
        ev.target.style.backgroundColor = "white";
    }
    document.getElementById("streichen").style.backgroundColor = "white";
    document.getElementById("streichen").style.borderColor = "black";
    streichen = 0;
}

function mouseUpOnServiert(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "black";
}

function mouseDownOnStreichen(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "red";
    if(streichen == 0) {
        streichen = 1;
        ev.target.style.backgroundColor = "lightgray";
    }
    else {
        streichen = 0;
        ev.target.style.backgroundColor = "white";
    }
    document.getElementById("serviert").style.backgroundColor = "white";
    document.getElementById("serviert").style.borderColor = "black";
    serviert = 0;
}

function mouseUpOnStreichen(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "black";
}

function mouseUpOnZahlenFeld(ev){

}

function mouseDownOnAllesLoeschen(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "red";
    ev.target.style.backgroundColor = "lightgray";
    alleFelderLoeschen();
    spielErgebnisseLoeschen();
}

function mouseUpOnAllesLoeschen(ev){
    ev.preventDefault();
    ev.target.style.borderColor = "black";
    ev.target.style.backgroundColor = "white";
}

// allgemeine Funktionen

function rechneSummen(){
    ergebnis = document.querySelectorAll(".Einser");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent == "" || ergebnis[i].textContent == "/") Gesamt[i] = 0; else Gesamt[i] = parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".Zweier");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") Gesamt[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".Dreier");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") Gesamt[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".Vierer");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") Gesamt[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".Fuenfer");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") Gesamt[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".Sechser");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") Gesamt[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".obereSumme");
    for(i = 0; i < ergebnis.length; i++)  if(Gesamt[i] > 0) ergebnis[i].innerHTML = "<b>" + Gesamt[i] + "</b>";
                            else ergebnis[i].innerHTML = "";

    bonus = document.querySelectorAll(".Bonus");
    for(i = 0; i < bonus.length; i++)
    {
        if(Gesamt[i] > 0)
        {
            if (Gesamt[i] >= 63) {
                // Bonus
                bonusWert[i] = 35;
                bonus[i].innerHTML = "<b>35</b>";
            }
            else {
                bonusWert[i] = 0;
                bonus[i].innerHTML = "";
            }
        }
        else
        {
            bonusWert[i] = 0;
            bonus[i].innerHTML = "";
        }
    }

    ergebnis = document.querySelectorAll(".obereSummeGesamt");
    for(i = 0; i < ergebnis.length; i++)
    {
        Gesamt[i] += bonusWert[i];
        if (Gesamt[i] > 0) ergebnis[i].innerHTML = "<b>" + Gesamt[i] + "</b>";
        else ergebnis[i].innerHTML = "";
    }


    // Summen unten

    ergebnis = document.querySelectorAll(".Paar");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent == "" || ergebnis[i].textContent == "/") GesamtUnten[i] = 0; else GesamtUnten[i] = parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".Paare");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") GesamtUnten[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".Gleiche3");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") GesamtUnten[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".Gleiche4");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") GesamtUnten[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".fullHouse");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") GesamtUnten[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".kStrasse");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") GesamtUnten[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".gStrasse");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") GesamtUnten[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".chance");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") GesamtUnten[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".yahtzee");
    for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "" && ergebnis[i].textContent != "/") GesamtUnten[i] += parseInt(ergebnis[i].textContent);
    ergebnis = document.querySelectorAll(".untereSumme");
    for(i = 0; i < ergebnis.length; i++)  if(GesamtUnten[i] > 0) ergebnis[i].innerHTML = "<b>" + GesamtUnten[i] + "</b>";
                            else ergebnis[i].innerHTML = "";
    ergebnis = document.querySelectorAll(".oberSummeUnten");
    for(i = 0; i < ergebnis.length; i++)  if(Gesamt[i] > 0) ergebnis[i].innerHTML = "<b>" + Gesamt[i] + "</b>";
                            else ergebnis[i].innerHTML = "";
    ergebnis = document.querySelectorAll(".untereSummeGesamt");
    for(i = 0; i < ergebnis.length; i++)
        if(GesamtUnten[i] > 0 || Gesamt[i] > 0)
        {
            Total[i] = GesamtUnten[i] + Gesamt[i];
            ergebnis[i].innerHTML = "<b>" + Total[i] + "</b>";
        }
        else ergebnis[i].innerHTML = "";

    // Anzeigen, wer als nächster würfelt

    if(!spielFertig())
    {
        ergebnis = document.querySelectorAll(".namensFeld");
        while(alleSpieler.length > 0) alleSpieler.pop();    // Array löschen

        for(i = 0; i < ergebnis.length; i++) insgesamtGewuerfelt[i] = 0;
        ergebnis = document.querySelectorAll(".Einser");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".Zweier");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".Dreier");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".Vierer");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".Fuenfer");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".Sechser");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".Paar");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".Paare");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".Gleiche3");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".Gleiche4");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".fullHouse");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".kStrasse");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".gStrasse");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".chance");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;
        ergebnis = document.querySelectorAll(".yahtzee");
        for(i = 0; i < ergebnis.length; i++) if(ergebnis[i].textContent != "") insgesamtGewuerfelt[i] += 1;

        while(alleSpieler.length > 0) alleSpieler.pop();    // Array löschen
        for(i = 0; i < alleSpieler.length; i++) wuerfeAlleSpieler = 0;
        ergebnis = document.querySelectorAll(".namensFeld");
        for(i = 0; i < ergebnis.length; i++)
        {
            if(ergebnis[i].textContent != "" && !alleSpieler.includes(ergebnis[i].textContent.slice(0,-1)))
            {
                // Liste der bereits bearbeiteten Spieler anlegen
                index = alleSpieler.push(ergebnis[i].textContent.slice(0,-1));
                index--;    // push gibt die Länge zurück
                wuerfeAlleSpieler[index] = insgesamtGewuerfelt[i];
                for(j = i+1; j < ergebnis.length; j++)
                    if(ergebnis[i].textContent.slice(0,-1) == ergebnis[j].textContent.slice(0,-1))
                        wuerfeAlleSpieler[index] += insgesamtGewuerfelt[j];
            }
        }
        // Spieler mit den wenigsten Würfen aussuchen
        naechsterWuerfler = 0;
        i = 0;
        while(i < alleSpieler.length)
        {
            for (j = i + 1; j < alleSpieler.length; j++)
                if (wuerfeAlleSpieler[j] < wuerfeAlleSpieler[i]) {
                    naechsterWuerfler = j;
                    i = j;
                    break;
                }
            if (j == alleSpieler.length) i++;
        }
        // In  naechsterWuerfler steht der Index
        wuerflerName = alleSpieler[naechsterWuerfler];
        ergebnisHeader = document.querySelectorAll(".ergebnisHeader");
        for (i = 0; i < ergebnisHeader.length; i++)
            if(ergebnis[i].textContent.slice(0,-1) == wuerflerName) ergebnisHeader[i].innerHTML =
                "&#x263B";
            else ergebnisHeader[i].textContent = "";
    }

    if(spielFertig())
    {
        while(bereitsBearbeiteteNamen.length > 0) bereitsBearbeiteteNamen.pop();
        // Prüfen, wer gewonnen hat
        ergebnis = document.querySelectorAll(".namensFeld");
        spielerName = [];
        for (i = 0; i < ergebnis.length; i++)
        {
            idNr = i + 1;
            tempIdNameSpalte = "nameSpalte" + idNr + "scoreSheet";
            temp = document.getElementById(tempIdNameSpalte);
            tempText = temp.textContent;
            if(tempText != "" && !bereitsBearbeiteteNamen.includes(tempText))
            {
                //  Andere Namen mit gleicher Endnummer suchen
                for (j = i + 1; j < ergebnis.length; j++)
                    // Endziffer vergleichen 1 mit 1, 2 mit 2, etc.
                    if ((ergebnis[i].textContent.slice(-1) == ergebnis[j].textContent.slice(-1))
                        && !bereitsBearbeiteteNamen.includes(ergebnis[j].textContent)
                        && !bereitsBearbeiteteNamen.includes(ergebnis[i].textContent))
                    {
                        // Gesamtsummen vergleichen
                        inc_i = i + 1;
                        inc_j = j + 1;
                        iD1 = "untereSummeSpalte" + inc_i + "scoreSheet";
                        iD2 = "untereSummeSpalte" + inc_j + "scoreSheet";
                        summe1 = Number(document.getElementById(iD1).textContent);
                        summe2 = Number(document.getElementById(iD2).textContent);
                        if (summe1 < summe2) {
                            // Namensfeld-j lichtgrün einfärben
                            ergebnis[j].style.backgroundColor = "lightgreen";
                            ergebnis[i].style.backgroundColor = "white";
                            bereitsBearbeiteteNamen.push(ergebnis[i].textContent);
                        }
                        if (summe1 > summe2) {
                            // Namensfeld-j rot einfärben
                            ergebnis[i].style.backgroundColor = "lightgreen";
                            ergebnis[j].style.backgroundColor = "white";
                            bereitsBearbeiteteNamen.push(ergebnis[j].textContent);
                        }
                        if (summe1 == summe2) {
                            // Beide haben gewonnen, beide Namensfelder rot einfärben
                            ergebnis[i].style.backgroundColor = "lightgreen";
                            ergebnis[j].style.backgroundColor = "lightgreen";
                        }
                    }
            }
        }
        // Punktemarkierungen eintragen
        ergebnisHeader = document.querySelectorAll(".ergebnisHeader");
        ergebnisName = document.querySelectorAll(".namensFeld");
        for (i = 0; i < ergebnisHeader.length; i++)
            if(ergebnisName[i].style.backgroundColor == "lightgreen")
            {
                ergebnisHeader[i].textContent = ""
                for (j = 0; j < Number(ergebnisName[i].textContent.slice(-1)); j++) ergebnisHeader[i].innerHTML += "&#x263B";
            }
            else{
                // Punktemarkierungen beseitigen
                ergebnisHeader[i].textContent = "";
            }
    }
    else
    {
        // Markierungen der Namen beseitigen
        ergebnis = document.querySelectorAll(".namensFeld");
        for (i = 0; i < ergebnis.length; i++) ergebnis[i].style.backgroundColor = "white";
    }

}

// Prüfen, ob Spiel fertig ist
function spielFertig(){
    fertig =true;
    for(i = 0; i < document.querySelectorAll(".Einser").length; i++) {
        // Für alle Spalten durchgehen
        idNr = i + 1;
        tempClassNameSpalte = ".ergebnisSpalte" + idNr;
        spalte = document.querySelectorAll(tempClassNameSpalte);
        for (j = 0; j < spalte.length; j++) {
            // Alle Zeilen der Spalte-i durchgehen, falls im Namensfeld ein Name eigetragen ist
            tempIdNameSpalte = "nameSpalte" + idNr + "scoreSheet";
            temp = document.getElementById(tempIdNameSpalte);
            tempText = temp.textContent;
            if (tempText != "" && spalte[j].textContent == "")
                fertig = false;
        }
    }
    return fertig;
}

function alleFelderLoeschen(){
    ergebnis = document.querySelectorAll(".Einser");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".Zweier");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".Dreier");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".Vierer");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".Fuenfer");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".Sechser");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".obereSumme");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".Bonus");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".obereSummeGesamt");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".Paar");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = ""
    ergebnis = document.querySelectorAll(".Paare");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".Gleiche3");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".Gleiche4");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".fullHouse");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".kStrasse");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".gStrasse");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".chance");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".yahtzee");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".untereSumme");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".oberSummeUnten");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    ergebnis = document.querySelectorAll(".untereSummeGesamt");
    for(i = 0; i < ergebnis.length; i++) ergebnis[i].textContent = "";
    // Markierungen der Namen beseitigen
    ergebnis = document.querySelectorAll(".namensFeld");
    for (i = 0; i < ergebnis.length; i++) ergebnis[i].style.backgroundColor = "white";
    // Punktemarkierungen löschen
    ergebnisHeader = document.querySelectorAll(".ergebnisHeader");
    for (i = 0; i < ergebnisHeader.length; i++) ergebnisHeader[i].textContent = "";
}

function spielErgebnisseLoeschen() {
    spieleNummer = 0;
    document.getElementById("spielnummer").textContent = "X";
    namensListe = document.querySelectorAll(".name");
    for (i = 0; i < namensListe.length; i++)
    {
        namensListe[i].textContent = "";
        spielerName[i] = "";
        idNummer = i + 1;
        namenId = "spieler" + idNummer;
        document.getElementById(namenId).innerHTML = "";
    }
    // Punktezahlen in Ergebnisliste löschen
    namensListe = document.querySelectorAll(".spieler");
    for (i = 0; i < namensListe.length; i++)
        for(knoten = namensListe[i].nextElementSibling;
            knoten != null;
            knoten = knoten.nextElementSibling)
                    knoten.textContent = "";
}

function gesamtErgebnisUpdate(){
    namensListe = document.querySelectorAll(".name");
    // Bei neuem Beginn Ergebnis-Array neu aufbauen
    if(spieleNummer == 0)
    {
        // Beim ersten Spiel Ergebnisliste initialisieren
        j = 0;
        spielerName = [];
        for (i = 0; i < namensListe.length; i++)
        {
            // Ziffer rechts entfernen
            tempName = namensListe[i].textContent.slice(0, -1);
            if(!spielerName.includes(tempName))
            {
                spielerName[j] = tempName;
                j++;
            }
        }
        // restliche Felder mit "" füllen
        for (i = j; i < namensListe.length; i++) spielerName[i] = "";

        // Namen ausgeben in spielergebnisse
        for (i = 0; i < namensListe.length; i++)
        {
            aktuellerName = spielerName[i];
            idNummer = i+1;
            namenId = "spieler" + idNummer;
            document.getElementById(namenId).innerHTML = "<b>" + aktuellerName + "</b>";
        }
    }
    else
        // Spiele sind bereits beendet
        if(spielFertig())
        {
            // Es können nur fertige Spiele beendet werden
            ergebnisName = document.querySelectorAll(".namensFeld");
            siegerNamen = [];
            siegerPunkte = [];
            while(siegerNamen.length > 0) siegerNamen.pop();    // Array löschen
            for(i = 0; i < ergebnisName.length; i++) siegerPunkte[i] = 0;

            for (i = 0; i < ergebnisName.length; i++)
                if(ergebnisName[i].style.backgroundColor == "lightgreen")
                {
                    if(!siegerNamen.includes(ergebnisName[i].textContent.slice(0,-1))) siegerNamen.push(ergebnisName[i].textContent.slice(0,-1)); //Namensteil
                    // Eintragung suchen
                    for(j = 0; (j < ergebnisName.length) && (ergebnisName[i].textContent.slice(0,-1) != siegerNamen[j]); j++);
                    siegerPunkte[j] += Number(ergebnisName[i].textContent.slice(-1));
                }

            // Ergebnisse in spielergebnisse eintragen
            ergebnisSpieler = document.querySelectorAll(".spieler");
            iD = ".ergebnisSpiel" + document.getElementById("spielnummer").textContent;
            ergebnisSpiel = document.querySelectorAll(iD);
            for(i = 0; i < siegerNamen.length; i++) {
                for (j = 0; (j < ergebnisSpieler.length) && (ergebnisSpieler[j].textContent != siegerNamen[i]); j++) ;
                // Richtigen Ergebnisknoten suchen
                for(knoten = ergebnisSpieler[j]; knoten.className != "ergebnisSpiel" + spieleNummer;
                    knoten = knoten.nextElementSibling);
                knoten.textContent = siegerPunkte[i];
            }
        }
}
