var A;
A = 3.14;
console.log(A);

var B = 0; // B contient la valeur 0
B += 1; // B contient la valeur 1
B ++; // B contient la valeur 2
console.log(B); // Affiche 2

// 3 est une expression dont la valeur est le nombre 3
var C = 3;
// D est une expression dont la valeur est celle de C (ici 3)
var D = C;
// (D + 1) est une expression
// Sa valeur est celle de D augmentée de 1 (ici 4)
D = D + 1; // D contient la valeur 4
console.log(D); // Affiche 4

var E = 3 + 2 * 4; // E contient la valeur 11
E = (3 + 2) * 4; // E contient la valeur 20

var F = 100
console.log("La variable F contient la valeur " + F);