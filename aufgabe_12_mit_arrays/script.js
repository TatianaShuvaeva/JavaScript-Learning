function reverse(str) {
    if (typeof (str) !== 'string') {
        return 'Ошибка!'
    }

    let ergebnis = '';

    for (let i = str.length - 1; i >= 0; i--) {
        ergebnis += str[i]
    }

    return ergebnis
};

console.log(reverse('This is some strange string'));
console.log(reverse(['This is some strange string', 3457678]));
console.log(reverse(''));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const arr = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют'
    }

    const newArr = ['Доступные валюты:'];
    for (let curr of arr) {
        if (curr !== missingCurr) {
            newArr.push(curr)
        }

    }
    const ergebnis = newArr.join('\n');
    return ergebnis + '\n';
}

console.log(availableCurr(arr, 'CNY'));
console.log(availableCurr(arr));
