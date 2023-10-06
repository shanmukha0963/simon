// home.js
document.addEventListener('DOMContentLoaded', function () {
    const startGameButton = document.getElementById('startGame');
    const showLeaderboardButton = document.getElementById('showLeaderboard');

    startGameButton.addEventListener('click', function () {
        window.location.href = 'start.html';
    });

    showLeaderboardButton.addEventListener('click', function () {
        window.location.href = 'leaderboard.html';
    });
});
