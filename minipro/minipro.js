let text=document.getElementById('text')
let name=document.getElementsByClassName('string')
console.log(name[0].value)
console.log('xdfdf')
function add(){
    console.log(name[0].value)
    if(!name[0].value){
        alert('please enter a name')}
    if(!name[1].value){
        alert('please enter a Last name')}
    if(!name[2].value){
        alert('please enter a adresse')}
    
     
}

function verif(){
    let mail=document.getElementById('mail')
    console.log(mail.value)
    if(!mail.value.includes('@')){
        alert('please enter your corret email')
    }
   else return false;
}

 function verifPasw(){
    let pasw=document.getElementById('pasw')
    
    if(!pasw.value.match(/[a-z]/g)){
       alert("the password should includes lowercase letters")
    }

   console.log(pasw.value.match(/[A-Z]/g))
     if(!pasw.value.match(/[A-Z]/g)){
        alert("the password should includes uppercase letters")
    }
     if(!pasw.value.match(/[0-9]/g)){
        console.log('number')
        console.log(pasw.value.match(/[0-9]/g))
     alert("the password should includes numbers")
     }
     else return false; 
    }
    function Inscrire(){
        let btn=document.getElementsByClassName('btn')
        return document.getElementById('cake')
    }

function reset(){
    display:none
} 