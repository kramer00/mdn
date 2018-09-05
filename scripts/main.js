var myHeading = document.querySelector('h1');
myHeading.textContent = "Hello World!";

var d = new Date();
var today = d.getDate();

function date() {
    alert(today);
}

var daylist = new Array(7);
daylist[0] = "Sunday";
daylist[1] = "Monday";
daylist[2] = "Tuesday";
daylist[3] = "Wednesday";
daylist[4] = "Thursday";
daylist[5] = "Friday";
daylist[6] = "Saturday";

var current_date = daylist[d.getDay()];

function weekday() {
    alert(current_date);
}

function dateTime() {
    options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
    };
    alert(d.toLocaleString("en-US", options));
}
