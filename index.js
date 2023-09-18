// Get a reference to the button element
const changePageButton = document.getElementById('changePage');

// Add a click event listener to the button
changePageButton.addEventListener('click', function() {
    // Change the current page to the new URL
    // You can replace 'newpage.html' with the desired URL
    window.location.href = 'newpage.html';    
});

