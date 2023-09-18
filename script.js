let timerElement;

const onReady = (callback) => {
	if (document.readyState != "loading") {
		callback();
	}
	else if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", callback);
	}
	else {
		document.attachEvent("onreadystatechange", function() {
			if (document.readyState == "complete") {
				callback();
			}
		});
	}
};

const pad = (number, size) => {
    number = number.toString();
    while (number.length < size) number = "0" + number;
    return number;
};

const updateTimer = () => {
	var date = new Date();
	const seconds = date.getSeconds();
	const milliseconds = date.getMilliseconds();

	timerElement.innerHTML = `${pad(seconds, 2)}:${pad(milliseconds, 3)}`;
};

onReady(() => { 
	timerElement = document.getElementById("timer");
	setInterval(updateTimer);
});