function searchGoogle() {
        const query = document.querySelector('.search-bar input').value;
        if (query) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
        }
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }