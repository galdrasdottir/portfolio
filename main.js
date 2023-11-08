
const submitButton = document.getElementById('submit-button');
const snailMail = document.getElementById('snail-mail')

function submitSequence() {
	document.getElementById('submission-form').style.display = "none";
	snailMail.innerHTML = "Thank you for your message!";
	snailMail.style.height = "4 rem";
	snailMail.style.fontSize = "20px";
	snailMail.style.padding = "1.5rem";
}

submitButton.addEventListener('click', submitSequence);

