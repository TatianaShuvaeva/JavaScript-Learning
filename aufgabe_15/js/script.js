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
        const werbung = document.querySelectorAll('.promo__adv img'),
            hintergund = document.querySelector('.promo__bg'),
            genre = hintergund.querySelector('.promo__genre'),
            listeFilme = document.querySelector('.promo__interactive-list'),
            bild = document.querySelector('#bild-mars'),

            /** @type {HTMLFormElement} */
            addForm = document.querySelector('form.add'),

            addInput = addForm.querySelector('.adding__input'),

            checkbox = addForm.querySelector('[type="checkbox"]');

        addForm.addEventListener('submit', (event) => {
            event.preventDefault();

            let newFilm = addInput['value'];
            const favorite = checkbox['checked'];

            if (newFilm) {

                if (newFilm.length > 21) {
                    newFilm = `${newFilm.substring(0, 22)}...`
                }

                movieDB.movies.push(newFilm);
                sortArr(movieDB.movies);
                erstellenListeFilme(movieDB.movies, listeFilme);
            }

            addForm.reset()
        });



        const entfernenWerbung = (arr) => {
            arr.forEach(item => {
                item.remove();
            });
        };


        const vornehmenAenderungen = () => {
            genre.textContent = 'драма';

            bild['style'].backgroundImage = 'url("img/bg.jpg")';
        };


        const sortArr = (arr) => {
            arr.sort();
        };

        function erstellenListeFilme(filme, eltern) {

            eltern.innerHTML = "";
            sortArr(filme);

            filme.forEach((film, i) => {

                eltern.innerHTML += `
                    <li class="promo__interactive-item">${i + 1} ${film}
                        <div class="delete"></div>
                    </li>
                `;
            });

            let muelleimer = document.querySelectorAll('.delete');

            muelleimer.forEach((btn, 1) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(1, 1);

                })
            });

        }

        entfernenWerbung(werbung);
        vornehmenAenderungen();
        sortArr(movieDB.movies);
        erstellenListeFilme(movieDB.movies, listeFilme);

    }
};

//     const button = document.querySelector("#filmbutton");

//     button.addEventListener("click", (event) => {
//         const filmInput = document.getElementById('filminput');

//         let filmName = filmInput['value'];
//         filmInput['value'] = '';
//         filmName = filmName.trim();

//         if (filmName === "") {
//             return;
//         }

//         if (filmName.length > 21) {
//             filmName = filmName.substring(0, 21) + '...';
//         }
//         const checkboxInput = document.querySelector('#checkboxInput');
//         if (checkboxInput['checked'] == true) {
//             console.log('Добавляем любимый фильм');
//         }


//         movieDB.movies.push(filmName);
//         const list = document.querySelector('.promo__interactive-list');
//         const newElement = list.children[0].cloneNode(true);
//         newElement['textContent'] = filmName;
//         list.appendChild(newElement);

//         sortieren();

//     });
// };

