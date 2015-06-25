

function getEmail() {
    return prompt("Please enter your email");
}

function validateEmail() {
    var userEmail = getEmail();
    var test = userEmail.match(/@/gi);

    if (!test) {
        alert("sorry");
    }

}

validateEmail();