function generarTablas() {
    let contenido = "";
    let num = 5;
    let contenedor = document.getElementById("txtTabla");
    for (i = 1; i <= 10; i++) {
        contenido = contenido + "<li class='fila'><span class='operacion'>"+num+" × "+i+"</span><span class='igual'>=</span><span class='resultado'>"+num*i+"</span></li>";
    }

    contenedor.innerHTML = contenido;
}