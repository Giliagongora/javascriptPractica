let numeroJuegos;

numeroJuegos = prompt("¿Cuántas veces quieres jugar contra la computadora?");

numeroJuegos = parseInt(numeroJuegos);

let juegosEjecutados = 0;

while (juegosEjecutados < numeroJuegos) {
  jugar();
  juegosEjecutados++;
}

function jugar() {
  let opcionUsuario;
  let opcionComputadora;
  let resultado;


  opcionUsuario = prompt("Elige una opción: piedra, papel o tijera");
  let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
  switch (numeroAleatorio) {
    case 1:
      opcionComputadora = "piedra";
      break;
    case 2:
      opcionComputadora = "papel";
      break;
    case 3:
      opcionComputadora = "tijera";
      break;
  }

  if (opcionUsuario === opcionComputadora) {
    resultado = "Empate";
  } else if (
    (opcionUsuario === "piedra" && opcionComputadora === "tijera") ||
    (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
    (opcionUsuario === "tijera" && opcionComputadora === "papel")
  ) {
    resultado = "Ganaste";
  } else {
    resultado = "Perdiste";
  }

  alert("Tu opción fue: " + opcionUsuario);
  alert("La opción de la computadora fue: " + opcionComputadora);
  alert("El resultado fue: " + resultado);
}