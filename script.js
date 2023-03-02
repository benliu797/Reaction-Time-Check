// Define variables
var squares = document.getElementsByClassName("square");
var startTime, endTime, reactionTime;

// Event listener for squares
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		endTime = new Date();
		reactionTime = (endTime - startTime) / 1000;
		alert("Your reaction time was " + reactionTime + " seconds.");
		
		// Reset game
		resetGame();
	});
}

// Function to start game
function startGame() {
	// Hide squares and set random delay before showing first square
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "none";
	}
	setTimeout(function() {
		// Show random square and start timer
		var randomIndex = Math.floor(Math.random() * squares.length);
		squares[randomIndex].style.display = "block";
		startTime = new Date();
	}, Math.random()*2000 + 1000);
}

// Function to reset game
function resetGame() {
	// Hide squares and reset styles
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "none";
		squares[i].style.backgroundColor = "#4CAF50";
	}
}

// Start game on page load
window.onload = function() {
	startGame();
};
