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

	var totalPrice = 0;

	var reduceArray = function(fullArray, toRemove) {
		for (var i = 0; i < toRemove.length; i++) {
			var elem = toRemove[i];
			var idx = fullArray.indexOf(elem);
			fullArray.splice(idx,1);
		};
	}
	while(panier.length != 0){

		var groupeReduc = panier.unique();
		var different = groupeReduc.length;

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

		totalPrice += ((different.length * 5) * (pourcentage/100.0));

		panier = reduceArray(panier,groupeReduc);

	}

	return totalPrice;
}