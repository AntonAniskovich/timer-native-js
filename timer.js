window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    // Timer

    let deadline = '2018-10-21';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (t.seconds < 10 && t.seconds > 0) {
                seconds.textContent = '0' + t.seconds;
            } else if (t.seconds <= 0){
                seconds.textContent = '00';
            } else {
                seconds.textContent = t.seconds;
            }
            if (t.minutes < 10 && t.minutes > 0) {
                minutes.textContent = '0' + t.minutes;
            } else if (t.minutes <= 0){
                minutes.textContent = '00'; 
            } else {
                minutes.textContent = t.minutes;
            }
            if (t.hours < 10 && t.hours > 0) {
                hours.textContent = '0' + t.hours;
            } else if (t.hours <= 0){
                hours.textContent = '00'; 
            } else {
                hours.textContent = t.hours;
            }

            if (t.total <= 0){
                clearInterval(timeInterval);
            }

        }
        
    }

    setClock ('timer', deadline);

});