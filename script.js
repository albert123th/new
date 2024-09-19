// script.js

// Handle adding data
function addData(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const ftth = document.getElementById('ftth').value;
    const mobile = document.getElementById('mobile').value;
    const location = document.getElementById('location').value;
    const connections = document.getElementById('connections').value;

    google.script.run.addRecord(name, ftth, mobile, location, connections);
    alert('Customer added successfully!');
    document.querySelector('form').reset();
}

// Handle search functionality
function searchData(event) {
    event.preventDefault();

    const query = document.getElementById('navbarSearchQuery').value;

    google.script.run.withSuccessHandler(function(results) {
        // Process and display search results
        console.log(results);
        // You may want to handle displaying results on the page here
    }).searchRecords(query);
}
