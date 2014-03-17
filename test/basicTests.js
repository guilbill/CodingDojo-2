describe("Basic tests", function() {

    it("Un panier vide ne coûte rien du tout", function() {
        expect(priceOf([])).toBe(0);
    });

    it("Un panier avec 1 bière coûte 5 €", function() {
       expect(priceOf(["Guinness"])).toBe(5);
    });

    it("un panier contenant X bières du même type coûtera X * 5 euros", function(){
    	pending();

    });


});