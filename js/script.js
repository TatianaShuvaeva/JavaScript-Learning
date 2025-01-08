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

const numberOfFilms = +prompt("Wie viele Filme haben Sie gesehen?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt("Einer der letzten Filme, die Sie gesehen haben?", "");
const b = prompt("Wie würden Sie den Film bewerten?", "");
const c = prompt("Einer der letzten Filme, die Sie gesehen haben?", "");
const d = prompt("Wie würden Sie den Film bewerten?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(numberOfFilms);
console.log(personalMovieDB);
