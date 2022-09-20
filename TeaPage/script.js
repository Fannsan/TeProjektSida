
//gör en loop, en array


//let teas = ["roibos", "back tea", "white tea"];
//teas[1]="ken";
//console.log(teas[1]);

//let age =26;

//console.log(age!=25);

 //for (let i = 0; i < 5; i++){
//console.log ('in loop:', i);
// }
// console.log('loop finnished');



 //const greet = function(name= 'luigi', time = 'night' ){
 //console.log(`good ${time} ${name}`);
 //};
 //greet();
 
 //const greaet  = () => 'hello world';
 //const result = greaet();
 //console.log(result);



//const para = document.querySelector('.banner');

//console.log(para);

//const title = document.getElementsByClassName('welcome');
//console.log(title);
//console.log(title[0]);

//const paras = document.getElementsByTagName('p');
//console.log(paras);
//console.log(paras[2])

//const paras =document.querySelector('p');
//console.log(paras.innerText);
//paras.innerText = 'Detta är fannys sida';

//const link = document.querySelector('a');
//console.log(link.getAttribute('href'));
//link.setAttribute('href', 'http://hemsida.com');
//link.innerText = 'En hemsida';



//window.addEventListener('load', () => {
    //const form = document.querySelector("#new-task-form");
   // const input = document.querySelector("#new-task-input");
    //const list_el = document.querySelector("#tasks")

    //console.log(form);

    //form.addEventListener('submit', (e)=>{
      //  e.preventDefault();

        //console.log("submit form");
    //})
// })



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
        text ="Du skrev inte in något, prova att skriva in ditt namn igen.";
    //    
    } else {
        text ="Vad roligt att du vill göra oss sällskap i Make Te club " + namnet;
    }
    //Lägg till texten i ptaggen hejNamn innuti HTML koden
    document.getElementById("hejNamn").innerHTML = text;
})


