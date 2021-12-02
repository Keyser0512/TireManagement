var login = "Benni";
var passwort = "r264";


function anmelden()
{
    //Anstatt der variablen login und passwort später SQL Abfragen einfügen
    let a = document.querySelector("#inputLogin").value;
    let b = document.querySelector("#inputPassword").value;

    if(a == login)
    {
        if(b == passwort)
        {
            alert("Beides funktioniert");
        }
    }

}

function passwortÄ()
{
    //Update Table Befehl einfügen 
    alert("Passwort ändern");
}

function passwortV()
{
    //Passwort vergessen / Select auf Geheimfrage + Antwort darauf entnehmen
    alert("Passwort vergessen");
}