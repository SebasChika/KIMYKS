// VARIABLES GLOBALES
let baseDatos;


// CAMPOS DEL FORMULARIO
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("password");

// FORMULARIO
const loginForm = document.getElementById("registroForm");

// EVENTOS
loginForm.addEventListener("submit", iniciarSesion);

let alerta = document.getElementById("alerta");
let contexto = document.getElementById("context");

function iniciarSesion(evento) {
  evento.preventDefault();

  const usuarioValor = usuario.value;
  const contraseñaValor = contraseña.value;
  const transaccion = baseDatos.transaction(["usuarios"], "readonly");
  const almacen = transaccion.objectStore("usuarios");
  const solicitud = almacen.get(usuarioValor);

  solicitud.onsuccess = () => {
    const datos = solicitud.result;
    let este = document.getElementById("passwordd");


    if (datos && datos.contraseña === contraseñaValor) {
      alerta.style.opacity = 1;
      contexto.innerHTML = "<strong>✅Registro Exitoso✅</strong> <br><br> Reenviando...";
      contexto.style.fontSize = "40px";
      setTimeout(() => {
        window.location.href = "pantalla_principal.html";
      }, 2000)



    } else {
      alerta.style.opacity = 1;
      contexto.innerHTML = "<strong>Usuario o Contraseña</strong> <br>❌incorrectos❌"
      contexto.style.fontSize = "40px";

      setTimeout(() => {
        window.location.href = "login.html";

      }, 3000)
    }
  };

  solicitud.onerror = () => {
    alerta.style.opacity = 1;
      contexto.innerHTML = "<strong>❌ERROR❌</strong>"
      contexto.style.fontSize = "50px";
    window.location.href = "registro.html";
  };
}

function iniciar() {
  alerta.style.opacity = 0;
  usuario.value = "";
  contraseña.value = "";
  let solicitud = indexedDB.open("baseFAZ_2025");

  solicitud.onsuccess = function (e) {
    baseDatos = e.target.result;
    console.log("BASE DE DATOS LISTA LOGINN");
  };

  solicitud.onupgradeneeded = function (e) {
    baseDatos = e.target.result;

    // Evita error si el objectStore no existe
    if (!baseDatos.objectStoreNames.contains("usuarios")) {
      const tablaUsuarios = baseDatos.createObjectStore("usuarios", { keyPath: "usuario" });

      tablaUsuarios.createIndex("correo", "correo", { unique: true });
      tablaUsuarios.createIndex("usuario", "usuario", { unique: true });
      tablaUsuarios.createIndex("contraseña", "contraseña", { unique: false });
    }
  };
}

// INICIAR BASE DE DATOS AL CARGAR
window.addEventListener("load", iniciar);

// COMPATIBILIDAD CON INDEXEDDB
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
