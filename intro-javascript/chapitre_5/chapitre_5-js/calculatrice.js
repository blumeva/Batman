function calculer(opdegauche, op, opdedroite) {
    var resultat;
    switch (op) {
        case "+":
            resultat = opdegauche + opdedroite;
            break;
        case "-":
            resultat = opdegauche - opdedroite;
            break;
        case "*":
            resultat = opdegauche * opdedroite;
            break;
        case  "/":
            resultat = opdegauche / opdedroite;
            break;
        }
        return resultat;
}

console.log(calculer(4, "+", 6));
console.log(calculer(4, "-", 6));
console.log(calculer(2, "*", 0));
console.log(calculer(12, "/", 0));
