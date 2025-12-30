let fichas = [
    "imagenes/rompecabezas/1.jpg",
    "imagenes/rompecabezas/2.jpg",
    "imagenes/rompecabezas/3.jpg",
    "imagenes/rompecabezas/4.jpg",
    "imagenes/rompecabezas/5.jpg",
    "imagenes/rompecabezas/6.jpg",
    "imagenes/rompecabezas/7.jpg",
    "imagenes/rompecabezas/8.jpg",
    "imagenes/rompecabezas/9.jpg",
    "imagenes/rompecabezas/10.jpg",
    "imagenes/rompecabezas/11.jpg",
    "imagenes/rompecabezas/12.jpg"
];
let correctas = [
    "imagenes/rompecabezas/1.jpg",
    "imagenes/rompecabezas/2.jpg",
    "imagenes/rompecabezas/3.jpg",
    "imagenes/rompecabezas/4.jpg",
    "imagenes/rompecabezas/5.jpg",
    "imagenes/rompecabezas/6.jpg",
    "imagenes/rompecabezas/7.jpg",
    "imagenes/rompecabezas/8.jpg",
    "imagenes/rompecabezas/9.jpg",
    "imagenes/rompecabezas/10.jpg",
    "imagenes/rompecabezas/11.jpg",
    "imagenes/rompecabezas/12.jpg"
];

let contador = 0;
let uno = null;
let dos = null;
let alerta = document.getElementById("alerta");

let ayudante = document.getElementById("ayudante");
ayudante.addEventListener("click", ayuda);

let cuadro = document.getElementById("fichas");
let cerrrarAlerta = document.getElementById("volver");
cerrrarAlerta.addEventListener("click", cerrrarAlertaa);

function ayuda() {
    alerta.style.opacity = 1;
}



function cerrrarAlertaa() {
    alerta.style.opacity = 0;

}

function clickeado(e) {
    if (contador === 0) {
        uno = e.target;
        uno.style.transform = "translateY(-5px) skew(5deg)";
        contador++;
    } else if (contador === 1) {
        dos = e.target;
        contador++;
        let tempSrc = uno.src;
        uno.src = dos.src;
        dos.src = tempSrc;
        uno.style.transform = "translateY(0px) skew(0deg)";
        let indexUno = parseInt(uno.id.replace("ficha", ""));
        let indexDos = parseInt(dos.id.replace("ficha", ""));

        let tempFicha = fichas[indexUno];
        fichas[indexUno] = fichas[indexDos];
        fichas[indexDos] = tempFicha;

        console.log("Se intercambiaron las imágenes");
        contador = 0;
        uno = null;
        dos = null;
        verificar();
    }
}


function verificar() {
    let CORRECTO = 0;
    for (let i = 0; i < fichas.length; i++) {
        if (fichas[i] == correctas[i]) {
            let actual = document.getElementById("ficha" + [i]);
            CORRECTO++;
            actual.style.pointerEvents = "none";

            if (CORRECTO == 12) {
                setTimeout(() => {
                    window.location.href = "ganaste.html";

                }, 1000)
            }
            console.log(CORRECTO);
        }
        else {
            console.log("incorrecto")
        }
    }

}

function iniciar() {
    for (let i = 0; i < fichas.length; i++) {
        cuadro.innerHTML += `<img src="${fichas[i]}" id="ficha${i}" class="pieza">`;
    }
    let cartas = document.querySelectorAll(".pieza");
    cartas.forEach(carta => {
        carta.addEventListener("click", clickeado);
    });
    desordenar();
}

function desordenar() {
    fichas.sort(() => Math.random() - 0.5);
    let cartas = document.querySelectorAll(".pieza");
    for (let i = 0; i < cartas.length; i++) {
        cartas[i].src = fichas[i];
    }
}



window.addEventListener("load", iniciar);
