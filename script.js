
//Här skapar jag en variabel infoTe och tilldelar det mitt hämtade id omTe som finns i min HTML.
let infoTe = document.getElementById('omTe');

//Här gör jag en funktion som innebär att om man klickar på bilden så anropas klassen "mer info" och visar den andra bilden.
infoTe.addEventListener('click', function(infoTe){
    infoTe.target.classList.toggle('merInfo');
})


//skapar en constant som heter join och hämtar ID knapp och tilldelar join det värdet.
const join = document.getElementById('knapp');

//Här skapas en funktion som lyssnar på att man trycker på knappen
join.addEventListener('click', function(){
    //skapar en let variabel för att den ska kunna ändras
    let text;
    //skapar en variabel namnet och hämtar det värdet som personen skrivit in i rutan
    const namnet = document.getElementById('name').value;
    //om det är en tom sträng så vill vi skicka ut att personen inte skrev in något
    if("" == (namnet)){
        text = "Du skrev inte in något, prova att skriva in ditt namn igen.";
    //    
    } else {
        text = "Vad roligt att du vill göra oss sällskap i Make Te club " + namnet;
    }
    //Lägg till texten i ptaggen hejNamn innuti HTML koden
    document.getElementById("hejNamn").innerHTML = text;
})


