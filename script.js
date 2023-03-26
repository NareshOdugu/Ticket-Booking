function validateForm() {
	// Get form elements
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var destination = document.getElementById("destination").value;
	var date = document.getElementById("date").value;

	
	if (name == "" || email == "" || destination == "" || date == "") {
		alert("Please fill out all fields");
		return false;
	}

	// Display confirmation message
	var message = "Thank you for booking a ticket to " + destination + " on " + date + ", " + name + "!";
	var confirmationMessage = document.getElementById("confirmation-message");
	confirmationMessage.innerHTML = message;
	confirmationMessage.style.display = "block";

	
	return false;
}
