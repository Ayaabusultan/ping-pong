$(document).ready(function() {

  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    var input = parseInt($("#num").val());
    var numbers = new Array();
    var divisbles = [3,5,15];

    for (i=1; i<=input; i++){
      numbers.push(i);
    }
    for (i=0; i<=input; i++){
      if (numbers[i] % 15 === 0){
        numbers.splice(i,1,"Ping Pong")
      }
      else if (numbers[i] % 3 === 0){
        numbers.splice(i,1,"ping");
      }
      else if (numbers[i] % 5 === 0){
        numbers.splice(i,1,"pong");
      }
    }

    var index= 0;
    $("#result").empty();
    numbers.forEach(function(){
      switch (numbers[index]){
        case "ping":
          $("#result").append("<li class='oval-1'>"+numbers[index]+"</li>"+"<br>");
          $(".oval-1").addClass("ping-oval");
          // $(".oval-1").css("padding-left","40px");
          break;
        case "pong":
          $("#result").append("<li class='oval2'>"+numbers[index]+"</li>"+"<br>");
          $(".oval2").addClass("pong-oval");


          break;
        case "Ping Pong":
          $("#result").append("<li class='oval3'>"+numbers[index]+"</li>"+"<br>");
          $(".oval3").addClass("pingpong-oval");
         // $(".oval3").css("padding-left","30px");
          break;
        default:
          $("#result").append("<li class='num-circle'>"+numbers[index]+"</li>"+"<br>");
          $(".num-circle").addClass("circle");
      }
      index++;
    });

  }); //for the submit




}); //for the document
