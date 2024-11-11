document.addEventListener('DOMContentLoaded', () => {




    //Code is linked to the registration html.
    const testbutton = document.querySelector('#registration')

    //Creates a function which saves the users detail in the local storage.
    function saveUser() {
        const name = document.querySelector("#name").value
        const username = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        const confirmpassword = document.querySelector("#confirmpassword").value
        const email = document.querySelector("#email").value
        console.log(name)
        console.log(username)
        console.log(password)
        console.log(confirmpassword)
        console.log(email)
        console.log("");
        let users = JSON.parse(localStorage.getItem('users')) || [];

        //Checks if the username exists.
        const userExists = users.some(user => user.username === username);
        //Creates a new user which enters the data
        const newUser = {
            name: name,
            username: username,
            password: password,
            confirmpassword: confirmpassword,
            email: email,
            topScore: 0
        };
        users.push(newUser);

        //Saves the updated user in the local storage.
        localStorage.setItem('users', JSON.stringify(users));
        //Checks if the username is already taken.
        if (userExists) {
            alert("Error, This username has been taken. Please try a different username.")
            return;
        }
        //Validation for username
        if (username.length <= 6) {
            alert("Error, Username not accepted. Please try again and enter a number greater than 6 characters.")
            return;
        }
        //Validation for password
        else if (password.length <= 6) {
            alert("Error, Password not accepted.Please try another password which is greater than 6 characters.")
            return;
        }
        //Checks if the password and confirm password both match.
        else if (password !== confirmpassword) {
            alert("Password and confirm password doesn't match!!")
            return;
        }

        //If not any from above it goes to the login page.
        else {
            sessionStorage.loggedInUser = undefined
            document.location.replace('Login.html');
        }




    }
    //Selects registerButton and calls the function saveUser.
    const registerButton = document.querySelector('#registerButton')
    registerButton.addEventListener('click', saveUser)

}
)
