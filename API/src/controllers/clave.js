const express = require('express');
const app = express();

// Endpoint para obtener la clave específica del terminal
app.get('/', (req, res) => {
  const claveTerminal = 'YOUR_TERMINAL_KEY'; // Obten la clave específica del terminal desde la base de datos o de algún otro lugar seguro
  res.json({ claveTerminal });
});

module.exports = app;
