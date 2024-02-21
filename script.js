document.addEventListener("DOMContentLoaded", function () {
    const ele = document.getElementById("container");
    const comp = document.getElementById("completedcontainer");
    const data = document.getElementById("data");

    let tasklist = { 'pending': ['breakfast', 'lunch'], 'completed': ['gym'] };

    function viewTask() {
        let res = "";
        for (let i = 0; i < tasklist.pending.length; i++) {
            res += "<li>" + tasklist.pending[i] + "<button onclick='completedTask(" + i + ")'>completed</button></li>";
        }
        ele.innerHTML = res;
    }

    function viewCompleteTask() {
        let res = "";
        for (let i = 0; i < tasklist.completed.length; i++) {
            res += "<li>" + tasklist.completed[i] + "</li>";
        }
        comp.innerHTML = res;
    }

    function completedTask(index) {
        tasklist.completed.push(tasklist.pending[index]);
        tasklist.pending.splice(index, 1);
        viewTask();
        viewCompleteTask();
    }

    function addTask() {
        const newTask = data.value.trim();
        if (newTask !== "") {
            tasklist.pending.push(newTask);
            data.value = "";
            viewTask();
        }
    }

    viewTask();
    viewCompleteTask();
});
