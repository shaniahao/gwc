var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//document.getElementById("demo").onmouseover = function() {mouseOver()};
//document.getElementById("demo").onmouseout = function() {mouseOut()};

//function mouseOver() {
//  document.getElementById("demo").style.color = "red";
//}

//function mouseOut() {
//  document.getElementById("demo").style.color = "black";
//}


document.getElementById("demo").onmouseover = function() {mouseOver()};
document.getElementById("demo").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("demo").text = "DEAR EVAN HANSEN";
}

function mouseOut() {
  document.getElementById("demo").text = "Tony aware-winning musical";
}
