const dailyQuoteTextContainer = document.querySelector(".quote-text");
const dailyQuotes = [
    "Выберите себе работу по душе, и вам не придется работать ни одного дня в жизни.",
    "Когда ты пропускаешь поворот, навигатор не ругает тебя — он просто прокладывает новый маршрут. Ошибка — это не конец пути, а возможность найти другой.",
    "Если ты не совершаешь ошибок, значит, ты ничего не делаешь.",
    "Победить этот мир можно только неслыханной наглостью.",
    "Жить надо так, чтобы другим было хорошо от того, что ты живешь.",
    "Жизнь состоит не в том, чтобы найти себя. Жизнь состоит в том, чтобы создать себя.",
    "Секрет быть скучным состоит в умении рассказать о себе все.",
];
window.onload = getDailyQuoteFun();
function getDailyQuoteFun() {
    const today = new Date();
    const todayDayOfTheWeek = today.getDay();
    dailyQuoteTextContainer.innerHTML = dailyQuotes[todayDayOfTheWeek - 1]
};