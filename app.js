document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', function () {
        fetch('superheroes.php')
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Status ' + response.status);
                }
                return response.text();
            })
            .then(function (data) {
                alert(data);
            })
            .catch(function (error) {
                alert('Could not load the superheroes: ' + error.message);
            });
    });
}); 