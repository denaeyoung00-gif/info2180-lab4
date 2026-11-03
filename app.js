document.addEventListener('DOMContentLoaded', function() {
const searchBtn = document.getElementById('searchBtn');

searchBtn. addEventListener('click', function() {
    fetch('superheroes.php')
    .then(function(response){
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then (function(data) {
        const doc= new DOMParser().parseFromString(data, 'text/html');
        const items = doc. querySelecorAll('li');
        const  message = items.length
            ? Array.from(items).map(function(li){
                reurn li.textContent.trim(); 
            })
            .join('\n')
            : data;
            alert(message);
    })
    .catch(function(error) {
        console.error('There was a problem with the fetch operation:', error);
    });