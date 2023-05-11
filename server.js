const express = require('express');
const app = express();
const path = require('path');

// Directorio estático para servir los archivos HTML, CSS y JS
app.use(express.static(path.join(__dirname)));

// Ruta para cargar el archivo index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, function() {
  console.log('Servidor web local en ejecución en http://localhost:3000');
});
