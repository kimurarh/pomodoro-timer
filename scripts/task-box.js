function addNewTask() {
    var taskInput = document.getElementById("new-task");
    var taskBox = document.getElementById("task-box");

    if (taskInput.value != "") {
        taskBox.innerHTML += "<div class='task'>fsadfas<div class='close-icon'></div></div>"
        
        //"<div class='task'>" + taskInput.value + "<div class='close-icon'></div></div>"
    }
    taskInput.value = "";

    function checkStatus() {
        $(".close-icon").click(function() {
            $(this).parent().remove();
        });

        $(".task").click(function() {
            $(this).toggleClass("done");
        })
    }

    checkStatus();
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function stopTimer() {

}

function loadConfig(duration) {
    var timeSeconds = duration * 60;
    display = document.querySelector("#timer");
    startTimer(timeSeconds, display);
}