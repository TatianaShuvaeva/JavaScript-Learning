//@ts-check
/* Aufgaben für die Lektion:

1) Entfernen Sie alle Anzeigenblöcke von der Seite (rechte Seite der Site).

2) Ändern Sie das Genre des Films, ändern Sie „Komödie“ in „Drama“

3) Ändern Sie den Hintergrund des Filmplakats in das Bild „bg.jpg“. Es befindet sich im IMG-Ordner.
Implementierung nur mit JS

4) Erstellen Sie basierend auf den Daten aus dieser JS-Datei eine Liste der Filme auf der Seite.
Sortieren Sie sie alphabetisch

5) Nummerierung der Ausgabefilme hinzufügen */


/* Задания на урок N2:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', verarbeitenDomContentLoaded())

function verarbeitenDomContentLoaded() {
    return () => {
        const movieDB = {
            movies: [
                "Логан",
                "Лига справедливости",
                "Ла-ла лэнд",
                "Одержимость",
                "Скотт Пилигрим против..."
            ]
        };

        function sortieren() {
            movieDB.movies.sort();

            const listeFilmen = document.querySelectorAll('.promo__interactive-item');
            listeFilmen.forEach((item, i) => {
        item.textContent = i + 1 + '.  ' + movieDB.movies[i];
            });
        }


        sortieren();


        const werbung = document.querySelectorAll('.promo__adv img'),
            hintergund = document.querySelector('.promo__bg'),
            genre = hintergund.querySelector('.promo__genre');

        werbung.forEach(item => {
            item.remove();
        });

        genre.textContent = 'драма';

        const bild = document.getElementById('bild-mars');

        bild.style.backgroundImage = 'url("img/bg.jpg")';


        const button = document.querySelector("#filmbutton");

        button.addEventListener("click", (event) => {
            const filmInput = document.getElementById('filminput');

            let filmName = filmInput['value'];
            filmInput['value'] = '';
            filmName = filmName.trim();

            if (filmName === "") {
                return;
            }

            if (filmName.length > 21) {
                filmName = filmName.substring(0, 21) + '...';
            }
            const checkboxInput = document.querySelector('#checkboxInput');
            if (checkboxInput['checked'] == true) {
                console.log('Добавляем любимый фильм');
            }


            movieDB.movies.push(filmName);
            const list = document.querySelector('.promo__interactive-list');
            const newElement = list.children[0].cloneNode(true);
            newElement['textContent'] = filmName;
            list.appendChild(newElement);

            sortieren();

        });
    };
}
