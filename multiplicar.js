function generarTablas() {
    let contenido = "";

    let cmp = document.getElementById("numeroTabla");
    let num = parseInt(cmp.value);

    let contenedor = document.getElementById("txtTabla");

    if (num <= 100 && num >= 1) {
        for (i = 1; i <= 10; i++) {
            contenido = contenido + "<li class='fila'><span class='operacion'>" + num + " × " + i + "</span><span class='igual'>=</span><span class='resultado'>" + num * i + "</span></li>";
        }
        cmp = document.getElementById("numeroTitulo");
        cmp.innerText = num;
    } else {
        contenido = "<div class='paso'><span class='paso-num'>1</span><p class='paso-texto'><strong>Escribe</strong> un número del <em>1 al 100</em> en la caja.</p></div>"
    }


    contenedor.innerHTML = contenido;
}