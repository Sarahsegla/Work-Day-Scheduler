// var currentDayEL = $('#currentDay');
// var inputTextEl = $('.input-text');
var nineAM = $('#9AM');

var tenAM = $('#10AM');
var elevenAM = $('#11AM');
var twelvePM = $('#12PM');
var onePM = $('#1PM');
var twoPM = $('#2PM');
var threePM = $('#3PM');
var fourPM = $('#4PM');
var fivePM = $('#5PM');
// var middleIputField = $('#middle');
//var submitEl = $('#submit');
var submitEl = document.querySelector('#submit');

console.log("hi")
 
// date
var currentDate = moment().format('dddd MMMM Do');
$('#currentDay').text(currentDate);


// // trying to save
// function workDaySaved(event) {
//     event.preventDefault();

//  //  var input = inputTextEl.val().trim();

//    workDaySaved(input);

// }

// // second attempt to save
// function save() {
// var inputText = document.getElementById('input-text').value;
// localStorage.setItem('text', inputText);
// }

// // read data
// function get() {
//     var storeInput = localStorage.getItem('text');
//     if(storeInput) {
//         document.getElementById('input-text').value = storeInput;
//     }
// }

submitEl.addEventListener("click", function(event) {
    event.preventDefault();

    // var input = { 
    //   nineam: nineAM.value.trim(),
    //   tenam: tenAM.value.trim(),
    //  elevenam: elevenAM.value.trim(),
    //   twelvepm: twelvePM.value.trim(),
    //   onepm: onePM.value.trim(),
    //   twopm: twoPM.value.trim(),
    //   threepm: threePM.value.trim(),
    //   fourpm: fourPM.value.trim(),
    //   fivepm: fivePM.value.trim(),

    // };
    var nineam = nineAM.value.trim();



    localStorage.setItem("input", JSON.stringify(nineam));

    var lastInput = JSON.stringify(localStorage.getItem("input"));
    var lastInput = localStorage.getItem("input", nineam);
});




// if it passes a certain time it should change color.

// var now = new Date();
// var hours = now.getHours();
// var ft = now.toLocaleDateString("en-US", {
//     hour: "numeric",
//     minute: "numeric",
//     hour12: true
// });

// if ( 5 <= hours && hours < 9) {
// nineAM.css('background', 'rgb(rgb(238, 232, 232)');
// var type = "9am";
// }



//document.getElementById("9am").innerHTML = 'i dunno'

// second attempt 

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

// var d = new Date().getHours();
// if (d < 8) {
//     document.write("fdfjjgbjrj");
//     document.getElementById("middle9").style.backgroundColor="green";
// } else if (d < 9) {
//     document.getElementById("middle9").style.backgroundColor="green";
// } else {
//     document.getElementById("middle9").style.backgroundColor="white";
// }

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

// var d = new Date().getHours();
// if (d < 9) {
//     document.write("fdfjjgbjrj");
//     document.getElementById("middle10").style.backgroundColor="green";
// } else if (d < 10) {
//     document.getElementById("middle10").style.backgroundColor="green";
// } else {
//     document.getElementById("middle10").style.backgroundColor="white";
// }

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

// var d = new Date().getHours();
// if (d < 8) {
//     document.write("fdfjjgbjrj");
//     document.getElementById("middle11").style.backgroundColor="green";
// } else if (d < 11) {
//     document.getElementById("middle11").style.backgroundColor="green";
// } else {
//     document.getElementById("middle11").style.backgroundColor="white";
// }
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

// var d = new Date().getHours();
// if (d < 8) {
//     document.write("fdfjjgbjrj");
//     document.getElementById("middle12").style.backgroundColor="green";
// } else if (d < 12) {
//     document.getElementById("middle12").style.backgroundColor="green";
// } else {
//     document.getElementById("middle12").style.backgroundColor="white";
// }

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

// var d = new Date().getHours();
// if (d < 8) {
//     document.write("fdfjjgbjrj");
//     document.getElementById("middle1").style.backgroundColor="green";
// } else if (d < 13) {
//     document.getElementById("middle1").style.backgroundColor="green";
// } else {
//     document.getElementById("middle1").style.backgroundColor="white";
// }

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

// var d = new Date().getHours();
// if (d < 8) {
//     document.write("fdfjjgbjrj");
//     document.getElementById("middle2").style.backgroundColor="green";
// } else if (d < 14) {
//     document.getElementById("middle2").style.backgroundColor="green";
// } else {
//     document.getElementById("middle2").style.backgroundColor="white";
// }

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

// var d = new Date().getHours();
// if (d < 8) {
//     document.write("fdfjjgbjrj");
//     document.getElementById("middle3").style.backgroundColor="green";
// } else if (d < 15) {
//     document.getElementById("middle3").style.backgroundColor="green";
// } else {
//     document.getElementById("middle3").style.backgroundColor="white";
// }

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

// var d = new Date().getHours();
// if (d < 8) {
//     document.write("fdfjjgbjrj");
//     document.getElementById("middle4").style.backgroundColor="green";
// } else if (d < 16) {
//     document.getElementById("middle4").style.backgroundColor="green";
// } else {
//     document.getElementById("middle4").style.backgroundColor="white";
// }

// 5pm

var d = new Date().getHours();
if (d < 8) {
    document.write("fdfjjgbjrj");
    document.getElementById("5PM").style.backgroundColor="green";
    document.getElementById("middle5").style.backgroundColor="green";
} else if (d < 17) {
    document.getElementById("5PM").style.backgroundColor="green";
    document.getElementById("middle5").style.backgroundColor="green";
} else {
    document.getElementById("5PM").style.backgroundColor="white";
    document.getElementById("middle5").style.backgroundColor="white";
}

// var d = new Date().getHours();
// if (d < 8) {
//     document.write("fdfjjgbjrj");
//     document.getElementById("middle5").style.backgroundColor="green";
// } else if (d < 17) {
//     document.getElementById("middle5").style.backgroundColor="green";
// } else {
//     document.getElementById("middle5").style.backgroundColor="white";
// }