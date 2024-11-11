//Checks if it's undefined in the sessionStorage.
if (sessionStorage.loggedInUser == 'undefined') {
    document.location.replace('Login.html');
}
console.log(sessionStorage.loggedInUser)

const logoutBtn = document.getElementById('logout');
//Button which is used to logout when the user clicks on it
logoutBtn.addEventListener('click', () => logout());

//Function which I created to logout the user.
function logout() {
    sessionStorage.loggedInUser = undefined
    document.location.replace('Index.html');
}
//Function which was created to save the users score.
function SaveScore(username, score) {
    //If it's undefined then it exists the function.
    if (username === undefined)
        return;

    const scoreTable = JSON.parse(localStorage.getItem("scoreTable")) || [];

    let userFound = false;
    //It does a for loop to check if the new user exists.
    for (let userScore of scoreTable) {
        //If the user is found it updates the score only if the new score is higher.
        if (userScore.Username === username) {
            console.log(`new score: ${score}; old score ${userScore.Score}`);
            if (userScore.Score < score) {
                userScore.Score = score;//Updating score

                //Save scores
                localStorage.scoreTable = JSON.stringify(scoreTable);
                return;
            }
            userFound = true;
        }
    }

    // Have not found user
    if (!userFound) {
        // Created a new entry object for the username and score
        const newEntry = { Username: username, Score: score };

        // Append the new entry to the score table
        scoreTable.push(newEntry);

        // Save the updated score table back to localStorage
        localStorage.setItem("scoreTable", JSON.stringify(scoreTable));
    }

}

//The score stops up to 10.
function submitAnswers() {
    let score = 0;

    for (let i = 1; i <= 10; ++i) { //Score goes up to 10 and presses answerA, B, C or D.
        const answerA = document.getElementById("Q" + i + "a");
        const answerB = document.getElementById("Q" + i + "b");
        const answerC = document.getElementById("Q" + i + "c");
        const answerD = document.getElementById("Q" + i + "d");

        if (answerA.checked && answerA.value === "true") {
            ++score;
        }
        if (answerB.checked && answerB.value === "true") {
            ++score;
        }
        if (answerC.checked && answerC.value === "true") {
            ++score;
        }
        if (answerD.checked && answerD.value === "true") {
            ++score;
        }
    }
    let scoreDisplay = document.getElementById("Score")
    scoreDisplay.innerHTML = "Score: " + (score); //Shows the final score


    SaveScore(sessionStorage.loggedInUser, score);


}

