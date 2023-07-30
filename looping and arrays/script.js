// 1. Log every even number from 1000 down to 0
for(let i = 1000; i >= 0; i -= 2) {
	console.log(i);
}

// 2. Alert "A quarter of the way there!" when loop is 1/4 done (at 2500), "Halfway there!" when loop is halfway there (at 5000), and "The loop is done!" when loop is finished (at 10000)
for(let i = 0; i <= 10000; i++) {
	if(i === 2500) {
		alert("A quarter of the way there!");
	} else if(i === 5000) {
		alert("Halfway there!");
	} else if(i === 10000) {
		alert("The loop is done!");
	}
}

// 3. Array of top 5 favorite TV shows
const favoriteTvShows = ["One Tree Hill", "The Office", "Friends", "Euphoria", "Pretty Little Liars"];

// 4. Loop through favorite TV shows array and log message to console
for(let i = 0; i < favoriteTvShows.length; i++) {
	console.log(`My #${i+1} favorite TV show is ${favoriteTvShows[i]}`);
}
