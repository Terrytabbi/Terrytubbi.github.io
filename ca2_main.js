"use strict";

/*

    All pages Javascript for CA2
    Name: Terry Boo
    Date of Submission: 5 Aug 2023
    
    Filename: ca2_main.js 

*/


/* ============================ For all pages ============================ */

/* Header fading out header effect */
    var headerBg = document.getElementById('bg');
    window.addEventListener('scroll', function(){
        headerBg.style.opacity = 1 - window.scrollY/500
    })




/* scroll and appear effect */
    window.addEventListener('scroll', reveal);

    function reveal(){
        // get classes from html that has reveal
        var reveals = document.querySelectorAll('.reveal');

        // keep getting element height and distance from top of the window
        for(var i = 0; i < reveals.length; i++){
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;

            //Adds .class when the condition is met
            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }else{
                reveals[i].classList.remove('active');
            }
        }
    }


/* button go back up */
    let mybutton = document.getElementById("myBtn");

    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
