// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// const family = [];


// function showFamily(arr) {
//     if (arr.length === 0) {
//         return 'Семья пуста'
//     }
//     let str = `Семья состоит из:`
//     arr.forEach(function(item) {
//         str +=` ${item}`
    
//     }); 
//     return str
// };

// console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    
    arr.forEach(function(item) {
       console.log(`${item.toLowerCase()}`); 
        
    }); 
    
}
standardizeStrings(favoriteCities);



// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }

// standardizeStrings(favoriteCities);