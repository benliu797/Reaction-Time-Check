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
	});// Define variables
var squares = document.getElementsByClassName("square");
var startBtn = document.getElementById("start-btn");
var resultDiv = document.getElementById("result");
var numGames = 0;
var totalReactionTime = 0;

// Event listener for start button
startBtn.addEventListener("click", function() {
	// Disable button and start game
	startBtn.disabled = true;
	startGame();
});

// Event listener for squares
for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		endTime = new Date();
		reactionTime = (endTime - startTime) / 1000;
		totalReactionTime += reactionTime;
		numGames++;
		if (numGames < 10) {
			// Continue game
			resetGame();
			startGame();
		} else {
			// Calculate average reaction time and display results
			var avgReactionTime = totalReactionTime / numGames;
			resultDiv.innerHTML = "Your average reaction time was " + avgReactionTime.toFixed(2) + " seconds.";
			// Enable start button
			startBtn.disabled = false;
			// Reset game
			resetGame();
			numGames = 0;
			totalReactionTime = 0;
		}
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
	resetGame();
};

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
