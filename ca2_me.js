"use strict";

/*

    Game Javascript for CA2
    Name: Terry Boo
    Date of Submission: 5 Aug 2023
    
    Filename: ca2_me.js

*/



/* ============================ For About Me page ============================ */
/* MINI GAMEEEE */
var character = document.getElementById('character');
var block = document.getElementById('block');

    window.addEventListener('keypress', function jump() {

        if(character.classList != ('animate')){
            character.classList.add('animate');
        }else{
            setTimeout(function(){
                character.classList.remove('animate');
            }, 250)
        }

        block.classList.add('animate2')
    });


var checkDead = setInterval(function(){
    // return the top position px number = calculating the top position
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

    // return the left position px number = calculating the left position
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    // 20 is left side of block, 0 is directly under character, 130 means havent jump over block
    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("Oh no! You got hit :<");
    }
}, 10);

function resetGame(){
    // Reactivate the block
    block.style.animation = "";
    block.style.display = "";
}
var button = document.getElementById("resetButton");
button.onclick = function() {
    resetGame();
};