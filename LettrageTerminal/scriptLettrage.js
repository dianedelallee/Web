/*jslint devel: true */
/*jshint sub:true*/
// function([string1, string2],target id,[color1,color2])    
function consoleText(words, id, colors) {
    "use strict";
    if (colors === undefined) {
        colors = ['#fff'];
    }
    var visible = true,
        con = document.getElementById('console'),
        letterCount = 1,
        x = 1,
        waiting = false,
        target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);
    window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount);
            window.setTimeout(function () {
                var usedColor = colors.shift(),
                    usedWord = words.shift();
                colors.push(usedColor);
               
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000);
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount);
            letterCount += x;
        }
    }, 120);
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden';
            visible = false;
        } else {
            con.className = 'console-underscore';
            visible = true;
        }
    }, 400);
}



function init() {
    "use strict";
    var words = ['Enjoy the script.', 'Diane drinks Coffee.', 'Share and Like'],
        id = 'text',
        colors = ['tomato', 'white', 'lightblue'];
    consoleText(words, id, colors);
    
}

