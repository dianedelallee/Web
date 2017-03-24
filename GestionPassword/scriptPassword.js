/*jslint devel: true */
/*jshint sub:true*/
var pw1Shown = 0;
var pw2Shown = 0;


function checkMyPassword() {
    "use strict";
    var password = document.getElementById("passw1").value,
        verify = document.getElementById("passw2").value,
        pattern = new RegExp(document.getElementById("passw1").getAttribute('pattern'));
    
    if (password === verify) {
        
        if (pattern.test(password)) {
            document.getElementById("infoPassword").innerHTML = "Well done ! Your password are similar and safe enough";
        } else {
            document.getElementById("infoPassword").innerHTML = "Your password are similar but the password is not safe enough";
        }
        
    } else {
        document.getElementById("passw2").value = "";
        document.getElementById("infoPassword").innerHTML = "Your password are differents";
    }

    
}

function show(element) {
    "use strict";
    element.setAttribute('type', 'text');
}

function hide(element) {
    "use strict";
    element.setAttribute('type', 'password');
}


function showPassword1() {
    "use strict";
    var p = document.getElementById('passw1');
    if (pw1Shown === 0) {
        pw1Shown = 1;
        show(p);
    } else {
        pw1Shown = 0;
        hide(p);
    }
}

function showPassword2() {
    "use strict";
    var p = document.getElementById('passw2');
    if (pw2Shown === 0) {
        pw2Shown = 1;
        show(p);
    } else {
        pw2Shown = 0;
        hide(p);
    }
}




