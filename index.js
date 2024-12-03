const express = require('express');
const path = require('path');
const app = express();

// Puerto en el que el servidor escuchará
const PORT = 3000;

// Middleware para simular un retraso aleatorio entre 1 y 4 segundos
app.use((req, res, next) => {
  const delay = Math.floor(Math.random() * 4000) + 1000; // Genera un retraso entre 1000ms y 5000ms
  setTimeout(next, delay);
});

// Endpoint 1
app.get('/endpoint1', (req, res) => {
  res.send('Respuesta del endpoint 1');
});

// Endpoint 2
app.get('/endpoint2', (req, res) => {
  res.send('Respuesta del endpoint 2');
});

// Endpoint 3
app.get('/endpoint3', (req, res) => {
  res.send('Respuesta del endpoint 3');
});

// Endpoint 4
app.get('/endpoint4', (req, res) => {
  res.send('Respuesta del endpoint 4');
});

// Endpoint 5
app.get('/endpoint5', (req, res) => {
  res.send('Respuesta del endpoint 5');
});

// Endpoint 6 - Devuelve un archivo para simular tráfico de archivos
app.get('/endpoint6', (req, res) => {
  const filePath = path.join(__dirname, './test.mkv'); // Asegúrate de que este archivo exista
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send('Error al enviar el archivo');
    }
  });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
