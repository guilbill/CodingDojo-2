# Coding Dojo 2#
## 2eme Dojo : Beer ##
### Sujet ###
Nous vendons des bières et voulons, pour la saint Patrick, appliquer des promotions pour nos clients.

* 5 type de bières (Guinness, Chimay, Loroyse, Karmeliet, Kriek)
* Chaque pinte de bière coûte 5 euros,
* L'achat de X bières de même type => X*5 €
* 2 bières différentes => 5 % de remise,
* 3 bières différentes => 10 % de remise,
* 4 bières différentes => 20 % de remise,
* 5 bières différentes => 25 % de remise,
* Si j'ai 4 bières, dont 3 sont différentes, la remise ne s'applique qu'aux 3  différentes,
* Si on a G G C C L L K alors on doit payer 29.5€ : G C L K = 4 un groupe de 4 bières différentes, et G C L = un groupe de 3 bières => 20% de remise sur le 1er groupe, et 10% de remise sur le 2eme.

### Outils ###
* [Jasmine](http://jasmine.github.io/2.0/introduction.html) : Framework de test javascript,
* [sugar.js](http://sugarjs.com/) : Framework js, utilisé pour les fonctions qu'il apporte sur les arrays,
* [online-stopwatch](http://www.online-stopwatch.com/french/full-screen-stopwatch.php) : Minuteur online,
* [devdocs](http://devdocs.io/) : Centralisation des documentations de différentes API.

### Pratiques ###
* arrays.every : Applique une fonction à chaque élément de la liste. every prend en paramètre une fonction qui doit retourner un booléen. Il retourne true si tous les élements de la liste, appliqués à la fonction passée en paramètre, retourne true. Nous a été utile pour vérifier qu'une bière faisait bien partie de notre sélection de bière.
* jasmine - toThrow : Permet de tester qu'une méthode lève bien une exception. Il faut noter que toThrow prend en parmètre une fonction, qu'il faut déclarer auparavant :
```
var nimp = function() {
    priceOf(["nimp"]);
};
expect(nimp).toThrow();
```
Ici nous testons que l'appel de priceOf(["nimp"]) déclenche bien une exception.