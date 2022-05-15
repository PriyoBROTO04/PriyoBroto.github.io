var btn=document.getElementById("btn");
btn.onclick=function(){
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode"))
    {
        btn.classList.remove("fa-moon");
        btn.classList.add("fa-sun");
    }
    else{
        btn.classList.remove("fa-sun");
        btn.classList.add("fa-moon");
    }
}