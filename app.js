function start(){  

  
document.getElementById("startBtn").onclick = ""; 
var clickBtn = document.getElementById("startBtn"); 
  clickBtn.classList.toggle("clicked");

var h = parseInt(document.getElementById("inputHour").value, 0);
var m = parseInt(document.getElementById("inputMinute").value, 0);
var s = parseInt(document.getElementById("inputSecond").value, 0);


if(s>60){
  document.getElementById("inputMinute").value=Math.floor(s/60);
  document.getElementById("inputSecond").value=s%60;
}


if(h == 0 && m == 0 && s == 0){
  alert("Cannot Start Timer with 0...");
  location.reload();
}

if(h < 0 || m < 0 || s < 0){
  alert("Enter positive number. ");
  location.reload();
}

var current = ((h * 3600) + (m * 60) + s - 1);                                              
var hours=0,minutes=0,seconds=0;
var Timer = setInterval(function(){ 
    hours = Math.floor(current /(60 * 60)); 
    minutes = Math.floor((current % (60 * 60)) / (60)); 
    seconds = Math.floor((current % (60))); 
    document.getElementById("hour").innerHTML = hours; 
    document.getElementById("minute").innerHTML = minutes ;  
    document.getElementById("second").innerHTML = seconds;
    current-=1;
  if(current < 0){
    clearInterval(Timer);
    document.getElementById("timer").innerHTML = ""; 
    document.getElementById("demo").innerHTML = "Time Up";
} 
  }, 1000);
}
