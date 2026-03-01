//Declaration et initialisation de nos variables
let score = document.getElementById("score");
let firstNumber = document.getElementById("firstNum");
let secondeNumber = document.getElementById("secondNum");
let input = document.getElementById("answerInput");
let btn = document.getElementById("submit-btn");

//Generateur de nos valeur a multiplier
let numberOne = Math.floor(Math.random() * 9 + 1);
let numberTwo = Math.floor(Math.random() * 9);

//affichons les valeurs sur la page
firstNumber.textContent = numberOne;
secondeNumber.textContent = numberTwo;

//la fonction permettant de faire la multiplication
function multiplication() {
	let result = numberOne * numberTwo;

	if (input.value == result) {
		console.log("bravo vous avez trouver la reponse");
	}
}

//Evenement du gestion du calcul
btn.addEventListener("click", multiplication);
