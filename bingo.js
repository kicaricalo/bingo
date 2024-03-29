const themes = [
    'Гитлер',
    'Украина',
    'Инопланетяне',
    'Древние цивилизации',
    'Кадры из советского фильма',
    'Ролик из социальной сети',
    'Русские туристы',
    'Хрючево',
    'Эксперт-конспиролог',
    'Карлики',
    'Ученые 3-го рейха',
    'Сенсация',
    'Китайцы',
    'Сибирь',
    'Русские отдыхают',
    'Древние технологии',
    'Порталы в другие измерения',
    'Пирамиды',
    'Сектанты',
    'Человек, похожий на наркомана',
    'Мутанты',
    'Путешествия во времени',
    'Писатели-фантасты',
    'Трамп',
    'Путин',
    'Ангела Меркель',
    'Власти плохие',
    'У нас всё плохо',
    'У них всё ещё хуже',
    'Фокусники',
    'Военные',
    'Полуголые женщины',
    'Загнивание'
];

const bingoWrapper = document.getElementById('wrapper');

function startGame() {
    let newBingoCard = [];
    let randomThemes = themes.slice(0);

    for (i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * (randomThemes.length - 1));
        const bingoItem = randomThemes[randomIndex];
        newBingoCard.push(bingoItem);
        randomThemes.splice(randomIndex, 1);
    }

    newBingoCard.forEach(function (item) {
        const bingoItem = document.createElement('div');
        bingoItem.classList.add('bingo-item');
        bingoItem.innerHTML = item;
        bingoWrapper.append(bingoItem);
    });

    const bingoItems = document.querySelectorAll('.bingo-item');

    for (const bingoItem of bingoItems) {
        bingoItem.addEventListener('click', function (event) {
            event.target.classList.toggle('checked');
        });
    }

}

function newGame() {
    bingoWrapper.innerHTML = '';
    startGame();
}


btn = document.getElementById('btn');
btn.addEventListener("click", newGame);

startGame();