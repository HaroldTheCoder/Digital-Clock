// declare variables for clock container
var clock = document.querySelector(".clock-container");
var hourBox = document.querySelector(".hours");
var minutesBox = document.querySelector(".minutes");
var secondsBox = document.querySelector(".seconds");
var formatBox = document.querySelector(".format-box");
var divider = document.querySelectorAll(".clock-divider");

// const showTime = () => {} Arrow function works as well / ALTERNTIVE
function showTime() {
	// create time variables
	// FOR DISPLAYING MONTH AND DAY TO CLOCK FUNCTION
	//const months = ["January", "February", "March", "April", "May", "June", "July", "Aug", "September", "October", "November", "December"];
	//var time = new Date();
	//var day = time.getDate();
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

	//time updated
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

	if (hour > 6 && format === "AM") {
		document.body.classList.add("light-mode");
		formatBox.classList.add("light-mode");
		headerLight.classList.add("light-mode");
		clock.classList.add("light-mode");
		clockBox.forEach((c) => c.classList.add("light-mode"));
		divider.forEach((i) => i.classList.add("light-mode"));
		paragraph.forEach((p) => p.classList.add("light-mode"));
		icon.src = "images/sun.png";
		icon.classList.add("light-mode");
	} else if (hour >= 7 && format === "PM") {
		document.body.classList.remove("light-mode");
		document.body.classList.remove("light-mode");
		formatBox.classList.remove("light-mode");
		headerLight.classList.remove("light-mode");
		clock.classList.remove("light-mode");
		clockBox.forEach((c) => c.classList.remove("light-mode"));
		divider.forEach((i) => i.classList.remove("light-mode"));
		paragraph.forEach((p) => p.classList.remove("light-mode"));
		icon.classList.remove("light-mode");
		icon.src = "images/moon.png";
	}
}

// Adds a 0 for every number that is less than 10 
function updateTime(t) {
	if (t < 10) {
		return "0" + t;
	} else {
		return t;
	}
}
// Clock function runs every 1second(1000) using setInterval 
setInterval(showTime, 1000);
