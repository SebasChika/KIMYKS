const cursorImg = document.getElementById("cursor-img");
let mouseX = 0;
let mouseY = 0;
let close = document.getElementById("cerrarAlerta");
close.addEventListener("click", cerrarBoton);
document.addEventListener("mousemove", e => { mouseX = e.clientX; mouseY = e.clientY; });
document.addEventListener("mousedown", e => { mouseX = e.clientX; mouseY = e.clientY; });
document.addEventListener("mouseup", e => { mouseX = e.clientX; mouseY = e.clientY; });
document.addEventListener("drag", e => { mouseX = e.clientX; mouseY = e.clientY; });
document.addEventListener("dragover", e => { mouseX = e.clientX; mouseY = e.clientY; });

function actualizarCursorFrame() {
    cursorImg.style.left = mouseX + "px";
    cursorImg.style.top = mouseY + "px";
    requestAnimationFrame(actualizarCursorFrame);
}
requestAnimationFrame(actualizarCursorFrame);

let imagenes, respuestas;
let rBuenas = 0;
const solucion = { "img-oro":"zona-4", "img-cobre":"zona-3", "img-hierro":"zona-2", "img-agua":"zona-1" };
const mensajes = {
    "img-oro":"¡Has encontrado el oro! Es un metal precioso, amarillo brillante, usado en joyería y monedas.",
    "img-cobre":"¡Has encontrado el cobre! Es un metal rojo, excelente conductor de electricidad.",
    "img-hierro":"¡Has encontrado el hierro! Metal fuerte y abundante, usado en construcción y herramientas.",
    "img-agua":"¡Has encontrado el agua! Líquido vital para toda la vida en la Tierra."
};
let alerta = document.getElementById("alerta");
const conclusion = document.getElementById("context");

function iniciar() {
    const contenedor = document.getElementById("cajaimagenes");
    imagenes = Array.from(contenedor.querySelectorAll("img"));
    imagenes.sort(() => Math.random() - 0.5);
    contenedor.innerHTML = "";
    imagenes.forEach(img => contenedor.appendChild(img));

    imagenes.forEach(img => {
        img.setAttribute("draggable", true);
        img.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text", e.target.id);
        });
    });

    respuestas = document.querySelectorAll(".zonadestino");
    respuestas.forEach(zona => {
        zona.addEventListener("dragover", e => e.preventDefault());
        zona.addEventListener("drop", soltado);
    });
}

function precionado() {
    alert("El objetivo del juego es llevar las imágenes a su respectivo elemento.");
}

function cerrarBoton(){
    alerta.style.opacity = "0";
}

function mostrarAlerta(mensaje) {
    alerta.style.opacity = 1;
    conclusion.textContent = mensaje;
    conclusion.style.fontSize ="30px";
    alerta.style.height = "60%";
}

function soltado(e) {
    e.preventDefault();
    const idElemento = e.dataTransfer.getData("text");
    const idZona = e.currentTarget.id;

    if(solucion[idElemento] === idZona) {
        rBuenas++;
        document.getElementById(idElemento).style.display = "none";
        e.currentTarget.style.background = "rgb(41,105,66)";
        mostrarAlerta(mensajes[idElemento], true);

        if(rBuenas === Object.keys(solucion).length) {
            setTimeout(() => {
                mostrarAlerta("Siguiente juego...", true);
                setTimeout(() => { window.location.href = "wordle.html"; }, 2000);
            }, 2000);
        }

    } else {
        e.currentTarget.style.background = "rgb(61,17,17)";
        mostrarAlerta("INCORRECTO", false);
    }
}

window.addEventListener("load", iniciar);
document.querySelector("#ayudante img").addEventListener("click", precionado);
