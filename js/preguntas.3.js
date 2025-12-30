let selectedValue = null;
var respuesta = document.getElementById("respuesta");
let context = document.getElementById("context");
let contexto = document.getElementById("contexto");
let cerrado = document.getElementById("cerrarAlerta");
cerrado.addEventListener("click", cerrar);


function mostrarInformacion() {
    alerta.style.opacity = "1";
    context.innerHTML = "Los enlaces químicos se clasifican en iónico, covalente y metálico, según la diferencia de electronegatividad entre los átomos, es decir, la resta de sus electronegatividades.";
    cerrado.style.pointerEvents = "auto";
    context.style.fontSize = "26px";
}

function cerrar() {
    console.log("cerrado");
    alerta.style.opacity = "0";
    cerrado.style.pointerEvents = "none";
}



function seleccionarOpcion(id, valor) {
    const ids = ['A', 'B', 'C', 'D'];

    ids.forEach(i => {
        const btn = document.getElementById(i);
        btn.style.backgroundColor = "";
        btn.style.border = "";
    });

    const boton = document.getElementById(id);
    boton.style.backgroundColor = "#7fafdad9";
    boton.style.border = "2px solid rgb(3, 2, 8)";

    selectedValue = valor;
}

function calcularResultados() {
    const respuestaCorrecta = 'c';

    if (selectedValue === respuestaCorrecta) {
        mostrarAlerta('correcto');
    } else {
        mostrarAlerta('incorrecto');
    }
}

function mostrarAlerta(tipo) {
    const alerta = document.getElementById("alerta");
    const alerta_2 = document.getElementById("alerta_2");

    if (tipo === 'correcto') {
        context.innerHTML = "<strong>CORRECTO!</strong>✔️<br><br> Cuando un enlace es iónico,Esta información permite predecir que el compuesto será un sólido cristalino a temperatura ambiente, de alto punto de fusión, que conduce la electricidad en estado fundido o disuelto y es soluble en agua. ";
        alerta.style.opacity = "1";
        context.style.fontSize = "26px";
        cerrado.style.display = "none";

        setTimeout(() => {
            alerta.style.opacity = "0";
            window.location.href = "concentrese.html";
        }, 6000);
    } else {
        alerta_2.style.opacity = "1";
        contexto.style.fontSize = "70px";
        setTimeout(() => {
            alerta_2.style.opacity = "0";
        }, 2000);
    }
}

