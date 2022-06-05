const changeName=document.querySelector('.click')
let clickedTimes=0
//Changes Title
changeName.addEventListener('click',function(e){
    clickedTimes += 1; 
   if(clickedTimes>2){
       changeName.innerHTML="Programmer"

   }
})