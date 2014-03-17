describe("Basic tests", function() {

    it("Un panier vide ne coûte rien du tout", function() {
        expect(priceOf([])).toBe(0);
    });

    it("Un panier avec 1 bière coûte 5 €", function() {
       expect(priceOf(["Guinness"])).toBe(5);
    });

    it("un panier contenant X bières du même type coûtera X * 5 euros", function(){
    	expect(priceOf(["Guinness", "Guinness", "Guinness"])).toBe(15)
    });

    it("5% de réduc si deux bières différentes", function(){
    	expect(priceOf(["Guinness", "Chimay"])).toBe(9.5)
    });

    it("Il n'y a que 5 types de bières", function() {
    	var nimp = function() {
    		priceOf(["nimp"]);
    	};
    	expect(nimp).toThrow();
    });
});