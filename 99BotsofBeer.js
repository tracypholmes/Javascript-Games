// Write a while loop that runs as long as the current number is greater than 0. Start at 100.
// The while loop should print to the console: “(current number) of beers on the wall….”
// If there are no more bottles of beer on the wall, log to the console a message saying we are all out of beer.

var n = 100

while (n > 0) {
	console.log (n + " of beers on the wall...")
	n--;
}
if ( n === 1 ){
	console.log ( n + " bottle of beer on the wall...")
}
	console.log ( "We are all out of beer!" );
