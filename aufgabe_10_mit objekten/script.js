const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            rub: '30%'
        },
        exp: '1 Monat'
    },
    showAgeAndLangs: function () {


        const languages = personalPlanPeter['skills']['languages'];
        let newLanguages = [];


        for (let value of languages) {
            newLanguages += value.toUpperCase();
            newLanguages += ' '

        }

        return `Ich bin ${personalPlanPeter['age']} und spreche folgende Sprachen: ${newLanguages}\n`;

    }

};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


function showExperience(personalPlanPeter) {
    const { exp } = personalPlanPeter.skills;
    return exp;
};

console.log(showExperience(personalPlanPeter));



function showProgrammingLangs(personalPlanPeter) {
    if (!('js' in personalPlanPeter.skills.programmingLangs) && !('php' in personalPlanPeter.skills.programmingLangs)) {
        return ''
    }
    const programmingLangs = personalPlanPeter.skills.programmingLangs;
    let key,
        result = '';
    for (key in programmingLangs) {
        result += `Die ${key} wird zu ${programmingLangs[key] erlernt
    } \n`;

    }
    return result;
}
console.log(showProgrammingLangs(personalPlanPeter));