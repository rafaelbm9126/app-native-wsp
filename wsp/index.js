const express = require('express');

const app = express();

app.use('/WhatsApp_files', express.static(__dirname + '/wsp/WhatsApp_files/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/wsp/WhatsApp.html');
});

app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});


app.listen(8080, () => { console.log('RUN APP'); });

