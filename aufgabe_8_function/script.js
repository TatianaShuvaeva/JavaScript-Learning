// function getTimeFromMinutes(zahl) {
//     let stunden = zahl / 60;

//     let minuten = Math.round((stunden - parseInt(stunden)) * 60);

//     if (!Number.isInteger(zahl) || zahl < 0 || zahl > 600) {
//         return 'Fehler, überprüfen Sie die Daten'
//     }

//     if (parseInt(stunden) == 1) {
//         return `Это ${parseInt(stunden)} час и ${minuten} минут`
//     }
//     if (parseInt(stunden) >= 2 && parseInt(stunden) <= 4) {
//         return `Это ${parseInt(stunden)} часа и ${minuten} минут`

//     }
//     if (parseInt(stunden) >= 5 && parseInt(stunden) <= 10) {
//         return `Это ${parseInt(stunden)} часов и ${minuten} минут`
//     }
//     else {
//         return `Это ${parseInt(stunden)} часов и ${minuten} минут`
//     }
// };


// function getTimeFromMinutes(minutesTotal) {
//     if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Fehler, überprüfen Sie die Daten";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// };


// console.log(findMaxNumber(150));
// console.log(findMaxNumber(50));
// console.log(findMaxNumber(0));
// console.log(findMaxNumber(-150));
// console.log(findMaxNumber(600));
// console.log(findMaxNumber(180));
// console.log(findMaxNumber(187));
// console.log(findMaxNumber('187'));



function findMaxNumber(zahl1, zahl2, zahl3, zahl4) {
    let arr_zahl = [zahl1, zahl2, zahl3, zahl4];
    if (arr_zahl.length < 4) {
        return 0;
    }
    for (let item of arr_zahl) {
        if (typeof (item) !== 'number') {

            return 0;
        }
    }


    let max_zahl = Math.max(...arr_zahl);
    return max_zahl;

};

// function findMaxNumber(a, b, c, d) {
//    
//     if (typeof (a) !== 'number' ||
//         typeof (b) !== 'number' ||
//         typeof (c) !== 'number' ||
//         typeof (d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b, c, d);
//     }
// };

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));
console.log(findMaxNumber(1, 5, '10'));
