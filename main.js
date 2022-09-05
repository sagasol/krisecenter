
var VoldsSpiral = {
    "Starter": {
        "title": "Forholdet Starter",
        "description": "Forhold starter han lærer dig <br> at kende, dine svagheder <br> og  din styrke. "
    },
    "Forelskelse": {
        "title": "Forelskelse",
        "description": "Lorem ipsum B dolor sin amet."
    },
    "Idealiseret": {
        "title": "Du bliver idealiseret",
        "description": "Lorem ipsum B dolor sin amet."
    },
    "PsykiskVold": {
        "title": "Psykisk vold starter i det små",
        "description": "Lorem ipsum B dolor sin amet."
    },
    "Voldstyper": {
        "title": "Andre voldstyper (Økonomisk, sexuel, fysisk osv.)",
        "description": "Lorem ipsum B dolor sin amet."
    },
    "Fortrængning": {
        "title": "Fortrængning af volden",
        "description": "Lorem ipsum B dolor sin amet."
    },
    "Normaliseret": {
        "title": "Volden bliver normaliseret",
        "description": "Lorem ipsum B dolor sin amet."
    },
    "SkamogSkyld": {
        "title": "Skam og Skyldfølelser over hvad der sker opstår",
        "description": "Lorem ipsum B dolor sin amet."
    },
    "Ansvarlig": {
        "title": "Du bliver gjort ansvarlig for hvad der foregår",
        "description": "Lorem ipsum B dolor sin amet."
    },
    "SelvtillidogSelvværd": {
        "title": "Du mister selvtillid og selvværd",
        "description": "Lorem ipsum B dolor sin amet."
    },
    "Isoleret": {
        "title": "Du bliver isoleret",
        "description": "Lorem ipsum B dolor sin amet."
    },
    "Netværk": {
        "title": "Du mister dit nerværk",
        "description": "Lorem ipsum B dolor sin amet."
    }

};

var areas         = document.getElementsByTagName('area'),
    popup        = document.getElementById('Popup'),
    popupContent = document.getElementById('PopupContent'),
    popupClose   = document.getElementById('PopupCloseButton');

// On click of an area, open popup
for(var i=0, l=areas.length; i<l; i++) {
  areas[i].addEventListener('click', openPopup, false);
}

// On click of close button, close popup
popupClose.addEventListener('click', closePopup, false);

function openPopup() {
  var content = VoldsSpiral[this.id];
  PopupContent.innerHTML = '<h4>' + content.title + '</h4>'
                          + '<p>' + content.description + '</p>';
  popup.className = 'shown';
}

function closePopup() {
    popup.className = '';
}


function openTab(evt, Tab) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" selected", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Tab).style.display = "block";
    evt.currentTarget.className += " selected";
  }