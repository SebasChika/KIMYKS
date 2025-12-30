let teclado = document.getElementById("teclado");
let tablero = document.getElementById("tablero");
let alarma = document.getElementById("alerta");
var context = document.getElementById("context");
let blurry = document.getElementById("content");
let img = document.getElementById("correcto");
let help = document.getElementById("gatito");
help.addEventListener("click", ayudarusuario);
let cuadrostab = [];
let palabraactual = [];
let listaPalabras = [

  ['L', 'I', 'T', 'I', 'O'],
  ['O', 'X', 'I', 'D', 'O'],
  ['A', 'C', 'I', 'D', 'O'],
  ['M', 'E', 'T', 'A', 'L'],
  ['A', 'T', 'O', 'M', 'O'],
  ['A', 'N', 'I', 'O', 'N'],
  ['R', 'A', 'D', 'O', 'N'],
  ['C', 'L', 'O', 'R', 'O']
];

let continuar = true;
let contadorfilas = 0;
let teclas = [
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'
];
let suma = 0;
let palabra1 = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];

window.addEventListener("keydown", ponerLetra);

function ponerLetra(e) {
  let key = e.key.toUpperCase();

  if (key === "BACKSPACE" && suma > 0) {
    suma--;
    cuadrostab[suma].innerHTML = "";
    cuadrostab[suma].style.border = "2px solid rgb(196, 196, 196)";
    palabraactual.pop();
    return;
  }

  if (key === "ENTER") {
    if (contadorfilas === 0) { revisarFila(0, 0); return; }
    if (contadorfilas === 1) { revisarFila(1, 5); return; }
    if (contadorfilas === 2) { revisarFila(2, 10); return; }
    if (contadorfilas === 3) { revisarFila(3, 15); return; }
    if (contadorfilas === 4) { revisarFila(4, 20); return; }
    if (contadorfilas === 5) { revisarFila(5, 25); return; }
  }

  if (!continuar) return;

  if (/^[A-Z]$/.test(key)) {
    cuadrostab[suma].innerHTML = key;
    palabraactual.push(key);
    suma++;
    if (suma % 5 === 0) continuar = false;
  }
}

function ayudarusuario() {
  img.style.transform = " translateY(-10px) translateX(200px) rotate(0deg)"
  alarma.style.opacity = 1;
  alarma.style.padding = "30px 20px";
  context.innerHTML = (" ¿Como se juega?<br><br>Adivina la palabra de 5 letras en un máximo de 6 intentos.<br>Cada vez que envíes tu intento:<br>🟩 Verde: La letra está en la palabra y en la posición correcta.<br>🟨 Amarillo: La letra está en la palabra pero en otra posición.<br>⬜ Gris: La letra no está en la palabra.<br>Escribe tus letras usando el teclado en pantalla o tu teclado físico, presiona ENTER para enviar tu intento y ⌫ para borrar.<br>¡Pon a prueba tus conocimientos de química y tu lógica!");
  context.style.fontSize = "17px";

}

function revisarFila(fila, startIndex) {
  if (palabraactual.length < 5) {
    alert("Letras insuficientes");
    return;
  }

  // pintar cuadritos les gou
let esCorrecta = true;

for (let i = 0; i < palabraactual.length; i++) {
  let idx = startIndex + i;

  if (palabraactual[i] === palabra1[i]) {
    cuadrostab[idx].style.backgroundColor = "rgb(34, 168, 157)";
    cuadrostab[idx].style.color = "white";
  } else if (palabra1.includes(palabraactual[i])) {
    cuadrostab[idx].style.backgroundColor = "gold";
    cuadrostab[idx].style.color = "black";
    esCorrecta = false;
  } else {
    cuadrostab[idx].style.backgroundColor = "darkgray";
    cuadrostab[idx].style.color = "black";
    esCorrecta = false;
  }
}


  

  //  ganó
  if (esCorrecta) {
    alarma.style.opacity = 1;
    context.innerHTML = "<strong>GANASTE!</strong>";
    setTimeout(() =>{
    context.innerHTML = "GANASTE!"
    window.location.href = "rompecabezas.html";
    continuar = false;
    return;
    },1000)
  }

  palabraactual = [];
  contadorfilas++;
  continuar = true;

  // perdio
  if (contadorfilas >= 6) {
    alarma.style.opacity = 1;
    context.innerHTML = ("¡No pudiste! La palabra era: " + palabra1.join(""));
    context.style.fontSize = "30px";
    setTimeout(() => {
      alarma.style.opacity = 0;
    }, 3000)
    continuar = false;
  }
}

function ayuda() {
  img.style.transform = " translateY(-10px) translateX(200px) rotate(0deg)"
  alarma.style.opacity = 1;
  alarma.style.padding = "30px 20px";
  context.innerHTML = (" ¡Bienvenido al Wordle de Química!<br><br>Adivina la palabra de 5 letras en un máximo de 6 intentos.<br>Cada vez que envíes tu intento:<br>🟩 Verde: La letra está en la palabra y en la posición correcta.<br>🟨 Amarillo: La letra está en la palabra pero en otra posición.<br>⬜ Gris: La letra no está en la palabra.<br>Escribe tus letras usando el teclado en pantalla o tu teclado físico, presiona ENTER para enviar tu intento y ⌫ para borrar.<br>¡Pon a prueba tus conocimientos de química y tu lógica!");
  context.style.fontSize = "17px";
}

function salirayud() {
  blurry.style.filter = "blur(0px)";
  blurry.style.opacity = 1;
  blurry.style.backgroundColor = "transparent";
  alarma.style.opacity = 0;
}

function iniciar() {
  ayuda();
  console.log(palabra1);

  for (let i = 0; i < 30; i++) {
    let cuadro = document.createElement("div");
    cuadro.id = `cuadro${i}`;
    cuadro.classList.add("cuadro");
    tablero.appendChild(cuadro);
    cuadrostab.push(cuadro);
  }


  teclas.forEach(teclaTexto => {
    let tecla = document.createElement("div");
    tecla.classList.add("tecla", "cuadro");
    tecla.textContent = teclaTexto;
    teclado.appendChild(tecla);

    tecla.addEventListener("click", () => {
      if (teclaTexto === "⌫") {
        ponerLetra({ key: "Backspace" });
      } else if (teclaTexto === "ENTER") {
        ponerLetra({ key: "Enter" });
      } else {
        ponerLetra({ key: teclaTexto });
      }
    });
  });
}

window.addEventListener("load", iniciar);
