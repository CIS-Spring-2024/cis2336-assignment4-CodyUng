const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Menu.html'));
});

app.post('/submit', (req, res) => {
    const{i1} = req.body;

    const total = parseInt(i1);

    res.send('Total: $${total}');

});

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});