$(document).ready(function(){
    $("#myCarousel").carousel({interval: 2000});

})

var msg = ["We provide</br>Robotics","We provide<br/>microchip support","We provide</br>I.O.T"];
var i = 0;
setInterval(function() {

       if(i<=2){
       document.getElementById("pro").innerHTML = msg[i];
       i++;
       }
       else
       {
       	 i=0;
       	  document.getElementById("pro").innerHTML = "We provide cyber</br>security";
       }

}, 4000);