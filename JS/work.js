function galem()
{
    var x = document.getElementsByClassName("work");
    var s=document.getElementById("store");
    y=s.innerHTML
    var i,n=3;
    x[y].style.display="block";
    for(i=0;i<n;++i)
    {
      if(i!=y)
      {
        x[i].style.display="none";
      }
    }
    if(parseInt(y)==n-1)
    {
      s.innerHTML=0;
    }
    else
    {
      s.innerHTML=parseInt(y)+1;
    }
}

function startwork()
{
  var x = document.getElementsByClassName("work");
  var s=document.getElementById("store");
  x[0].style.display="block";
  var i,n=3;
  for(i=1;i<n;++i)
    {
        x[i].style.display="none";
    }
  s.innerHTML=1;
}
