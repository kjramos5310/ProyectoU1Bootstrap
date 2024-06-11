
function mostrarimg(){
document.getElementById('cont2').innerHTML='<img src="images/firefox.png">';
}

function grupo() {
    var demo = document.getElementById("grupo");
    demo.style.color = "green";
}

function myFunction() {
    var x = document.getElementsByClassName("example");
    x[0].innerHTML = "Hola Mundo";
}   

function addText() {
    var para = document.getElementsByName("demoPara");
    para[0].innerHTML="Texto cambiado!";
    para[1].innerHTML = "El grupo 03 "
      + "ha realizado esto con JavaScript";
}

function displayPhrase()
{
    document.getElementById("p1").innerHTML = "Este texto fue remplazado";
}

function formsfuncion() {
    var txt = document.getElementById(
      "idformulario1").id;

    document.getElementById(
      "forms1").innerHTML = txt;
}

intro.style.backgroundColor = '#00FFFF';