"use strict"

// 5 types de bières
var beers = ["Guinness", "Chimay", "Loroyse", "Karmeliet", "Kriek"];

function priceOf(panier) {
	var price = 0;
	// Known beer?
	var isAKnownBeer = function(beer, index) {
		return (beers.indexOf(beer) != -1);
	};

	var goodBeer = panier.every(isAKnownBeer);
	if (!goodBeer) throw new Exception("This beer is not good ;)");

	var different = panier.unique().length;

	var pourcentage=100;
	switch(different) {
		case 2:
			pourcentage = 95;
			break;
		case 3:
			pourcentage = 90;
			break;
		case 4:
			pourcentage = 80;
			break;
		case 5:
			pourcentage = 75;
			break;
		default:
	}
	


	return ((panier.length * 5) * (pourcentage/100.0));
}