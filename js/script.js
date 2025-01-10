"use strict";

// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Sind Sie schon 18 Jahre alt", "18");
// console.log(answer);
// console.log(typeof (answer));

// const answer = [];

// answer[0] = prompt("Wie heißen Sie", "");
// answer[1] = prompt("Wie alt sind Sie", "");
// answer[2] = prompt("Wo wohnen Sie", "");

// document.write(answer);

// console.log(typeof (answer));

// const numberOfFilms = +prompt("Wie viele Filme haben Sie gesehen?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false

// };

// const a = prompt("Einer der letzten Filme, die Sie gesehen haben?", "");
// const b = prompt("Wie würden Sie den Film bewerten?", "");
// const c = prompt("Einer der letzten Filme, die Sie gesehen haben?", "");
// const d = prompt("Wie würden Sie den Film bewerten?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(numberOfFilms);
// console.log(personalMovieDB);

// console.log(NaN || 2 || undefined);


// console.log(NaN && 2 && undefined);


// console.log(1 && 2 && 3);


// console.log(!1 && 2 || !3);


// console.log(25 || null && !3);


// console.log(NaN || null || !3 || undefined || 5);


// console.log(NaN || null && !3 && undefined || 5);


// console.log(5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// };
//     let hamburger;
//     const fries = NaN;
//     const cola = 0;
//     const nuggets = 2;


//     if (hamburger || cola || fries === 3 || nuggets) {
//         console.log('Done!')
//     }

//     let hamburger;
//     const fries = NaN;
//     const cola = 0;
//     const nuggets = 2;


//     if (hamburger && cola || fries === 3 && nuggets) {
//         console.log('Done!')
//     }

// let result = '';
// const length = 7;
// for (let i = 1; i<length; i++) {
//     for (let j=0; j<i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// first: for (let i=0; i<3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j=0; j<3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k=0; k<5; k++) {
//             if (k===2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }

// for (let zahl = 5; zahl < 11; zahl++) {
//     console.log(zahl);
// }    
    

//     for (let zahl = 20; zahl > 9; zahl--) {
//         if (zahl === 13) break;
//         console.log(zahl);
//     }




//     for (let zahl = 2; zahl < 11; zahl++) {
//         if (zahl % 2 == 1) continue;
//         console.log(zahl);
//     }



//     let i = 2;
//     while (i <= 16) {
//         i++;
//         if (i % 2 === 0) {
//             continue;
//         } else {

//             console.log(i);

//         }
//     }


// const arrayOfNumbers = [];
// let j = 5
// for (let i = 0; i < 10; i++) {

//     if (j > 10) break;
//     arrayOfNumbers[i] = j;
//     j++;


// }
// console.log(arrayOfNumbers);
        
    
    
// let i = 2;
// while (i <= 15) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {

//         console.log(i);

//     }
// } 


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// const zahlElementen = arr.length

// for (let i=0; i<zahlElementen; i++) {
//     result[i] = arr[i];
    
// }
// console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// const zahlElementen = data.length



// for (let i=0; i<zahlElementen; i++) {
    
//     if (typeof (data[i]) === "number") {
//         data[i] = data[i] *2;
//        } 
   
//     else {
//         data[i] = data[i]+' - done'
//     }
     
// }
// console.log(data)

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

const zahlElementen = data.length

let j = 0;

for (let i = zahlElementen-1; i >=0; i--) {
    
    result[j] = data[i];
    j++;
        

}
console.log(result)
