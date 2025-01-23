'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Wie viele Filme haben Sie gesehen?', '');

        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Wie viele Filme haben Sie gesehen?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Einer der letzten Filme, die Sie gesehen haben?', '').trim(),
                b = prompt('Wie würden Sie den Film bewerten?', '');

            if (a != '' && b != '' && a != null && b != null && a.length < 50) {

                personalMovieDB.movies[a] = b;
                console.log('done');
            }
            else {
                console.log('error');
                i--;
            }

        }
    },
    detectPersonalLevel: function () {
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
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;

        } else {
            personalMovieDB.privat = true;
        }

    },
    writeYourGenres: function () {
      
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ihr Lieblingsgenre nummer ${i}?`);
      
            if (genre === '' || genre == null) {
                console.log(`Sie haben falsche oder gar keine Daten eingegeben`);
                i--;
            }
            else {
                personalMovieDB.genres[i - 1] = genre;
            }
        // for (let i = 1; i <= 2; i++) {
            // let genres = prompt(`Geben Sie bitte Ihre Lieblingsgenres durch Kommas getrennt ein`).toLowerCase();
      
            // if (genres === '' || genres == null) {
            //     console.log(`Sie haben falsche oder gar keine Daten eingegeben`);
            //     i--;
            // }
            // else {
            //     personalMovieDB.genres = genres.split(', ');
            //     personalMovieDB.genres.sort();
            // }
         
        }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Lieblingsgenre ${i+1} ist ${item}`);
        })
    }
};


