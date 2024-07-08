const express = require('express');
const app = express();
const port = 5500;

app.set('view engine', 'ejs');
app.use(express.static('public'));
  
app.get('/details', (req, res) => {
    console.log("TEST")
    res.render('details-page'); // Renders the details.ejs template
});

app.get('/', (req, res) => {
    res.render('catalogue-page')
});
  
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
  