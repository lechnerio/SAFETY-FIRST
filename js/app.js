/**
 * app.js
 */

var x=0;

setInterval("x++",1000); // Increment value every second

// Let's just add a function so that you can get the value
$(document).ready(function () {
     $('#counter').val('0');
});


//var rand = Math.floor(Math.random() * 120) + 30;

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));

  /*if(totalSeconds > 5){
     $('.lead').css('color', '#FFE309');
     $('body').css('background-color', '#FFE309');

     $('.lead').animate({backgroundColor: '#CD3333'}, 'slow');
     $('.lead').animate({backgroundColor: '#CD3333'}, 'slow');

  }*/
/*
  if(totalSeconds > 10){
     $('.lead').css('color', '#95EB00');
     $('body').css('background-color', '#95EB00');
  }

  if(totalSeconds > 15){
     $('.lead').css('color', '#09E845');
     $('body').css('background-color', '#09E845');
  }
  if(totalSeconds == rand){
     totalSeconds = -1;
     rand = Math.floor(Math.random() * 120) + 30;
  }*/
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}