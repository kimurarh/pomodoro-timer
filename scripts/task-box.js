$(function() {

    function addNewTask() {
        var taskInput = document.getElementById("new-task");
        var taskBox = document.getElementById("task-box");

        if (taskInput.value != "") {
            taskBox.innerHTML += "<div class='task'>" + taskInput.value + "<div class='close-icon'></div></div>"
        }
        taskInput.value = "";

        function checkTask() {
            $(".close-icon").click(function() {
                $(this).parent().remove();
            });

            $(".task").click(function() {
                $(this).toggleClass("done");
            })
        }

        checkTask();
    }

    var counting = false;

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        $(".container").removeClass("done");
        $(".color-change").css("color", "white");
        counting = true;
        
        var updateTime = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            $(".main-buttons").click(() => clearInterval(updateTime));

            if (--timer < 0) {
                counting = false;
                $(".container").addClass("done");
                $(".color-change").css("color", "var(--button-color)");
                clearInterval(updateTime);
            }
        }, 1000);
    }

    function loadConfig(type) {
        var duration;
        display = document.querySelector("#timer");
        
        switch(type) {
            case 0:
                duration = 5 * 60;  // Time in seconds
                break;
            case 1:
                duration = 25 * 60; // Time in seconds
                break;
            case 2:
                duration = 20 * 60; // Time in seconds
                break;
            default:
        }

        startTimer(duration, display);
    }

    // Main buttons (Short Break | Focus Time | Long Break)
    $("#short-break-bt").click(() => loadConfig(0));
    $("#focus-time-bt").click(() => loadConfig(1));
    $("#long-break-bt").click(() => loadConfig(2));

    // To-Do List button
    $("#new-task-button").click(() => addNewTask());

    // Pause button
    $("#pause-button").click(() => {
        if(counting) {
            alert("Paused");
        }
    });
})