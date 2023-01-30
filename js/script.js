var currentDayEL = $('#currentDay');
var inputTextEl = $('.input-text');
var middleIputField = $('#middle');

console.log("hi")

var currentDate = moment().format('dddd MMMM Do');
$('#currentDay').text(currentDate);

function workDaySaved(event) {
    event.preventDefault();

   var input = inputTextEl.val().trim();

   workDaySaved(input);

}
// if it passes a certain time it should change color.



