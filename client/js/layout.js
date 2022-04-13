// const nav = document.querySelector('nav');
const body = document.querySelector('body');

// const publicRoutes = ['#', '#login', '#register'];
const privateRoutes = ['#feed', '#addhabit'];

window.addEventListener('hashchange', updateContent);

// function updateNav(){
//     nav.innerHTML = '';
//     let links;
//     let logoutBtn;
//     if (currentUser()){
//         links = privateRoutes.map(createNavLink);
//         logoutBtn = document.createElement('button');
//         logoutBtn.textContent = 'Logout';
//         logoutBtn.onclick = logout;
//         nav.appendChild(logoutBtn);
//     } else {
//         links = publicRoutes.map(createNavLink);
//     }
//     links.forEach(l => nav.insertBefore(l, logoutBtn))
// }

function updateMain(path) {
    body.innerHTML = '';
    if (path) {
        switch(path){
            // case '#login':
            //     renderLoginForm(); break;
            // case '#register':
            //     renderRegisterForm(); break;
            case '#feed':
                renderFeed(); break;
            case '#addhabit':
                renderProfile(); break;
            default:
                render404(); break;
        }
    } else {
        renderHomepage();
    }
}

// function createNavLink(route){
//     const link = document.createElement('a');
//     link.textContent = route === '#' ? 'Home' : `${route[1].toUpperCase()}${route.substring(2)}`;
//     link.href = route;
//     return link;
// }

function updateContent(){
    const path = window.location.hash;
    console.log(path)
    if (privateRoutes.includes(path) && !currentUser()){
        console.log('if called')
        window.location = 'index.html';
    } else {
        // updateNav();
        console.log('else called')
        updateMain(path);
    }
}

// updateContent();

