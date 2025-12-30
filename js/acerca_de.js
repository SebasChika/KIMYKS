// JAVASCRIPT

function iniciar() {
  console.log("que haces aca?");
  figura = document.getElementById("animacion");

  // Asociar los botones 1-13 automáticamente
  for (let i = 1; i <= 13; i++) {
    let btn = document.getElementById(numeroATexto(i));
    if (btn) {
      btn.addEventListener("click", () => mostrarImagen(i), false);
    }
  }

  // Intervalo de animación
  setInterval(playAnimation, 1000);

  // Botones de prueba
  let botones = document.querySelectorAll("#btnPrueba button");
  for (let boton of botones) {
    boton.addEventListener("click", oprimio_boton, false);
  }
}

// Variables globales
let images = [
  "imagenes/uno.png",
  "imagenes/dos.png",
  "imagenes/tres.png",
  "imagenes/trece.png", 
  "imagenes/cinco.png",
  "imagenes/seis.png",
  "imagenes/siete.png",
  "imagenes/ocho.png",
  "imagenes/uno.png", 
  "imagenes/diez.png",
  "imagenes/tres.png",  
  "imagenes/doce.png",
  "imagenes/trece.png",
];


let index = 0;
let figura;
let continuar = true;

// Convierte número a texto (coincide con tus ids)
function numeroATexto(num) {
  let nombres = [
    "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete",
    "ocho", "nueve", "diez", "once", "doce", "trece"
  ];
  return nombres[num - 1];
}

// Botón de prueba
function oprimio_boton(e) {
  let id = e.target.id;
  console.log("Oprimió el BOTÓN --> " + id);
  figura.src = "imagenes/" + id + ".png";
}

// Mostrar imagen al presionar botón y pausar animación
function mostrarImagen(num) {
  figura.src = images[num - 1];
  continuar = false;
  setTimeout(() => {
    continuar = true;
  }, 3000);
}

// Animación automática
function playAnimation() {
  if (continuar) {
    figura.src = images[index];
    index = (index + 1) % images.length;
    console.log("Mostrando imagen " + index);
  }
}

// Iniciar al cargar
window.addEventListener("load", iniciar, false);
