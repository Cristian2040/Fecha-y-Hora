const express = require('express');
const app = express();
const port = 3000;

// Importar middlewares
const { logDateAndTime, showMessage } = require('./middlewares');

// Importar rutas
const route1 = require('./route1');
const route2 = require('./route2');

// Usar middlewares
app.use(logDateAndTime);
app.use(showMessage);

// Usar rutas
app.use('/route1', route1);
app.use('/route2', route2);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});