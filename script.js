document.getElementById("submitbutton").onclick = function(){
    a = document.getElementById("atextbox").value;
    console.log(a)
    a = parseInt(a);
    b = document.getElementById("btextbox").value;
    b = parseInt(b);
    c = Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
    document.getElementById("clabel").innerHTML = "SIDE C:" + c
}
