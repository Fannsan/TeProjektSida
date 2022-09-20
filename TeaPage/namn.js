


// variabler
const names = ["tea1.png", "tea2.png", "tea3.png" , "fruktte.png", "puerh.jpg"];

//Loopen, 
for(let i = 0; i < names.length; i++){
  //Här skapar jag en bildtag
  const bild = document.createElement("img");
  //här går jag igenom arrayen med bilder
  bild.src = names[i];
//här skrivs bilderna från arrayen ut i vår HTMLdiv som heter bilder
  document.getElementById("bilder").appendChild(bild);
  
}



