document.addEventListener('DOMContentLoaded', () => {
    const improveBtn = document.getElementById('improve-btn');
    const message = document.getElementById('message');

    const improvements = [
        'Identify a small area to improve today.',
        'Involve everyone in the process of change.',
        'Focus on making continuous, small changes.',
        'Measure and track your improvements.',
        'Celebrate small wins and build momentum.'
    ];

    improveBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * improvements.length);
        message.textContent = improvements[randomIndex];
    });
});
