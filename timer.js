/**
 * Created by Dani on 2/21/14.
 */

// Timer library 1.0
function _timer(callback)
{
    var time = 0;       //  The default time of the timer
    var status = 0;     //  Status: timer is running (1) or stopped (0)
    var timer_id;       //  This is used by clearInterval method

    // Start the timer ex. start the timer with 1 second interval timer.start(1000)
    this.start = function(interval)
    {
        interval = (typeof(interval) !== 'undefined') ? interval : 1000;

        if(status == 0 && time > 0)
        {
            status = 1;
            timer_id = setInterval(function()
            {
                time--;
                generateTime();
                if(typeof(callback) === 'function') callback(time);
            }, interval);
        }
    }

    //  Stop or pause the timer ex. timer.stop()
    this.stop =  function()
    {
        if(status == 1)
        {
            status = 0;
            clearInterval(timer_id);
        }
    }

    // Reset the timer to zero or reset it to your own custom time ex. reset to zero seconds timer.reset(0)
    this.reset =  function(sec)
    {
        sec = (typeof(sec) !== 'undefined') ? sec : 0;
        time = sec;
        generateTime();
    }

    // Add more time to the timer ex. add 5min (300s) timer.addTime(300)
    this.addTime = function(timeIncrement)
    {
        timeIncrement = (typeof(timeIncrement) !== 'undefined') ? timeIncrement : 300;
        time += timeIncrement;
        generateTime();
    }

    // Subtract time from the timer ex. add 5min (300s) timer.subtractTime(300)
    this.subtractTime = function(timeIncrement)
    {
        timeIncrement = (typeof(timeIncrement) !== 'undefined') ? timeIncrement : 300;
        time -= timeIncrement;
        if (time < 0) {
            status = 0;
            clearInterval(timer_id);
            time = 0;
        }
        generateTime();
    }

    // This method returns the current value of the timer
    this.getTime = function()
    {
        return time;
    }

    // This method returns the status of the timer running (1) or stopped (0)
    this.getStatus = function()
    {
        return status;
    }

    // This method will render the time variable to mm:ss format
    function generateTime()
    {
        var second = time % 60;
        var minute = Math.floor(time / 60) % 60;

        second = (second < 10) ? '0'+second : second;
        minute = (minute < 10) ? '0'+minute : minute;

        document.getElementById("second").innerHTML = second;
        document.getElementById("minute").innerHTML = minute;
        //$('span.timer span.second').html(second);
        //$('span.timer span.minute').html(minute);
    }
}

// example use
var timer,
    default_time = 900
    five_mins = 300,
    one_sec_countdown_interval = 1000;

function initTimer() {
    timer = new _timer
    (
        function(time)
        {
            if(time == 0)
            {
                timer.stop();
                //alert('time out');
            }
        }
    );
    timer.reset(default_time);
}



