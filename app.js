document.addEventListener('DOMContentLoaded', function() {
const searchBtn = document.getElementById('searchBtn');

searchBtn. addEventListener('click', function() {
    jQuery.ajax({
        url: 'superheroes.php',
        method: 'GET'
    })
    .done(function(data) {
        alert(data);
    })
    .fail(function(error) {
        console.error('Error:', error);
    });
})
});
