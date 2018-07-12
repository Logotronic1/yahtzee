<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Gerhard pevny">
    <meta name="keywords" content="Yahtzee">
    <link rel="stylesheet" type="text/css" href="stylesheet/Yahtzee.css">
    <title>Yahtzee</title>
</head>
<body>
<br>
<table id="spielerAuswahlListe">
    <tr><td>kein Spieler</td></tr>
    <tr><td>Helga1</tr>
    <tr><td>Helga2</tr>
    <tr><td>Helga3</tr>
    <tr><td>Gerhard1</tr>
    <tr><td>Gerhard2</tr>
    <tr><td>Gerhard3</tr>
    <tr><td>Livia1</tr>
    <tr><td>Livia2</tr>
    <tr><td>Livia3</tr>
    <tr><td>Irina1</tr>
    <tr><td>Irina2</tr>
    <tr><td>Irina3</tr>
    <tr><td>Franz1</tr>
    <tr><td>Franz2</tr>
    <tr><td>Franz3</tr>
    <tr><td>Gast1</tr>
    <tr><td>Gast2</tr>
    <tr><td>Gast3</tr>
</table>

    <table class="scoreSheet">
        <tr id="ergebnisHeader">
            <td colspan="3"></td>
            <td class="ergebnisHeader"></td>
            <td class="ergebnisHeader"></td>
            <td class="ergebnisHeader"></td>
            <td class="ergebnisHeader"></td>
            <td class="ergebnisHeader"></td>
            <td class="ergebnisHeader"></td>
        </tr>
        <tr id="Zeile1">
            <th class="ueText" colspan="3">Obere Hälfte</th>
            <th class="namensFeld name" id="nameSpalte1scoreSheet"></th>
            <th class="namensFeld name" id="nameSpalte2scoreSheet"></th>
            <th class="namensFeld name" id="nameSpalte3scoreSheet"></th>
            <th class="namensFeld name" id="nameSpalte4scoreSheet"></th>
            <th class="namensFeld name" id="nameSpalte5scoreSheet"></th>
            <th class="namensFeld name" id="nameSpalte6scoreSheet"></th>
        </tr>
        <tr id="Zeile2">
            <td class="spalte1Augen">
                <table class="wuerfelSymbol">
                    <tr>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                    </tr>
                    <tr>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeweiss"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                    </tr>
                    <tr>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                    </tr>
                </table>
            </td>
            <td class="spalte2">Nur 1er zählen</td>
            <td class="spalte3"><b>Einser</b></td>
            <td class="Einser zahlenFeld ergebnisSpalte1"></td>
            <td class="Einser zahlenFeld ergebnisSpalte2"></td>
            <td class="Einser zahlenFeld ergebnisSpalte3"></td>
            <td class="Einser zahlenFeld ergebnisSpalte4"></td>
            <td class="Einser zahlenFeld ergebnisSpalte5"></td>
            <td class="Einser zahlenFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile3">
            <td class="spalte1">
                <table class="wuerfelSymbol">
                    <tr>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeweiss"></td>
                    </tr>
                    <tr>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                    </tr>
                    <tr>
                        <td class="wuerfelAuge augeweiss"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                    </tr>
                </table>
            </td>
            <td class="spalte2">Nur 2er zählen</td>
            <td class="spalte3"><b>Zweier</b></td>
            <td class="Zweier zahlenFeld ergebnisSpalte1"></td>
            <td class="Zweier zahlenFeld ergebnisSpalte2"></td>
            <td class="Zweier zahlenFeld ergebnisSpalte3"></td>
            <td class="Zweier zahlenFeld ergebnisSpalte4"></td>
            <td class="Zweier zahlenFeld ergebnisSpalte5"></td>
            <td class="Zweier zahlenFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile4">
            <td class="spalte1Augen">
                <table class="wuerfelSymbol">
                    <tr>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeweiss"></td>
                    </tr>
                    <tr>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeweiss"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                    </tr>
                    <tr>
                        <td class="wuerfelAuge augeweiss"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                    </tr>
                </table>
            </td>
            <td class="spalte2">Nur 3er zählen</td>
            <td class="spalte3"><b>Dreier</b></td>
            <td class="Dreier zahlenFeld ergebnisSpalte1"></td>
            <td class="Dreier zahlenFeld ergebnisSpalte2"></td>
            <td class="Dreier zahlenFeld ergebnisSpalte3"></td>
            <td class="Dreier zahlenFeld ergebnisSpalte4"></td>
            <td class="Dreier zahlenFeld ergebnisSpalte5"></td>
            <td class="Dreier zahlenFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile5">
            <td class="spalte1Augen">
                <table class="wuerfelSymbol">
                    <tr>
                        <td class="wuerfelAuge augeweiss"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeweiss"></td>
                    </tr>
                    <tr>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                    </tr>
                    <tr>
                        <td class="wuerfelAuge augeweiss"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeweiss"></td>
                    </tr>
                </table>
            </td>
            <td class="spalte2">Nur 4er zählen</td>
            <td class="spalte3"><b>Vierer</b></td>
            <td class="Vierer zahlenFeld ergebnisSpalte1"></td>
            <td class="Vierer zahlenFeld ergebnisSpalte2"></td>
            <td class="Vierer zahlenFeld ergebnisSpalte3"></td>
            <td class="Vierer zahlenFeld ergebnisSpalte4"></td>
            <td class="Vierer zahlenFeld ergebnisSpalte5"></td>
            <td class="Vierer zahlenFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile6">
            <td class="spalte1Augen">
                <table class="wuerfelSymbol">
                    <tr>
                        <td class="wuerfelAuge augeweiss"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeweiss"></td>
                    </tr>
                    <tr>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeweiss"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                    </tr>
                    <tr>
                        <td class="wuerfelAuge augeweiss"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeweiss"></td>
                    </tr>
                </table>
            </td>
            <td class="spalte2">Nur 5er zählen</td>
            <td class="spalte3"><b>Fünfer</b></td>
            <td class="Fuenfer zahlenFeld ergebnisSpalte1"></td>
            <td class="Fuenfer zahlenFeld ergebnisSpalte2"></td>
            <td class="Fuenfer zahlenFeld ergebnisSpalte3"></td>
            <td class="Fuenfer zahlenFeld ergebnisSpalte4"></td>
            <td class="Fuenfer zahlenFeld ergebnisSpalte5"></td>
            <td class="Fuenfer zahlenFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile7">
            <td class="spalte1Augen">
                <table class="wuerfelSymbol">
                    <tr>
                        <td class="wuerfelAuge augeweiss"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeweiss"></td>
                    </tr>
                    <tr>
                        <td class="wuerfelAuge augeweiss"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeweiss"></td>
                    </tr>
                    <tr>
                        <td class="wuerfelAuge augeweiss"></td>
                        <td class="wuerfelAuge augeschwarz"></td>
                        <td class="wuerfelAuge augeweiss"></td>
                    </tr>
                </table>
            </td>
            <td class="spalte2">Nur 6er zählen</td>
            <td class="spalte3"><b>Sechser</b></td>
            <td class="Sechser zahlenFeld ergebnisSpalte1"></td>
            <td class="Sechser zahlenFeld ergebnisSpalte2"></td>
            <td class="Sechser zahlenFeld ergebnisSpalte3"></td>
            <td class="Sechser zahlenFeld ergebnisSpalte4"></td>
            <td class="Sechser zahlenFeld ergebnisSpalte5"></td>
            <td class="Sechser zahlenFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile8">
            <td class="spalte1_3" colspan="3"><b>Gesamt</b></td>
            <td class="obereSumme summenFelder"></td>
            <td class="obereSumme summenFelder"></td>
            <td class="obereSumme summenFelder"></td>
            <td class="obereSumme summenFelder"></td>
            <td class="obereSumme summenFelder"></td>
            <td class="obereSumme summenFelder"></td>
        </tr>
        <tr id="Zeile9">
            <td class="spalte1_3" colspan="3">63 Pkte u. mehr <b>+ 35 Bonus</b></td>
            <td class="Bonus summenFelder"></td>
            <td class="Bonus summenFelder"></td>
            <td class="Bonus summenFelder"></td>
            <td class="Bonus summenFelder"></td>
            <td class="Bonus summenFelder"></td>
            <td class="Bonus summenFelder"></td>
        </tr>
        <tr id="Zeile10">
            <td class="spalte1_3" colspan="3"><b>Summe oben</b></td>
            <td class="obereSummeGesamt summenFelder"></td>
            <td class="obereSummeGesamt summenFelder"></td>
            <td class="obereSummeGesamt summenFelder"></td>
            <td class="obereSummeGesamt summenFelder"></td>
            <td class="obereSummeGesamt summenFelder"></td>
            <td class="obereSummeGesamt summenFelder"></td>
        </tr>
    </table>
    <br><br>
    <table class="scoreSheet">
        <tr id="Zeile11">
            <td class="spalte1_3 ueText" colspan="9">Untere Hälfte</td>
        </tr>
        <tr id="Zeile12">
            <td class="spalte1_3" colspan="3">1 Paar Alle Augen zählen</td>
            <td class="Paar zahlenFeld ergebnisSpalte1"></td>
            <td class="Paar zahlenFeld ergebnisSpalte2"></td>
            <td class="Paar zahlenFeld ergebnisSpalte3"></td>
            <td class="Paar zahlenFeld ergebnisSpalte4"></td>
            <td class="Paar zahlenFeld ergebnisSpalte5"></td>
            <td class="Paar zahlenFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile13">
            <td class="spalte1_3" colspan="3">2 Paare Alle Augen zählen</td>
            <td class="Paare zahlenFeld ergebnisSpalte1"></td>
            <td class="Paare zahlenFeld ergebnisSpalte2"></td>
            <td class="Paare zahlenFeld ergebnisSpalte3"></td>
            <td class="Paare zahlenFeld ergebnisSpalte4"></td>
            <td class="Paare zahlenFeld ergebnisSpalte5"></td>
            <td class="Paare zahlenFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile14">
            <td class="spalte1_3" colspan="3">3 Gleiche Alle Augen zählen</td>
            <td class="Gleiche3 zahlenFeld ergebnisSpalte1"></td>
            <td class="Gleiche3 zahlenFeld ergebnisSpalte2"></td>
            <td class="Gleiche3 zahlenFeld ergebnisSpalte3"></td>
            <td class="Gleiche3 zahlenFeld ergebnisSpalte4"></td>
            <td class="Gleiche3 zahlenFeld ergebnisSpalte5"></td>
            <td class="Gleiche3 zahlenFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile15">
            <td class="spalte1_3" colspan="3">4 Gleiche Alle Augen zählen</td>
            <td class="Gleiche4 zahlenFeld ergebnisSpalte1"></td>
            <td class="Gleiche4 zahlenFeld ergebnisSpalte2"></td>
            <td class="Gleiche4 zahlenFeld ergebnisSpalte3"></td>
            <td class="Gleiche4 zahlenFeld ergebnisSpalte4"></td>
            <td class="Gleiche4 zahlenFeld ergebnisSpalte5"></td>
            <td class="Gleiche4 zahlenFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile16">
            <td class="spalte1_2"colspan="2">Full House</td>
            <td class="spalte3">25</td>
            <td class="fullHouse fixZahlFeld ergebnisSpalte1"></td>
            <td class="fullHouse fixZahlFeld ergebnisSpalte2"></td>
            <td class="fullHouse fixZahlFeld ergebnisSpalte3"></td>
            <td class="fullHouse fixZahlFeld ergebnisSpalte4"></td>
            <td class="fullHouse fixZahlFeld ergebnisSpalte5"></td>
            <td class="fullHouse fixZahlFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile17">
            <td class="spalte1_2" colspan="2">Kleine Straße</td>
            <td class="spalte3">30</td>
            <td class="kStrasse fixZahlFeld ergebnisSpalte1"></td>
            <td class="kStrasse fixZahlFeld ergebnisSpalte2"></td>
            <td class="kStrasse fixZahlFeld ergebnisSpalte3"></td>
            <td class="kStrasse fixZahlFeld ergebnisSpalte4"></td>
            <td class="kStrasse fixZahlFeld ergebnisSpalte5"></td>
            <td class="kStrasse fixZahlFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile18">
            <td class="spalte1_2" colspan="2">Große Straße</td>
            <td class="spalte3">40</td>
            <td class="gStrasse fixZahlFeld ergebnisSpalte1"></td>
            <td class="gStrasse fixZahlFeld ergebnisSpalte2"></td>
            <td class="gStrasse fixZahlFeld ergebnisSpalte3"></td>
            <td class="gStrasse fixZahlFeld ergebnisSpalte4"></td>
            <td class="gStrasse fixZahlFeld ergebnisSpalte5"></td>
            <td class="gStrasse fixZahlFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile19">
            <td class="spalte1_3" colspan="3">Chance Alle Augen zählen</td>
            <td class="chance zahlenFeld ergebnisSpalte1"></td>
            <td class="chance zahlenFeld ergebnisSpalte2"></td>
            <td class="chance zahlenFeld ergebnisSpalte3"></td>
            <td class="chance zahlenFeld ergebnisSpalte4"></td>
            <td class="chance zahlenFeld ergebnisSpalte5"></td>
            <td class="chance zahlenFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile20">
            <td class="spalte1_3" colspan="3">Yahtzee</td>
            <td class="yahtzee fixZahlFeld ergebnisSpalte1"></td>
            <td class="yahtzee fixZahlFeld ergebnisSpalte2"></td>
            <td class="yahtzee fixZahlFeld ergebnisSpalte3"></td>
            <td class="yahtzee fixZahlFeld ergebnisSpalte4"></td>
            <td class="yahtzee fixZahlFeld ergebnisSpalte5"></td>
            <td class="yahtzee fixZahlFeld ergebnisSpalte6"></td>
        </tr>
        <tr id="Zeile21">
                <td class="spalte1_3" colspan="3"><b>Summe unten</b></td>
                <td class="untereSumme summenFelder"></td>
                <td class="untereSumme summenFelder"></td>
                <td class="untereSumme summenFelder"></td>
                <td class="untereSumme summenFelder"></td>
                <td class="untereSumme summenFelder"></td>
                <td class="untereSumme summenFelder"></td>
        </tr>
        <tr id="Zeile22">
            <td class="spalte1_3" colspan="3"><b>Summe oben</b></td>
            <td class="oberSummeUnten summenFelder"></td>
            <td class="oberSummeUnten summenFelder"></td>
            <td class="oberSummeUnten summenFelder"></td>
            <td class="oberSummeUnten summenFelder"></td>
            <td class="oberSummeUnten summenFelder"></td>
            <td class="oberSummeUnten summenFelder"></td>
        </tr>
        <tr id="Zeile21">
            <td class="spalte1_3" colspan="3"><b>Total</b></td>
            <td class="untereSummeGesamt summenFelder" id="untereSummeSpalte1scoreSheet"></td>
            <td class="untereSummeGesamt summenFelder" id="untereSummeSpalte2scoreSheet"></td>
            <td class="untereSummeGesamt summenFelder" id="untereSummeSpalte3scoreSheet"></td>
            <td class="untereSummeGesamt summenFelder" id="untereSummeSpalte4scoreSheet"></td>
            <td class="untereSummeGesamt summenFelder" id="untereSummeSpalte5scoreSheet"></td>
            <td class="untereSummeGesamt summenFelder" id="untereSummeSpalte6scoreSheet"></td>
    </tr>
    </table>
</div>

<div id="ziffernblock_wrapper">
    <table id="ziffernblock">
        <tr>
            <td id="ziffer1">1</td>
            <td id="ziffer2">2</td>
            <td id="ziffer3">3</td>
        </tr>
        <tr>
            <td id="ziffer4">4</td>
            <td id="ziffer5">5</td>
            <td id="ziffer6">6</td>
        </tr>
        <tr>
            <td id="ziffer7">7</td>
            <td id="ziffer8">8</td>
            <td id="ziffer9">9</td>
        </tr>
        <tr>
        <td id="ziffer0"colspan="3">0</td>
    </table>
</div>
<div id="funktionsTastenWrapper">
    <table id="funktionsTasten">
        <tr>
            <td id="fertig">Fertig</td>
            <td id="serviert">Serviert</td>
        </tr>
        <tr>
            <td id="loeschen">Löschen</td>
            <td id="streichen">Streichen</td>
        </tr>
        <tr>
            <td id="neuesspiel">neues Spiel</td>
            <td id="allesloeschen">alles Löschen</td>
        </tr>
    </table>
</div>

<div id="ergebnisWrapper">
    <div id="spielnummerTabelle">
        <table>
            <tr>
                <td>
                    Spiel
                </td>
            </tr>
            <tr>
                <td id="spielnummer">X</td>
            </tr>
        </table>
    </div>
    <div id="spielergebnisse">
        <table>
            <tr>
                <td id="spieler1" class="spieler">
                </td>
                <td class="ergebnisSpiel1">
                </td>
                <td class="ergebnisSpiel2">
                </td>
                <td class="ergebnisSpiel3">
                </td>
                <td class="ergebnisSpiel4">
                </td>
                <td class="ergebnisSpiel5">
                </td>
            </tr>
            <tr>
                <td id="spieler2" class="spieler">
                </td>
                <td class="ergebnisSpiel1">
                </td>
                <td class="ergebnisSpiel2">
                </td>
                <td class="ergebnisSpiel3">
                </td>
                <td class="ergebnisSpiel4">
                </td>
                <td class="ergebnisSpiel5">
                </td>
            </tr>
            <tr>
                <td id="spieler3" class="spieler">
                </td>
                <td class="ergebnisSpiel1">
                </td>
                <td class="ergebnisSpiel2">
                </td>
                <td class="ergebnisSpiel3">
                </td>
                <td class="ergebnisSpiel4">
                </td>
                <td class="ergebnisSpiel5">
                </td>
            </tr>
            <tr>
                <td id="spieler4" class="spieler">
                </td>
                <td class="ergebnisSpiel1">
                </td>
                <td class="ergebnisSpiel2">
                </td>
                <td class="ergebnisSpiel3">
                </td>
                <td class="ergebnisSpiel4">
                </td>
                <td class="ergebnisSpiel5">
                </td>
            </tr>
            <tr>
                <td id="spieler5" class="spieler">
                </td>
                <td class="ergebnisSpiel1">
                </td>
                <td class="ergebnisSpiel2">
                </td>
                <td class="ergebnisSpiel3">
                </td>
                <td class="ergebnisSpiel4">
                </td>
                <td class="ergebnisSpiel5">
                </td>
            </tr>
            <tr>
                <td id="spieler6" class="spieler">
                </td>
                <td class="ergebnisSpiel1">
                </td>
                <td class="ergebnisSpiel2">
                </td>
                <td class="ergebnisSpiel3">
                </td>
                <td class="ergebnisSpiel4">
                </td>
                <td class="ergebnisSpiel5">
                </td>
            </tr>
        </table>
    </div>
</div>

<div id="Ueberschriftszeile">
    <b>Yahtzee<b></b>
</div>
<script src="js/Yahtzee.js"></script>
</body>
</html>
