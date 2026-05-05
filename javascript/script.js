let joinButton = document.getElementById("joinBtn");

joinButton.onclick = function() {
    
    let typedName = document.getElementById("userName").value;
    
    let displayArea = document.getElementById("dynamicContent");

    if (typedName !== "") {
        
        let message = "<h3>Welcome to the Flock, " + typedName + "!</h3>";
        message += "<p>Your passion for birds of prey makes you a vital part of our community.</p>";
        
        displayArea.innerHTML = message;
        
        document.getElementById("userName").value = "";
        
    } else {
        alert("Please type your name before joining!");
    }
};