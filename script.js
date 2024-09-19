// script.js
const scriptUrl ="https://script.google.com/macros/s/AKfycbyzfv9CuZCarocYEpC9zD_XVTisfuVzinpFstYfDLYGmgJGzymiJ24_EoYHmRMtk7vWGQ/exec"
// Handle adding data
// Handle adding data
function addData(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const ftth = document.getElementById('ftth').value;
    const mobile = document.getElementById('mobile').value;
    const location = document.getElementById('location').value;
    const connections = document.getElementById('connections').value;

    fetch(`${scriptUrl}?action=add&name=${encodeURIComponent(name)}&ftth=${encodeURIComponent(ftth)}&mobile=${encodeURIComponent(mobile)}&location=${encodeURIComponent(location)}&connections=${encodeURIComponent(connections)}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        alert('Customer added successfully!');
        document.querySelector('form').reset();
    })
    .catch(error => console.error('Error:', error));
}

// Handle search functionality
function searchData(event) {
    event.preventDefault();

    const query = document.getElementById('navbarSearchQuery').value;

    fetch(`${scriptUrl}?action=search&query=${encodeURIComponent(query)}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(results => {
        console.log(results);
        // You may want to handle displaying results on the page here
    })
    .catch(error => console.error('Error:', error));
}
