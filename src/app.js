const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public'))); // ← Nuevo

app.get('/suma', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parámetros inválidos' });
  }
  res.json({ resultado: a + b });
});

if (require.main === module) {
  app.listen(3000, () => console.log('API ejecutándose en http://localhost:3000'));
}

module.exports = app;
