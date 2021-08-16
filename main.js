
setInterval(showTime, 1000);

var clock = document.querySelector(".clock-container");
var hourBox = document.querySelector(".hours");
var minutesBox = document.querySelector(".minutes");
var secondsBox = document.querySelector(".seconds");
var formatBox = document.querySelector(".format-box");
var divider = document.querySelectorAll(".clock-divider");

function showTime() {
	var d = new Date();
	var hour = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
	var format = "AM";

	if (hour > 12) {
		hour -= 12;
		format = "PM";
	} else if (hour === 12) {
		hour = 12;
		format = "AM";
	}

	hour = updateTime(hour);
	min = updateTime(min);
	sec = updateTime(sec);

	hourBox.innerHTML = hour;
	minutesBox.innerHTML = min;
	secondsBox.innerHTML = sec;
	formatBox.innerHTML = format;
	divider.forEach((d) => (d.innerHTML = ":"));
}

function updateTime(t) {
	if (t < 10) {
		return "0" + t;
	} else {
		return t;
	}
}