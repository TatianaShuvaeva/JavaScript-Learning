
function sayHello() {
    return 'Hallo Anton!'
};

console.log(sayHello());

function returnNeighboringNumbers(zahl) {
    return [zahl - 1, zahl, zahl + 1]
};

console.log(returnNeighboringNumbers(5));

function getMathResult(zahl, anzahl) {

    if (typeof (anzahl) !== 'number' || anzahl <= 0) {

        return zahl;
    };
    let str = '';
    for (let i = 1; i <= anzahl; i++) {
        
        if (i === anzahl) {
            str += `${zahl * i}`;
            
        }
        else {

            str += `${zahl * i}---`;

        }
    
    }
    return str;
};

console.log(getMathResult(5, 3));
console.log(getMathResult(5));
console.log(getMathResult(5, '3'));
console.log(getMathResult(5, 0));
console.log(getMathResult(5,-3));