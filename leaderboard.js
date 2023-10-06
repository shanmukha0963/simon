// leaderboard.js
document.addEventListener('DOMContentLoaded', function () {
    const leaderboardContainer = document.getElementById('leaderboard');

    // Retrieve the scores from localStorage
    const scores = JSON.parse(localStorage.getItem('scores')) || [];

    // Display the scores in the leaderboard
    if (scores.length > 0) {
        const leaderboardList = document.createElement('ul');
        scores.forEach((score, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `Game ${index + 1}: ${score}`;
            leaderboardList.appendChild(listItem);
        });
        leaderboardContainer.appendChild(leaderboardList);
    } else {
        leaderboardContainer.textContent = 'No scores available.';
    }
});
