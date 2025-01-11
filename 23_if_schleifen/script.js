'use strict';

const numberOfFilms = +prompt("Wie viele Filme haben Sie gesehen?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt("Einer der letzten Filme, die Sie gesehen haben?", ""),
        b = prompt("Wie würden Sie den Film bewerten?", "");

    if (a != '' && b != '' && a != null && b != null && a.length < 50) {

        personalMovieDB.movies[a] = b;
        console.log('done');
    }
    else {
        console.log('error');
        i--;
    }


}

// let i = 0;
// while (i < 2) {
//     const a = prompt("Einer der letzten Filme, die Sie gesehen haben?", ""),
//         b = prompt("Wie würden Sie den Film bewerten?", "");
//     i++;

//     if (a != '' && b != '' && a != null && b != null && a.length < 50) {

//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }
//     else {
//         console.log('error');
//         i--;
//     }
// }


// let i = 0; 
// do {
//     const a = prompt("Einer der letzten Filme, die Sie gesehen haben?", ""),
//         b = prompt("Wie würden Sie den Film bewerten?", "");
//     i++;

//     if (a != '' && b != '' && a != null && b != null && a.length < 50) {

//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }
//     else {
//         console.log('error');
//         i--;
//     }
// } while (i < 2);


if (personalMovieDB.count < 10) {
    console.log('Sehr wenige Filme gesehen');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Sie sind ein klassischer Zuschauer');
} else if (personalMovieDB.count >= 30) {
    console.log('Sie sind ein Filmfan');
}
else {
    console.log('Es ist ein Fehler aufgetreten');
}


console.log(personalMovieDB);

