//color array
let colors = ['blue', 'yellow', 'black','white', 'red', 'brown'];

//-get button
let button = document.getElementById('button');
//-add event listner som lyssnar på att jag trycker på knappen
button.addEventListener('click', function(){
    //-Jag gör en variabel som plockar ut ett random nummer i min array color. Math floor rundar av numret
 var randomColor = colors[Math.floor(Math.random() * colors.length)]
    //-get contoainer
   let container = document.getElementById('container');

   container.style.background = randomColor;
 })