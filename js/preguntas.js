let selectedValue = null;
var respuesta = document.getElementById("respuesta");
let context = document.getElementById("context");
let cerrado = document.getElementById("cerrarAlerta");
cerrado.addEventListener("click", cerrar);
let contexto = document.getElementById("contexto");

function mostrarInformacion() {
    console.log("abierto");
       alerta.style.opacity = "1";
         context.innerHTML = "El sodio, como todos los elementos químicos, posee una característica única llamada símbolo atómico, que lo representa con una o dos letras en la tabla periódica.";
          context.style.fontSize = "25px";
            cerrado.style.pointerEvents ="auto";
}

function cerrar(){ 
    console.log("cerrado");
   alerta.style.opacity = "0";
     cerrado.style.pointerEvents ="none";
}




function seleccionarOpcion(id, valor) {
    const ids = ['A', 'B', 'C', 'D'];

    ids.forEach(i => {
        const btn = document.getElementById(i);
        btn.style.backgroundColor = "";
        btn.style.border = "";
    });

    const boton = document.getElementById(id);
    boton.style.backgroundColor = "#13575483;";
    boton.style.border = "2px solid rgb(3, 2, 8)";

    selectedValue = valor;
}

function calcularResultados() {
    console.log("llegaste");
    const respuestaCorrecta = 'd';

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
         context.innerHTML = "<strong>CORRECTO!</strong>✔️<br><br>El símbolo Na para el sodio proviene del latín 'natrium', que es el nombre antiguo de un compuesto que contiene sodio, concretamente el carbonato de sodio.";
            alerta.style.opacity = "1";
        context.style.fontSize = "30px";
        cerrado.style.display = "none";
        setTimeout(() => {
            alerta.style.opacity = "0";
            window.location.href = "preguntas2.html";
        }, 4000);
    } else {
        alerta_2.style.opacity = "1";
         contexto.style.fontSize = "70px";
        setTimeout(() => {
            alerta_2.style.opacity = "0";
        }, 2000);
    }
}
