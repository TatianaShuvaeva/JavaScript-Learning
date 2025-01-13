// function calculateVolumeAndArea(wuerfelkante) {
//     if (Number.isInteger(wuerfelkante) === false || typeof (wuerfelkante) === 'string' || wuerfelkante <= 0) {
//         return 'Beim Berechnen ist ein Fehler aufgetreten';
//     }
//     return `Volumen eines Würfels: ${wuerfelkante * wuerfelkante * wuerfelkante}, Gesamtoberfläche: ${6 * wuerfelkante * wuerfelkante}`;

// };

// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea(15));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea('15'));
// console.log(calculateVolumeAndArea(-15));

function getCoupeNumber(zahl) {
    if (Number.isInteger(zahl) === false || typeof (zahl) === 'string' || zahl < 0) {
        return 'Fehler. Bitte überprüfen Sie, ob die von Ihnen eingegebene Sitzplatznummer korrekt ist';
    }
    else if (zahl === 0 || zahl > 36) {
        return 'Im Wagen gibt es keine solchen Sitze';
    }

    return Math.ceil(zahl/4)

};

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));



