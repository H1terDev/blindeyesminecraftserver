document.addEventListener('DOMContentLoaded', () => {
    const clickMe = document.getElementById('click-me');
    const letterContainer = document.getElementById('letter-container');

    clickMe.addEventListener('click', () => {
        letterContainer.classList.remove('hidden');
    });

    letterContainer.addEventListener('click', () => {
        letterContainer.classList.add('hidden');
    });
});
