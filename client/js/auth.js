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
        const data = await r.json()
        console.log(data)
        // if (data.err){ throw Error(data.err); }
        // login(data);
    } catch (err) {
        console.warn(`Error data cannot be sent`);
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

function login(data){
    localStorage.setItem('username', data.user);
    location.hash = '#feed';
}

function logout(){
    localStorage.clear();
    location.hash = '#login';
}

function currentUser(){
    const username = localStorage.getItem('username')
    return username;
}
