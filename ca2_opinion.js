"use strict";

/*

    Calendar & scroll play Javascript for CA2
    Name: Terry Boo
    Date of Submission: 5 Aug 2023
    
    Filename: ca2_opinion.js

*/


/* ============================ For My Opinion page ============================ */

/* Scroll play video */
function registerVideo(bound, video) {
    
    // Get the elements corresponding to the provided selectors.
    bound = document.querySelector(bound);
    video = document.querySelector(video);
  
    function scrollVideo() {
      // Check if the video has a valid duration (to avoid errors when the video is not loaded yet).
      if (video.duration) {
        // Calculate the percentage of the video that is currently scrolled into view.
        const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
        const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
        const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
  
        // Set the video's current time to the percentage of the video that is currently scrolled into view.
        video.currentTime = video.duration * percentScrolled;
      }
  
      // Request that the scrollVideo function be called again the next time the browser repaints.
      requestAnimationFrame(scrollVideo);
    }
  
    // Call the scrollVideo function once to initialize the scrolling.
    requestAnimationFrame(scrollVideo);
  }
  
  // Call the registerVideo function with the specified elements.
  registerVideo("#bound", "#bound video");
  






/* Events for my calendar 
source: https://www.un.org/sustainabledevelopment/sdg-planning-calendar/
*/

var Jan = ["", "", "", "", "", "", "", "", "", "", // 1-10
               "", "", "", "", "", "", "", "", "", "", // 11-20
               "", "", "", "", "<br>Launch of the 2023 World Economic Situation and Prospects Report", "", "", "", "", "", ""]; // 21-31

var Feb = ["", "", "", "", "", "<br>UN Commission for Social Development", "", "", "", "<br>World Pulses Day", // 1-10
               "<br>International Day of Women and Girls in Science", "", "", "", "", "", "", "<br>AU Summit", "", "", // 11-20
               "", "", "", "", "", "", "", "<br>UN Statistical Commission", ""]; // 21-29

var Mar = ["", "", "<br>Africa Environment Day and Wangari Maathai Day<br>World Wildlife Day", "", "<br>LDC5 Conference", "<br>UN Commission on the Status of Women6", "", "<br>International Women's Day", "", "", // 1-10
               "", "", "", "", "", "", "", "", "", "<br>IPCC Synthesis Report", // 11-20
               "<br>International Day of Forests", "<br>World Water Day<br>UN 2023 Water Conference", "<br>World Meteorological Day", "", "<br>Earth Hour", "", "", "", "", "", ""]; // 21-31

var Apr = ["", "", "", "", "", "<br>International Day of Sport for Development & Peace", "<br>World Health Day", "", "", "<br>UN Commission on Population and Development", // 1-10
               "", "", "", "", "", "", "<br>Financing for Development Forum 2023", "", "", "", // 11-20
               "", "", "<br>Earth Day", "", "<br>World Malaria Day", "<br>UN Permanent Forum on Indigenous Issues", "", "<br>International Girls in ICT Day", "<br>World Day for Safety and Health at Work", ""]; // 21-30

var May = ["", "", "", "", "", "", "", "<br>World Migratory Bird Day", "", "", // 1-10
               "", "", "", "", "", "", "", "<br>Midterm Review of Sendai Framework for Disaster Risk Reduction", "", "", // 11-20
               "", "<br>International Day for Biological Diversity", "", "", "", "", "", "", "", "", ""]; // 21-31

var Jun = ["", "", "", "", "<br>World Environment Day", "", "", "<br>World Oceans Day", "", "", // 1-10
               "", "", "", "", "", "", "<br>World Day to Combat Desertification and Drought", "<br>Sustainable Gastronomy Day", "", "", // 11-20
               "", "", "<br>UN Public Service Day", "", "", "", "", "", "", ""]; // 21-30

var Jul = ["", "", "", "", "", "", "<br>High-level Political Forum on Sustainable Development", "", "", "",// 1-10
               "<br>World Population Day", "", "", "", "<br>World Youth Skills Day", "", "", "", "", "", // 11-20
               "", "", "", "<br>UN Food Systems Stocktaking Moment", "", "", "", "", "", "", ""]; // 21-31

var Aug = ["", "", "", "", "", "", "", "", "<br>International Day of Indigenous Peoples", "", // 1-10
               "", "<br>International Youth Day", "", "", "", "", "", "", "<br>World Humanitarian Day", "", // 11-20
               "", "", "", "", "", "", "", "", "", "", ""]; // 21-31

var Sep = ["", "", "", "", "", "", "", "", "", "", // 1-10
               "", "<br>78th session of the UN General Assembly", "", "", "", "", "", "<br>Ministerial Meeting for the Summit of the Future<br>Climate Ambition Summit", "<br>High-Level Week of the UN General Assembly", "<br>2023 SDG Summit", // 11-20
               "<br>High-Level Meeting on Universal Health Coverage", "", "", "", "", "", "", "", "", ""]; // 21-30

var Oct = ["", "", "", "", "", "", "", "<br>Internet Governance Forum", "", "", // 1-10
               "<br>International Day of the Girl Child", "", "", "", "<br>International Day of Rural Women", "<br>World Food Day", "<br>International Day for the Eradication of Poverty", "", "", "", // 11-20
               "", "", "", "<br>UN Day", "", "", "", "", "", "", "<br>World Cities Day"]; // 21-31

var Nov = ["", "", "", "", "", "<br>COP28", "", "", "", "", // 1-10
               "", "", "", "", "", "", "a", "", "", "<br>Africa Industrialization Day", // 11-20
               "", "", "", "", "<br>International Day for the Elimination of Violence Against Women", "", "", "", "", ""]; // 21-30

var Dec = ["<br>World AIDS Day", "", "<br>International Day of Persons with Disabilities", "", "", "", "", "", "", "<br>Human Rights Day", // 1-10
               "", "<br>International Universal Health Coverage Day", "", "", "", "", "", "<br>Intl Migrants Day (IOM)", "", "", // 11-20
               "", "", "", "", "", "", "", "", "", "", ""]; // 21-31

var monthEvent = [
   Jan,
   Feb,
   Mar,
   Apr,
   May,
   Jun,
   Jul,
   Aug,
   Sep,
   Oct,
   Nov,
   Dec
];












/* CODEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */
/* Set the date displayed in the calendar */
var thisDay = new Date();

/* Write the calendar to the element with the id "calendar" */
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

/* Function to generate the calendar table */
function createCalendar(calDate) {
    var calendarHTML = "<table id='calendar_table'>";
    calendarHTML += calCaption(calDate);
    calendarHTML += calWeekdayRow();
    calendarHTML += calDays(calDate);
    calendarHTML += "</table>";
    return calendarHTML;
}

/* Function to write the calendar caption */
function calCaption(calDate) {
    // monthName array contains the list of month names
    var monthName = ["January", "February", "March", "April", "May", "June", "July", 
                     "August", "September", "October", "November", "December"];
    // Determine the current month
    var thisMonth = calDate.getMonth();
    // Write the caption
    return "<caption>" + monthName[thisMonth] + "</caption>";
}

/* Function to write a table row of weekday abbreviations */
function calWeekdayRow() {
    // Array of weekday abbreviations
    var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var rowHTML = "<tr>";
    // Loop through the dayName array
    for (var i = 0; i < dayName.length; i++)
        rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
        rowHTML += "</tr>";
    return rowHTML;
}

/* Function to calculate the number of days in the month */
function daysInMonth(calDate) {
    // Array of days in each month
    var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Extract the four digit year and month value
    var thisYear = calDate.getFullYear();
    var thisMonth = calDate.getMonth();
    // Revise the days in February for leap years
    if (thisYear % 4 === 0)
        if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
            dayCount[1] = 29;
        }
    // Return the number of days for the current month
    return dayCount[thisMonth];
}

/* Function to write table rows for each day of the month */
function calDays(calDate) {
    // Determine the starting day of the month
    var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
    var weekDay = day.getDay();

    var htmlCode = "<tr>";
    for (var i = 0; i < weekDay; i++) {
       htmlCode += "<td></td>";
    }
    // change dayEvent array according to month
    var thisMonth = calDate.getMonth();
    var dayEvent = monthEvent[thisMonth];
    // Write cells for each day of the month
    var totalDays = daysInMonth(calDate);
    var highlightDay = calDate.getDate();
    for (var i = 1; i <= totalDays; i++) {
        day.setDate(i);
        weekDay = day.getDay();
        if (weekDay === 0) 
            htmlCode += "<tr>";
        if (i === highlightDay)
            htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i-1] + "</td>";
        else
            htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i-1] + "</td>";
        if (weekDay === 6) 
            htmlCode += "</tr>";
    }
    return htmlCode;
}

/* Get current month */
var x = thisDay.getMonth();

function previousMonth() {
    var lastmonth;
    if (x == 0) {
        lastmonth = new Date(thisDay.getFullYear(), 11, thisDay.getDate());
        x = 11;
    }
    else {
        lastmonth = new Date(thisDay.getFullYear(), --x, thisDay.getDate());
    }

    document.getElementById("calendar").innerHTML = createCalendar(lastmonth);
}

function nextMonth() {
    var lastmonth;
    if (x == 11) {
        lastmonth = new Date(thisDay.getFullYear(), 0, thisDay.getDate());
        x = 0;
    }
    else {
        lastmonth = new Date(thisDay.getFullYear(), ++x, thisDay.getDate());
    }

    document.getElementById("calendar").innerHTML = createCalendar(lastmonth);
}