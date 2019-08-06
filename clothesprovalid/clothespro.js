function add1( nom ) { 

    var quantite = document.getElementById( nom ).value ++; 
    console.log(quantite)
   
 var total= document.getElementById('total-price1');
 
 
 total.innerHTML=(quantite+1)*8;
 sum();
     
     } 
 
   function substract1( nom ) { 
    if(document.getElementById( nom ).value>0)
        { var quantite = document.getElementById( nom ).value --; 
         console.log(quantite)
       
         var total= document.getElementById('total-price1');
 
 
         total.innerHTML=(quantite-1)*8;
     
         sum();}
     
     } 
 
 
 
     function add2( nom ) { 
 
         var quantite = document.getElementById( nom ).value ++; 
        
      var total= document.getElementById('total-price2');
      
      
      total.innerHTML=(quantite+1)*4 ;
      sum();
          
          } 
      
        function substract2( nom ) { 
         if(document.getElementById( nom ).value>0){
              var quantite = document.getElementById( nom ).value --; 
             
              var total= document.getElementById('total-price2');
      
      
              total.innerHTML=(quantite-1)*4;
              sum();
          } 
 
 
         }
     
 
          function add3( nom ) { 
 
             var quantite = document.getElementById( nom ).value ++; 
            
          var total= document.getElementById('total-price3');
          
          
          total.innerHTML=(quantite+1)*7;
          sum();
              
              } 
          
            function substract3( nom ) { 
             if(document.getElementById( nom ).value>0){
                  var quantite = document.getElementById( nom ).value --; 
                 
                  var total= document.getElementById('total-price3');
          
          
                  total.innerHTML=(quantite-1)*7;
                  sum();
              } 
     
             }
 
 
              function sum() {
                 let element = 0;
                 let sum = document.getElementById('sum')
                //  console.log('sum:',sum)
                 let prix = Array.from(document.querySelectorAll('.prix'))
                //  console.log('prix:',prix)
                 for (let x = 0; x < prix.length; x++) {
                     element += Number(prix[x].innerText);
                     sum.innerText = element
                    
                 }
                
             }
            //  function totalSum(){
            //     let total1=(quantite+1)*8 +"$"; 
            //     let total2=(quantite+1)*4 +"$";
            //     let total3=(quantite+1)*7 +"$";
            //     totalSum=0;
        
            //         totalSum.innerHTML=total1+total2+total3
            //     }
 