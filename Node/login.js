const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    // You can uncomment and use the database part later if needed

    // Send a response for testing without the database part
    // res.send('Form submitted successfully (without database).');

    // Redirect to main.html when the form is successfully submitted
    res.redirect('/main.html');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// http://localhost:3500/login.html