function opentab(){
    var x = document.getElementById("change");
    var y = document.getElementById("blur");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "none";
    }
  }

function closetab()
{
    var x = document.getElementById("change");
    var y = document.getElementById("blur");
    x.style.display = "none";
    y.style.display = "none";
}


function home()
{
    var x = document.getElementById("home");
    var y = document.getElementById("about");
    var z = document.getElementById("works");
    x.style.display="block";
    y.style.display="none";
    z.style.display="none";
    var a = document.getElementById("mone");
    var b = document.getElementById("mtwo");
    var c = document.getElementById("mthree");
    a.body.style.background = "#f3f3f3"
    b.style.fontWeight="none";
    c.style.fontWeight="none";
} 
function about()
{
    var x = document.getElementById("home");
    var y = document.getElementById("about");
    var z = document.getElementById("works");
    x.style.display="none";
    y.style.display="inline";
    z.style.display="none";
}
function work()
{
    var x = document.getElementById("home");
    var y = document.getElementById("about");
    var z = document.getElementById("works");
    x.style.display="none";
    y.style.display="none";
    z.style.display="block";
} 