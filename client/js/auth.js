const loginData = document.querySelector('.loginForm');
loginData.addEventListener('submit', requestLogin)


async function requestLogin(e){
    e.preventDefault();
    console.log('function call')
    const formData = new FormData(loginData)
    const formDataObj = Object.fromEntries(formData)
    delete formDataObj['confirmPassword']
    delete formDataObj['email']
    console.log(formDataObj)
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDataObj)
        }
        const r = await fetch(`http://localhost:3000/auth/login`, options)
<<<<<<< HEAD
<<<<<<< HEAD:client/auth.js
        const data = await r.json()
        if (data.err){ throw Error(data.err); }
        login(data.token);
    } catch (err) {
        console.warn(`Error: ${err}`);
=======
        const data = await r.json();
    if (!data.success) {
      throw new Error("Login not authorised");
>>>>>>> c39a09cc29e7c8871ef420e9db1521c8f9dad263:client/js/auth.js
=======
        const data = await r.json()
        console.log(data)
        // if (data.err){ throw Error(data.err); }
        // login(data);
    } catch (err) {
        console.warn(`Error data cannot be sent`);
>>>>>>> 1b27eb25f50bcdd4654ae57990f91b247b8c8c55
    }
}

const regData = document.querySelector('.signupForm')
regData.addEventListener('submit', requestRegistration)

async function requestRegistration(e) {
    e.preventDefault();
    console.log('function call')
    const formData = new FormData(regData)
    const formDataObj = Object.fromEntries(formData)
    console.log(formDataObj) 
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDataObj)
        };
        const r = await fetch(`http://localhost:3000/auth/register`, options)
        const data = await r.json()
        console.log(data)
        // if (data.err){ throw Error(data.err) }
        // requestLogin(e);
    } catch (err) {
        console.warn(err);
    }
}

// function login(data){
//     localStorage.setItem('username', data.user);
//     location.hash = '#feed';
// }

function login(token) {
    const user = jwt_decode(token);
    localStorage.setItem("token", token);
    localStorage.setItem("username", user.username);
    localStorage.setItem("userID", user.userID);
    window.location.hash = "#habit";
}

function logout(){
    localStorage.clear();
    window.location.hash = '#login';
}

function currentUser(){
    const username = localStorage.getItem('username')
    return username;
}

<<<<<<< HEAD
module.exports = {currentUser, logout, login, requestRegistration, requestLogin};
=======
>>>>>>> 1b27eb25f50bcdd4654ae57990f91b247b8c8c55
