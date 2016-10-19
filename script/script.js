//Needs to be global :(. For some reason I can not give an argument in the  setInterval function
var bAmPm = false;
var bms = false;

function myFunction() {

  var d = new Date(); /*new date methods. this is a built in function of javascript */
  var seconds = d.getSeconds();
  var minutes = d.getMinutes();
  var hours = d.getHours();
  var milliseconds = d.getMilliseconds();

  if (String(hours).length === 1) {//string will cast hour into text
    hours = '0' + hours;
  }
  if (String(minutes).length === 1) {//string will cast minutes into text
    minutes = '0' + minutes;
  }
  if (String(seconds).length === 1) {//string will cast seconds into text
    seconds = '0' + seconds;
  }
  if (String(milliseconds).length === 1) {//string will cast miliseconds into text
    milliseconds = '00' + milliseconds;
  } else if (String(milliseconds).length === 2) { //else if will combine the if above
    milliseconds = '0' + milliseconds;
  }

  if (bAmPm) {
    if (hours - 12 > 0) {
      hours = hours - 12;
      $('#prefix').text (' PM'); 
    } else {
      $('#prefix').text (' AM'); 
    }
  }

  $('#hours').text (hours);
  $('#minutes').text (minutes);
  $('#seconds').text (seconds);

  if (bms) {
    $('#milliseconds').text (milliseconds);
  }
}

$(document).ready(function(){

  //hide miliseconds and prefix on load using jQuery
  $('#milliseconds').hide();
  $('#milliseconds-devider').hide();
  $('#prefix').hide();

  $('#ms').click(function() {
    if ($('#ms').is(':checked') === true) {
      bms = true;
      $('#milliseconds').show();
      $('#milliseconds-devider').show();
      
    } else {
      bms = false;
      $('#milliseconds').hide();
      $('#milliseconds-devider').hide();
    }
  });

  $('#ampm').click(function() {
    
    if ($('#ampm').is(':checked') === true) {
      bAmPm = true;
      $('#prefix').show();
    } else {
      bAmPm = false;
      $('#prefix').hide();
    }
  });

  myFunction();

});

setInterval(myFunction, 1);