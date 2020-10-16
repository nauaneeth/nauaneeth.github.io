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
    if(parseInt(y)==2)
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
  document.getElementsByClassName("work")[0].style.display="block";
}
