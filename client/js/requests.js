const addHabits = document.querySelector('.login');
const habitsList = document.querySelector('.habits')
const habits = JSON.parse(localStorage.getItem('habits')) || []; 

function addHabit(e) {
    e.preventDefault(); 
    const text = this.querySelector("[name=habit]").value;
    const measurement = +this.querySelector("[name=measurement]").value;
    const totalCount = this.querySelector("[name=frequency").value;

    const habit = {
        text: text,
        reps: 0,
        totalCounts: measurement,
        timeframe: totalCount,
        completed: false 
    }

    habits.push(habit)
    listHabits(habits, habitsList); 
    localStorage.setItem('habits', JSON.stringify(habits))
    this.reset();

    console.log(habit) 
}


function listHabits(habits = [], habitsList) {
    habitsList.innerHTML = habits.map((habit, i) => {
       
        return `
        <li>
        <input type="checkbox" data-index=${i} id="habit${i}" ${habit.completed ? "checked" : ""
    } />
        <label for="habit${i}">${habit.reps}/${habit.totalCount} ${
    habit.text}<br>
    ${habit.timeframe}</label>
            <div class="habit-btns">
      <button class="count" data-index=${i}
      id="count${i}">+</button>
      <button class="complete" data-index=${i} id="complete${i}">Mark as Complete</button>
      <button class="delete" data-index=${i} id="delete${i}">Delete</button>
      </div>
        </li>
        `;
    })
}

//Toggle if complete

function countComplete(e){ //Clicking on the checkbox
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;

    if (habits[index].reps === habits[index].totalCount) {
        habits[index].completed = true;
    } else if (habits[index].reps > habits[index].totalCount) {
        habits[index].reps = 0;
        habits[index].completed = false;
    }

    listHabits(habits, habitsList);
    localStorage.setItem("habits", JSON.stringify(habits));
    // console.log(e.target)
}
// Count function

function count(e){ //Clicking on the checkbox
    if (!e.target.matches('.count')) return;
    const el = e.target;
    const index = el.dataset.index;
    habits[index].reps += 1;

    if (habits[index].reps === habits[index].totalCount) {
        habits[index].completed = true;
        habits[index].reps += 0;
    } else if (habits[index].reps > habits[index].totalCount) {
        habits[index].reps = 0;
        habits[index].completed = false;
    }

    listHabits(habits, habitsList);
    localStorage.setItem("habits", JSON.stringify(habits));
    // console.log(e.target)
}


//Delete Habit
function deleteHabit(e) {
    if (!e.target.matches('.delete')) return;
    const el = e.target;
    const index = el.dataset.index;

    habits.splice(index, 1);

    listHabits(habits, habitsList);
    localStorage.setItem("habits", JSON.stringify(habits));
    

}

//Mark as Complete
function markComplete(e){
    if (!e.target.matches('.complete')) return;
    const el = e.target;
    const index = el.dataset.index;

    habits[index].completed = true;

    listHabits(habits, habitsList);
    localStorage.setItem("habits", JSON.stringify(habits));
    
}


//Listen out for a submit, for the function to run
addHabits.addEventListener('submit', addHabit);
habitsList.addEventListener('click', countComplete);
habitsList.addEventListener('click', deleteHabit);
habitsList.addEventListener('click', markComplete);
habitsList.addEventListener('click', count)

listHabits(habits, habitsList);



