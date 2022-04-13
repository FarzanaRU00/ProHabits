async function requestLogin(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const r = await fetch(`http://localhost:3000/auth/login`, options)
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
    }
    login(data.token);
  } catch (err) {
    console.warn(err);
  }

}

async function requestRegistration(e) {
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const r = await fetch(`http://localhost:3000/auth/register`, options)
        const data = await r.json()
        if (data.err){ throw Error(data.err) }
        requestLogin(e);
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

module.exports = {currentUser, logout, login, requestRegistration, requestLogin};