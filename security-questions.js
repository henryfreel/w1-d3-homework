var securityQuestions = [{question:"What is your mother's name?", expectedAnswer:"lucy"},
                         {question:"What is your brother's name", expectedAnswer:"sam"},
                         {question: "What was your favorite pet's name?", expectedAnswer:"tiger"}];

function askQuestions() {

    var questionOne = prompt(securityQuestions[0].question);

    if (questionOne === securityQuestions[0].expectedAnswer) {

        var questionTwo = prompt(securityQuestions[1].question);

        if (questionTwo === securityQuestions[1].expectedAnswer) {

            var questionThree = prompt(securityQuestions[2].question);

            if (questionThree === securityQuestions[2].expectedAnswer) {
                
                alert("way to go");

            } else {

            	alert("Sorry, you are wrong");
            }

        } else {

        	alert("Sorry, you are wrong");
        }

    } else {

        alert("Sorry, you are wrong");
    }


}

askQuestions();