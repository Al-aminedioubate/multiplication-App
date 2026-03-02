//Declaration et initialisation de nos variables
let score = document.getElementById("score");
let firstNumber = document.getElementById("firstNum");
let secondeNumber = document.getElementById("secondNum");
let input = document.getElementById("answerInput");
let btn = document.getElementById("submit-btn");

//Generateur de nos valeur a multiplier
let numberOne = Math.floor(Math.random() * 9 + 1);
let numberTwo = Math.floor(Math.random() * 9) + 1;

//affichons les valeurs sur la page
firstNumber.textContent = numberOne;
secondeNumber.textContent = numberTwo;

//Le score sauvegarder s'affichera directement dans le score lors du rafraichiment de la page
let savedScore = parseInt(localStorage.getItem("score")) || 0;
score.textContent = `score : ${savedScore}`;

//la fonction permettant de faire la multiplication
function multiplication() {
	let result = numberOne * numberTwo;
	let user = parseInt(input.value);

	// Récupérons le score existant
	if (user == "") return;

	let scoreCount = parseInt(localStorage.getItem("score")) || 0;

	if (user == result) {
		scoreCount++;
	} else {
		scoreCount = Math.max(0, scoreCount - 1);
	}

	//Sauvegardons le nouveau score ici
	localStorage.setItem("score", scoreCount);

	//affichons notre score sauvegarder
	score.textContent = `score : ${scoreCount}`;
}

//Evenement du gestion du calcul
btn.addEventListener("click", multiplication);
