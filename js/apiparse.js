var nombre= document.getElementById('fullname');
var mail=document.getElementById('mail');
var phone=document.getElementById('phone');
var thumb = document.getElementById('photo');
var edad = document.getElementById('age');
var nac = document.getElementById('birth');
var dir = document.getElementById('address');


function fetchUser(){
  
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(res =>{ 
            console.log(res)
            console.log(res.results[0].name)

            let thumbnailimg=res.results[0].picture.large
            let fnac= res.results[0].dob.date
            fecha= fnac.slice(0,10)


            nombre.innerHTML= res.results[0].name.first +" "+ res.results[0].name.last
            mail.innerHTML= res.results[0].email
            phone.innerHTML= res.results[0].phone
            thumb.src= thumbnailimg
            edad.innerHTML= res.results[0].dob.age
            nac.innerHTML =  fecha
            dir.innerHTML =  res.results[0].location.street.name + ", " + res.results[0].location.street.number + " "+ res.results[0].location.state +","+res.results[0].location.country
          
          
          
          
      
      
      
      
      
      
      }
  )
 }


fetchUser();

