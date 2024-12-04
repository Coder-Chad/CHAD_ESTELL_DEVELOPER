document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
            
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const currentLink = document.querySelector(`#nav-placeholder a[href="${currentPage}"]`);
            if (currentLink) {
                currentLink.style.color = '#FF3B5C';
            }
        });
});