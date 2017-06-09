var Personnage = {
    nom: " Aurora ",
    sante: 0,
    force: 0,
    xp: 0,
    
    // Renvoie la description du personnage 
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, "
+
            this.force + " en force et " + this.xp + " points d'experience";
        return description;
    }
};

var perso1 = Object.create(Personnage);
perso1.nom = "Aurora ";
perso1.sante = 150;
perso1.force = 25;

var perso2 = Object.create(Personnage);
perso2.nom = "Glacius"; 
perso2.sante = 130;
perso2.force = 35;

console.log(perso1.decrire());
console.log(perso2.decrire());







