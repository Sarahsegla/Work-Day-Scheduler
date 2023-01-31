
var nineAM = $('#9AM');

var tenAM = $('#10AM');
var elevenAM = $('#11AM');
var twelvePM = $('#12PM');
var onePM = $('#1PM');
var twoPM = $('#2PM');
var threePM = $('#3PM');
var fourPM = $('#4PM');
var fivePM = $('#5PM');

var submitEl = document.querySelector('#submit');

console.log("hi")
 
// date
var currentDate = moment().format('dddd MMMM Do');
$('#currentDay').text(currentDate);


// save attempt 
// save local storage 
document.getElementById("9AM").value = getSavedValue("9AM")

function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue (v) {
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v)
}

//10am
document.getElementById("10AM").value = getSavedValue("10AM")

function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue (v) {
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v)
}
//11am

document.getElementById("11AM").value = getSavedValue("11AM")

function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue (v) {
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v)
}
//12pm

document.getElementById("12PM").value = getSavedValue("12PM")

function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue (v) {
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v)
}
//1pm

document.getElementById("1PM").value = getSavedValue("1PM")

function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue (v) {
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v)
}

//2pm
document.getElementById("2PM").value = getSavedValue("2PM")

function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue (v) {
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v)
}
//3pm

document.getElementById("3PM").value = getSavedValue("2PM")

function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue (v) {
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v)
}
//4pm

document.getElementById("4PM").value = getSavedValue("4PM")

function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue (v) {
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v)
}
//5pm
document.getElementById("5PM").value = getSavedValue("5PM")

function saveValue(e) {
    var id = e.id;
    var val = e.value;
    localStorage.setItem(id, val);
}

function getSavedValue (v) {
    if (!localStorage.getItem(v)) {
        return "";
    }
    return localStorage.getItem(v)
}
// if it passes a certain time it should change color.

// 9am
var d = new Date().getHours();
if (d < 8) {
    document.getElementById("9AM").style.backgroundColor="green";
    document.getElementById("middle9").style.backgroundColor="green";
} else if (d < 9) {
    document.getElementById("9AM").style.backgroundColor="green";
    document.getElementById("middle9").style.backgroundColor="green";
} else {
    document.getElementById("9AM").style.backgroundColor="white";
    document.getElementById("middle9").style.backgroundColor="white";
}

//10am
var d = new Date().getHours();
if (d < 9) {
    document.write("fdfjjgbjrj");
    document.getElementById("10AM").style.backgroundColor="white";
    document.getElementById("middle10").style.backgroundColor="green";
} else if (d < 10) {
    document.getElementById("10AM").style.backgroundColor="green";
    document.getElementById("middle10").style.backgroundColor="green";
} else {
    document.getElementById("10AM").style.backgroundColor="white";
    document.getElementById("middle10").style.backgroundColor="white";
}

//11am

var d = new Date().getHours();
if (d < 8) {
    document.write("fdfjjgbjrj");
    document.getElementById("11AM").style.backgroundColor="green";
    document.getElementById("middle11").style.backgroundColor="green";
} else if (d < 11) {
    document.getElementById("11AM").style.backgroundColor="green";
    document.getElementById("middle11").style.backgroundColor="green";
} else {
    document.getElementById("11AM").style.backgroundColor="white";
    document.getElementById("middle11").style.backgroundColor="white";
}

 //12pm
var d = new Date().getHours();
if (d < 8) {
    document.write("fdfjjgbjrj");
    document.getElementById("12PM").style.backgroundColor="green";
    document.getElementById("middle12").style.backgroundColor="green";
} else if (d < 12) {
    document.getElementById("12PM").style.backgroundColor="green";
    document.getElementById("middle12").style.backgroundColor="green";
} else {
    document.getElementById("12PM").style.backgroundColor="white";
    document.getElementById("middle12").style.backgroundColor="white";
}

//1pm

var d = new Date().getHours();
if (d < 8) {
    document.write("fdfjjgbjrj");
    document.getElementById("1PM").style.backgroundColor="green";
    document.getElementById("middle1").style.backgroundColor="green";
} else if (d < 13) {
    document.getElementById("1PM").style.backgroundColor="green";
    document.getElementById("middle1").style.backgroundColor="green";
} else {
    document.getElementById("1PM").style.backgroundColor="white";
    document.getElementById("middle1").style.backgroundColor="white";
}


//2pm

var d = new Date().getHours();
if (d < 8) {
    document.write("fdfjjgbjrj");
    document.getElementById("2PM").style.backgroundColor="green";
    document.getElementById("middle2").style.backgroundColor="green";
} else if (d < 14) {
    document.getElementById("2PM").style.backgroundColor="green";
    document.getElementById("middle2").style.backgroundColor="green";
} else {
    document.getElementById("2PM").style.backgroundColor="white";
    document.getElementById("middle2").style.backgroundColor="white";
}



//3pm

var d = new Date().getHours();
if (d < 8) {
    document.write("fdfjjgbjrj");
    document.getElementById("3PM").style.backgroundColor="green";
    document.getElementById("middle3").style.backgroundColor="green";
} else if (d < 15) {
    document.getElementById("3PM").style.backgroundColor="green";
    document.getElementById("middle3").style.backgroundColor="green";
} else {
    document.getElementById("3PM").style.backgroundColor="white";
    document.getElementById("middle3").style.backgroundColor="white";
}



//4pm

var d = new Date().getHours();
if (d < 8) {
    document.write("fdfjjgbjrj");
    document.getElementById("4PM").style.backgroundColor="green";
    document.getElementById("middle4").style.backgroundColor="green";
} else if (d < 16) {
    document.getElementById("4PM").style.backgroundColor="green";
    document.getElementById("middle4").style.backgroundColor="green";
} else {
    document.getElementById("4PM").style.backgroundColor="white";
    document.getElementById("middle4").style.backgroundColor="white";
}



// 5pm

var d = new Date().getHours();
if (d < 8) {
    document.write("fdfjjgbjrj");
    document.getElementById("5PM").style.backgroundColor="green";
    document.getElementById("middle5").style.backgroundColor="green";
} else if (d < 17) {
    document.getElementById("5PM").style.backgroundColor ="green";
    document.getElementById("middle5").style.backgroundColor="green";
} else {
    document.getElementById("5PM").style.backgroundColor="white";
    document.getElementById("middle5").style.backgroundColor="white";
}

