


// jag skapar en constantvariabel som har en array men mina olika tebilder
const names = ["tea1.png", "tea2.png", "matchate.jpg" , "fruktte.png", "puerh.jpg", "matt.jpg"];

//Här skapar jag loopen som ska plussas på med en och gå igenom min array
for(let i = 0; i < names.length; i++){
  //Här skapar jag en bild-tag med namnet bild
  const bild = document.createElement("img");
  //här går jag igenom arrayen med bilder
  bild.src = names[i];
//här skrivs bilderna från arrayen ut i vår HTMLdiv som heter bilder
  document.getElementById("bilder").appendChild(bild);
  
}



