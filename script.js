// Define variables
var startButton = document.getElementById("start-button");
var testArea = document.getElementById("test-area");
var startTime, endTime, reactionTime;

// Event listener for start button
startButton.addEventListener("click", function() {
	// Hide start button and show test area
	startButton.style.display = "none";
	testArea.style.display = "block";
	
	// Set random delay before changing color to green
	setTimeout(function() {
		testArea.style.backgroundColor = "green";
		startTime = new Date();
	}, Math.random()*5000 + 1000);
});

// Event listener for test area click
testArea.addEventListener("click", function() {
	endTime = new Date();
	reactionTime = (endTime - startTime) / 1000;
	alert("Your reaction time was " + reactionTime + " seconds.");
	
	// Reset test
	testArea.style.backgroundColor = "red";
	testArea.style.display = "none";
	startButton.style.display = "block";
});
