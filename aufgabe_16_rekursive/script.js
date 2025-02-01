// function factorial(zahl) {
//     let ergebnis = zahl;
//     if (!Number.isInteger(zahl) ) {
//         return 'Die eingegebene Zahl ist keine Ganzzahl !'
//     };
//     if (zahl <= 1) {
//         return 1
//     } else {
//         for (let n = 1; n<zahl; n++) {

//             ergebnis = ergebnis*n;
//         }
//         return ergebnis
//     }


// };

// console.log(factorial(5));
// factorial(5.6);

// factorial(-4);
// factorial('fgsalgG');
// factorial(0);
// factorial(0.2);


function factorial(zahl) {

    if (!Number.isInteger(zahl)) {
        return 'Die eingegebene Zahl ist keine Ganzzahl !'
    }
    if (zahl <= 1) {
        return 1
    } else {

        return zahl * factorial(zahl - 1);

    }

};




console.log(factorial(5));