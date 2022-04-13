function renderLoginForm() {
    const fields = [
        { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Login' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', requestLogin)
    main.appendChild(form);
}

function renderRegisterForm(){
    const authFields = [
        { tag: 'input', attributes: {id: 'username', name: 'username', placeholder: 'Username' } },
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

async function renderFeed() {
    const body = document.querySelector('body');
    body.innerHTML = `<div class="wrapper">
    <h1 id="title">ProHabits</h1>
    <div class="title-text">
        <div class="title water">Choose your habit <Form></Form></div>
        
    </div>
    <div class="form-container">
           
            <div class="form-inner">
                <form class="login">
            
                            Habit: <select name="subject" id="subject">
                                <option value="" selected="selected">Select a new habit</option>
                                <option value="water" selected="selected">Water</option>
                                <option value="exercise" selected="selected">Exercise</option>
                                <option value="sleep" selected="selected">Sleep</option>
                              </select>
                              <br>
                    <div class="field">
                        <div class="dropdown">
                            <span>Measurement</span>
                            <div class="dropdown-content">
                            <p>What measurement does your habit take?</p>
                            </div>
                          </div>
                        <input type="text" placeholder="E.g. (water) ml L, (sleep) hours" required>
                    </div>
                    <br>
                    <div class="field">
                        <div class="dropdown">
                            <span>Frequency</span>
                            <div class="dropdown-content">
                            <p>How long would you like to track for?</p>
                            </div>
                          </div>
                        <input type="number" placeholder="E.g. 1, 28" required>
                        
                    </div>
                    <div></div>
                    <br>
                    <div class="field">
                        <input type="submit" value="Save habit">
                    </div>
            </form>
            <div class="habits">
                <ul class="habit-list">
                    <li>Loading...</li>
                </ul>
            </div>
        </div>
    
   <div class="nav-body">
<ul class="menus">
    <div class="slider"></div>
    <li><a href="form.html"><i class="fas fa-plus"></i><span>Add</span></a></li>
    <li><a href="viewAll.html"><i class="fas fa-home"></i><span>Home</span></a></li>
    <li><a href="#"><i class="fas fa-cog"></i><span>Profile</span></a></li>
    <li><a href="index.html"><i class="fa-solid fa-arrow-right-from-bracket"></i><span>Log out</span></a></li>
</ul>  
</div>
</div> 
</div>`
    // const feed = document.createElement('section');
    // feed.id = 'feed';
    // const posts = await getAllPosts();
    // const renderPost = postData => {
    //     const post = document.createElement('div');
    //     post.className = 'post';
    //     const user = document.createElement('h3');
    //     const body = document.createElement('p');
    //     user.textContent = postData.username;
    //     body.textContent = postData.body;
    //     post.appendChild(user);
    //     post.appendChild(body);
    //     feed.appendChild(post);
    // }
    // posts.forEach(renderPost);
    // main.appendChild(feed);
}

function renderProfile() {
    const profile = document.createElement('section');
    const greeting = document.createElement('h3');
    greeting.textContent = `Hi there, ${localStorage.getItem('username')}!`
    profile.appendChild(greeting);
    main.appendChild(profile);
}

function render404() {
    const error = document.createElement('h2');
    error.textContent = "Oops, we can't find that page sorry!";
    main.appendChild(error);
}
