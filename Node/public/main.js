// Assuming you have a form with the ID 'myForm' in your main.html
const form = document.getElementById('myForm');

// Event listener for the form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // You can perform additional actions here, such as sending data to the server via AJAX

    // For demonstration, you can display a success message
    const message = document.createElement('p');
    message.textContent = 'Form submitted successfully!';
    form.appendChild(message);
});
