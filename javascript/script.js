let joinButton = document.getElementById("joinBtn");

joinButton.onclick = function() {
    let typedName = document.getElementById("userName").value;
    let displayArea = document.getElementById("dynamicContent");

    if (typedName !== "") {
        displayArea.innerHTML = "<h3>Welcome to the Flock, " + typedName + "!</h3>";
        document.getElementById("userName").value = "";
    } else {
        alert("Please type your name before joining!");
    }
};