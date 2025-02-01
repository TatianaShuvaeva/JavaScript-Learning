/* Aufgaben für die Lektion:

1) Entfernen Sie alle Anzeigenblöcke von der Seite (rechte Seite der Site).

2) Ändern Sie das Genre des Films, ändern Sie „Komödie“ in „Drama“

3) Ändern Sie den Hintergrund des Filmplakats in das Bild „bg.jpg“. Es befindet sich im IMG-Ordner.
Implementierung nur mit JS

4) Erstellen Sie basierend auf den Daten aus dieser JS-Datei eine Liste der Filme auf der Seite.
Sortieren Sie sie alphabetisch

5) Nummerierung der Ausgabefilme hinzufügen */

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
