document.addEventListener('DOMContentLoaded', () => {

    //Code is linked to the login html.
    const testbutton = document.querySelector('#login')
    //Created a function called loginUser which has the values of username and password. 
    function loginUser() {
        const username = document.querySelector("#Username").value
        const password = document.querySelector("#Password").value
        console.log(username)
        console.log(password)

        let users = JSON.parse(localStorage.getItem('users')) || [];
        //The data is in the localStorage and if their is no data it gives nothing. 
        console.log(users);

        const user = users.find(x => x.username == username)
        //Checks if the username matches and if it doesn't it does an if and else statement.

        if (user) {
            if (password == user.password) {
                alert("Login successful")
                sessionStorage.loggedInUser = username;

            }
            else {
                alert("Unable to login, please try again.")
            }


        } else {
            alert("Not a Username, User doesn't exists.")
        }

    }
    //Selects loginButton and calls the function loginUser.
    const loginbutton = document.querySelector('#loginButton')
    loginbutton.addEventListener('click', loginUser)





})