function preguntarNombreYApellido(){
    var nombre=prompt("ingresa tu nombre");
    var apellido=prompt("ingresa tu apellido");
    alert(`hola tu nombre es ${nombre} y tu apellido es ${apellido}`);
}
function ponerEnMayusculas(){
    var datospersonales=document.getElementById("datos");
    datospersonales.innerHTML="DATOS PERSONALES"
    datospersonales.style.backgroundColor="white"

}

function ModoOscuro(){
    var vBody=document.getElementById=("cuerpo");
    vBody.estilo.background="gray"
}
function ModoClaro()
