/*jslint devel: true */
/*jshint sub:true*/
function init() {
    "use strict";
    document.getElementById("city").disabled = true;
}


function initStyle() {
    "use strict";
    document.getElementById("city").style = "";
}

function getCityFromZip() {
    "use strict";
    var zip_in = document.getElementById("zip").value,
        options = "",
        client = new XMLHttpRequest();
    if (zip_in.length === 4) {
        document.getElementById("city").value = "";
        client.open("GET", "http://api.zippopotam.us/ch/" + encodeURIComponent(zip_in), true);
        client.onreadystatechange = function () {
            if (client.readyState === 4 && client.status === 200) {
                var rep = JSON.parse(client.responseText);
                if (rep.places.length === 1) {
                    document.getElementById("city").style = "background-color:transparent;";
                    document.getElementById("city").disabled = true;
                    document.getElementById("city").value = rep.places[0]["place name"];
                    document.getElementById("default").value = rep.places[0]["place name"];
                } else {
                    rep.places.forEach(function (item) {
                        options += '<option value="' + item["place name"] + '" />';
                    });
                    
                    document.getElementById("villes").innerHTML = options;
                    document.getElementById("city").disabled = false;
                    document.getElementById("city").style = "background-color:rgba(19, 35, 47, 0.6);";
                    document.getElementById("city").focus();
                   
                }
                
            }
        };
        client.send(null);
      
    } else {
        alert("Le code postal doit avoir 4 chiffres");
    }
}




