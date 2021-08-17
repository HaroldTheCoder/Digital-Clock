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

	// AUTO LIGHT MODE
	var headerLight = document.querySelector("h1");
	var paragraph = document.querySelectorAll("p");
	var clockBox = document.querySelectorAll(".clock-box");
	var icon = document.querySelector("#icon");
	if (format === "AM") {
		document.body.classList.add("light-mode");
		formatBox.classList.add("light-mode");
		headerLight.classList.add("light-mode");
		clock.classList.add("light-mode");
		clockBox.forEach((c) => c.classList.add("light-mode"));
		divider.forEach((i) => i.classList.add("light-mode"));
		paragraph.forEach((p) => p.classList.add("light-mode"));
        icon.src = "images/sun.png";
        icon.classList.add('light-mode');
	} else {
		document.body.classList.remove("light-mode");
        icon.src = "images/moon.png";
	}

}

function updateTime(t) {
	if (t < 10) {
		return "0" + t;
	} else {
		return t;
	}
}
