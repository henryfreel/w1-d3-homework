var userLogin= {password:'password',
                name: 'Henry'};

function getPassword() {
    return prompt("Enter your password for " + userLogin["name"]);
}

function verifyPassword() {
    var password = getPassword();
    if (password != userLogin["password"]) {
        alert("Sorry, the password deosnt't match. Please try again");
    }
}

verifyPassword();