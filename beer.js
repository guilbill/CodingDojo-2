"use strict";

// 5 types de bières
var beers = ["Guinness", "Chimay", "Loroyse", "Karmeliet", "Kriek"];
var reductions = { 2: 0.95,
				   3: 0.90,
				   4: 0.80,
				   5: 0.75 };

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
		return fullArray;
	};

	while (panier.length != 0) {

		var groupeReduc = panier.unique();
		var different = groupeReduc.length;

		// Gestion des réductions
		if (reductions[different] != undefined) {
			totalPrice += ((different * 5) * reductions[different]);
		} else {
			totalPrice += (different * 5);
		}

		panier = reduceArray(panier,groupeReduc);
	}

	return totalPrice;
}