var currentDayEL = $('#currentDay');
var inputTextEl = $('.input-text');
var middleIputField = $('#middle');
var submitEl = $('#submit');

console.log("hi")
 
// trying to save
var currentDate = moment().format('dddd MMMM Do');
$('#currentDay').text(currentDate);

function workDaySaved(event) {
    event.preventDefault();

   var input = inputTextEl.val().trim();

   workDaySaved(input);

}

// second attempt to save
function save() {
var inputText = document.getElementById('input-text').value;
localStorage.setItem('text', inputText);
}

// read data
function get() {
    var storeInput = localStorage.getItem('text');
    if(storeInput) {
        document.getElementById('input-text').value = storeInput;
    }
}






// if it passes a certain time it should change color.



