var currentDayEL = $('#currentDay');
var inputTextEl = $('.input-text');
var nineAM = $('#9AM');
var tenAM = $('#10AM');
var elevenAM = $('#11AM');
var twelveAM = $('#12AM');
var onePM = $('#1PM');
var twoPM = $('#2PM');
var threePM = $('#3PM');
var fourPM = $('#4PM');
var fivePM = $('#5PM');
var middleIputField = $('#middle');
var submitEl = $('#submit');

console.log("hi")
 
// date
var currentDate = moment().format('dddd MMMM Do');
$('#currentDay').text(currentDate);


// trying to save
function workDaySaved(event) {
    event.preventDefault();

 //  var input = inputTextEl.val().trim();

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

submitEl.addEventListener("click", function(event) {
    event.preventDefault();

    var input = inputTextEl.value.trim();
})




// if it passes a certain time it should change color.



