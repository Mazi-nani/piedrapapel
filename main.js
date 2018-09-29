
const btn = document.getElementById('btn-jugar');
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tagResultado = document.getElementById('resultado')

const jugar = () => {
	event.preventDefault()


	let uno1 = uno.value;
	let dos2 = dos.value;
	let resul = ""


if (uno1 === "" || dos2 === "") {
	alert("No puedes dejar vacío un campo")
	}else{

	if (uno1 === "piedra"){
		if (dos2 === "tijera")
			resul = "GANA JUGADOR 1"
		if (dos2 === "papel")
			resul = "GANA JUGADOR DOS"
		if (dos2 === "piedra")
			resul = "EMPATE"
	}

	if (uno1 === "papel"){
		if (dos2 === "piedra")
			resul = "GANA JUGADOR 1"
		if (dos2 === "tijera")
			resul = "GANA JUGADOR DOS"
		if (dos2 === "papel")
			resul = "EMPATE"
	}

	if (uno1 === "tijera"){
		if (dos2 === "papel")
			resul = "GANA JUGADOR 1"
		if (dos2 === "piedra")
			resul = "GANA JUGADOR DOS"
		if (dos2 === "tijera")
			resul = "EMPATE"
	}
			tagResultado.innerHTML = `El resultado es ${resul}`
	}
}

btn.addEventListener('click', jugar)