let selectedValue = null;
var respuesta = document.getElementById("respuesta");
let context = document.getElementById("context");
let contexto = document.getElementById("contexto");
let cerrado = document.getElementById("cerrarAlerta");
cerrado.addEventListener("click", cerrar);


function mostrarInformacion() {
    alerta.style.opacity = "1";
    alerta.style.height = "55%";
    context.innerHTML = "Es una característica única de cada elemento que determina su posición en la tabla periódica y sus propiedades.";
    context.style.fontSize = "25px";
    cerrado.style.pointerEvents = "auto";
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
    const respuestaCorrecta = 'a';

    if (selectedValue === respuestaCorrecta) {
        mostrarAlerta('correcto');
    } else {
        mostrarAlerta('incorrecto');
    }
}

function mostrarAlerta(tipo) {
    const alerta = document.getElementById("alerta");       // correcto
    const alerta_2 = document.getElementById("alerta_2");   // incorrecto

    if (tipo === 'correcto') {
        context.innerHTML = "<strong>CORRECTO!</strong>✔️<br><br>número de protones presentes en el núcleo de los átomos de un elemento, que determina la situación de este en el sistema periódico y, por tanto, sus propiedades químicas.";
        alerta.style.opacity = "1";
        context.style.fontSize = "30px";
        cerrado.style.display = "none";
        setTimeout(() => {
            alerta.style.opacity = "0";
            window.location.href = "preguntas3.html";
        }, 6000);
    } else {
        alerta_2.style.opacity = "1";
        contexto.style.fontSize = "70px";
        setTimeout(() => {
            alerta_2.style.opacity = "0";
        }, 2000);
    }
}


