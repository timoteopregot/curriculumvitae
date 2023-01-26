var nombre= document.getElementById('fullname');
var mail=document.getElementById('mail');
var phone=document.getElementById('phone');
var thumb = document.getElementById('photo');

function fetchUser(){
  
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(res =>{ 
            console.log(res)
            console.log(res.results[0].name)

            let thumbnailimg=res.results[0].picture.large

            nombre.innerHTML= res.results[0].name.first +" "+ res.results[0].name.last
            mail.innerHTML= res.results[0].email
            phone.innerHTML= res.results[0].phone
            thumb.src= thumbnailimg
      
      
      
      
      
      
      }
  )
 }


fetchUser();
