console.log("Using array-data-strucutre, write a function(s) to switch the content of both arrays in the second element ... the last name.")

// Your Function Goes here
function rewriteLastNameMercer (lastName1, lastname2) {
    return MarkMercer[1] = lastname2;
}
    function rewritelastnamespence (lastName1, lastName2) {
  return MeganSpence[1] = lastName2;

    }


let MarkMercer = [];
let MeganSpence = [];
// firstName, lastName, age, ageAfraid, hair, male, female
MarkMercer = ["Mark", "Mercer", 13, 29, null, true, false];
MeganSpence = ["Megan", "Spence", 14, null, true, false, true];

//Your code goes here
rewriteLastNameMercer (MarkMercer[1], MeganSpence[1]);
rewritelastnamespence (MeganSpence[1], MarkMercer[1]);
  // Print first names only
console.log("Last Name of MarkMercer is: " + MarkMercer[1]); //Should return Spence
console.log("Last Name of MeganSpence is: " + MeganSpence[1]); //Should return Mercer
