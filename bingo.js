$(function(){
  "use strict";

  var
    max = 50,
    bingo = [],
    status = true,
    roulette,
    random,
    number,
    result,
    $number = $("#number"),
    $result = $("#result");

  for(var i = 1; i <= max; i++) {
    bingo.push(i);
    $number.append($("<li>").text(("0" + i).slice(-2)));
  }

  $("button").on("click", function(){
    if(status) {
      status = false;
      $(this).text("STOP");
      document.getElementById("sound-start").play();
      document.getElementById("sound-stop").pause();
      document.getElementById("sound-stop").currentTime = 0;

      roulette = setInterval(function(){
        random = Math.floor(Math.random() * bingo.length);
        number = bingo[random];
        $result.text(number);
      }, 10);

    } else {
      status = true;
      $(this).text("START");
      document.getElementById("sound-stop").play();
      document.getElementById("sound-start").pause();
      document.getElementById("sound-start").currentTime = 0;

      clearInterval(roulette);

      result = bingo[random];
      bingo.splice(random, 1);

      $result.text(result);
      $number.find("li").eq(parseInt(number, 10) - 1).addClass("hit");
    }
  });
});