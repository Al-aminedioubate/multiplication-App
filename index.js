//Declaration et initialisation de nos variables
let score = document.getElementById("score");
let firstNumber = document.getElementById("firstNum");
let secondeNumber = document.getElementById("secondNum");
let input = document.getElementById("answerInput");
let btn = document.getElementById("submit-btn");

//la fonction permettant de faire la multiplication
function multiplication() {
	let numberOne = Math.floor(Math.random() * 9 + 1);
	let numberTwo = Math.floor(Math.random() * 9);

	let result = numberOne * numberTwo;

	//affichons les valeurs sur la page
	firstNumber.textContent = numberOne;
	secondeNumber.textContent = numberTwo;

	console.log(numberOne);
	console.log(numberTwo);
	console.log("le resultat du calcul est : " + result);
}

multiplication();


