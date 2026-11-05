document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const result = document.getElementById('result');

    searchBtn.addEventListener('click', function () {
        const query = searchInput.value.trim();

        fetch('superheroes.php?query=' + encodeURIComponent(query))
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Status ' + response.status);
                }
                return response.text();
            })
            .then(function (data) {
                result.innerHTML = data;
            })
            .catch(function (error) {
                result.textContent = 'Could not load the superheroes: ' + error.message;
            });
    });
});