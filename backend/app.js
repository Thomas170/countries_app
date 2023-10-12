const express = require('express');
const CountryRoutes = require('./src/routes/CountryRoutes');

const app = express();
const port = process.env.PORT || 8000;

app.use('/countries', CountryRoutes);
app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
