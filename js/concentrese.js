var imagenes = [
  "imagenes/concentrese/1.png",
  "imagenes/concentrese/2.png",
  "imagenes/concentrese/3.png",
  "imagenes/concentrese/4.png",
  "imagenes/concentrese/5.png",
  "imagenes/concentrese/6.png",
  "imagenes/concentrese/7.png",
  "imagenes/concentrese/8.png",
  "imagenes/concentrese/9.png",
  "imagenes/concentrese/10.png"
];

let cerrarAlerta = document.getElementById("cerrarAlerta");
cerrarAlerta.addEventListener("click", cerrarBoton);

var pareja = [
  "imagenes/concentrese/1.png",
  "imagenes/concentrese/2.png",
  "imagenes/concentrese/3.png",
  "imagenes/concentrese/4.png",
  "imagenes/concentrese/5.png",
  "imagenes/concentrese/6.png",
  "imagenes/concentrese/7.png",
  "imagenes/concentrese/8.png",
  "imagenes/concentrese/9.png",
  "imagenes/concentrese/10.png"
];


var back = "imagenes/rompecabezas/fondo.png";

let alarma = document.getElementById("alerta");
var context = document.getElementById("context");
let suma = 0;
let contador = document.getElementById("num");
let respuesta = [];
var contenedor = document.getElementById("contenedor");

function ayuda() {
  alarma.style.opacity = "1";
  context.style.fontSize = "20px";
  context.innerHTML = "<strong>¿COMO SE JUEGA?</strong><br><br> El juego tiene muchas cartas o fichas colocadas boca abajo. Cada carta tiene una imagen, número o palabra, y hay pares iguales. <br>El objetivo del juego es encontrar los pares iguales volteando dos cartas por turno. Si las dos que volteas son iguales, te las quedas y sigues jugando. Si no, las vuelves a poner boca abajo y es el turno del otro jugador.<br>";

}

function iniciar() {
  for (let i = 0; i < imagenes.length; i++) {
    contenedor.innerHTML += `
      <div id="${i}" class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${back}" alt="fondo">
          </div>
          <div class="flip-card-back">
            <img src="${imagenes[i]}" alt="imagen ${i}">
          </div>
        </div>
      </div>
    `;

    contenedor.innerHTML += `
      <div id="${i}" class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${back}" alt="fondo">
          </div>
          <div class="flip-card-back">
            <img src="${pareja[i]}" alt="imagen ${i}">
          </div>
        </div>
      </div>
    `;
    contenedor.style.pointerEvents = "none";
  }

  desordenarCartas();

  let cartas = document.querySelectorAll(".flip-card");
  cartas.forEach(carta => carta.classList.add("flipped"));

  setTimeout(() => {
    contenedor.style.pointerEvents = "all";
    cartas.forEach(carta => carta.classList.remove("flipped"));
  }, 5000);

  cartas.forEach(carta => carta.addEventListener("click", manejarClick));
}

function cerrarBoton() {
  console.log("cerrar");
  alarma.style.opacity = "0";
}

function desordenarCartas() {
  let cartas = document.querySelectorAll(".flip-card");
  cartas.forEach(carta => {
    let ordenAleatorio = Math.floor(Math.random() * cartas.length);
    carta.style.order = ordenAleatorio;
  });
}

function manejarClick(e) {
  var actual = e.currentTarget;
  actual.classList.toggle("flipped");
  respuesta.push(actual);
  console.log(actual.id)

  if (respuesta.length == 1) {
    respuesta[0].style.pointerEvents = "none";
    console.log("ficha desabilitada");
  }

  if (respuesta.length == 2) {
    if (respuesta[0].id == respuesta[1].id) {
      console.log("pareja encontrada");

      for (let i = 0; i < respuesta.length; i++) {
        respuesta[i].style.pointerEvents = "none";
        console.log(actual);
      }


      //respuestas//
      if (respuesta[0].id == 0 && respuesta[1].id == 0) {
        alarma.style.opacity = "1";
        context.style.fontSize = "20px";
        context.innerHTML = "¡CORRECTO!✔️<br><br>El cobre fue uno de los primeros metales utilizados por el ser humano, hace más de 10,000 años. Gracias a su alta conductividad eléctrica, hoy en día es fundamental en la fabricación de cables eléctricos, motores y componentes electrónicos.";
      }
      if (respuesta[0].id == 1 && respuesta[1].id == 1) {
        alarma.style.opacity = "1";
        context.style.fontSize = "20px";
        context.innerHTML = "¡CORRECTO!✔️<br><br>El oro es un metal tan resistente a la corrosión que puede permanecer inalterado durante miles de años. De hecho, se han encontrado joyas de oro en tumbas del antiguo Egipto que aún conservan su brillo original tras más de 3,000 años.";

      }
      if (respuesta[0].id == 2 && respuesta[1].id == 2) {
        alarma.style.opacity = "1";
        context.style.fontSize = "20px";
        context.innerHTML = "¡CORRECTO!✔️<br><br>El hierro es el metal más utilizado en el mundo y constituye aproximadamente el 5% de la corteza terrestre. Es un componente esencial en la producción de acero, una aleación fundamental para la construcción de edificios, puentes, vehículos y muchas otras infraestructuras modernas.";

      }
      if (respuesta[0].id == 3 && respuesta[1].id == 3) {
        alarma.style.opacity = "1";
        context.style.fontSize = "20px";
        context.innerHTML = "¡CORRECTO!✔️<br><br>El agua cubre aproximadamente el 71% de la superficie de la Tierra, pero solo alrededor del 2.5% es agua dulce. De esa pequeña fracción, la mayoría está congelada en glaciares y casquetes polares, lo que hace que el agua potable sea un recurso limitado y muy valioso.";

      }
      if (respuesta[0].id == 4 && respuesta[1].id == 4) {
        alarma.style.opacity = "1";
        context.style.fontSize = "20px";
        context.innerHTML = "¡CORRECTO!✔️<br><br>El boro es un elemento poco abundante pero esencial en la fabricación de vidrios resistentes al calor, como los usados en utensilios de cocina y laboratorios. Además, desempeña un papel importante en el crecimiento de las plantas, ya que ayuda en la formación de las paredes celulares.";

      }
      if (respuesta[0].id == 5 && respuesta[1].id == 5) {
        alarma.style.opacity = "1";
        context.style.fontSize = "20px";
        context.innerHTML = "¡CORRECTO!✔️<br><br>El matraz es un recipiente de vidrio utilizado en los laboratorios para calentar, mezclar o contener sustancias químicas. Uno de los más comunes es el matraz Erlenmeyer, diseñado con forma cónica para evitar derrames y facilitar la agitación sin perder el contenido.";

      }
      if (respuesta[0].id == 6 && respuesta[1].id == 6) {
        alarma.style.opacity = "1";
        context.style.fontSize = "20px";
        context.innerHTML = "¡CORRECTO!✔️<br><br>Ese símbolo representa un átomo, la unidad básica de la materia. Cada átomo está formado por un núcleo con protones y neutrones, rodeado por electrones que giran a su alrededor. Todo lo que nos rodea —desde el aire que respiramos hasta nuestro propio cuerpo— está compuesto por átomos.";
      }
      if (respuesta[0].id == 7 && respuesta[1].id == 7) {
        alarma.style.opacity = "1";
        context.style.fontSize = "20px";
        context.innerHTML = "¡CORRECTO!✔️<br><br>El microscopio revolucionó la ciencia al permitir observar estructuras invisibles al ojo humano. Gracias a él, se descubrieron las células en el siglo XVII, lo que marcó el inicio de la biología celular y cambió para siempre nuestra comprensión de los seres vivos.";

      }
      if (respuesta[0].id == 8 && respuesta[1].id == 8) {
        alarma.style.opacity = "1";
        context.style.fontSize = "20px";
        context.innerHTML = "¡CORRECTO!✔️<br><br>Los tubos de ensayo son recipientes cilíndricos de vidrio utilizados en laboratorios para mezclar, calentar o contener pequeñas cantidades de sustancias químicas. Su diseño permite observar fácilmente las reacciones químicas y manejarlos con seguridad durante los experimentos.";

      }
      if (respuesta[0].id == 9 && respuesta[1].id == 9) {
        alarma.style.opacity = "1";
        context.style.fontSize = "20px";
        context.innerHTML = "¡CORRECTO!✔️<br><br>Esta imagen representa una estructura molecular, que muestra cómo se conectan los átomos para formar compuestos químicos. Comprender estas estructuras es fundamental en la química, ya que determina las propiedades y el comportamiento de las sustancias.";

      }

      //respuestas
      suma = suma + 1;
      if (suma == 10) {
        setTimeout(() => {
          window.location.href = "arrastra.juega.html";
        }, 2000);
      }
      contador.innerHTML = (suma + "/10");
      respuesta = [];
    } else {
      console.log("no es pareja");
      const primera = respuesta[0];
      const segunda = respuesta[1];
      primera.style.pointerEvents = "all";
      setTimeout(() => {
        primera.classList.remove("flipped");
        segunda.classList.remove("flipped");
      }, 1000);
      respuesta = [];
    }
  }
}

window.addEventListener("load", iniciar);
