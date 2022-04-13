const form = document.querySelector(".form-inner");
const hiddenPost = document.querySelector(".post-hide");
const inputForm = document.querySelector(".habitForm");

let habit_id;
inputForm.addEventListener("submit", createHabit);

async function getAllHabits(){
    try {
        const response = await fetch('http://localhost:3000/habits');
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }

};

async function getHabitById(habit_id){
    try {
        const response = await fetch(`http://localhost:3000/habits/${habit_id}`)
        const data = await response.json();
        return data;
    } catch(err) {
        console.warn(err)
    }

}

async function createHabit(e) {
  e.preventDefault();
  try {
    const options = {  
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target.name.value,
        measurement: e.target.measurement.value,
        frequency: e.target.frequency.value
      })
    };
    console.log('function not called')
    const response = await fetch(`http://localhost:3000/habits`, options);
    const habit = await response.json();
    // id = habit.habit_id;
    window.location.hash = `#${habit.habit_id}`; //Look up
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("hashchange", update);
window.addEventListener("load", update);

async function update() {
  //   let hash = window.location.substring(1);
  if (habit_id) {
    let habitData = await getHabitById(habit_id);
    console.log(habitData);
    showPost(habitData);
  } else {
    document.querySelector(".post-name").textContent = "";
    document.querySelector(".post-measurement").textContent = "";
    document.querySelector(".post-frequency").textContent = "";
    form.classList.remove("hidden");
    hiddenPost.classList.add("hidden");
  }
}

function showhabit(habitData) {
  console.log(typeof habitData);
  form.classList.add("hidden");
  hiddenPost.classList.remove("hidden");
  if (typeof habitData !== "undefined") {
    document.querySelector(".post-name").textContent = habitData.name;
    document.querySelector(".post-measurement").textContent = habitData.measurement;
    document.querySelector(".post-frequency").textContent = habitData.frequency;
  } else {
    document.querySelector(".post-name").textContent = "Post does not exist";
  }
}



