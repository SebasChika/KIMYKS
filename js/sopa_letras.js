const letras = [
  "O", "U", "Z", "S", "E", "G", "G", "R", "A", "C", "R", "D",
  "Y", "X", "R", "Q", "Z", "M", "A", "T", "R", "A", "Z", "Y",
  "K", "A", "I", "H", "U", "A", "O", "D", "E", "P", "F", "F",
  "L", "J", "M", "G", "O", "O", "P", "Z", "C", "B", "R", "Z",
  "Z", "L", "K", "Y", "E", "N", "F", "R", "U", "R", "Y", "T",
  "O", "R", "O", "K", "U", "N", "O", "R", "O", "T", "X", "C",
  "A", "C", "J", "L", "I", "P", "O", "I", "B", "T", "U", "U",
  "J", "Z", "D", "N", "O", "C", "Y", "H", "S", "E", "O", "M",
  "A", "T", "E", "B", "O", "R", "P", "T", "Z", "U", "O", "N",
  "V", "Z", "I", "Z", "N", "D", "K", "O", "W", "X", "F", "T",
  "K", "M", "M", "M", "Q", "X", "V", "Q", "V", "E", "J", "P",
  "C", "O", "N", "D", "E", "N", "S", "A", "C", "I", "O", "N"
];

const respuestas = [
  "1","0","0","0","0","0","0","0","0","0","0","0",
  "0","1","0","0","0","4","4","4","4","4","4","0",
  "0","0","1","0","0","0","0","0","0","0","0","0",
  "0","0","0","1","0","0","6","0","0","0","0","0",
  "0","0","0","0","1","2","0","6","0","0","0","0",
  "7","7","7","0","0","1","2","0","6","0","0","0",
  "0","0","0","0","0","0","1","2","0","6","0","0",
  "0","0","0","0","0","0","0","0","2","0","6","0",
  "5","5","5","5","5","5","5","0","0","2","0","6",
  "0","0","0","0","0","0","0","0","0","0","2","0",
  "0","0","0","0","0","0","0","0","0","0","0","0",
  "3","3","3","3","3","3","3","3","3","3","3","3"
];

const palabras = [
  "VACIO",      
  "OXIGENO",      
  "FUSION",      
  "CONDENSACION",
  "MATRAZ",       
  "PROBETA",      
  "PROTON",       
  "ORO"          
];




let alarma = document.getElementById("alerta");
let contexto = document.getElementById("context");
let i = 0;


function cerrarr(){
  alarma.style.opacity = "0";
    alarma.style.transform = "translateX(-400px) translateY(500px) rotate(20deg) skew(15deg)";
}

function iniciar() {
    alarma.style.transform = "translateX(-400px) translateY(500px) rotate(20deg) skew(15deg)";
  const item = document.getElementById("Palabras");
  item.style.transform = "translateY(-50%)";
  item.style.opacity = "1";
  crearSopa();
  mostrarPalabras();
}

function ayuda(){
  alarma.style.opacity = "1";
    alarma.style.transform = "translate(-50%, -50%)rotate(0deg) skew(0deg)";
  contexto.style.transform ="translateY(-30px)"
  contexto.innerHTML = "<strong>¿como se juega?</strong><br><br>Una sopa de letras es un juego de palabras que se presenta como una cuadrícula llena de letras, colocadas al azar. Dentro de esa cuadrícula, hay palabras escondidas que se deben encontrar. Estas palabras pueden estar escritas en cualquier dirección: horizontal, vertical, diagonal, de izquierda a derecha o de derecha a izquierda."
}



function crearSopa() {
  const sopaa = document.getElementById("sopaa");
  sopaa.innerHTML = "";

  for (let i = 0; i < letras.length; i++) {
    sopaa.innerHTML += `<div class='caja' id="${respuestas[i]}"><strong>${letras[i]}</strong></div>`;
  }

  sopaa.addEventListener("click", cambiarColor);
}

function cambiarColor(e) {
  const elemento = e.target.closest(".caja");
  if (!elemento || elemento.classList.contains("marcada")) return;

  const id = elemento.id;
  if (id !== "0") {
    elemento.style.background = "linear-gradient(180deg, #0077b6 0%, #90e0ef 100%)";
    elemento.style.color = "white";
    elemento.classList.add("marcada");
  }

  verificarPalabrasCompletas();
}

function mostrarPalabras() {
  const crear_palabras = document.getElementById("Palabras");
  crear_palabras.innerHTML = "<h1>Palabras</h1>";

  palabras.forEach(palabra => {
    if(palabra == "VACIO") return;
    crear_palabras.innerHTML += `<p data-id="${palabras.indexOf(palabra)}">${palabra}</p>`;
  });
}

function verificarPalabrasCompletas() {
  const totalIDs = respuestas.filter(id => id !== "0");
  const idsUnicos = [...new Set(totalIDs)];

  idsUnicos.forEach(id => {
    const total = respuestas.filter(r => r === id).length;
    const marcadas = document.querySelectorAll(`.caja[id="${id}"].marcada`).length;

    if (marcadas === total) {
      const palabraHTML = document.querySelector(`#Palabras p[data-id="${id}"]`);
      if (palabraHTML && !palabraHTML.classList.contains("tachada")) {
        palabraHTML.style.textDecoration = "line-through";
        palabraHTML.style.color = "#1b6d68";
        palabraHTML.classList.add("tachada");
      }
    }
  });


  const tachadas = document.querySelectorAll("#Palabras p.tachada");
  if (tachadas.length === 7) {
    setTimeout(() => {
      window.location.href = "preguntas de seleccion multiple.html";
    }, 1000); 
  }
}

window.addEventListener("load", iniciar);
