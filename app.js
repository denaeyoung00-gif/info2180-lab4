document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('searchBtn');
    const okBtn = document.getElementById('okBtn');
    const overlay = document.getElementById('overlay');
    const popupText = document.getElementById('popupText');

    function showPopup(message) {
        popupText.textContent = message;   // textContent shows the raw <ul><li> text
        overlay.classList.remove('hidden');
    }

    okBtn.addEventListener('click', function () {
        overlay.classList.add('hidden');
    });

    searchBtn.addEventListener('click', function () {
        fetch('superheroes.php')
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Status ' + response.status);
                }
                return response.text();
            })
            .then(function (data) {
                showPopup(data);
            })
            .catch(function (error) {
                showPopup('Could not load the superheroes: ' + error.message);
            });
    });
});