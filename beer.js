"use strict"

// 5 types de bières
var beers = ["Guinness", "Chimay", "Loroyse", "Karmeliet", "Kriek"];

function priceOf(panier) {
	// Known beer?
	var isAKnownBeer = function(beer, index) {
		return (beers.indexOf(beer) != -1);
	};

	var goodBeer = panier.every(isAKnownBeer);
	if (!goodBeer) throw new Exception("This beer is not good ;)");

	if ((panier.length > 1) && (panier[0] != panier[1])) {

	}

	return panier.length * 5;
}