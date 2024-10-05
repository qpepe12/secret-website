window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('error-screen').style.display = 'block';
    }, 3000); // Симуляция загрузки на 3 секунды
};

function createRelationship() {
    document.getElementById('error-screen').style.display = 'none'; // Скрыть экран с ошибкой
    showLoveScreen("котик, люблю тебя! Мяу"); // Показать экран с любовью
}

function declineRelationship() {
    document.getElementById('error-screen').style.display = 'none'; // Скрыть экран с ошибкой
    showLoveScreen("я все равно тебя люблю"); // Показать экран с любовью
}

function showLoveScreen(message) {
    const loveScreen = document.createElement('div');
    loveScreen.style.textAlign = 'center';
    loveScreen.style.marginTop = '20%';
    loveScreen.style.fontSize = '24px';
    loveScreen.innerHTML = `<h1>${message}</h1>`;
    document.body.appendChild(loveScreen); // Добавить новый экран в тело документа
}
