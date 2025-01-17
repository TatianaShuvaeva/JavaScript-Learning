const someString = 'This is some strange string';

function reverse(str) {
    let arr = [];
    let zeile = '';

    for (i in str) {
        arr[i] = str[i]
    };

    const reversed = arr.reverse();
    for (k of reversed) {
        zeile += k;
    }
    return zeile
};

console.log(reverse(someString));