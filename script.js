document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const phoneInput = document.getElementById('brand-input');

    form.addEventListener('submit', (event) => {
        const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Remove non-digit characters

        if (phoneNumber.length !== 11 && phoneNumber.length !== 12) {
            alert('Lütfen geçerli bir telefon numarası girin.');
            event.preventDefault(); // Stop the form from submitting
        }
    });
});
