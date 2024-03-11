document.getElementById('searchButton').addEventListener('click', function() {
    var searchText = document.getElementById('searchInput').value.toLowerCase();
    var sections = document.querySelectorAll('div');

    for (let section of sections) {
        if (section.getAttribute('data-search-term').toLowerCase() === searchText) {
            // Scroll to the section if found
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Optionally, clear the search field or provide feedback
            break; // Stop the loop once the section is found
        }
    }
});
