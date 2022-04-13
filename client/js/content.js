const auth = require("./auth")

function renderLoginForm(){
    const authFields = [
        { tag: 'input', attributes: {id: 'username', name: 'username', placeholder: 'Enter your username' } },
        { tag: 'input', attributes: {id: 'password', name: 'password', placeholder: 'Enter your password' } },
        { tag: 'input', attributes: {id: 'login-submit', type:'submit', name: 'login-submit', value: 'Login' } }
    ];

    const form = createForm(authFields)
    form.className = "login-form"
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        try{
            await auth.requestLogin(e);
        } catch (error) {
            const username = document.querySelector("username");
            const password = document.querySelector("password");
            username.classList.add("input-invalid");
            password.classList.add("input-invalid");
        }
    })

    main.appendChild(form); 
}

function renderRegisterForm(){
    const authFields = [
        { tag: 'input', attributes: {id: 'username', name: 'username', placeholder: 'Enter your username' } },
        { tag: 'input', attributes: {id: 'password', type: "password", name: 'password', placeholder: 'Enter your password' } },
        { tag: 'input', attributes: {id: 'password', type: "password", name: 'passwordConfirmation', placeholder: 'Confirm Password' } },
        { tag: 'input', attributes: {id: 'register-submit', type: "submit", name: "register-submit" ,value: 'Create Account' } }
    ];

    const form = createForm(authFields)
    form.className = "register-form";

    form.addEventListener('submit', async (e) => {
        e.preventDefault

        const pass = document.getElementById("password");
        const confirm = document.getElementById("passwordConfirmation");

        if (pass.value === confirm.value){
            try{
                await auth.requestRegistration(e)
            } catch (error) {
                if (error.message.includes("duplicate")){
                    const username = document.getElementById("username");
                    username.classList.add("input-invalid");
                    username.setAttribute('placeholder', `${username.value} is taken`)
                    username.value = "";
                }

            }
        } else {
            confirm.classList.add("input-invalid");
        }
    })
    main.appendChild(form); 
}


function createForm(authFields){
    const form = document.createElement('form');
    form.method = "post";
    form.className = 'submit-form'
    authFields.forEach(f => {
        let field = document.createElement(f.tag)
        field.textContent = f.text || '';
    })

    return form;
}
function renderRegisterLink(){
    const registerBtn = document.createElement('submit')
    const registerText = document.createElement('p')
    const registerElement = document.createElement('div')
    registerElement.className = "register-element"

    registerPageBtn.textContent = "Register"
    registerPageBtn.id = "register-link"

    registerElement.appendChild(registerText);
    registerElement.appendChild(registerBtn)

    main.appendChild(registerElement)
}

module.exports = {renderLoginForm, renderRegisterForm, renderRegisterLink}
// function renderLoginForm() {
//     const fields = [
//         { tag: 'input', attributes: { type: 'username', name: 'username', placeholder: 'Username' } },
//         { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
//         { tag: 'input', attributes: { type: 'submit', value: 'Login' } }
//     ]
//     const form = document.createElement('.login');
//     fields.forEach(f => {
//         let field = document.createElement(f.tag);
//         Object.entries(f.attributes).forEach(([a, v]) => {
//             field.setAttribute(a, v);
//             form.appendChild(field);
//         })
//     })
//     form.addEventListener('submit', requestLogin)
//     main.appendChild('.login');
// }

// function renderRegisterForm() {
//     const fields = [
//         { tag: 'input', attributes: { type: 'text', name: 'username', placeholder: 'Username' } },
//         { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
//         { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
//         { tag: 'input', attributes: { type: 'password', name: 'passwordConfirmation', placeholder: 'Confirm Password' } },
//         { tag: 'input', attributes: { type: 'submit', value: 'Create Account' } }
//     ]
//     const form = document.createElement('form');
//     fields.forEach(f => {
//         let field = document.createElement(f.tag);
//         Object.entries(f.attributes).forEach(([a, v]) => {
//             field.setAttribute(a, v);
//             form.appendChild(field);
//         })
//     })
//     form.addEventListener('submit', requestRegistration)
//     main.appendChild(form);
// }
