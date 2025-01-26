const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let gesamtflaeche = 0,
        gesamtvolumenEinkaufszentrums = 0,
        heizkosten = 0;

    for (let shop of data.shops) {
        gesamtflaeche += shop['width'] * shop['length'];

    }
    gesamtvolumenEinkaufszentrums = gesamtflaeche * data.height;
    heizkosten = gesamtvolumenEinkaufszentrums * data.moneyPer1m3;
    if (heizkosten > data.budget) {
        return 'Бюджета недостаточно'
    }

    return 'Бюджета достаточно'
};

// console.log(isBudgetEnough(shoppingMallData));
console.log(isBudgetEnough({
    shops: [
        {
            width1: 10,
            length1: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 5000000
}));
