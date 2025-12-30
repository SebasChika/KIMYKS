// VARIABLES GLOBALES
let baseDatos;

// CAMPOS DEL FORMULARIO
const correo = document.getElementById("correo");
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("password");

// ELEMENTOS DEL HTML
const registrar = document.getElementById("registroForm");

// EVENTOS
registrar.addEventListener("submit", registrarse);

function registrarse(evento) {
    evento.preventDefault();

    const correoValor = correo.value;
    const usuarioValor = usuario.value;
    const contraseñaValor = contraseña.value;

    const transaccion = baseDatos.transaction(["usuarios"], "readwrite");
    const almacen = transaccion.objectStore("usuarios");

    const agregar = almacen.add({
        correo: correoValor,
        usuario: usuarioValor,
        contraseña: contraseñaValor
    });

    agregar.onsuccess = () => {
        console.log("✅ Usuario registrado correctamente");
        window.location.href = "login.html";
    };

    agregar.onerror = () => {
        console.error("❌ Error: El usuario o correo ya existe");
    };
}

function iniciar() {
    let solicitud = indexedDB.open("baseFAZ_2025");

    solicitud.onsuccess = function (e) {
        baseDatos = e.target.result;
        console.log("BASE DE DATOS LISTA  REGISTRO");
    };

    solicitud.onupgradeneeded = function (e) {
        baseDatos = e.target.result;
        const tablaUsuarios = baseDatos.createObjectStore("usuarios", { keyPath: "usuario" });

        tablaUsuarios.createIndex("correo", "correo", { unique: true });
        tablaUsuarios.createIndex("usuario", "usuario", { unique: true });
        tablaUsuarios.createIndex("contraseña", "contraseña", { unique: false });
    };
}

// INICIAR BASE DE DATOS AL CARGAR
window.addEventListener("load", iniciar);

// COMPATIBILIDAD CON INDEXEDDB
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
