function iniciar() {
  let contador = document.getElementById("contador");
  let i = 0;

  let intervalo = setInterval(() => {
    contador.innerHTML = i + "%";
    i++;
    
    if (i > 100) {
      clearInterval(intervalo);

      setTimeout(() => {
        window.location.href ="registro.html";
      }, 20); 
    }
  }, 50);
}

window.addEventListener("load", iniciar, false);
