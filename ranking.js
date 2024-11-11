document.addEventListener("DOMContentLoaded",
    //Creates a function which gets an element inside the table
    function () {
        const tableBody = document.getElementById("scoreTable").getElementsByTagName("tbody")[0];

        const scoreTable = JSON.parse(localStorage.getItem("scoreTable")) || [];

        //It checks using an if and else statement if the scoretable array is empty or not.
        if (scoreTable.length === 0) {
            const emptyRow = tableBody.insertRow(0);
            const emptyCell = emptyRow.insertCell(0);
            emptyCell.colSpan = 2;
            emptyCell.textContent = "No scores available.";
        } else {

            scoreTable.forEach(entry => {
                const newRow = tableBody.insertRow(1);

                const usernameCell = newRow.insertCell(0);
                const scoreCell = newRow.insertCell(1);

                usernameCell.textContent = entry.Username;
                scoreCell.textContent = entry.Score;
            });
        }
    });