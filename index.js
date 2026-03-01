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

	// Récupérons le score existant
	if (input.value === "") return;

	let scoreCount = parseInt(localStorage.getItem("score")) || 0;

	if (input.value === result) {
		scoreCount++;
	} else {
		scoreCount--;
	}

	//console.log("votre score eest " + scoreCount);

	//Sauvegardons le nouveau score ici
	localStorage.setItem("score", scoreCount);

	score.textContent = `score : ${scoreCount}`;
}

//Evenement du gestion du calcul
btn.addEventListener("click", multiplication);
