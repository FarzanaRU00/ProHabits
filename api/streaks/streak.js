function streak(data){
    let res = [];

    let resSet = [...new Set(res)];
    const setObj = {}

    for (let uniqueHabit in resSet){
        setObj[resSet[uniqueHabit]] = {current_streak: 0};
    }

    for (let habit in data){
        if (data[habit].finished){
            setObj[data[habit].name].current_streak++;
        }else {
            setObj[data[habit].name].current_streak = 0;
        }
    }

    return setObj
}

module.exports = streak
