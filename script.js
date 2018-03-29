//Run Our jQuery
$(document).ready(function() {
  
  $('.box').hide();
  var buzzer = $("#buzzer")[0];
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
  //console.log(count);
  $("#reset").hide();
$("#start").click(function(){
  var counter= setInterval(timer, 1000);
  count*=60;
  breakTime*=60;
  function timer(){
    //Hide variables
    $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide();
    $('.box').show();
    $("#timeType").show();
    $("#timeType").html("Session Time: ");
    count-=1;
    if(count===0){
      buzzer.play();
      clearInterval(counter);
      var startBreak= setInterval(breakTimer,1000);
      $("#num").hide();
      $('.box').hide();
    } else{
      $('#num').hide();
      $('#breakNum').hide();
    }
    if(count%60>=10){
      $(".center1").html(Math.floor(count/60)+":"+count%60);
    }
    else{
      $(".center1").html(Math.floor(count/60)+":"+"0"+count%60);
    }
    
    
    
    function breakTimer(){
    $("#timeType").html("Break Time: ");
    $("#breakNum").hide();
         $("#timeType").show();
      $('.box').show();
    breakTime -=1;
    if(breakTime===0){
      clearInterval(startBreak);
      buzzer.play();
      $("#reset").show();
      $('.box').hide();
   $("#breakNum, #timeType").hide();
    } else{
      $('breakNum').hide();
    }
       if(breakTime%60>=10){
      $(".center1").html(Math.floor(breakTime/60)+":"+breakTime%60);
    }
    else{
      $(".center1").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);
    }
  }
  }
  
});
  
  $("#reset").click(function(){
    console.log(4444444);
    count=25;
    breakTime=5;
    $("#num").html(count);
    $("#breakNum").html(breakTime);
    $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show();
    $("#reset, #timeType").hide();
  });
  
  $("#minus5Clock").click(function() {
    if (count > 5) {
      count -= 5;
      $("#num").html(count);
    }
  });
  $("#add5Clock").click(function() {
    count += 5;
    $("#num").html(count);
  });
    $("#minus5Break").click(function() {
    if (breakTime > 5) {
      breakTime -= 5;
      $("#breakNum").html(breakTime);
    }
  });
  $("#add5Break").click(function() {
    breakTime += 5;
    $("#breakNum").html(breakTime);
  });

});
