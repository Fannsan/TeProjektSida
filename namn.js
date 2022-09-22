


// jag skapar en i en array
const names = ["tea1.png", "tea2.png", "matchate.jpg" , "fruktte.png", "puerh.jpg", "matt.jpg"];

//Loopen, 
for(let i = 0; i < names.length; i++){
  //Här skapar jag en bild-tag
  const bild = document.createElement("img");
  //här går jag igenom arrayen med bilder
  bild.src = names[i];
//här skrivs bilderna från arrayen ut i vår HTMLdiv som heter bilder
  document.getElementById("bilder").appendChild(bild);
  
}



