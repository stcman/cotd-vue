const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/test', (req, res) => {
    res.send('Test is working!');
});

app.use((req, res) => {
    res.send('Not Found!');
});