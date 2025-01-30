/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();

const listeFilmen = document.querySelectorAll('.promo__interactive-item');
listeFilmen.forEach((item, i) => {
    item.innerHTML = i+1+'.  '+movieDB.movies[i]
});


const werbung = document.querySelectorAll('.promo__adv img'),
    hintergund = document.querySelector('.promo__bg'),
    genre = hintergund.querySelector('.promo__genre');

werbung.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

const bild = document.getElementById('bild-mars');

bild.style.backgroundImage = 'url("img/bg.jpg")';
