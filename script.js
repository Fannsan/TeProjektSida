
var infoTe = document.getElementById('omTe');

infoTe.addEventListener('click', function(infoTe){
    infoTe.target.classList.toggle('merInfo');
})



const join = document.getElementById('knapp');

join.addEventListener('click', function(){
    let text;
    //skapar en variabel namnet 
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


