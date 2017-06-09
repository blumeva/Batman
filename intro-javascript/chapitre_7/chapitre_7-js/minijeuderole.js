var perso = {
    nom: "Aurora ",
    sante: 150,
    force: 25,
    xp: 0,
    
    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + "a " + this.sante + " point de vie, "
+
            this.force + " en force et " + this.xp +" points d'experience";
        return description;
    }
};

console.log(perso.decrire());

//Aurora est blessée par une fèche
perso.sante = perso.sante - 20;

//Aurora trouve un bracelet de force
perso.force = perso.force + 10;

//Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso.decrire());

var perso2 = {
    nom: "Glacius",
    sante: 130,
    force: 30,
    xp: 0,
    
    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie, "
+
            this.force + " en force et " + this.xp + " points d'experience";
        return description;
    }
};
    
    
    
    