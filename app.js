document.addEventListener('DOMContentLoaded', function() {
const searchBtn = document.getElementById('searchBtn');

searchBtn. addEventListener('click', function() {
    jQuery.ajax({
        url: 'http://localhost/info2180-lab4/superheroes.php',
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
