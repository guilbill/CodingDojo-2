"use strict"

// 5 types de bières
var beers = ["Guinness", "Chimay", "Loroyse", "Karmeliet", "Kriek"];

function priceOf(panier) {
	// Known beer?
	var isAKnownBeer = function(beer, index) {
		console.log(beer);
		return (beers.indexOf(beer) != -1);
	};
	
	var goodBeer = panier.every(isAKnownBeer);
	if (!goodBeer) throw new Exception("This beer is not good ;)");

	return panier.length * 5;
}