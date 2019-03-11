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
          // $(".oval-1").css("padding-left","40px");
          break;

        case "pong":
          $("#result").append("<li class='oval2'>"+numbers[index]+"</li>"+"<br>");
          break;

        case "Ping Pong":
          $("#result").append("<li class='oval3'>"+numbers[index]+"</li>"+"<br>");
          break;

        default:
          $("#result").append("<li class='num-circle'>"+numbers[index]+"</li>"+"<br>");
      }
      index++;
    });

    $(".oval-1").addClass("ping-oval");
    $(".oval2").addClass("pong-oval");
    $(".oval3").addClass("pingpong-oval");
    $(".num-circle").addClass("circle");



    $(".circle").mouseover(function(event){
      event.target.style.background = "pink";
      event.target.style.width= "45px";
      event.target.style.height= "45px";
    });
    $(".circle").mouseout(function(event){
      event.target.style.background = "#ffebe6";
      event.target.style.width= "40px";
      event.target.style.height= "40px";
    });

    $(".ping-oval").mouseover(function(event){
      event.target.style.background = "pink";
      event.target.style.width= "90px";
      event.target.style.height= "45px";
    });
    $(".ping-oval").mouseout(function(event){
      event.target.style.background = "#ffb199";
      event.target.style.width= "80px";
      event.target.style.height= "40px";
    });

    $(".pong-oval").mouseover(function(event){
      event.target.style.background = "pink";
      event.target.style.width="110px";
      event.target.style.height="55px";
    });
    $(".pong-oval").mouseout(function(event){
      event.target.style.background = "#ff8a66";
      event.target.style.width="100px";
      event.target.style.height="50px";
    });

    $(".pingpong-oval").mouseover(function(event){
      event.target.style.background = "pink";
      event.target.style.width="170px";
      event.target.style.height="85px";
    });
    $(".pingpong-oval").mouseout(function(event){
      event.target.style.background = "#ffb199";
      event.target.style.width="160px";
      event.target.style.height="80px";
    });



    //
    // $(".circle").mouseover(function(){
    //   $("li.num-circle").removeClass();
    //   $(".num-circle").css("addClass","ping-oval");
    // });
    // $(".circle").mouseout(function(){
    //   $("li.num-circle").removeClass();
    //   $("li.num-circle").addClass("circle");
    // });

  }); //for the submit
}); //for the document
