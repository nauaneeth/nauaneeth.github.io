function galem()
{
    var x = document.getElementById("work1");
    var y = document.getElementById("work2");
    if (x.style.display === "none")
    {
      x.style.display = "block";
      y.style.display = "none";
    }
    else
    {
      x.style.display = "none";
      y.style.display = "block";
    }
}