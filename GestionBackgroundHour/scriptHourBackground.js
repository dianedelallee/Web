/*jslint devel: true */
/*jshint sub:true*/
function setBackgroundImage(hour) {
    "use strict";
    var body = document.getElementsByTagName("body")[0];
    
    if (hour >= 4 && hour <= 10) {
        body.style.backgroundImage = "url(morning.jpg)";
    } else if (hour >= 11 && hour <= 17) {
        body.style.backgroundImage = "url(day.jpg)";
    } else if (hour >= 18 && hour <= 21) {
        body.style.backgroundImage = "url(evening.jpg)";
    } else {
        body.style.backgroundImage = "url(night.jpg)";
    }
}

function setButtonChoice(unChange) {
    "use strict";
    document.getElementById("morning").checked = false;
    document.getElementById("day").checked = false;
    document.getElementById("evening").checked = false;
    document.getElementById("night").checked = false;
    document.getElementById(unChange).checked = true;
    
    
}


function clichCheckBox(hour, name) {
    "use strict";
    setBackgroundImage(hour);
    setButtonChoice(name);
    
}

function init() {
    "use strict";
    var hour = new Date().getHours();
    document.getElementById("morning").checked = false;
    document.getElementById("day").checked = false;
    document.getElementById("evening").checked = false;
    document.getElementById("night").checked = false;
    setBackgroundImage(hour);
}







