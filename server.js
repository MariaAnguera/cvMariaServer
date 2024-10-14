const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 1000;

//my-cv-project
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// PixelShop
app.use('/PixelShop', express.static(path.join(__dirname, 'public', 'Bootstrap')));
app.get('/PixelShop/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Bootstrap', 'ejercicio.html'));
});

// lista-tarea
app.use('/lista-tarea', express.static(path.join(__dirname, 'public', 'lista-tarea', 'dist')));
app.get('/lista-tarea/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'lista-tarea', 'dist', 'index.html'));
});


// política de privacidad
app.use('/politica-de-privacidad', express.static(path.join(__dirname, 'public', 'politicaPrivacidad-Angular','politica-de-privacidad')));
app.get('/politica-de-privacidad/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'politicaPrivacidad-Angular', 'politica-de-privacidad', 'index.html'));
});

//simpleShop
app.use('/simpleShop/', express.static(path.join(__dirname, 'public', 'simpleShop-Angular', 'dist', 'simpleShop')));
app.get('/simpleShop/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'simpleShop-Angular', 'dist', 'simpleShop', 'index.html'));
});


//servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
