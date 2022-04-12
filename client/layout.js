// const form = document.querySelector(".form");
// const hiddenPost = document.querySelector(".post-hide");
// const inputForm = document.querySelector(".input-form");
// const backBtn = document.querySelector(".back");

// let id;
// inputForm.addEventListener("submit", createPost);

// async function createPost(e) {
//   e.preventDefault();
//   try {
//     const options = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         title: e.target.title.value,
//         pseudonym: e.target.pseudonym.value,
//         body: e.target.body.value,
//       }),
//     };
//     const response = await fetch(`http://localhost:3000/`, options);
//     const post = await response.json();
//     id = post.id;
//     window.location.hash = `#${post.id}`; //Look up
//   } catch (err) {
//     console.log(err);
//   }
// }

// window.addEventListener("hashchange", update);
// window.addEventListener("load", update);

// async function update() {
//   //   let hash = window.location.substring(1);
//   if (id) {
//     let postData = await getPost(id);
//     console.log(postData);
//     showPost(postData);
//   } else {
//     document.querySelector(".post-title").textContent = "";
//     document.querySelector(".post-name").textContent = "";
//     document.querySelector(".post-body").textContent = "";
//     form.classList.remove("hidden");
//     hiddenPost.classList.add("hidden");
//   }
// }

// async function getPost(id) {
//   try {
//     const response = await fetch(`http://localhost:3000/${id}`);
//     const postData = await response.json();
//     return postData;
//   } catch (err) {
//     console.log(err);
//   }
// }

// function showPost(postData) {
//   console.log(typeof postData);
//   form.classList.add("hidden");
//   hiddenPost.classList.remove("hidden");
//   if (typeof postData !== "undefined") {
//     document.querySelector(".post-title").textContent = postData.title;
//     document.querySelector(".post-name").textContent = postData.pseudonym;
//     document.querySelector(".post-body").textContent = postData.body;
//   } else {
//     document.querySelector(".post-title").textContent = "Post does not exist";
//   }
// }
