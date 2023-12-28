document.addEventListener('DOMContentLoaded', function() {
    // Fetch and insert the navigation bar
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        });
});