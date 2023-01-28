var currentDayEL = $('#currentDay');


console.log("hi")

var currentDate = moment().format('dddd MMMM Do');
$('#currentDay').text(currentDate);