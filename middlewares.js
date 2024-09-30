// Middleware para registrar la fecha y hora
function logDateAndTime(req, res, next) {
    const currentDate = new Date();
    console.log(`Fecha y hora: ${currentDate}`);
    next();
}

// Middleware para mostrar un mensaje
function showMessage(req, res, next) {
    console.log('hola buenos dias a todos');
    next();
}

module.exports = { logDateAndTime, showMessage };