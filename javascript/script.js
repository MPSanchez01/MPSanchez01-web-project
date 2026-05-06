let joinButton = document.getElementById("joinBtn");

joinButton.onclick = function() {

    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let email = document.getElementById("userEmail").value;
    let displayArea = document.getElementById("dynamicContent");

    // Check that all fields have text
    if (fName !== "" && lName !== "" && email !== "") {

        displayArea.innerHTML = "<h3>Success! Welcome to the Flock, " + fName + " " + lName + "!</h3>" +
                                "<p>A confirmation has been sent to: " + email + "</p>";
        
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("userEmail").value = "";
    } else {
        alert("Please fill out all fields (First Name, Last Name, and Email) to join!");
    }
};