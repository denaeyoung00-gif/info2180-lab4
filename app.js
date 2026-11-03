document.addEventListener('DOMContentLoaded', function() {
const searchBtn = document.getElementById('searchBtn');

searchBtn. addEventListener('click', function() {
    jQuery.ajax({
        url: 'http://localhost/info2180-lab4/superheroes.php?utm_source=chatgpt.com',
        method: 'GET'
    })
    .then(response=> response.text)
    .then (data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
})
});
