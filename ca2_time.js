"use strict";

/*

    Time Javascript for CA2
    Name: Terry Boo
    Date of Submission: 5 Aug 2023
    
    Filename: ca2_time.js 

*/


/* Current time and date */
    runClock();
    setInterval("runClock()", 1000)

    // Function to create and run the countdown clock
    function runClock(){
    // Store the current date and time
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    // Display the current date and time
    document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;
    }

