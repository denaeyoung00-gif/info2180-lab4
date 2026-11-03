document.addEventListener('DOMContentLoaded', function() {
const searchBtn = document.getElementById('searchBtn');

searchBtn. addEventListener('click', function() {
    fetch('superheroes.php')
    .then(response=> response.text)
    .then (data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
})
});
