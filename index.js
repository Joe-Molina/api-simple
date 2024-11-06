// Importamos Express
const express = require('express');
const app = express();
const port = 3000;  // El puerto donde correrá la API

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de Animales!');
});

// Ruta para obtener un perro
app.get('/animal/perro', (req, res) => {
  res.send('Perro');
});

// Ruta para obtener un gato
app.get('/animal/gato', (req, res) => {
  res.send('Gato');
});

// Ruta para obtener un elefante
app.get('/animal/elefante', (req, res) => {
  res.send('Elefante');
});

// Ruta para obtener un tigre
app.get('/animal/tigre', (req, res) => {
  res.send('Tigre');
});

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`API corriendo en http://localhost:${port}`);
});