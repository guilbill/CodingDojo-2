"use strict"

// 5 types de bières
var beers = ["Guinness", "Chimay", "Loroyse", "Karmeliet", "Kriek"];

function priceOf(beers) {
	// Known beer?
	var isAKnownBeer = function(beer, index) {
		return beers.indexOf(beer) != -1;
	};
	var goodBeer = beers.every(isAKnownBeer);
	console.log(goodBeer);
	if (!goodBeer) throw new Exception("This beer is not good ;)");

	return beers.length * 5;
}