const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let str = '';
    let sortStudenten = arr.sort();
    let ersteListeStudenten = sortStudenten.slice(0, 3);
    let zweiteListeStudenten = sortStudenten.slice(3, 6);
    let dritteListeStudenten = sortStudenten.slice(6, 9);
    let vierteListeStudenten = (sortStudenten.slice(9)).join(', ');

    sortStudenten.length === 9 ? str = 'Die übrigen Schüler: -' : str = 'Die übrigen Schüler: ' + vierteListeStudenten;
    let neueListeStudenten = [ersteListeStudenten, zweiteListeStudenten, dritteListeStudenten, str];
    return neueListeStudenten
};



// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a, b, c, `Die übrigen Schüler: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// sortStudentsByGroups(students);