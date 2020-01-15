function start(){  
  var clickBtn = document.getElementById("startBtn"); 
  clickBtn.classList.toggle("clicked");
  window.scrollTo(0,document.body.scrollHeight);

  var d = (document.getElementById("inputDay").value);
  var h = parseInt(document.getElementById("inputHour").value, 0);
  var m = parseInt(document.getElementById("inputMinute").value, 0);
  var s = parseInt(document.getElementById("inputSecond").value, 0);

  var countDownDate = new Date(d).getTime();

  if(s>60){
    document.getElementById("inputMinute").value=Math.floor(s/60);
    document.getElementById("inputSecond").value=s%60;
  }


  if(d === ''){
    alert("Enter the date!");
    location.reload();
  }

  if(h < 0 || m < 0 || s < 0 || d < 0){
    alert("Enter positive number. ");
    location.reload();
  }
  
  var Timer = setInterval(function(){ 
    var now = new Date().getTime();
    var distance = countDownDate-now-(1000*60*60*5)-(1000*60*30)+(1000*60*m)+(1000*60*60*h)+(1000*s); 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
      document.getElementById("day").innerHTML = days; 
      document.getElementById("hour").innerHTML = hours; 
      document.getElementById("minute").innerHTML = minutes ;  
      document.getElementById("second").innerHTML = seconds;
      distance-=1;
    if(distance < 0){
      clearInterval(Timer);
      document.getElementById("timer").innerHTML = ""; 
      document.getElementById("demo").innerHTML = "Time Up";
  } 
    }, 1000);
}
