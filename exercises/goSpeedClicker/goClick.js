// 

$("#countButton").on('click', function(e) {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = parseInt($("#displayCount").text());
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 0;
      }
      document.getElementById("displayCount").innerHTML = localStorage.clickcount;
      document.getElementById("displayCount").innerHTML= "<li>count++</li>";
    }
  });
  $("#resetButton").on('click', function(e) {
    localStorage.clickcount = 0;
    document.getElementById("displayCount").innerHTML = localStorage.clickcount;
  });