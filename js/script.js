var currentDayEL = $('#currentDay');


function displayTime() {
    var now = moment().format('dddd');
    currentDayEL.text(now);

}

console.log("hi")

var currentDate = moment().format('dddd MMMM Do');
$('#currentDay').text(currentDate);