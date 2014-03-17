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
	it("10% de réduc si trois bières différentes", function(){
    	expect(priceOf(["Guinness", "Chimay", "Kriek"])).toBe(13.5)
    });
	it("20% de réduc si quatre bières différentes", function(){
    	expect(priceOf(["Guinness", "Chimay", "Kriek", "Karmeliet"])).toBe(16)
    });
	it("25% de réduc si cinq bières différentes", function(){
    	expect(priceOf(["Guinness", "Chimay", "Kriek", "Karmeliet", "Loroyse"])).toBe(18.75)
    });

    it("Il n'y a que 5 types de bières", function() {
    	var nimp = function() {
    		priceOf(["nimp"]);
    	};
    	expect(nimp).toThrow();
    });

    it("Si on a 4 bières dont 3 différentes, la remise se fait que sur les 3", function(){
    	expect(priceOf(["Guinness","Guinness","Kriek","Chimay"])).toBe(18.5);
    });
});